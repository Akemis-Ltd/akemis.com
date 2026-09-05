"use client";

import { useMemo, useState } from "react";
import {
  CONTACT_EMAIL,
  SERVICE_CATEGORIES,
  WAVE1_CLIENT_COUNTRIES,
  WAVE1_CONSULTANT_COUNTRIES,
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

export default function EligibilityCheck() {
  const [a, setA] = useState<Answers>(EMPTY);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState<"no" | "sending" | "yes" | "error">("no");

  const complete = Object.values(a).every(Boolean);

  const verdict = useMemo(() => {
    if (!complete) return null;
    const reasons: string[] = [];
    if (a.residence === OTHER) reasons.push("your country of residence is not in the first launch wave");
    if (a.clientCountry === OTHER) reasons.push("your client's country is not in the first launch wave");
    if (a.status === "employee") reasons.push("the service is for independent consultants, not employees seeking a payroll");
    if (a.volume === "lt3k") reasons.push("engagements below the launch minimum go to the waitlist for the software-only plan");
    return { pass: reasons.length === 0, reasons };
  }, [a, complete]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSent("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: verdict?.pass ? "eligibility-pass" : "waitlist",
          email,
          answers: a,
        }),
      });
      setSent(res.ok ? "yes" : "error");
    } catch {
      setSent("error");
    }
  }

  const set = (k: keyof Answers) => (e: React.ChangeEvent<HTMLSelectElement>) =>
    setA((prev) => ({ ...prev, [k]: e.target.value }));

  return (
    <div className="rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Select label="Where do you live?" value={a.residence} onChange={set("residence")}>
          <CountryOptions list={WAVE1_CONSULTANT_COUNTRIES} />
        </Select>
        <Select label="How do you work today?" value={a.status} onChange={set("status")}>
          <option value="sole">As a sole trader or auto-entrepreneur</option>
          <option value="company">Through my own company</option>
          <option value="none">Not set up yet</option>
          <option value="employee">I am an employee looking for payroll</option>
        </Select>
        <Select label="Where is your client based?" value={a.clientCountry} onChange={set("clientCountry")}>
          <CountryOptions list={WAVE1_CLIENT_COUNTRIES} />
        </Select>
        <Select label="What do you do?" value={a.category} onChange={set("category")}>
          {SERVICE_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
          <option value={OTHER}>Something else</option>
        </Select>
        <Select label="Monthly invoicing, roughly" value={a.volume} onChange={set("volume")}>
          <option value="lt3k">Under USD 3,000</option>
          <option value="3k-10k">USD 3,000 to 10,000</option>
          <option value="10k-25k">USD 10,000 to 25,000</option>
          <option value="gt25k">Over USD 25,000</option>
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
              <p className="font-display text-xl font-bold text-navy">You are in the first wave.</p>
              <p className="mt-1 text-sm text-ink-2">
                Leave your email and we will send the onboarding pack: what we need for KYC, the
                consultant agreement to read, and the fee schedule.
              </p>
            </>
          ) : (
            <>
              <p className="font-display text-xl font-bold text-ink">Not yet, but soon.</p>
              <p className="mt-1 text-sm text-ink-2">
                Because {verdict.reasons.join("; ")}. Join the waitlist and we will tell you when
                your situation is covered.
              </p>
            </>
          )}

          {sent === "yes" ? (
            <p className="mt-4 text-sm font-medium text-navy">Thanks. You will hear from us.</p>
          ) : (
            <form onSubmit={submit} className="mt-4 flex flex-wrap gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-md border border-line bg-white px-3 py-2.5 text-sm"
              />
              <button
                type="submit"
                disabled={sent === "sending"}
                className="rounded-full bg-crimson px-5 py-2.5 text-sm font-semibold text-white hover:bg-crimson-deep disabled:opacity-60"
              >
                {verdict.pass ? "Send me the onboarding pack" : "Join the waitlist"}
              </button>
              {sent === "error" && (
                <p role="alert" className="w-full text-sm text-crimson-deep">
                  That did not go through. Email us at {CONTACT_EMAIL}.
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
  children,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
          Choose…
        </option>
        {children}
      </select>
    </label>
  );
}

function CountryOptions({ list }: { list: Record<string, string> }) {
  const entries = Object.entries(list).sort((x, y) => x[1].localeCompare(y[1]));
  return (
    <>
      {entries.map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
      <option value={OTHER}>Another country</option>
    </>
  );
}
