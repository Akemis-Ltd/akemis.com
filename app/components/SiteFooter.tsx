import Link from "next/link";
import { CONTACT_EMAIL } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-bold text-navy">Akemis Limited</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-2">
            Contracting, invoicing and payment for independent consultants, and
            AI-native software for small businesses. Hong Kong, since 2003.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block text-sm font-medium text-navy underline decoration-line underline-offset-4 hover:decoration-navy"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <FooterCol
          title="Consultants"
          links={[
            { href: "/consultants", label: "How it works" },
            { href: "/consultants#included", label: "What is included" },
            { href: "/consultants#countries", label: "Countries and currencies" },
            { href: "/consultants#eligibility", label: "Check eligibility" },
          ]}
        />
        <FooterCol
          title="Businesses"
          links={[
            { href: "/build", label: "Akemis Build" },
            { href: "/build#offers", label: "Offers" },
            { href: "/build#proof", label: "What we have built" },
            { href: "/contact", label: "Book a discovery call" },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/legal/privacy", label: "Privacy" },
            { href: "/creators/privacy", label: "Creator Analytics legal" },
          ]}
        />
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-5 text-xs text-muted">
          <p>© {new Date().getFullYear()} Akemis Limited, Hong Kong. All rights reserved.</p>
          <p className="font-mono">Hong Kong · est. 2003</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-muted">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-ink-2 hover:text-navy">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
