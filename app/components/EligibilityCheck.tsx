"use client";

import { useMemo, useState } from "react";
import type { Dictionary, Locale } from "../i18n";
import {
  WAVE1_CLIENT_COUNTRIES,
  WAVE1_CONSULTANT_COUNTRIES,
  countryList,
} from "../lib/site";

type Answers = {
  residence: string;
  status: string;
  clientCountry: string;
  category: string;
  volume: string;
};

const EMPTY: Answers = { residence: "", status: "", clientCountry: "", category: "", volume: "" };
const OTHER = "__other__";

export default function EligibilityCheck({ locale, d }: { locale: Locale; d: Dictionary }) {
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState<"no" | "sending" | "yes" | "error">("no");
  const e = d.eligibility;

  const complete = Object.values(answers).every(Boolean);

  const verdict = useMemo(() => {
    if (!complete) return null;
    const reasons: string[] = [];
    if (answers.residence === OTHER) reasons.push(e.reasons.residence);
    if (answers.clientCountry === OTHER) reasons.push(e.reasons.client);
    if (answers.status === "employee") reasons.push(e.reasons.employee);
    if (answers.volume === "lt3k") reasons.push(e.reasons.volume);
    return { pass: reasons.length === 0, reasons };
  }, [answers, complete, e.reasons]);

  const consultantCountries = useMemo(
    () => countryList(locale, WAVE1_CONSULTANT_COUNTRIES),
    [locale],
  );
  const clientCountries = useMemo(() => countryList(locale, WAVE1_CLIENT_COUNTRIES), [locale]);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setSent("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: verdict?.pass ? "eligibility-pass" : "waitlist",
          locale,
          email,
          answers,
        }),
      });
      setSent(res.ok ? "yes" : "error");
    } catch {
      setSent("error");
    }
  }

  const set = (key: keyof Answers) => (event: React.ChangeEvent<HTMLSelectElement>) =>
    setAnswers((prev) => ({ ...prev, [key]: event.target.value }));

  return (
    <div className="rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Select label={e.qResidence} value={answers.residence} onChange={set("residence")} placeholder={e.choose}>
          {consultantCountries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
          <option value={OTHER}>{e.otherCountry}</option>
        </Select>

        <Select label={e.qStatus} value={answers.status} onChange={set("status")} placeholder={e.choose}>
          <option value="sole">{e.statuses.sole}</option>
          <option value="company">{e.statuses.company}</option>
          <option value="none">{e.statuses.none}</option>
          <option value="employee">{e.statuses.employee}</option>
        </Select>

        <Select
          label={e.qClient}
          value={answers.clientCountry}
          onChange={set("clientCountry")}
          placeholder={e.choose}
        >
          {clientCountries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
          <option value={OTHER}>{e.otherCountry}</option>
        </Select>

        <Select label={e.qCategory} value={answers.category} onChange={set("category")} placeholder={e.choose}>
          {d.categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
          <option value={OTHER}>{e.otherCategory}</option>
        </Select>

        <Select label={e.qVolume} value={answers.volume} onChange={set("volume")} placeholder={e.choose}>
          <option value="lt3k">{e.volumes.lt3k}</option>
          <option value="3k-10k">{e.volumes.mid}</option>
          <option value="10k-25k">{e.volumes.high}</option>
          <option value="gt25k">{e.volumes.top}</option>
        </Select>
      </div>

      {verdict && (
        <div
          role="status"
          className={`mt-6 rounded-md border p-5 ${
            verdict.pass ? "border-navy/20 bg-navy-soft" : "border-line bg-paper"
          }`}
        >
          {verdict.pass ? (
            <>
              <p className="font-display text-xl font-bold text-navy">{e.passTitle}</p>
              <p className="mt-1 text-sm text-ink-2">{e.passBody}</p>
            </>
          ) : (
            <>
              <p className="font-display text-xl font-bold text-ink">{e.failTitle}</p>
              <p className="mt-1 text-sm text-ink-2">
                {e.failBodyPrefix} {verdict.reasons.join("; ")}. {e.failBodySuffix}
              </p>
            </>
          )}

          {sent === "yes" ? (
            <p className="mt-4 text-sm font-medium text-navy">{e.thanks}</p>
          ) : (
            <form onSubmit={submit} className="mt-4 flex flex-wrap gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={e.emailPlaceholder}
                aria-label={e.emailLabel}
                className="min-w-0 flex-1 rounded-md border border-line bg-white px-3 py-2.5 text-sm"
              />
              <button
                type="submit"
                disabled={sent === "sending"}
                className="rounded-full bg-crimson px-5 py-2.5 text-sm font-semibold text-white hover:bg-crimson-deep disabled:opacity-60"
              >
                {verdict.pass ? e.submitPass : e.submitFail}
              </button>
              {sent === "error" && (
                <p role="alert" className="w-full text-sm text-crimson-deep">
                  {e.error}
                </p>
              )}
            </form>
          )}
        </div>
      )}
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  placeholder,
  children,
}: {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-ink">{label}</span>
      <select
        value={value}
        onChange={onChange}
        className="rounded-md border border-line bg-white px-3 py-2.5 text-ink focus:border-navy"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {children}
      </select>
    </label>
  );
}
