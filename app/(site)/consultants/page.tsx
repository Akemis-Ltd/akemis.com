import type { Metadata } from "next";
import Link from "next/link";
import EligibilityCheck from "../../components/EligibilityCheck";
import { CURRENCIES, WAVE1_CLIENT_COUNTRIES, WAVE1_CONSULTANT_COUNTRIES } from "../../lib/site";

export const metadata: Metadata = {
  title: "For independent consultants",
  description:
    "Akemis contracts with your client, invoices in its name, collects, and pays you in your currency. Check your eligibility in five questions.",
  alternates: { canonical: "/consultants" },
};

const STEPS = [
  {
    t: "Check eligibility and pass KYC",
    b: "Five questions on this page, then identity, address and business registration documents in the portal.",
  },
  {
    t: "We sign both agreements",
    b: "A master service agreement with your client and a consultant agreement with you. You read both before anything is signed.",
  },
  {
    t: "You work, and submit from the portal",
    b: "Log the month, attach timesheets or deliverables, submit the invoice. We review it and send it to your client the same day.",
  },
  {
    t: "We collect and pay you on receipt",
    b: "Reminders go out at due date plus 7, 15 and 30 days, then a person follows up. When the client pays, you are paid in your currency with a remittance advice.",
  },
];

const INCLUDED = [
  ["Contracting", "Client MSA and consultant agreement from tested templates, per engagement."],
  ["Invoicing", `Invoices in Akemis's name, in ${CURRENCIES.length} currencies, with your fee shown as a line or blended.`],
  ["Collection follow-up", "Automatic reminders, then a named person who calls the client."],
  ["Payout with remittance advice", "On receipt, to the account in your name, with a document for your books."],
  ["Documents vault", "Contracts, IDs, certificates and invoices in one place, exportable."],
  ["Statements and year-end pack", "Per client, per currency, ready for your accountant."],
  ["Human support", "A person answers within one working day."],
];

const COMING = ["Timesheets with client approval links", "Expenses with receipt capture", "Accountant exports"];

const FAQ: [string, string][] = [
  ["Who is my contract with?", "With Akemis Limited, Hong Kong. Akemis holds a separate service agreement with your client. You see both before signing."],
  ["Who invoices my client?", "Akemis does, in its own name, from the invoice you prepare and submit in the portal."],
  ["When do I get paid?", "On receipt of the client's payment, once the funds are matched to your invoice, normally within a few working days. Payment terms with clients are 30 days standard, 45 maximum."],
  ["In what currency?", `Any of the ${CURRENCIES.length} we operate in today: ${CURRENCIES.join(", ")}. Payout is to an account in your own name.`],
  ["Who pays bank fees?", "Bank and transfer fees are itemised on your remittance advice, and the fee schedule you receive with the onboarding pack says who bears which. Currency conversion is at the rate our payment provider gives us; we do not add a margin."],
  ["What if the client pays late?", "We chase. Automatic reminders first, then personal follow-up. We do not advance funds before the client has paid."],
  ["Do you handle my taxes?", "No. You remain responsible for your own taxes and social contributions in your country, and you confirm that when you join."],
  ["Can I keep my own clients?", "Yes. Bringing your own client is the normal case and carries the lower fee. Missions Akemis sources for you carry a higher fee."],
  ["Can I leave?", "Yes, with the notice period in the consultant agreement. Engagements in progress are completed under their existing terms."],
  ["What do you do with my identity documents?", "They are stored encrypted, used only to meet our know-your-customer duties and our payment provider's requests, and deleted after the retention period in our privacy notice."],
];

export default function Consultants() {
  const clientCountries = Object.values(WAVE1_CLIENT_COUNTRIES).sort();
  const consultantOnly = Object.entries(WAVE1_CONSULTANT_COUNTRIES)
    .filter(([code]) => !(code in WAVE1_CLIENT_COUNTRIES))
    .map(([, name]) => name);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">
            A service of Akemis · Hong Kong · since 2003
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-navy md:text-6xl">
            Consult anywhere. Get paid properly.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-2">
            Akemis contracts, invoices and collects for independent consultants, then pays you in
            your currency. Your clients or ours.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#eligibility"
              className="rounded-full bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-deep"
            >
              Check your eligibility
            </a>
            <a href="#how" className="rounded-full border border-line px-6 py-3 font-semibold text-navy hover:border-navy">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Two ways */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-px bg-line md:grid-cols-2">
          <div className="bg-paper px-6 py-12 md:px-12">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Bring your own client</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy">You found the work. We run the paperwork.</h2>
            <p className="mt-3 leading-relaxed text-ink-2">
              You add the client, we run the checks and sign with them. Lower fee. You keep the
              relationship.
            </p>
          </div>
          <div className="bg-paper px-6 py-12 md:px-12">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Take an Akemis mission</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy">We found the work. Same portal, same payout.</h2>
            <p className="mt-3 leading-relaxed text-ink-2">
              Missions from our network, mostly enterprise applications, data and software. Higher
              fee, because it includes the placement.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">How it works</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">Four steps, in this order.</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-2">
          {STEPS.map((s, i) => (
            <li key={s.t} className="grid grid-cols-[2.5rem_1fr] gap-4">
              <span className="font-mono text-sm text-crimson">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-xl font-bold text-ink">{s.t}</h3>
                <p className="mt-2 leading-relaxed text-ink-2">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Included */}
      <section id="included" className="scroll-mt-24 border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">What is included</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">Everything between the handshake and the bank.</h2>
          <dl className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {INCLUDED.map(([t, b]) => (
              <div key={t} className="border-l-2 border-navy pl-4">
                <dt className="font-semibold text-ink">{t}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-2">{b}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm text-muted">
            Coming next: {COMING.join(" · ")}.
          </p>
        </div>
      </section>

      {/* Countries */}
      <section id="countries" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">Countries and currencies</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">The first wave.</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-ink">Where your client can be</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">{clientCountries.join(" · ")}</p>
          </div>
          <div>
            <h3 className="font-semibold text-ink">Where you can be</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              Any of the client countries, plus {consultantOnly.join(" and ")}.
            </p>
            <h3 className="mt-6 font-semibold text-ink">Currencies</h3>
            <p className="mt-2 font-mono text-sm text-ink-2">{CURRENCIES.join(" · ")}</p>
          </div>
        </div>
        <p className="mt-8 text-sm text-muted">
          Somewhere else? Run the check below anyway and join the waitlist. We add countries in
          waves once the local rules are confirmed.
        </p>
      </section>

      {/* Pricing */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">A share of what you invoice, with a monthly minimum.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Price
              name="Managed, your client"
              line="Percentage of the invoiced amount, with a monthly minimum. Lower rate."
              note="Published in the fee schedule you receive with the onboarding pack."
            />
            <Price
              name="Managed, Akemis mission"
              line="Percentage of the invoiced amount, higher rate, placement included."
              note="Agreed per mission before you accept it."
            />
            <Price
              name="Ledger, software only"
              line="Flat monthly plan. You invoice in your own name and bank."
              note="Private beta later this year. Join the waitlist below."
              id="ledger"
            />
          </div>
          <p className="mt-6 text-sm text-muted">
            No currency margin, no setup fee, no charge on months you do not invoice.
          </p>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">Eligibility</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">Five questions. Instant answer.</h2>
        <p className="mt-3 max-w-2xl text-ink-2">
          Nothing is stored until you leave your email at the end. Business clients only; you
          stay responsible for your own taxes.
        </p>
        <div className="mt-8">
          <EligibilityCheck />
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-line bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-4">
          <Trust t="Since 2003" b="A Hong Kong company with two decades of client work behind it." />
          <Trust t="Know your customer" b="Identity checks on every consultant and every client. It protects you too." />
          <Trust t="Contracts you can read" b="Plain agreements, sent before signature, the same for everyone." />
          <Trust t="A person to talk to" b="Support answers within one working day, and knows your file." />
        </div>
      </section>

      {/* For companies */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">For companies</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">
              Hire an independent consultant without opening a vendor file for each one.
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">
              One supplier, Akemis, for all the consultants you work with through us. One MSA, one
              invoice format, one payment. If what you need is software rather than people, see{" "}
              <Link href="/build" className="font-medium text-navy underline underline-offset-4">
                Akemis Build
              </Link>
              .
            </p>
          </div>
          <Link
            href="/contact"
            className="justify-self-start rounded-full border border-navy px-6 py-3 font-semibold text-navy hover:bg-navy hover:text-white md:justify-self-end"
          >
            Talk to us
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">Questions</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">The ten we get asked.</h2>
          <div className="mt-8 divide-y divide-line">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group py-4">
                <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none">
                  <span className="mr-2 font-mono text-crimson group-open:hidden">+</span>
                  <span className="mr-2 hidden font-mono text-crimson group-open:inline">−</span>
                  {q}
                </summary>
                <p className="mt-2 max-w-3xl pl-6 leading-relaxed text-ink-2">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Price({ name, line, note, id }: { name: string; line: string; note: string; id?: string }) {
  return (
    <div id={id} className="scroll-mt-24 border-t-2 border-navy pt-4">
      <h3 className="font-display text-xl font-bold text-ink">{name}</h3>
      <p className="mt-2 leading-relaxed text-ink-2">{line}</p>
      <p className="mt-2 text-sm text-muted">{note}</p>
    </div>
  );
}

function Trust({ t, b }: { t: string; b: string }) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold">{t}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/80">{b}</p>
    </div>
  );
}
