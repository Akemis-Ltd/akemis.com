"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "../lib/site";

type Topic = "consultant" | "business" | "build" | "other";

type Props = {
  defaultTopic?: Topic;
  compact?: boolean;
  submitLabel?: string;
};

type Status = { state: "idle" } | { state: "sending" } | { state: "sent" } | { state: "error"; message: string };

export default function ContactForm({
  defaultTopic = "other",
  compact = false,
  submitLabel = "Send message",
}: Props) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "contact", ...data }),
      });
      if (res.ok) {
        setStatus({ state: "sent" });
        form.reset();
        return;
      }
      const body = (await res.json().catch(() => null)) as { error?: string } | null;
      setStatus({
        state: "error",
        message: body?.error ?? `We could not send your message. Email us at ${CONTACT_EMAIL}.`,
      });
    } catch {
      setStatus({
        state: "error",
        message: `Network problem. Email us at ${CONTACT_EMAIL}.`,
      });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="rounded-md border border-line bg-white p-6">
        <p className="font-display text-xl font-bold text-navy">Message sent.</p>
        <p className="mt-2 text-sm text-ink-2">
          We answer within one working day, from {CONTACT_EMAIL}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field label="Work email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Company" name="company" autoComplete="organization" />
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-ink">I am</span>
          <select
            name="topic"
            defaultValue={defaultTopic}
            className="rounded-md border border-line bg-white px-3 py-2.5 text-ink focus:border-navy"
          >
            <option value="consultant">an independent consultant</option>
            <option value="business">a business hiring a consultant</option>
            <option value="build">a business that needs software built</option>
            <option value="other">something else</option>
          </select>
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-ink">How can we help?</span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={compact ? 4 : 6}
          className="rounded-md border border-line bg-white px-3 py-2.5 text-ink focus:border-navy"
        />
      </label>
      {/* Honeypot: humans never see or fill this. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {status.state === "error" && (
        <p role="alert" className="rounded-md border border-crimson/30 bg-crimson-soft px-3 py-2 text-sm text-crimson-deep">
          {status.message}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white hover:bg-crimson-deep disabled:opacity-60"
        >
          {status.state === "sending" ? "Sending…" : submitLabel}
        </button>
        <p className="text-xs text-muted">
          We use your details only to answer you. See our{" "}
          <a href="/legal/privacy" className="underline">
            privacy notice
          </a>
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
