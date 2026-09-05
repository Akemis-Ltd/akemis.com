import Image from "next/image";
import Link from "next/link";
import { NAV } from "../lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex items-center" aria-label="Akemis home">
          <Image
            src="/images/logo.png"
            alt="Akemis"
            width={450}
            height={55}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden rounded px-3 py-2 text-sm font-medium text-ink-2 hover:text-navy sm:inline-block"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/consultants#eligibility"
            className="ml-2 rounded-full bg-crimson px-4 py-2 text-sm font-semibold text-white hover:bg-crimson-deep"
          >
            Check eligibility
          </Link>
        </nav>
      </div>
      <nav
        aria-label="Main, small screens"
        className="flex justify-center gap-4 border-t border-line px-4 py-2 text-sm sm:hidden"
      >
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="text-ink-2 hover:text-navy">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
