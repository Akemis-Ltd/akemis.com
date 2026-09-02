# Akemis repositioning: website, Ledger SaaS, AI build studio

Date: 2026-09-02
Status: proposal for discussion
Scope: akemis.com (this repo), akemis-ledger (product), new AI development offer

---

## 1. Summary

1. **akemis.com is already on Vercel.** Project `akemis-com` in the "Akemis Dev" team, domains akemis.com, www.akemis.com and creators.akemis.com. Production is served from the Next.js branch `chore/bump-next-16.2.6`. Every push to `main` fails to build because `main` holds a static export while the Vercel project preset is Next.js. Nothing to deploy, but the branch layout needs fixing before any rebuild.
2. **The current site sells a 2003 consulting firm, not the company you are becoming.** One page, three unrelated propositions in a carousel, ERP/PeopleSoft and Philippines BPO copy, stock photos, vanity stats, and a contact form that does nothing. It should be replaced, not edited.
3. **Split the invoicing business into two lanes.** *Ledger* (software: the consultant invoices in their own name, money never touches Akemis) and *Managed* (Akemis is the contracting party, as today). The software lane is the SaaS. The managed lane stays a service business priced on value, not on flow.
4. **The freelance consultant is the customer.** Their end client is the payer and, later, a second user of the product. Design and price for the consultant; design the client-facing surfaces as a growth channel.
5. **The AI build studio is a real second line,** and Ledger itself is its first case study. Package it as fixed-scope sprints, not day rates.

---

## 2. Hosting status and what to fix

| Item | Finding |
|---|---|
| Vercel project | `akemis-com`, team "Akemis Dev" (Pro plan), linked to GitHub `Akemis-Ltd/akemis.com` |
| Domains | akemis.com, www.akemis.com, creators.akemis.com, plus two vercel.app aliases |
| Live production | Built from branch `chore/bump-next-16.2.6` (Next.js 16 source, Tailwind v4) |
| `main` branch | Static export at repo root; the last three production builds from `main` errored with "Couldn't find any pages or app directory" |
| Contact form | No `action`, no submit handler, in both the export and the source. Every enquiry since the migration has been lost |
| Other branches | `backup-old-site`, `chore/publish-legal-pages` |

**Fix (30 minutes, do this first):** make the Next.js source the content of `main`, delete the exported HTML from the repo, keep `main` as the Vercel production branch. Then wire the form to a handler (a Vercel serverless route sending through Resend or the existing Gmail SMTP, plus a spam check).

---

## 3. Review of the current content

What the page says today, and why it should go.

| Section | Current copy | Problem |
|---|---|---|
| Title | "Akemis - Global Consulting Firm" | Generic. Zero search intent matches this phrase for a company of Akemis's size |
| Hero | Three rotating slides: ERP/CRM consulting, BPO and lead generation, web development | Three audiences, no priority. A visitor cannot tell what Akemis does in five seconds |
| About | "Established in 2003 in Hong Kong... high-performance businesses... outperform their competitors" | Consulting boilerplate. Invoicing, the actual business, is one word in a list |
| Stats | 20+ years, 50+ projects, Global reach, 100% commitment | "Global reach" and "100% commitment" are not numbers. Remove or replace with real ones (invoices issued, currencies, countries paid) |
| Services | SAP, Oracle PeopleSoft, PeopleSoft CRM; Philippines outsourcing centre | Dated technology names. Unless BPO is still meaningful revenue, it dilutes the new positioning |
| Imagery | Stock photos: skyline, consulting teams, "web design in the techno digital era" | Undermines credibility for a software product |
| Contact | Form without backend; contact@akemis.com | Broken |
| Legal | /creators/privacy and /creators/terms for the TikTok analytics app | Fine, keep under creators.akemis.com |

Keep: the Hong Kong founding date (a 20-year-old HK company is a trust signal for a payments-adjacent product), the brand colours (navy #003366, crimson #CD2653), the ERP heritage as *credibility for the AI build studio* rather than as a service.

---

## 4. Proposed company orientation

Three lines, one house brand.

```
Akemis (Hong Kong, since 2003)
├── Akemis Ledger      SaaS for freelance consultants: invoices, timesheets,
│                      expenses, payments, statements. Their bank, their name.
├── Akemis Managed     Contracting and collection service: Akemis contracts
│                      with the client, invoices, collects, pays the consultant.
└── Akemis Build       AI-native development studio for SMBs: custom SaaS,
                       internal tools, agents, integrations. Fixed-scope sprints.
```

Why the split matters for the "money moving" concern:

- In **Ledger**, funds go straight from client to consultant. Akemis is a software vendor. No custody, no remittance question, no per-transaction AML burden. This is the product that scales and the one to market first.
- In **Managed**, Akemis is the principal in two back-to-back contracts (client MSA, consultant agreement), as the contract templates in the ledger already do. Position the fee as *contracting, compliance, collection and payment administration*, never as "we transfer your money". Keep KYC, RFI handling and contract generation visible as features: they are the service.
- Get Hong Kong legal advice on the boundary between the two. A pass-through "we invoice on your behalf and forward the funds" arrangement can look like a money service under the AMLO; a principal subcontracting arrangement generally does not. This document is not legal advice.

What to retire from the front page: Philippines BPO and lead generation, ERP implementation as a headline service. If they still bring revenue, keep a low-key page, not a hero slide.

---

## 5. Who is the client?

Both, in different roles. Decide by who pays, who logs in, and who you design for.

| Question | Consultant | Consultant's end client |
|---|---|---|
| Who pays Akemis | Yes: subscription (Ledger) or service fee (Managed) | No (unless you later offer client-side paid features) |
| Who is the tenant / account owner | Yes | No: they are a counterparty record in the consultant's account |
| Who logs in | Daily | Occasionally: approve a timesheet, download an invoice, pay a link |
| Who churns | Yes: design retention for them | They churn when the consultant does |
| Who sees the brand most | Yes | Every invoice, statement and approval email. This is your acquisition channel |
| Who has KYC obligations toward them | Akemis (Managed) or none (Ledger) | Managed only: Akemis must know its payer |

Recommendation: **consultant is the customer**. Build the client-side experience as free, frictionless, unauthenticated-where-possible (signed links), and branded "powered by Akemis Ledger". A client who approves timesheets for one consultant is a future consultant, or a future Build customer.

---

## 6. Akemis Ledger: product scope

### 6.1 What already exists in the codebase

The ledger is a solid internal tool and a weak SaaS. Assets to build on:

- Paired client/contractor invoice model with line-item routing, tiered charge engine, credit notes.
- Reconciliation engine (allocations, write-offs, fee links) with scored matching, Airwallex sync, HSBC and CSV import.
- Consultant portal (Supabase Auth, RLS): dashboard, invoice draft and submit for review, contracts, documents, RFIs, payments, notifications.
- KYC/RFI compliance scaffolding, contract generation with templates, year-end closing and archives.
- A transport-agnostic service layer (`lib/operations/*`) already exposed over web, bot API and MCP. This is the seam to thread a tenant through.

Gaps that block a multi-tenant product:

- No tenant or organisation concept anywhere. Unique constraints are global (client email, 3-digit client and contractor codes capped at 999, invoice numbers).
- Admin auth is allow-list only; self-service signup is impossible by design. Two disjoint auth systems.
- Akemis branding, sender address, invoice numbering scheme and bank details are hardcoded.
- No billing (no plans, no Stripe), no FX rate table, no scheduled sync, no webhooks.
- Payouts are recorded, never executed: the Airwallex client is read-only for money movement.
- No timesheets, no expenses, no end-client portal.

### 6.2 Portal feature map for consultants

**Must have for launch (own-bank Ledger tier)**

- Clients directory with contacts, billing entity, currency, payment terms.
- Engagements: contract or SOW, rate card (hourly, daily, fixed, retainer), start and end, PO number.
- Timesheets: weekly grid per engagement, submit, client approval by signed email link, locked once invoiced.
- Expenses: receipt upload with OCR, category, billable or not, currency, attach to invoice.
- Invoice generation from approved time and expenses; manual invoices; recurring retainers; credit notes.
- Branded PDF: the consultant's logo, legal details, numbering scheme, bank details. Multi-currency.
- Sending with tracking (opened, viewed), reminders and dunning schedule.
- Payments: mark paid manually, bank-feed matching (Airwallex, HSBC, CSV import; Open Banking later), partial payments, FX difference write-off.
- Statement of account per client, aged receivables, cash forecast, YTD revenue by client and currency.
- Documents vault: contracts, IDs, certificates, insurance.
- Exports for accountants (CSV, Xero or QuickBooks format), year-end pack.

**Should have (months 3 to 6)**

- Client portal: approve timesheets, view invoices and statements, pay by link (card, bank transfer, local rails via Airwallex or Stripe).
- Proposals and quotes that convert to engagements.
- Team mode: a small consulting boutique with two to five consultants, one billing entity.
- Mobile-friendly time and expense capture.
- Calendar import to pre-fill timesheets.

**Managed tier (adds on top of the above)**

- Akemis contracts with the client; invoices issued by Akemis; consultant sees Akemis's fee as a locked line, as the portal already does.
- KYC onboarding flow (self-service document upload, status), RFI responses.
- Payout schedule and status, payslips-style remittance advice, annual statement.
- Client credit check before contract, collection follow-up by Akemis staff.

### 6.3 Value-added services to propose (this is what makes it "not money moving")

Ranked by ease of launch and margin.

1. **Contract library and e-signature.** Templates per country and engagement type. Existing template engine.
2. **Collections as a service.** Akemis chases late invoices on the consultant's behalf. Fee on recovered amount.
3. **FX at institutional rates** via Airwallex, disclosed spread. Real value for consultants paid in a currency they do not hold.
4. **Early payment.** Pay the consultant on approval, collect from the client at term. Needs a financing partner and a licence review. High value, high regulatory weight. Do not launch first.
5. **Professional indemnity and health insurance** through a broker partnership. Referral revenue.
6. **Accountant network and tax filing** per country (HK, France, UAE, Morocco, where your contractors already are).
7. **Company formation** in Hong Kong for consultants who outgrow sole-trader status. Natural for a HK firm.
8. **AI assistant inside the portal.** Draft invoice descriptions, summarise a contract, answer "what did client X pay me last quarter". The MCP server already exists; expose a safe subset to the consultant.
9. **Rate benchmarking.** Anonymous rate data by role and country, once volume allows.
10. **Vendor onboarding pack.** Generate the W-8BEN, supplier form, insurance certificate bundle a corporate client demands.

### 6.4 Pricing hypotheses

To test, not to publish yet.

| Tier | Who | Model |
|---|---|---|
| Ledger Free | Consultant with one client | Free, invoices carry "powered by Akemis Ledger" |
| Ledger Pro | Independent consultant | Flat monthly fee, unlimited clients and invoices, bank feed, client portal |
| Ledger Team | Boutique of two to five | Per-seat monthly fee |
| Managed | Consultant who needs Akemis as contracting party | Percentage of invoiced amount with a monthly floor, as the current tiered rule does, plus priced add-ons (collections, FX, early payment) |
| Build | SMB | Fixed-price sprints, then monthly retainer |

---

## 7. Akemis Build: AI-native development for SMBs

Positioning: "A senior team that ships a working product in weeks, using AI-assisted engineering, backed by 20 years of enterprise systems experience in Hong Kong." The ERP history becomes credibility for integration work, not a service in itself.

### 7.1 Offer catalogue

**Discovery**

- AI opportunity audit (1 week): map processes, data and systems; return a ranked list of automations with effort and payback.
- Prototype sprint (2 weeks): clickable product with real data for one use case.

**Build**

- Custom SaaS or internal tool (4 to 8 weeks, fixed scope): Next.js, Supabase or Postgres, Vercel, auth, billing, admin. Ledger is the reference case.
- Personalised agents: customer support on the company's own knowledge, sales qualification, back-office (invoice capture, reconciliation, reporting), HR onboarding.
- Integrations and MCP servers over existing systems: ERP, CRM, accounting, e-commerce. Let the SMB's staff talk to their data.
- Document automation: contracts, quotes, compliance packs, generated from templates and data.
- Data layer: dashboards and forecasting on top of scattered spreadsheets.

**Run**

- Monthly retainer: hosting, monitoring, model updates, feature backlog. This is the recurring revenue.
- Fractional CTO for founders without a technical lead.

### 7.2 Target segments

- Consulting boutiques and agencies (they are already Ledger users).
- Trading and sourcing companies in HK and Asia: order tracking, supplier documents, quotes.
- Professional services: law, accounting, recruitment: intake, document drafting, matter tracking.
- E-commerce and creators (the TikTok analytics app shows the pattern).

### 7.3 Proof to put on the site

- Ledger: "invoicing and reconciliation for dozens of contractors across eight currencies, built and run by a two-person team."
- Creator analytics: TikTok OAuth, link attribution, order data.
- Two or three anonymised before/after numbers (hours saved per week, days-to-invoice).

---

## 8. New website: structure and messaging

### 8.1 Sitemap

```
/                      Two doors: "I am a consultant" / "I run a business"
/ledger                Product overview, screenshots, how it works
/ledger/features       Timesheets, expenses, invoices, payments, client portal
/ledger/pricing        Tiers, FAQ
/ledger/security       Data residency, RLS, backups, HK company, KYC
/managed               Akemis as your contracting party: for whom, how, fee logic
/build                 AI build studio: offers, process, proof
/build/work            Case studies (Ledger, Creator Analytics, client work)
/about                 Since 2003, Hong Kong, team, why we built Ledger
/guides                SEO content: invoicing as a freelance consultant in HK,
                       umbrella vs own company, getting paid across borders
/contact               Working form, calendar booking link
/legal/*               Privacy, terms; keep creators.akemis.com legal pages
/login → app           Link to the portal
```

### 8.2 Homepage copy, first draft

- Eyebrow: Akemis, Hong Kong, since 2003.
- Headline: **Get paid like a company. Work like a freelancer.**
- Sub: Timesheets, expenses, invoices and payments for independent consultants, in every currency your clients use. Or let Akemis be your contracting party and handle the paperwork.
- CTA: Start free. Secondary: See how Managed works.
- Second door, further down: **Need software built fast? We build custom SaaS and AI agents for small businesses in weeks, not quarters.** CTA: Book a discovery call.
- Proof strip: currencies supported, countries paid, years in Hong Kong, invoices issued (real numbers from the ledger DB).

### 8.3 Build approach

- Keep Next.js on Vercel, Tailwind v4, MDX for guides and case studies, no CMS until content volume justifies one.
- Shared design tokens with the Ledger portal so site and app feel like one product.
- Working contact and waitlist forms from day one (Resend, plus a webhook into the ledger or a spreadsheet).
- Analytics (Vercel Web Analytics is included on Pro), Open Graph images per page, sitemap already in place.
- Screenshots of the real portal, not stock photos.

---

## 9. Ninety-day roadmap

**Weeks 1 to 2: foundations**

- Fix `main` vs Next.js branch on Vercel; wire the contact form.
- Decide names (Ledger, Managed, Build) and the legal boundary between Ledger and Managed with HK counsel.
- New site: home, /ledger with waitlist, /build, /about, /contact.

**Weeks 3 to 8: portal for existing contractors**

- Let current contractors self-serve: profile, bank details, KYC documents, timesheets, expenses, statements. This is the Managed tier, live with real users, before any multi-tenancy work.
- Add an `Organization` model and thread a tenant id through `lib/operations/*`; keep Akemis as tenant 1.

**Weeks 9 to 13: Ledger own-bank tier, private beta**

- Self-service signup, branded invoice templates, numbering configuration, own bank details on invoices.
- Stripe billing for Pro.
- Client approval links for timesheets and invoices.
- Five to ten external consultants as beta users; two Build sprints sold to fund it.

---

## 10. Decisions needed

Decided on 2026-09-02. The outcomes and the resulting plan are in `2026-09-launch-plan-to-end-september.md`.

1. Product name: keep "Akemis Ledger" or brand the SaaS separately?
2. Is Managed open to new consultants, or capped to the current portfolio while Ledger scales?
3. Do BPO, lead generation and ERP consulting stay on the site at all?
4. Which countries for the first Ledger beta (Hong Kong, France, UAE, Morocco)?
5. Budget and target for the first two Build sprints.
6. Legal review of the Ledger versus Managed boundary in Hong Kong.
