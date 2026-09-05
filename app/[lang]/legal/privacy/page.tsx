import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "../../../i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return {
    title: d.meta.privacyTitle,
    description: d.meta.privacyDescription,
    alternates: { canonical: `/${lang}/legal/privacy` },
    robots: { index: false, follow: true },
  };
}

export default async function Privacy({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{d.footer.links.privacy}</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-navy">
        {d.meta.privacyTitle}
      </h1>
      <p className="mt-2 text-sm text-muted">{d.privacy.updated}</p>

      <div className="mt-10 space-y-8 leading-relaxed text-ink-2">
        {d.privacy.sections.map((s, i) => (
          <section key={s.h}>
            <h2 className="font-display text-xl font-bold text-ink">{s.h}</h2>
            <p className="mt-2">
              {s.p}
              {i === d.privacy.sections.length - 1 ? (
                <>
                  {" "}
                  <Link href="/creators/privacy" className="text-navy underline underline-offset-4">
                    {d.privacy.creatorsLink}
                  </Link>
                  .
                </>
              ) : null}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
