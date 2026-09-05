"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALES, LOCALE_NAMES, isLocale, type Locale } from "../i18n/config";

export default function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();

  /** Same page, other language: swap the first path segment. */
  function pathFor(next: Locale): string {
    const segments = (pathname || `/${locale}`).split("/");
    if (isLocale(segments[1])) {
      segments[1] = next;
      return segments.join("/") || `/${next}`;
    }
    return `/${next}`;
  }

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    if (!isLocale(next)) return;
    // Remember the choice for the next visit to a path without a language.
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    router.push(pathFor(next));
  }

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        onChange={onChange}
        className="cursor-pointer appearance-none rounded-full border border-line bg-white py-2 pl-3 pr-7 text-sm font-medium text-ink-2 hover:border-navy"
      >
        {LOCALES.map((l) => (
          <option key={l} value={l}>
            {LOCALE_NAMES[l]}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 10 6"
        className="pointer-events-none absolute right-2.5 h-1.5 w-2.5 fill-muted"
      >
        <path d="M0 0h10L5 6z" />
      </svg>
    </label>
  );
}
