# akemis.com

Marketing site for Akemis Limited (Hong Kong). Next.js 16 App Router, Tailwind CSS v4, deployed on Vercel from `main`.

## Languages

The site ships in English, French and Spanish. More can be added without touching any page.

Every page lives under a language segment: `/en/...`, `/fr/...`, `/es/...`. A visitor who arrives at a path without one is redirected by `middleware.ts`:

1. the `NEXT_LOCALE` cookie, if they have already chosen a language;
2. otherwise the best match from the browser's `Accept-Language` header, which follows their system language;
3. otherwise English.

The header carries a language switcher that keeps the current page and writes the cookie. Each page declares `hreflang` alternates, and the sitemap lists every language of every page.

**To add a language:** add its code to `LOCALES` in `app/i18n/config.ts`, add a file under `app/i18n/dictionaries/` that satisfies the `Dictionary` type, register it in `app/i18n/index.ts`, and add the country names in `app/lib/site.ts`. TypeScript will point at anything still missing.

Copy lives only in the dictionaries; pages contain no hard-coded prose.

## Pages

| Route | Purpose |
|---|---|
| `/{lang}` | Two doors: independent consultants, businesses |
| `/{lang}/consultants` | Managed contracting: how it works, what is included, countries, pricing shape, eligibility check, FAQ |
| `/{lang}/build` | Akemis Build, the software and AI studio |
| `/{lang}/about` | Company history and stance |
| `/{lang}/contact` | Contact form |
| `/{lang}/legal/privacy` | Website privacy notice |
| `/creators/privacy`, `/creators/terms` | Legal pages for the Creator Analytics app, English only, also served on creators.akemis.com |
| `/api/contact` | Form handler (contact, eligibility pass, waitlist) |

Launch scope (countries, currencies) lives in `app/lib/site.ts`; service categories live in each dictionary. The eligibility check and the marketing copy read from the same source, so they cannot drift apart.

## Forms

`/api/contact` sends email through [Resend](https://resend.com) with a plain `fetch`, no SDK, and records which language the visitor was using. Without the key the route answers `503` and the UI shows the fallback email address, so a misconfiguration is visible rather than silent.

Environment variables (set in Vercel, Production and Preview):

| Variable | Required | Meaning |
|---|---|---|
| `RESEND_API_KEY` | yes | API key from Resend |
| `CONTACT_TO` | no | Destination mailbox, default `contact@akemis.com` |
| `CONTACT_FROM` | no | Sender, default `Akemis website <noreply@akemis.com>`. The domain must be verified in Resend |

Spam control: a hidden honeypot field, server-side validation and length limits.

## Photography

The site is photo-led: a full-bleed image behind each hero, and a photograph on each of the two home-page doors. The images currently in `public/images/` are the ones the company already used. They are placeholders in the sense that they are generic stock, and their licences have not been verified in this repository. Replace them with commissioned or properly licensed photography before any paid campaign, keeping the same file names or updating the paths in the dictionaries.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Strategy documents live in `docs/strategy/`.
