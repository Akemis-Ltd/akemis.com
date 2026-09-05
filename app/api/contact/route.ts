import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "../../lib/site";

export const runtime = "nodejs";

const MAX = { name: 200, email: 320, company: 200, message: 5000 };

type Payload = {
  kind?: string;
  name?: string;
  email?: string;
  company?: string;
  topic?: string;
  message?: string;
  website?: string; // honeypot
  answers?: Record<string, string>;
};

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field; humans cannot. Pretend success.
  if (clean(body.website, 50)) {
    return NextResponse.json({ ok: true });
  }

  const kind = clean(body.kind, 40) || "contact";
  const email = clean(body.email, MAX.email);
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  let subject: string;
  let text: string;

  if (kind === "contact") {
    const name = clean(body.name, MAX.name);
    const message = clean(body.message, MAX.message);
    if (!name || message.length < 10) {
      return NextResponse.json({ error: "Please add your name and a short message." }, { status: 400 });
    }
    const company = clean(body.company, MAX.company);
    const topic = clean(body.topic, 40);
    subject = `[akemis.com] ${topic || "contact"} — ${name}`;
    text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "-"}`,
      `Topic: ${topic || "-"}`,
      "",
      message,
    ].join("\n");
  } else if (kind === "eligibility-pass" || kind === "waitlist") {
    const answers = body.answers ?? {};
    const lines = Object.entries(answers)
      .filter(([, v]) => typeof v === "string")
      .map(([k, v]) => `${k}: ${clean(v, 120)}`);
    subject = `[akemis.com] ${kind === "waitlist" ? "Waitlist" : "Eligible consultant"} — ${email}`;
    text = [`Email: ${email}`, `Kind: ${kind}`, "", ...lines].join("\n");
  } else {
    return NextResponse.json({ error: "Unknown request." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? CONTACT_EMAIL;
  const from = process.env.CONTACT_FROM ?? "Akemis website <noreply@akemis.com>";

  if (!apiKey) {
    console.error("contact form: RESEND_API_KEY is not set; message dropped", { subject });
    return NextResponse.json(
      { error: `The form is not connected yet. Please email ${CONTACT_EMAIL}.` },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
      html: `<pre style="font: 14px/1.5 ui-monospace, monospace; white-space: pre-wrap">${escapeHtml(text)}</pre>`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("contact form: email provider error", res.status, detail);
    return NextResponse.json(
      { error: `We could not send your message. Please email ${CONTACT_EMAIL}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
