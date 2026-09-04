# Multilingual Akemis website: branch preparation

## Current direction

The 5 September request establishes three equally visible service areas:

1. Freelancer invoicing SaaS, based on the Akemis Ledger product.
2. Consulting and ERP integration projects.
3. AI solutions, including rapid development of applications and automation.

English, Spanish and French are required. This updates the earlier two-door
homepage proposal: consulting and ERP integration remain a first-class offer.
The separate SaaS brand remains undecided here; earlier naming suggestions are
not approved product names. Keep managed contracting distinct from software.

## Repository preparation

- Synced main to `ccbb9df` from GitHub.
- Created `codex/multilingual-services` from main.
- Restored editable Next.js source from `origin/chore/bump-next-16.2.6`
  (`7cb8d7c`), replacing the checked-in generated export.
- Retained the strategy documents from main and existing creator legal routes.
- Set explicit Vercel Next.js build configuration using `.next`, with static
  export disabled. No application secrets are needed for this baseline.
- Production settings and domains must remain unchanged during preview testing.

## Inspection findings

The existing homepage is English-only, with consulting, BPO and web-development
carousel messaging. It has no language navigation. Its contact form has neither
an action nor a submit handler, and the main navigation is hidden on mobile
without a replacement menu. The generic stock photography and messaging do not
yet explain the requested three offers.

Ledger was found at `~/dev/akemis/akemis-ledger`, rather than
`~/dev/akemis-ledger`. Its README and application routes show client and contractor
invoicing, bank transactions and reconciliation, contracts, and a consultant
portal. This is evidence for product discovery, not confirmation that every
feature is available as a public self-service SaaS. Earlier strategy documents
identify SaaS tenancy, billing and onboarding work still to do; recheck these
before publishing launch claims. No Ledger data or configuration was changed.

## Proposed page structure

Use `/en`, `/es` and `/fr`, each containing home, freelancer software,
consulting and ERP integration, AI solutions, about, and contact pages.
Use the same internal page identifiers in all locales; translated slugs are
optional. The root should take visitors to English. Language navigation should
preserve the current service page rather than always return to home.

| English | Spanish | French |
| --- | --- | --- |
| Software for freelancers | Software para profesionales independientes | Logiciel pour indépendants |
| Consulting & ERP integration | Consultoría e integración de ERP | Conseil et intégration ERP |
| AI solutions | Soluciones de IA | Solutions IA |

The homepage should introduce all three offers with a clear destination and CTA
for each. Product CTAs should reflect actual availability (early access versus
signup). Consulting and AI pages should lead to a relevant project enquiry.
Do not publish invented pricing, customer results, launch dates or delivery
guarantees. Remove BPO and lead-generation positioning in the redesign.

## Implementation and preview acceptance

- Store EN/ES/FR copy in matching typed dictionaries, including navigation,
  metadata, contact labels, validation and accessibility text.
- Generate static locale routes, correct HTML language, canonical URLs,
  reciprocal language alternates, localized social metadata and sitemap entries.
- Preserve `/creators/privacy` and `/creators/terms` links.
- Provide mobile navigation, keyboard access and visible focus states.
- Replace the inert contact form with a verified delivery flow. The standard
  Next.js deployment supports a server handler; an external form service is
  another option. Never display a success state without delivery confirmation.
- Verify lint, production build, locale switching, direct links, mobile layouts,
  legal routes and contact delivery before approving the redesigned preview.
- Push this feature branch for Vercel preview testing; verify deployment status
  and URL independently. A pushed branch alone does not prove a preview passed.

This preparation restores the editable baseline. The new design, translated
pages and working contact flow are subsequent implementation work.

## Implementation status — 5 September

- Implemented 18 pages across EN/ES/FR, shared service layouts, mobile navigation,
  locale-preserving language links, localized metadata and a localized sitemap.
- Retained both Creator legal routes and repaired their internal navigation.
- Added a translated contact form and Vercel Node.js endpoint using Resend.
  See [contact setup](../contact-email-setup.md) for activation requirements.
- Lint, TypeScript/production build and four contact-handler test groups pass.
  HTTP checks passed for all 18 locale routes, HTML language, canonical and
  reciprocal alternate URLs, single H1s, legal/SEO routes, invalid-route 404s,
  and the English root redirect. Local browser checks confirmed the form's
  unavailable state retains entered text. Desktop and 390px service layouts
  were inspected; a complete mobile interaction pass remains outstanding.
- Vercel CLI preview deployed successfully and independent inspection reports
  Ready: https://akemis-qt8poin0v-akemis-dev-projects.vercel.app
  Preview access redirects unauthenticated requests to Vercel authentication.
- No Resend variables, resources or connectors are configured for akemis-com.
  Live sending and mailbox delivery are **not verified**. Configure a verified
  sender and sending key, redeploy and test before approving contact delivery.
- Production deployment and domain settings have not been changed.
