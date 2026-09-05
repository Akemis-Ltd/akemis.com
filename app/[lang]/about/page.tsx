import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    title: d.meta.aboutTitle,
    description: d.meta.aboutDescription,
    alternates: { canonical: `/${lang}/about` },
  };
}

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  const a = d.about;

  return (
    <>
      <PhotoHero
        image="/images/hong-kong-skyline.jpg"
        alt={a.heroAlt}
        eyebrow={a.eyebrow}
        title={a.title}
        lede={a.lede}
        priority
        height="short"
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{a.timelineLabel}</p>
        <ol className="mt-8 grid gap-8 md:grid-cols-2">
          {a.timeline.map((t) => (
            <li key={t.year} className="grid grid-cols-[4rem_1fr] gap-4">
              <span className="font-mono text-sm text-crimson">{t.year}</span>
              <div>
                <h2 className="font-display text-xl font-bold text-ink">{t.t}</h2>
                <p className="mt-2 leading-relaxed text-ink-2">{t.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {a.beliefs.map((b) => (
            <div key={b.t}>
              <h2 className="font-display text-xl font-bold text-navy">{b.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{b.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href={href(lang, "/consultants")}
            className="group rounded-lg border border-line p-8 hover:border-navy"
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{a.linkConsultants}</p>
            <p className="mt-2 font-display text-2xl font-bold text-navy group-hover:underline">
              {a.linkConsultantsBody}
            </p>
          </Link>
          <Link href={href(lang, "/build")} className="group rounded-lg border border-line p-8 hover:border-navy">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{a.linkBuild}</p>
            <p className="mt-2 font-display text-2xl font-bold text-navy group-hover:underline">
              {a.linkBuildBody}
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
