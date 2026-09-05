import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Akemis Build — custom software and AI agents for small businesses",
  description:
    "A senior team that ships working software in weeks using AI-assisted engineering: custom SaaS, internal tools, agents over your own data, integrations with the ERP you already run.",
  alternates: { canonical: "/build" },
};

const OFFERS: { stage: string; name: string; shape: string }[] = [
  {
    stage: "Discovery",
    name: "AI opportunity audit",
    shape:
      "One week. We map your processes, data and systems and hand back a ranked list of automations with effort and payback for each.",
  },
  {
    stage: "Discovery",
    name: "Prototype sprint",
    shape: "Two weeks. A clickable product on your real data for one use case, so the decision is made on something you can touch.",
  },
  {
    stage: "Build",
    name: "Custom SaaS or internal tool",
    shape:
      "Four to eight weeks, fixed scope and price. Web app, database, authentication, billing, admin, hosting. Our own invoicing platform was built this way.",
  },
  {
    stage: "Build",
    name: "Personalised agents",
    shape:
      "Support on your own knowledge base, sales qualification, back-office work such as invoice capture, reconciliation and reporting, HR onboarding.",
  },
  {
    stage: "Build",
    name: "Integrations and MCP servers",
    shape:
      "Over the systems you already run: ERP, CRM, accounting, e-commerce. Your staff ask questions of your data in plain language.",
  },
  {
    stage: "Build",
    name: "Document automation",
    shape: "Contracts, quotes and compliance packs generated from your templates and your data, reviewed by a person before they leave.",
  },
  {
    stage: "Run",
    name: "Monthly retainer",
    shape: "Hosting, monitoring, model updates and a feature backlog we work through with you every month.",
  },
  {
    stage: "Run",
    name: "Fractional technical lead",
    shape: "For founders without a technical partner: architecture, vendor choices, hiring, a weekly review.",
  },
];

const SEGMENTS = [
  ["Consulting boutiques and agencies", "Time, billing and client reporting tools that fit how you actually work."],
  ["Trading and sourcing companies", "Order tracking, supplier documents, quotes, landed-cost calculations."],
  ["Professional services", "Intake, drafting, matter or case tracking for law, accounting and recruitment firms."],
  ["E-commerce and creators", "Attribution, analytics and back-office automation around your storefronts."],
];

const PROOF = [
  {
    t: "Akemis Ledger",
    b: "Invoicing, bank reconciliation and payouts for dozens of consultants across eight currencies, with a self-service portal, contract generation, compliance workflows and an agent interface. Built and run by a two-person team.",
  },
  {
    t: "Creator Analytics",
    b: "A TikTok-connected analytics application: OAuth onboarding, per-video metrics, link attribution and order data from partner platforms.",
  },
  {
    t: "Twenty years of enterprise systems",
    b: "SAP, Oracle and PeopleSoft implementation and integration work since 2003. It is why the integrations we build with AI still respect how an ERP actually behaves.",
  },
];

export default function Build() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">Akemis Build</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-navy md:text-6xl">
            Software your business needs, shipped in weeks.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-2">
            A senior team using AI-assisted engineering, backed by twenty years of enterprise
            systems work in Hong Kong. Fixed scope, fixed price, a working product at the end.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#call" className="rounded-full bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-deep">
              Book a discovery call
            </a>
            <a href="#offers" className="rounded-full border border-line px-6 py-3 font-semibold text-navy hover:border-navy">
              See the offers
            </a>
          </div>
        </div>
      </section>

      <section id="offers" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">Offers</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">
          Discover, build, run.
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line font-mono text-xs uppercase tracking-wider text-muted">
                <th className="py-3 pr-6 font-medium">Stage</th>
                <th className="py-3 pr-6 font-medium">Offer</th>
                <th className="py-3 font-medium">Shape</th>
              </tr>
            </thead>
            <tbody>
              {OFFERS.map((o) => (
                <tr key={o.name} className="border-b border-line align-top">
                  <td className="py-4 pr-6 font-mono text-sm text-crimson">{o.stage}</td>
                  <td className="py-4 pr-6 font-semibold text-ink">{o.name}</td>
                  <td className="py-4 text-sm leading-relaxed text-ink-2">{o.shape}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">Who we build for</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">
            Small and medium businesses with a specific problem.
          </h2>
          <dl className="mt-10 grid gap-8 md:grid-cols-2">
            {SEGMENTS.map(([t, b]) => (
              <div key={t} className="border-l-2 border-navy pl-4">
                <dt className="font-semibold text-ink">{t}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-2">{b}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">What we have built</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">Our own products first.</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {PROOF.map((p) => (
            <div key={p.t}>
              <h3 className="font-display text-xl font-bold text-ink">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">How we work</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">
            Fixed scope. Weekly demo. Your code, your accounts.
          </h2>
          <ul className="mt-8 grid gap-4 text-ink-2 md:grid-cols-2">
            <li className="border-l-2 border-crimson pl-4">Scope and price agreed before the first line is written. Changes are priced, not absorbed silently.</li>
            <li className="border-l-2 border-crimson pl-4">A working demo every week, on your data, from the second week.</li>
            <li className="border-l-2 border-crimson pl-4">Everything lives in your GitHub, your cloud accounts and your domain. No lock-in to us.</li>
            <li className="border-l-2 border-crimson pl-4">A person reviews every generated artefact before it reaches a customer or a ledger.</li>
          </ul>
        </div>
      </section>

      <section id="call" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">Discovery call</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">
              Thirty minutes. Bring the problem, not a specification.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-2">
              Tell us what takes too long or breaks too often. We will say honestly whether a
              one-week audit, a two-week prototype or nothing at all is the right next step.
            </p>
            <p className="mt-4 text-sm text-muted">
              Independent consultant rather than a business?{" "}
              <Link href="/consultants" className="font-medium text-navy underline underline-offset-4">
                This page is for you
              </Link>
              .
            </p>
          </div>
          <ContactForm defaultTopic="build" submitLabel="Request a call" />
        </div>
      </section>
    </>
  );
}
