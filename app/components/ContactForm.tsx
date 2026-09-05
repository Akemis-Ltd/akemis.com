"use client";

import Link from "next/link";
import { useState } from "react";
import { href, type Dictionary, type Locale } from "../i18n";

type Topic = "consultant" | "business" | "build" | "other";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

export default function ContactForm({
  d,
  locale,
  defaultTopic = "other",
  compact = false,
  submitLabel,
}: {
  d: Dictionary;
  locale: Locale;
  defaultTopic?: Topic;
  compact?: boolean;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const f = d.form;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "contact", locale, ...data }),
      });
      if (res.ok) {
        setStatus({ state: "sent" });
        form.reset();
        return;
      }
      setStatus({ state: "error", message: f.errorGeneric });
    } catch {
      setStatus({ state: "error", message: f.errorNetwork });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="rounded-md border border-line bg-white p-6">
        <p className="font-display text-xl font-bold text-navy">{f.sentTitle}</p>
        <p className="mt-2 text-sm text-ink-2">{f.sentBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label={f.name} name="name" autoComplete="name" required />
        <Field label={f.email} name="email" type="email" autoComplete="email" required />
      </div>
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label={f.company} name="company" autoComplete="organization" />
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-ink">{f.iAm}</span>
          <select
            name="topic"
            defaultValue={defaultTopic}
            className="rounded-md border border-line bg-white px-3 py-2.5 text-ink focus:border-navy"
          >
            <option value="consultant">{f.topics.consultant}</option>
            <option value="business">{f.topics.business}</option>
            <option value="build">{f.topics.build}</option>
            <option value="other">{f.topics.other}</option>
          </select>
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-ink">{f.message}</span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={compact ? 4 : 6}
          className="rounded-md border border-line bg-white px-3 py-2.5 text-ink focus:border-navy"
        />
      </label>
      {/* Honeypot: a real visitor never sees or fills this. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {status.state === "error" && (
        <p
          role="alert"
          className="rounded-md border border-crimson/30 bg-crimson-soft px-3 py-2 text-sm text-crimson-deep"
        >
          {status.message}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white hover:bg-crimson-deep disabled:opacity-60"
        >
          {status.state === "sending" ? f.sending : (submitLabel ?? f.submit)}
        </button>
        <p className="text-xs text-muted">
          {f.privacyNote}{" "}
          <Link href={href(locale, "/legal/privacy")} className="underline">
            {f.privacyLink}
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-ink">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-md border border-line bg-white px-3 py-2.5 text-ink focus:border-navy"
      />
    </label>
  );
}
