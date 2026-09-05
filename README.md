# akemis.com

Marketing site for Akemis Limited (Hong Kong). Next.js 16 App Router, Tailwind CSS v4, deployed on Vercel from `main`.

## Pages

| Route | Purpose |
|---|---|
| `/` | Two doors: independent consultants, businesses |
| `/consultants` | Managed contracting service, how it works, countries, pricing shape, eligibility check, FAQ |
| `/build` | Akemis Build, the software and AI studio: offers, segments, proof, discovery call form |
| `/about` | Company history and stance |
| `/contact` | Contact form |
| `/legal/privacy` | Website privacy notice |
| `/creators/privacy`, `/creators/terms` | Legal pages for the Creator Analytics app (also served on creators.akemis.com) |
| `/api/contact` | Form handler (contact, eligibility pass, waitlist) |

Launch scope (countries, currencies, service categories) lives in one place: `app/lib/site.ts`. The eligibility check and the marketing copy both read from it.

## Forms

`/api/contact` sends email through [Resend](https://resend.com) with a plain `fetch`, no SDK. Without the key the route answers `503` and the UI shows the fallback email address, so a misconfiguration is visible rather than silent.

Environment variables (set in Vercel, Production and Preview):

| Variable | Required | Meaning |
|---|---|---|
| `RESEND_API_KEY` | yes | API key from Resend |
| `CONTACT_TO` | no | Destination mailbox, default `contact@akemis.com` |
| `CONTACT_FROM` | no | Sender, default `Akemis website <noreply@akemis.com>`. The domain must be verified in Resend (DNS records) |

Spam control: a hidden honeypot field, server-side validation and length limits.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Strategy documents live in `docs/strategy/`.
