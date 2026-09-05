import type { MetadataRoute } from "next";
import { LOCALES, LOCALE_TAGS } from "./i18n/config";
import { SITE_URL } from "./lib/site";

const PAGES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/consultants", priority: 0.9 },
  { path: "/build", priority: 0.8 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/legal/privacy", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const localised = LOCALES.flatMap((lang) =>
    PAGES.map(({ path, priority }) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      // Every language of a page points at its siblings, so search engines
      // serve the right one rather than picking for themselves.
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((other) => [LOCALE_TAGS[other], `${SITE_URL}/${other}${path}`]),
        ),
      },
    })),
  );

  const legacy = ["/creators/privacy", "/creators/terms"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.2,
  }));

  return [...localised, ...legacy];
}
