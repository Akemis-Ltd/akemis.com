# Launch plan to end of September 2026

Date: 2026-09-02
Status: working plan, follows the decisions taken on the repositioning proposal
Companion: `2026-09-repositioning-and-saas-strategy.md`

---

## 1. Decisions taken

| Question | Decision | What it changes |
|---|---|---|
| Product name | The SaaS gets its own brand, separate from Akemis | Buy a domain now; Akemis stays the operating company and the "by Akemis" trust line |
| Managed tier | Open to new consultants, not capped to the current portfolio | Needs published entry conditions, a service list, a marketing page (Deel-style contractor page) |
| Legacy services | BPO and lead generation dropped. ERP integration kept. Consultants and clients may bring or receive other services, some from their own projects, some sourced by Akemis | Akemis is both a billing platform and a light marketplace: bring-your-own-client and Akemis-sourced missions run through the same product |
| Geography | Everywhere in principle, limited launch scope pending local compliance checks | Define launch corridors (client country x consultant country), not a country list |
| Timeline | Target end of September 2026 | Four weeks. Scope below is cut to fit |
| Legal | Review to be done. No new licences, no new ordinances, no change of service scope | The Managed model must fit inside what Akemis already does today; anything that would need a licence (early payment, FX margin) is out of launch scope |

---

## 2. Brand and domain

### Criteria

Short, pronounceable in English and French, no hyphen, evokes independence or getting paid, not already a fintech or invoicing product, .com or a clean .io, trademark-clear in Hong Kong and the EU.

### Availability check, 2 September 2026

Fifty candidates were checked through the Vercel domain registrar. The .com space for one-word invoicing names is exhausted: sololedger, billfolio, duely, feeline, invoro, tallyo, retainr, billable, consultly, perdiem, solobill, invoicelane, consultledger, paymission, freelanceledger, billingdesk, facturio, feesly, billora, konsulo, invoxa, ledgerly, missionly, solvi, solofee, feeport, billport, outbill, feebase, timefee, indyfy, konsulta are all taken on .com.

| Available | Price per year | Read |
|---|---|---|
| indyledger.com and indyledger.io | USD 11 and USD 30 | "Indy" for independent, keeps continuity with Ledger. Both TLDs free, so the brand can be defended |
| konsulo.io | USD 30 | Esperanto-flavoured "consultant", reads well in FR/EN/ES. Only .io |
| feesly.io | USD 30 | Light, fee-centric. Only .io |
| billfolio.io | USD 30 | Portfolio of bills. Only .io |
| missiopay.com | USD 11 | "Mission" is how French consultants call a gig, but "pay" pulls toward money-moving, which is the wrong signal |

### Recommendation

Register indyledger.com and indyledger.io today as the working name (USD 41 total, refundable risk). Run one human naming round in week one with the rule "if nothing beats Indy Ledger by 9 September, it ships". Before any print or paid campaign, run a trademark search at the HK Intellectual Property Department and EUIPO for whatever name wins.

Structure: the brand is a product line owned by Akemis Limited. Legal footer on the product: "Indy Ledger is a product of Akemis Limited, Hong Kong". No new legal entity is needed for launch.

---

## 3. Service list

Two lists, because the platform sells two different things.

### 3.1 What the platform provides to consultants

**Managed tier at launch (end of September)**

- Contracting: Akemis signs the client MSA and the consultant agreement from the existing templates.
- Invoicing in Akemis's name, from the portal, multi-currency, with the Akemis fee as a locked line or blended.
- Collection follow-up: reminders at due date plus 7, 15 and 30 days, then a personal follow-up.
- Payout on receipt, in the consultant's currency, via Airwallex, with remittance advice.
- Compliance: KYC onboarding, documents vault, RFI handling.
- Portal: invoices, payments, statements, contracts, documents, notifications. Timesheets and expenses are added in October.

**Ledger tier (software only, consultant invoices in their own name)**: private beta from November, not in the September scope.

**Value-added services**, in launch order: contract library (September, already exists), collections (September, manual), accountant and insurance partner referrals (October), HK company formation referral (October), AI assistant on the consultant's own data (Q4). Excluded from launch by the legal constraint: early payment, FX margin, any form of credit.

### 3.2 What consultants deliver through the platform

A taxonomy is needed for the marketing page, the eligibility check, and the mission listings. Proposed top level:

| Category | Examples | Note |
|---|---|---|
| Enterprise applications and ERP | SAP, Oracle, PeopleSoft, NetSuite, Dynamics, Workday: integration, upgrade, support | Akemis heritage. Lead category |
| CRM and customer platforms | Salesforce, HubSpot, PeopleSoft CRM | |
| Data, BI and analytics | Warehousing, reporting, dashboards, migration | |
| Software development | Web, mobile, APIs, integration | |
| AI and automation | Agents, workflow automation, document processing | Overlap with Akemis Build; a consultant may deliver a Build project |
| Cloud and infrastructure | Migration, DevOps, security hardening | |
| Project and programme management | PMO, delivery lead, scrum master | |
| Finance and business transformation | Process redesign, controlling, treasury systems | |
| HR and payroll systems | HRIS implementation, payroll systems | |
| Training and change management | User adoption, documentation | |

Not accepted: regulated advice (legal, tax, investment, medical), supply of goods, construction, anything requiring a local professional licence the consultant does not hold, and any arrangement that is in substance employment.

### 3.3 Two sourcing channels, one product

| | Bring your own client | Akemis-sourced mission |
|---|---|---|
| Who finds the work | Consultant | Akemis (network, former ERP clients, Build clients) |
| Fee logic | Lower: platform plus contracting | Higher: includes placement |
| Who owns the client relationship | Consultant | Akemis, with a non-solicitation clause both ways |
| Where it shows in the product | Consultant adds the client, Akemis runs KYB | Mission listing, consultant applies, Akemis matches |

The mission listing can be a static page in September and a portal feature later.

---

## 4. Entry conditions

Published on the marketing page as an eligibility check, applied in onboarding. The Deel-style pattern: five questions, an instant answer, then the full KYC.

### Consultant

1. Natural person aged 18 or over, or a company with an identified beneficial owner.
2. Resident in a launch country (section 5). Passport or national ID, proof of address under three months.
3. Legal right to work independently in the country of residence. Business registration number where the country issues one (SIRET, VAT number, HK BR, trade licence).
4. Bank account in the consultant's own name, in a country Airwallex can pay to. No third-party accounts.
5. Services within the accepted taxonomy, delivered remotely or on the consultant's own initiative on site; no exclusive full-time integration into one client's team for more than twelve months without review.
6. Not on any sanctions list; no politically exposed person status without enhanced due diligence.
7. Responsible for their own taxes and social contributions; a signed self-declaration to that effect.
8. Recommended, not required: professional indemnity insurance. Some clients will require it, and the platform will offer a partner.

### Client (Managed tier)

1. Registered business, business-to-business only. No consumers.
2. Registered in a launch country. KYB: registration extract, identified signatory.
3. Not sanctioned; not in a sector Akemis excludes (arms, gambling, crypto exchanges, adult).
4. Accepts the Akemis MSA and payment terms (30 days standard, 45 maximum at launch).
5. Minimum engagement value at launch: the equivalent of USD 3,000 per month, to keep unit economics and compliance effort sane. Review after the first quarter.

### Classification test

Because the Managed model must not resemble employment, onboarding includes a short classification questionnaire per engagement: control over hours and methods, own tools, multiple clients or right to have them, defined deliverables, no line management. A failing score routes the engagement to manual review.

---

## 5. Launch geography and compliance checklist

### Principle

Define corridors, not countries: the client's country determines withholding tax and invoicing rules on the receivable; the consultant's country determines payout rules on the payable. Akemis in Hong Kong sits in the middle with no VAT and no withholding on service fees paid abroad.

### Proposed launch scope

| Side | Wave 1, September | Wave 2, Q4, after counsel's review | Deferred |
|---|---|---|---|
| Client country | Hong Kong, Singapore, UAE, United Kingdom, Switzerland, EU (France, Belgium, Netherlands, Germany, Spain, Italy, Portugal, Luxembourg), United States, Canada | Saudi Arabia, Qatar, Australia, Japan, Morocco | India, Brazil, Argentina, mainland China, most of sub-Saharan Africa. Withholding on cross-border service fees or currency controls make the receivable unpredictable |
| Consultant country | Same list, plus Morocco and Tunisia because current contractors are there, with the repatriation notes below | UAE free zones, Türkiye, Serbia, Georgia, Philippines, Vietnam, Indonesia, Colombia, Mexico, South Africa | Argentina, Cameroon and the XAF/XOF zone, Egypt, Nigeria, Pakistan, mainland China. Currency controls make payout timing and amount uncertain |

Why these: the wave 1 list covers where the money already comes from, where Airwallex pays in local currency without friction, where withholding on services paid to a Hong Kong company is nil or treaty-reduced, and where Akemis's team can read the paperwork.

### Checklist to hand to counsel

The constraint is fixed: no new licence, no new ordinance, no change of scope. So the questions are about confirming the boundary and cleaning up the paperwork, not about expanding.

**Hong Kong, Akemis side**

- Confirm the Managed model (Akemis as principal in back-to-back service contracts, paying its subcontractor after collecting from its client) sits outside the Money Service Operator regime under the AMLO, and document the features that keep it there: Akemis invoices in its own name, bears credit risk, provides services beyond payment, and never holds client funds for a third party's account.
- Confirm the Ledger software tier creates no licensing question at all, and what wording on the site keeps it that way.
- Personal Data (Privacy) Ordinance: KYC data retention period, cross-border transfer notice, data processor terms with Supabase (eu-west-2) and Airwallex.
- Profits tax: treatment of service income invoiced to non-HK clients and subcontracted to non-HK consultants. Existing practice, just confirm.
- Terms of service for the platform, consultant agreement, client MSA: review for the open-to-new-consultants context.

**Per client country (receivable side)**

- Withholding tax on service fees paid to a Hong Kong company and the treaty position, if any.
- VAT or GST: reverse charge by the client, and what the Akemis invoice must state.
- E-invoicing mandates that affect a foreign supplier invoicing a domestic client. France (from September 2026), Belgium, Poland, Germany, Italy and Spain each have or are rolling out mandates; confirm whether Akemis, as a non-established supplier, must transmit through a platform or whether the client's reception obligation is enough.
- Permanent establishment risk when a consultant works on site for months.

**Per consultant country (payable side)**

- Right to receive foreign service income and any repatriation or declaration duty. Morocco's Office des Changes and Tunisia's central bank rules are the two to check first, since current contractors are there.
- Whether the consultant's status (auto-entrepreneur, freelancer visa, sole trader) permits invoicing a foreign principal.
- Any reporting Akemis owes to that country. Usually none for a foreign payer, confirm for wave 1.
- Airwallex payout support and currency for each country.

**Classification**

- Confirm the classification questionnaire and the twelve-month review reflect the tests used in France, the UK and the UAE, the three jurisdictions where misclassification is most actively enforced among the wave 1 countries.

None of this is legal advice; it is the brief.

---

## 6. Marketing page for consultants

One long page on the new domain, in the Deel contractor-page pattern. Draft structure and copy.

1. **Hero.** Eyebrow: "A product of Akemis, Hong Kong, since 2003". Headline: "Consult anywhere. Get paid properly." Sub: "Indy Ledger contracts, invoices and collects for independent consultants, then pays you in your currency. Your clients or ours." Buttons: "Check your eligibility" and "See how it works".
2. **Two ways to work with us.** Bring your own client, or take a mission Akemis has sourced. Same portal, same payout, different fee.
3. **How it works.** Four steps: pass the eligibility check and KYC; we sign the client and the consultant agreement; you log time and expenses and submit the invoice from the portal; we collect and pay you on receipt, with a statement.
4. **What's included.** Contracting, invoicing in eight currencies, collection follow-up, payout with remittance advice, documents vault, statements and year-end pack, human support. Later: timesheets, expenses, client approvals, accountant exports.
5. **Countries and currencies.** The wave 1 list and the eight currencies, with a line: "Somewhere else? Join the waitlist and tell us where."
6. **Pricing.** Percentage with a floor for Managed; "software-only plan coming" for Ledger. Exact numbers are a decision for week two.
7. **Trust.** Hong Kong company since 2003, KYC on every party, contracts you can read before you sign, data in the EU, a named person to talk to.
8. **For companies.** Short section: "Hire an independent consultant without opening a vendor file for each one". Link to the Build studio for teams who need software rather than people.
9. **FAQ.** Ten questions: who is my contract with; who invoices my client; when do I get paid; what currency; who pays bank fees; what happens if the client pays late; do you handle my taxes (no); can I keep my own clients (yes); can I leave (yes, notice terms); what do you do with my ID documents.
10. **Footer.** Akemis Limited, Hong Kong; legal pages; link to akemis.com.

Eligibility check widget: five questions (country of residence, legal status, client country, service category, monthly volume), instant answer, email capture on pass, waitlist on fail.

---

## 7. Week-by-week plan to 30 September

Start: Tuesday 2 September. End: Wednesday 30 September. Four working weeks.

| Week | Site and brand | Product | Legal and operations | Done means |
|---|---|---|---|---|
| 1, 2 to 6 Sep | Buy domains. Make the Next.js source the content of akemis.com `main`; wire the contact form. Naming round closes 9 Sep | Portal: consultants can edit profile and bank details, upload KYC documents; statements page | Send counsel the section 5 brief. Pick wave 1 corridors. Fix Managed fee and floor | Form receives mail. Domains owned. Brief sent |
| 2, 9 to 13 Sep | New akemis.com: home with two doors, /build, /about, /contact live. Marketing page copy final | Portal: timesheets v1 (weekly grid, submit, PDF), expenses v1 (upload, categories) | Terms, consultant agreement and MSA redlines back from counsel. Eligibility rules final | akemis.com replaced. Copy approved |
| 3, 16 to 20 Sep | Product marketing page live on the new domain with eligibility check and waitlist. Screenshots from the real portal | Portal: client approval link for timesheets; invoice from approved time. Classification questionnaire in onboarding | Airwallex payout coverage confirmed for wave 1 countries. Support inbox and SLA defined | Page live, waitlist collecting |
| 4, 23 to 30 Sep | Guides: three SEO articles (invoicing a foreign client as a consultant; umbrella versus own company; getting paid across borders). Open Graph, analytics | Invite the first five external consultants from the waitlist. Bug fixing | Legal sign-off on wave 1. Internal runbook: onboarding, KYC review, payout day | First external consultant onboarded and invoicing |

Not in September, and said so on the page: the software-only Ledger tier, self-service signup with billing, the end-client portal beyond approval links, the mission marketplace as a product feature, wave 2 countries.

---

## 8. This week's actions

1. Register indyledger.com and indyledger.io, or veto the name and send alternatives by Friday.
2. Confirm wave 1 corridors or strike countries from the list.
3. Confirm the Managed fee structure to publish, or decide to show "from" pricing only.
4. Send the section 5 brief to Hong Kong counsel with a 20 September deadline for wave 1 sign-off.
5. Approve the marketing page structure in section 6 so copywriting and the eligibility widget can start.
6. Name the person who answers the support inbox from launch day.
