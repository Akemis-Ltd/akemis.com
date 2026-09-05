import Image from "next/image";
import Link from "next/link";
import PhotoHero from "../components/PhotoHero";
import { getDictionary, href, isLocale } from "../i18n";
import { CURRENCIES } from "../lib/site";
import { notFound } from "next/navigation";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return (
    <>
      <PhotoHero
        image="/images/hong-kong-skyline.jpg"
        alt={d.about.heroAlt}
        eyebrow={d.home.eyebrow}
        title={d.home.title}
        lede={d.home.lede}
        priority
      >
        <Link
          href={href(lang, "/consultants")}
          className="rounded-full bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-deep"
        >
          {d.home.ctaConsultant}
        </Link>
        <Link
          href={href(lang, "/build")}
          className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:border-white hover:bg-white/10"
        >
          {d.home.ctaBusiness}
        </Link>
      </PhotoHero>

      {/* Two doors, each with its own photograph */}
      <section aria-label={d.home.whatTitle} className="mx-auto grid max-w-6xl gap-px bg-line md:grid-cols-2">
        {d.home.doors.map((door) => (
          <article key={door.href} className="flex flex-col bg-white">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={door.image}
                alt={door.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col px-6 py-10 md:px-10">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{door.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy">
                {door.title}
              </h2>
              <p className="mt-4 flex-1 leading-relaxed text-ink-2">{door.body}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={href(lang, door.href)}
                  className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-deep"
                >
                  {door.cta}
                </Link>
                <Link
                  href={href(lang, door.secondaryHref)}
                  className="text-sm font-medium text-navy underline underline-offset-4"
                >
                  {door.secondary}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Proof strip */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
          {d.home.proof.map((p, i) => (
            <div key={p.k}>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{p.k}</p>
              <p className="mt-1 font-display text-4xl font-extrabold tracking-tight text-navy">{p.v}</p>
              <p className="mt-1 text-sm text-ink-2">{i === 1 ? CURRENCIES.join(" · ") : p.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Three things */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{d.home.whatLabel}</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">
              {d.home.whatTitle}
            </h2>
          </div>
          <dl className="grid gap-8">
            {d.home.items.map((item) => (
              <div key={item.href} className="border-l-2 border-crimson pl-5">
                <dt className="font-display text-xl font-bold text-ink">{item.title}</dt>
                <dd className="mt-2 leading-relaxed text-ink-2">
                  {item.body}{" "}
                  <Link
                    href={href(lang, item.href)}
                    className="font-medium text-navy underline underline-offset-4"
                  >
                    {d.home.more}
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight">{d.home.ctaTitle}</h2>
            <p className="mt-2 max-w-xl text-white/80">{d.home.ctaBody}</p>
          </div>
          <Link
            href={href(lang, "/consultants#eligibility")}
            className="shrink-0 rounded-full bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-deep"
          >
            {d.nav.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
