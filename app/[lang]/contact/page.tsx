import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "../../components/ContactForm";
import { getDictionary, isLocale } from "../../i18n";
import { CONTACT_EMAIL } from "../../lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return {
    title: d.meta.contactTitle,
    description: d.meta.contactDescription,
    alternates: { canonical: `/${lang}/contact` },
  };
}

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  const c = d.contact;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">{c.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-navy">
            {c.title}
          </h1>
          <p className="mt-6 leading-relaxed text-ink-2">{c.lede}</p>
          <dl className="mt-8 grid gap-4 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">{c.emailLabel}</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-navy underline underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">{c.companyLabel}</dt>
              <dd className="mt-1 text-ink-2">{c.companyValue}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">{c.portalLabel}</dt>
              <dd className="mt-1 text-ink-2">{c.portalBody}</dd>
            </div>
          </dl>
        </div>
        <ContactForm d={d} locale={lang} />
      </div>
    </section>
  );
}
