import Link from "next/link";
import { CURRENCIES } from "../lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">
            Akemis · Hong Kong · since 2003
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-navy md:text-7xl">
            Get paid like a company. Work like a freelancer.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-2">
            Akemis contracts, invoices and collects for independent consultants, then pays them in
            their own currency. And for small businesses that need software, we build it in weeks.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/consultants"
              className="rounded-full bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-deep"
            >
              I am a consultant
            </Link>
            <Link
              href="/build"
              className="rounded-full border border-line px-6 py-3 font-semibold text-navy hover:border-navy"
            >
              I run a business
            </Link>
          </div>
        </div>
      </section>

      {/* Two doors */}
      <section aria-labelledby="doors" className="bg-paper">
        <h2 id="doors" className="sr-only">
          Choose your path
        </h2>
        <div className="mx-auto grid max-w-6xl gap-px bg-line md:grid-cols-2">
          <Door
            eyebrow="For independent consultants"
            title="Your clients, or ours. One contract, one invoice, one payout."
            body="We sign with your client, invoice in our name, chase the payment and pay you on receipt, with a statement you can hand to your accountant. Timesheets and expenses are on the way."
            cta={{ href: "/consultants", label: "How it works" }}
            secondary={{ href: "/consultants#eligibility", label: "Check eligibility" }}
          />
          <Door
            eyebrow="For businesses"
            title="Custom software and AI agents, shipped in weeks."
            body="A senior team that uses AI-assisted engineering to build the tool you actually need: an internal system, a customer portal, an agent over your own data, an integration with the ERP you already run."
            cta={{ href: "/build", label: "See what we build" }}
            secondary={{ href: "/contact", label: "Book a discovery call" }}
          />
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-y border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
          <Proof k="Founded" v="2003" note="A Hong Kong company for over twenty years." />
          <Proof
            k="Currencies invoiced and paid"
            v={String(CURRENCIES.length)}
            note={CURRENCIES.join(" · ")}
          />
          <Proof
            k="Consultants paid across"
            v="3 continents"
            note="Africa, Asia and the Americas, in their own currencies."
          />
        </div>
      </section>

      {/* What Akemis is */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">
              Three things, well.
            </h2>
          </div>
          <dl className="grid gap-8">
            <Item
              title="Managed contracting for consultants"
              body="Akemis is the contracting party between you and your client. We run the paperwork, the compliance, the collection and the payment, and you keep the work. Open to new consultants from the first launch wave of countries."
              href="/consultants"
            />
            <Item
              title="Ledger, the software-only plan"
              body="For consultants who want the same portal, timesheets and invoicing, but invoice in their own name and bank. Private beta later this year."
              href="/consultants#ledger"
            />
            <Item
              title="Akemis Build"
              body="Fixed-scope sprints to build custom SaaS, internal tools, agents and integrations for small and medium businesses. Our own invoicing platform is the first case study."
              href="/build"
            />
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight">
              Five questions tell you if you are in the first wave.
            </h2>
            <p className="mt-2 max-w-xl text-white/80">
              Country, status, client, service, volume. Instant answer, no account needed.
            </p>
          </div>
          <Link
            href="/consultants#eligibility"
            className="rounded-full bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-deep"
          >
            Check eligibility
          </Link>
        </div>
      </section>
    </>
  );
}

function Door({
  eyebrow,
  title,
  body,
  cta,
  secondary,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta: { href: string; label: string };
  secondary: { href: string; label: string };
}) {
  return (
    <div className="flex flex-col bg-paper px-6 py-14 md:px-12">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{eyebrow}</p>
      <h3 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy">
        {title}
      </h3>
      <p className="mt-4 max-w-md flex-1 leading-relaxed text-ink-2">{body}</p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href={cta.href}
          className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-deep"
        >
          {cta.label}
        </Link>
        <Link href={secondary.href} className="text-sm font-medium text-navy underline underline-offset-4">
          {secondary.label}
        </Link>
      </div>
    </div>
  );
}

function Proof({ k, v, note }: { k: string; v: string; note: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{k}</p>
      <p className="mt-1 font-display text-4xl font-extrabold tracking-tight text-navy">{v}</p>
      <p className="mt-1 text-sm text-ink-2">{note}</p>
    </div>
  );
}

function Item({ title, body, href }: { title: string; body: string; href: string }) {
  return (
    <div className="border-l-2 border-crimson pl-5">
      <dt className="font-display text-xl font-bold text-ink">{title}</dt>
      <dd className="mt-2 leading-relaxed text-ink-2">
        {body}{" "}
        <Link href={href} className="font-medium text-navy underline underline-offset-4">
          More
        </Link>
      </dd>
    </div>
  );
}
