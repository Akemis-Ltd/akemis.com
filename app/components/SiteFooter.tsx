import Link from "next/link";
import { href, type Dictionary, type Locale } from "../i18n";
import { CONTACT_EMAIL } from "../lib/site";

export default function SiteFooter({ locale, d }: { locale: Locale; d: Dictionary }) {
  const l = d.footer.links;
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-bold text-navy">Akemis Limited</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-2">{d.footer.blurb}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block text-sm font-medium text-navy underline decoration-line underline-offset-4 hover:decoration-navy"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <Col
          title={d.footer.consultants}
          links={[
            { href: href(locale, "/consultants"), label: l.how },
            { href: href(locale, "/consultants#included"), label: l.included },
            { href: href(locale, "/consultants#countries"), label: l.countries },
            { href: href(locale, "/consultants#eligibility"), label: l.eligibility },
          ]}
        />
        <Col
          title={d.footer.businesses}
          links={[
            { href: href(locale, "/build"), label: l.build },
            { href: href(locale, "/build#offers"), label: l.offers },
            { href: href(locale, "/build#proof"), label: l.proof },
            { href: href(locale, "/contact"), label: l.call },
          ]}
        />
        <Col
          title={d.footer.company}
          links={[
            { href: href(locale, "/about"), label: l.about },
            { href: href(locale, "/contact"), label: l.contact },
            { href: href(locale, "/legal/privacy"), label: l.privacy },
            { href: "/creators/privacy", label: l.creators },
          ]}
        />
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-5 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} Akemis Limited, Hong Kong. {d.footer.rights}
          </p>
          <p className="font-mono">{d.footer.since}</p>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-muted">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-ink-2 hover:text-navy">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
