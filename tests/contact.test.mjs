import test from 'node:test';
import assert from 'node:assert/strict';
import { createContactHandler } from '../lib/contact-handler.ts';

const payload = {
  name: 'Website Test', email: 'visitor@example.com', topic: '1', lang: 'fr',
  message: 'A test enquiry with enough detail.', website: '',
  requestId: '12345678-1234-4234-8234-123456789abc',
};
const config = { apiKey: 'test-only', from: 'Website <website@example.com>' };
function request(data = payload, headers = {}) {
  return new Request('https://akemis.com/api/contact', {
    method: 'POST', headers: { origin: 'https://akemis.com', 'content-type': 'application/json', ...headers },
    body: JSON.stringify(data),
  });
}
const neverSend = async () => { assert.fail('No provider request should be made'); };

test('rejects invalid input, spam trap and untrusted origins before sending', async () => {
  const handle = createContactHandler(config, neverSend);
  for (const invalid of [null, [], { ...payload, email: 'bad' }, { ...payload, email: 'a@b.com\r\nBcc:x@y.com' }, { ...payload, message: 'short' }, { ...payload, topic: '99' }, { ...payload, lang: 'de' }, { ...payload, website: 'spam' }, { ...payload, requestId: 'bad' }]) {
    assert.equal((await handle(request(invalid))).status, 400);
  }
  assert.equal((await handle(request(payload, { origin: 'https://evil.example' }))).status, 403);
  assert.equal((await handle(request(payload, { 'content-type': 'text/plain' }))).status, 415);
  assert.equal((await handle(request({ ...payload, message: 'a'.repeat(25_000) }))).status, 413);
});

test('missing configuration is unavailable, never success', async () => {
  const result = await createContactHandler({}, neverSend)(request());
  assert.equal(result.status, 503);
  assert.deepEqual(await result.json(), { error: 'unavailable' });
});

test('uses fixed recipient, verified sender, reply-to and idempotency key', async () => {
  const handle = createContactHandler(config, async (url, init) => {
    assert.equal(url, 'https://api.resend.com/emails');
    const body = JSON.parse(init.body);
    assert.deepEqual(body.to, ['contact@akemis.com']);
    assert.equal(body.from, config.from);
    assert.equal(body.reply_to, payload.email);
    assert.match(body.subject, /Consulting & ERP/);
    assert.ok(body.text.includes(payload.message));
    assert.equal(init.headers['Idempotency-Key'], `contact/${payload.requestId}`);
    return Response.json({ id: 'provider-receipt' });
  });
  assert.deepEqual(await (await handle(request())).json(), { accepted: true });
});

test('provider rejection, missing receipt and network failure never report success', async () => {
  for (const send of [
    async () => Response.json({ message: 'rejected' }, { status: 422 }),
    async () => Response.json({}),
    async () => { throw new Error('network error'); },
  ]) {
    const result = await createContactHandler(config, send)(request());
    assert.equal(result.status, 502);
    assert.deepEqual(await result.json(), { error: 'error' });
  }
});
