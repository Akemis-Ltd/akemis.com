import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Akemis Limited is a Hong Kong company founded in 2003. Twenty years of enterprise systems consulting turned into a contracting and payment service for independent consultants, and a software studio.",
  alternates: { canonical: "/about" },
};

const TIMELINE: [string, string, string][] = [
  ["2003", "Founded in Hong Kong", "Enterprise systems consulting: SAP, Oracle and PeopleSoft implementation and integration for clients in Asia, Europe and the Middle East."],
  ["2010s", "Consultants, not headcount", "Projects staffed with independent specialists. Akemis becomes the contracting party between them and the client, and learns the paperwork the hard way."],
  ["2025", "The ledger becomes a product", "Invoicing, bank reconciliation and payouts move from spreadsheets to our own platform, built with AI-assisted engineering by a two-person team."],
  ["2026", "Open to new consultants", "The contracting service opens beyond our own network, with a self-service portal, and the studio that built it starts building for other small businesses."],
];

export default function About() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">About Akemis</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-navy md:text-6xl">
              A twenty-year-old Hong Kong company that learned to ship software.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-ink-2">
              We spent two decades putting enterprise systems into companies and paying the
              consultants who did the work. The second part turned out to be a business of its own.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line">
            <Image
              src="/images/hong-kong-skyline.jpg"
              alt="Hong Kong harbour and skyline"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">How we got here</p>
        <ol className="mt-8 grid gap-8 md:grid-cols-2">
          {TIMELINE.map(([year, t, b]) => (
            <li key={year} className="grid grid-cols-[4rem_1fr] gap-4">
              <span className="font-mono text-sm text-crimson">{year}</span>
              <div>
                <h2 className="font-display text-xl font-bold text-ink">{t}</h2>
                <p className="mt-2 leading-relaxed text-ink-2">{b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          <div>
            <h2 className="font-display text-xl font-bold text-navy">What we believe</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              Independent work should not mean amateur paperwork. A consultant deserves the same
              contracting, invoicing and collection a company has, without becoming one.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">What we are not</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              Not a bank, not a payroll company, not an employer of record. Akemis is the
              contracting party in two service agreements, and a software vendor. Money moves
              because work was invoiced, never for its own sake.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-navy">Who runs it</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              A small team in Hong Kong and Europe led by the founder, Philippe Barthelemy. Every
              consultant on the platform has a named person who knows their file.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/consultants" className="group rounded-lg border border-line p-8 hover:border-navy">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">For consultants</p>
            <p className="mt-2 font-display text-2xl font-bold text-navy group-hover:underline">
              Contracting, invoicing, collection and payout.
            </p>
          </Link>
          <Link href="/build" className="group rounded-lg border border-line p-8 hover:border-navy">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">For businesses</p>
            <p className="mt-2 font-display text-2xl font-bold text-navy group-hover:underline">
              Custom software and agents, built in weeks.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
