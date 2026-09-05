import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EligibilityCheck from "../../components/EligibilityCheck";
import PhotoHero from "../../components/PhotoHero";
import { getDictionary, href, isLocale } from "../../i18n";
import {
  CURRENCIES,
  WAVE1_CLIENT_COUNTRIES,
  WAVE1_CONSULTANT_EXTRA,
  countryList,
} from "../../lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return {
    title: d.meta.consultantsTitle,
    description: d.meta.consultantsDescription,
    alternates: { canonical: `/${lang}/consultants` },
  };
}

export default async function Consultants({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  const c = d.consultants;

  const clientCountries = countryList(lang, WAVE1_CLIENT_COUNTRIES).map((x) => x.name);
  const extraCountries = countryList(lang, WAVE1_CONSULTANT_EXTRA).map((x) => x.name);

  return (
    <>
      <PhotoHero
        image="/images/majorel-consulting-team-scaled-1.jpeg"
        alt={c.heroAlt}
        eyebrow={c.eyebrow}
        title={c.title}
        lede={c.lede}
        priority
      >
        <a
          href="#eligibility"
          className="rounded-full bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-deep"
        >
          {c.ctaPrimary}
        </a>
        <a
          href="#how"
          className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:border-white hover:bg-white/10"
        >
          {c.ctaSecondary}
        </a>
      </PhotoHero>

      {/* Two ways in */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-px bg-line md:grid-cols-2">
          {c.ways.map((w) => (
            <div key={w.eyebrow} className="bg-paper px-6 py-12 md:px-12">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{w.eyebrow}</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy">{w.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-2">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{c.howLabel}</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">{c.howTitle}</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-2">
          {c.steps.map((s, i) => (
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

      {/* What is included, with a supporting photograph */}
      <section id="included" className="scroll-mt-24 border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.3fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg lg:sticky lg:top-28 lg:self-start">
            <Image
              src="/images/OUR-FIRMS_CONSULTING2_1000x667.jpg"
              alt={c.heroAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{c.includedLabel}</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">
              {c.includedTitle}
            </h2>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {c.included.map(([t, b]) => (
                <div key={t} className="border-l-2 border-navy pl-4">
                  <dt className="font-semibold text-ink">{t}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink-2">{b}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-muted">
              {c.comingLabel}: {c.coming.join(" · ")}.
            </p>
          </div>
        </div>
      </section>

      {/* Countries and currencies */}
      <section id="countries" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{c.countriesLabel}</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">{c.countriesTitle}</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-ink">{c.clientCountriesTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">{clientCountries.join(" · ")}</p>
          </div>
          <div>
            <h3 className="font-semibold text-ink">{c.consultantCountriesTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              {c.consultantCountriesBody} {extraCountries.join(", ")}.
            </p>
            <h3 className="mt-6 font-semibold text-ink">{c.currenciesTitle}</h3>
            <p className="mt-2 font-mono text-sm text-ink-2">{CURRENCIES.join(" · ")}</p>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted">{c.countriesNote}</p>
      </section>

      {/* Pricing */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{c.pricingLabel}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">{c.pricingTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {c.prices.map((p, i) => (
              <div
                key={p.name}
                id={i === 2 ? "ledger" : undefined}
                className="scroll-mt-24 border-t-2 border-navy pt-4"
              >
                <h3 className="font-display text-xl font-bold text-ink">{p.name}</h3>
                <p className="mt-2 leading-relaxed text-ink-2">{p.line}</p>
                <p className="mt-2 text-sm text-muted">{p.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">{c.pricingNote}</p>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{c.eligibilityLabel}</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">
          {c.eligibilityTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-ink-2">{c.eligibilityBody}</p>
        <div className="mt-8">
          <EligibilityCheck locale={lang} d={d} />
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-line bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-4">
          {c.trust.map((t) => (
            <div key={t.t}>
              <h2 className="font-display text-xl font-bold">{t.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{t.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For companies */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{c.companiesLabel}</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">
              {c.companiesTitle}
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">
              {c.companiesBody}{" "}
              <Link href={href(lang, "/build")} className="font-medium text-navy underline underline-offset-4">
                {c.companiesLink}
              </Link>
              .
            </p>
          </div>
          <Link
            href={href(lang, "/contact")}
            className="justify-self-start rounded-full border border-navy px-6 py-3 font-semibold text-navy hover:bg-navy hover:text-white md:justify-self-end"
          >
            {c.companiesCta}
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{c.faqLabel}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">{c.faqTitle}</h2>
          <div className="mt-8 divide-y divide-line">
            {c.faq.map(([q, a]) => (
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
