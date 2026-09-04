type MailConfig = { apiKey?: string; from?: string };
const topics = ['Freelancer software', 'Consulting & ERP', 'AI solutions'];
const maxBodyBytes = 24_000;

function reply(status: number, error?: string) {
  return Response.json(error ? { error } : { accepted: true }, {
    status, headers: { 'Cache-Control': 'no-store' },
  });
}

// Kept separate from the route so validation and provider failures can be tested
// without sending real mail or loading credentials.
export function createContactHandler(config: MailConfig, send: typeof fetch = fetch) {
  return async function handle(request: Request) {
    if (request.headers.get('origin') !== new URL(request.url).origin) return reply(403, 'invalid');
    if (!request.headers.get('content-type')?.startsWith('application/json')) return reply(415, 'invalid');

    let value: unknown;
    try {
      const reader = request.body?.getReader();
      if (!reader) return reply(400, 'invalid');
      const chunks: Uint8Array[] = [];
      let size = 0;
      while (true) {
        const part = await reader.read();
        if (part.done) break;
        size += part.value.byteLength;
        if (size > maxBodyBytes) {
          await reader.cancel();
          return reply(413, 'invalid');
        }
        chunks.push(part.value);
      }
      value = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    } catch { return reply(400, 'invalid'); }

    if (!value || typeof value !== 'object' || Array.isArray(value)) return reply(400, 'invalid');
    const data = value as Record<string, unknown>;
    const name = typeof data.name === 'string' ? data.name.trim() : '';
    const email = typeof data.email === 'string' ? data.email.trim() : '';
    const message = typeof data.message === 'string' ? data.message.trim() : '';
    const topic = typeof data.topic === 'string' ? Number(data.topic) : NaN;
    if (
      !name || name.length > 100 || /[\r\n]/.test(name) ||
      email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      message.length < 10 || message.length > 5000 ||
      !['0', '1', '2'].includes(String(data.topic)) || !topics[topic] ||
      !['en', 'es', 'fr'].includes(String(data.lang)) ||
      data.website !== '' || typeof data.requestId !== 'string' ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(data.requestId)
    ) return reply(400, 'invalid');

    if (!config.apiKey || !config.from) return reply(503, 'unavailable');
    try {
      const result = await send('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json',
          'Idempotency-Key': `contact/${data.requestId}`,
        },
        body: JSON.stringify({
          from: config.from,
          to: ['contact@akemis.com'],
          reply_to: email,
          subject: `Website enquiry: ${topics[topic]}`,
          text: `Name: ${name}\nEmail: ${email}\nTopic: ${topics[topic]}\nLanguage: ${data.lang}\n\n${message}`,
        }),
        signal: AbortSignal.timeout(10_000),
      });
      const receipt = await result.json();
      if (!result.ok || typeof receipt?.id !== 'string' || !receipt.id) return reply(502, 'error');
      // Provider acceptance confirms queuing, not delivery to the inbox.
      return reply(200);
    } catch { return reply(502, 'error'); }
  };
}
