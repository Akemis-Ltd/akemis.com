import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { LOCALES, LOCALE_TAGS, getDictionary, isLocale, type Locale } from "../i18n";
import { SITE_URL } from "../lib/site";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);

  const languages = Object.fromEntries(LOCALES.map((l) => [LOCALE_TAGS[l], `/${l}`]));

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: `Akemis — ${d.meta.homeTitle}`, template: "%s — Akemis" },
    description: d.meta.siteDescription,
    alternates: { canonical: `/${lang}`, languages: { ...languages, "x-default": "/en" } },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: "Akemis",
      locale: LOCALE_TAGS[lang],
      title: `Akemis — ${d.meta.homeTitle}`,
      description: d.meta.siteDescription,
      images: [{ url: "/images/hong-kong-skyline.jpg", width: 1920, height: 1080, alt: d.about.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Akemis — ${d.meta.homeTitle}`,
      description: d.meta.siteDescription,
      images: ["/images/hong-kong-skyline.jpg"],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const d = getDictionary(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        {d.nav.skip}
      </a>
      <SiteHeader locale={locale} d={d} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} d={d} />
    </div>
  );
}
