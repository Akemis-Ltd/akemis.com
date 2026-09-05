import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { href, type Dictionary, type Locale } from "../i18n";

export default function SiteHeader({ locale, d }: { locale: Locale; d: Dictionary }) {
  const items = [
    { href: href(locale, "/consultants"), label: d.nav.consultants },
    { href: href(locale, "/build"), label: d.nav.build },
    { href: href(locale, "/about"), label: d.nav.about },
    { href: href(locale, "/contact"), label: d.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href={href(locale)} className="shrink-0" aria-label="Akemis">
          <Image src="/images/logo.png" alt="Akemis" width={450} height={55} priority className="h-9 w-auto" />
        </Link>
        <div className="flex items-center gap-1">
          <nav aria-label={d.nav.consultants} className="hidden items-center md:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-3 py-2 text-sm font-medium text-ink-2 hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher locale={locale} label={d.nav.language} />
          <Link
            href={href(locale, "/consultants#eligibility")}
            className="ml-1 rounded-full bg-crimson px-4 py-2 text-sm font-semibold text-white hover:bg-crimson-deep"
          >
            {d.nav.cta}
          </Link>
        </div>
      </div>
      <nav
        aria-label={d.nav.about}
        className="flex justify-center gap-4 overflow-x-auto border-t border-line px-4 py-2 text-sm md:hidden"
      >
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap text-ink-2 hover:text-navy">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
