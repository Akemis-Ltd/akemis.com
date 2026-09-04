'use client';

import { useRef, useState, type FormEvent } from 'react';
import { contactCopy } from '@/lib/contact-copy';
import type { Locale } from '@/lib/content';

export function ContactForm({ lang, topics }: { lang: Locale; topics: string[] }) {
  const c = contactCopy[lang];
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | 'invalid' | 'unavailable' | null>(null);
  const attempt = useRef<{ body: string; id: string } | null>(null);
  const busy = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    busy.current = true;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    const body = JSON.stringify({ ...fields, lang });
    if (attempt.current?.body !== body) attempt.current = { body, id: crypto.randomUUID() };
    setPending(true);
    setStatus(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, lang, requestId: attempt.current.id }),
        signal: AbortSignal.timeout(15_000),
      });
      const result = await response.json();
      if (response.ok && result.accepted === true) {
        setStatus('success');
        form.reset();
        attempt.current = null;
      } else setStatus(result.error === 'invalid' ? 'invalid' : result.error === 'unavailable' ? 'unavailable' : 'error');
    } catch { setStatus('error'); }
    finally { busy.current = false; setPending(false); }
  }

  return <form className="contact-form" onSubmit={submit} aria-busy={pending}>
    <fieldset disabled={pending}>
      <legend className="sr-only">{c.send}</legend>
      <label htmlFor="contact-name">{c.name}</label>
      <input id="contact-name" name="name" autoComplete="name" required maxLength={100} />
      <label htmlFor="contact-email">{c.email}</label>
      <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
      <label htmlFor="contact-topic">{c.topic}</label>
      <select id="contact-topic" name="topic" required>{topics.map((topic, index) => <option key={topic} value={index}>{topic}</option>)}</select>
      <label htmlFor="contact-message">{c.message}</label>
      <textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={6} />
      <div hidden aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <p className="contact-hint">{c.note}</p>
      <button className="button" type="submit">{pending ? c.sending : c.send}<span aria-hidden="true">↗</span></button>
    </fieldset>
    <p className="form-status" role="status" aria-live="polite">{status ? c[status] : ''}</p>
  </form>;
}
