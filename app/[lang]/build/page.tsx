import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "../../components/ContactForm";
import PhotoHero from "../../components/PhotoHero";
import { getDictionary, href, isLocale } from "../../i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return {
    title: d.meta.buildTitle,
    description: d.meta.buildDescription,
    alternates: { canonical: `/${lang}/build` },
  };
}

export default async function Build({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  const b = d.build;

  return (
    <>
      <PhotoHero
        image="/images/OUR-FIRMS_CONSULTING2_1000x667.jpg"
        alt={b.heroAlt}
        eyebrow={b.eyebrow}
        title={b.title}
        lede={b.lede}
        priority
      >
        <a href="#call" className="rounded-full bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-deep">
          {b.ctaPrimary}
        </a>
        <a
          href="#offers"
          className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:border-white hover:bg-white/10"
        >
          {b.ctaSecondary}
        </a>
      </PhotoHero>

      <section id="offers" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{b.offersLabel}</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">{b.offersTitle}</h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line font-mono text-xs uppercase tracking-wider text-muted">
                <th className="py-3 pr-6 font-medium">{b.colStage}</th>
                <th className="py-3 pr-6 font-medium">{b.colOffer}</th>
                <th className="py-3 font-medium">{b.colShape}</th>
              </tr>
            </thead>
            <tbody>
              {b.offers.map((o) => (
                <tr key={o.name} className="border-b border-line align-top">
                  <td className="py-4 pr-6 font-mono text-sm text-crimson">{b.stages[o.stage]}</td>
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
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{b.segmentsLabel}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">{b.segmentsTitle}</h2>
          <dl className="mt-10 grid gap-8 md:grid-cols-2">
            {b.segments.map(([t, body]) => (
              <div key={t} className="border-l-2 border-navy pl-4">
                <dt className="font-semibold text-ink">{t}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-2">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{b.proofLabel}</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">{b.proofTitle}</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {b.proof.map((p) => (
            <div key={p.t}>
              <h3 className="font-display text-xl font-bold text-ink">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{b.howLabel}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">{b.howTitle}</h2>
          <ul className="mt-8 grid gap-4 text-ink-2 md:grid-cols-2">
            {b.how.map((item) => (
              <li key={item} className="border-l-2 border-crimson pl-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="call" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{b.callLabel}</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">{b.callTitle}</h2>
            <p className="mt-4 leading-relaxed text-ink-2">{b.callBody}</p>
            <p className="mt-4 text-sm text-muted">
              {b.callNote}{" "}
              <Link
                href={href(lang, "/consultants")}
                className="font-medium text-navy underline underline-offset-4"
              >
                {b.callNoteLink}
              </Link>
              .
            </p>
          </div>
          <ContactForm d={d} locale={lang} defaultTopic="build" submitLabel={b.callSubmit} />
        </div>
      </section>
    </>
  );
}
