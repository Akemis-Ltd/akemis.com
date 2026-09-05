import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    siteDescription:
      "Contracting, invoicing and payment for independent consultants, and AI-native software development for small businesses. Hong Kong, since 2003.",
    homeTitle: "Get paid like a company. Work like a freelancer.",
    consultantsTitle: "For independent consultants",
    consultantsDescription:
      "Akemis contracts with your client, invoices in its name, collects, and pays you in your currency. Check your eligibility in five questions.",
    buildTitle: "Custom software and AI agents for small businesses",
    buildDescription:
      "A senior team that ships working software in weeks: custom applications, internal tools, agents over your own data, and integration with the systems you already run.",
    aboutTitle: "About",
    aboutDescription:
      "Akemis Limited is a Hong Kong company founded in 2003. Two decades of enterprise systems work, turned into a contracting service for independent consultants and a software studio.",
    contactTitle: "Contact",
    contactDescription:
      "Talk to Akemis about contracting and invoicing as an independent consultant, hiring consultants, or building software for your business.",
    privacyTitle: "Website privacy notice",
    privacyDescription: "How akemis.com handles the personal data you send through its forms.",
  },
  nav: {
    consultants: "For consultants",
    build: "Build",
    about: "About",
    contact: "Contact",
    cta: "Check eligibility",
    language: "Language",
    skip: "Skip to content",
  },
  home: {
    eyebrow: "Akemis · Hong Kong · since 2003",
    title: "Get paid like a company. Work like a freelancer.",
    lede: "We contract, invoice and collect for independent consultants, then pay them in their own currency. And for small businesses that need software, we build it in weeks.",
    ctaConsultant: "I am a consultant",
    ctaBusiness: "I run a business",
    doors: [
      {
        eyebrow: "For independent consultants",
        title: "Your clients, or ours. One contract, one invoice, one payout.",
        body: "We sign with your client, invoice in our name, chase the payment and pay you on receipt, with a statement you can hand to your accountant.",
        cta: "How it works",
        secondary: "Check eligibility",
        href: "/consultants",
        secondaryHref: "/consultants#eligibility",
        image: "/images/majorel-consulting-team-scaled-1.jpeg",
        alt: "Consultants working together around a table",
      },
      {
        eyebrow: "For businesses",
        title: "Custom software and AI agents, shipped in weeks.",
        body: "A senior team that builds the tool you actually need: an internal system, a customer portal, an agent over your own data, an integration with the systems you already run.",
        cta: "See what we build",
        secondary: "Book a discovery call",
        href: "/build",
        secondaryHref: "/contact",
        image: "/images/OUR-FIRMS_CONSULTING2_1000x667.jpg",
        alt: "Two people reviewing figures and a laptop at a desk",
      },
    ],
    proof: [
      { k: "Founded", v: "2003", note: "A Hong Kong company for over twenty years." },
      { k: "Currencies invoiced and paid", v: "8", note: "" },
      { k: "Consultants paid across", v: "3 continents", note: "Africa, Asia and the Americas, in their own currencies." },
    ],
    whatLabel: "What we do",
    whatTitle: "Three things, well.",
    items: [
      {
        title: "Managed contracting for consultants",
        body: "Akemis is the contracting party between you and your client. We run the paperwork, the compliance, the collection and the payment, and you keep the work. Open to new consultants in the first wave of countries.",
        href: "/consultants",
      },
      {
        title: "Ledger, the software-only plan",
        body: "For consultants who want the same portal, timesheets and invoicing, but who invoice in their own name and bank. In development, private beta later this year.",
        href: "/consultants#ledger",
      },
      {
        title: "Akemis Build",
        body: "Fixed-scope sprints to build custom software, internal tools, agents and integrations for small and medium businesses. Our own invoicing platform is the first case study.",
        href: "/build",
      },
    ],
    more: "More",
    ctaTitle: "Five questions tell you if you are in the first wave.",
    ctaBody: "Country, status, client, service, volume. Instant answer, no account needed.",
  },
  consultants: {
    eyebrow: "A service of Akemis · Hong Kong · since 2003",
    title: "Consult anywhere. Get paid properly.",
    lede: "Akemis contracts, invoices and collects for independent consultants, then pays you in your currency. Your clients or ours.",
    ctaPrimary: "Check your eligibility",
    ctaSecondary: "See how it works",
    heroAlt: "Independent consultants working together",
    ways: [
      {
        eyebrow: "Bring your own client",
        title: "You found the work. We run the paperwork.",
        body: "You add the client, we run the checks and sign with them. Lower fee. You keep the relationship.",
      },
      {
        eyebrow: "Take an Akemis mission",
        title: "We found the work. Same portal, same payout.",
        body: "Missions from our network, mostly enterprise applications, data and software. Higher fee, because it includes the placement.",
      },
    ],
    howLabel: "How it works",
    howTitle: "Four steps, in this order.",
    steps: [
      {
        t: "Check eligibility and pass KYC",
        b: "Five questions on this page, then identity, address and business registration documents in the portal.",
      },
      {
        t: "We sign both agreements",
        b: "A master service agreement with your client and a consultant agreement with you. You read both before anything is signed.",
      },
      {
        t: "You work, and submit from the portal",
        b: "Log the period, attach your timesheets or deliverables, submit the invoice. We review it and send it to your client.",
      },
      {
        t: "We collect and pay you on receipt",
        b: "Reminders go out after the due date, then a person follows up. When the client pays, you are paid in your currency with a remittance advice.",
      },
    ],
    includedLabel: "What is included",
    includedTitle: "Everything between the handshake and the bank.",
    included: [
      ["Contracting", "Client agreement and consultant agreement from tested templates, per engagement."],
      ["Invoicing", "Invoices in Akemis's name, in eight currencies, with your fee shown as a line or blended."],
      ["Collection follow-up", "Automatic reminders, then a named person who calls the client."],
      ["Payout with remittance advice", "On receipt, to an account in your name, with a document for your books."],
      ["Documents vault", "Contracts, identity documents, certificates and invoices in one place, exportable."],
      ["Statements", "Per client, per currency, ready for your accountant."],
      ["Human support", "A person answers within one working day."],
    ],
    comingLabel: "Coming next",
    coming: ["Timesheets with client approval links", "Expenses with receipt capture", "Accountant exports"],
    countriesLabel: "Countries and currencies",
    countriesTitle: "The first wave.",
    clientCountriesTitle: "Where your client can be",
    consultantCountriesTitle: "Where you can be",
    consultantCountriesBody: "Any of the client countries, plus",
    currenciesTitle: "Currencies",
    countriesNote:
      "Somewhere else? Run the check below anyway and join the waitlist. We add countries in waves, once the local rules are confirmed.",
    pricingLabel: "Pricing",
    pricingTitle: "A share of what you invoice, with a monthly minimum.",
    prices: [
      {
        name: "Managed, your client",
        line: "Percentage of the invoiced amount, with a monthly minimum. Lower rate.",
        note: "Set out in the fee schedule you receive with the onboarding pack.",
      },
      {
        name: "Managed, Akemis mission",
        line: "Percentage of the invoiced amount, higher rate, placement included.",
        note: "Agreed per mission before you accept it.",
      },
      {
        name: "Ledger, software only",
        line: "Flat monthly plan. You invoice in your own name and bank.",
        note: "In development, private beta later this year. Join the waitlist below.",
      },
    ],
    pricingNote: "No currency margin, no setup fee, and no charge in months when you do not invoice.",
    eligibilityLabel: "Eligibility",
    eligibilityTitle: "Five questions. Instant answer.",
    eligibilityBody:
      "Nothing is stored until you leave your email at the end. Business clients only, and you stay responsible for your own taxes.",
    trust: [
      { t: "Since 2003", b: "A Hong Kong company with two decades of client work behind it." },
      { t: "Know your customer", b: "Identity checks on every consultant and every client. It protects you too." },
      { t: "Contracts you can read", b: "Plain agreements, sent before signature, the same for everyone." },
      { t: "A person to talk to", b: "Support answers within one working day, and knows your file." },
    ],
    companiesLabel: "For companies",
    companiesTitle: "Hire an independent consultant without opening a vendor file for each one.",
    companiesBody:
      "One supplier, Akemis, for every consultant you work with through us. One agreement, one invoice format, one payment. If what you need is software rather than people, see",
    companiesLink: "Akemis Build",
    companiesCta: "Talk to us",
    faqLabel: "Questions",
    faqTitle: "The ones we get asked.",
    faq: [
      [
        "Who is my contract with?",
        "With Akemis Limited, Hong Kong. Akemis holds a separate service agreement with your client. You see both before signing.",
      ],
      ["Who invoices my client?", "Akemis does, in its own name, from the invoice you prepare and submit in the portal."],
      [
        "When do I get paid?",
        "On receipt of the client's payment, once the funds are matched to your invoice, normally within a few working days. Payment terms with clients are 30 days standard, 45 maximum.",
      ],
      [
        "In what currency?",
        "Any of the eight we operate in today: EUR, USD, GBP, AED, MAD, TND, XAF and XOF. Payout is to an account in your own name.",
      ],
      [
        "Who pays bank fees?",
        "Bank and transfer fees are itemised on your remittance advice, and the fee schedule sent with the onboarding pack says who bears which. Currency conversion is at the rate our payment provider gives us; we do not add a margin.",
      ],
      [
        "What if the client pays late?",
        "We chase. Automatic reminders first, then personal follow-up. We do not advance funds before the client has paid.",
      ],
      [
        "Do you handle my taxes?",
        "No. You remain responsible for your own taxes and social contributions in your country, and you confirm that when you join.",
      ],
      [
        "Can I keep my own clients?",
        "Yes. Bringing your own client is the normal case and carries the lower fee. Missions Akemis sources for you carry a higher fee.",
      ],
      [
        "Can I leave?",
        "Yes, with the notice period in the consultant agreement. Engagements in progress are completed under their existing terms.",
      ],
      [
        "What do you do with my identity documents?",
        "They are stored securely, used only to meet our know-your-customer duties and our payment provider's requests, and deleted after the retention period in our privacy notice.",
      ],
    ],
  },
  build: {
    eyebrow: "Akemis Build",
    title: "Software your business needs, shipped in weeks.",
    lede: "A senior team using AI-assisted engineering, backed by twenty years of enterprise systems work in Hong Kong. Fixed scope, fixed price, a working product at the end.",
    ctaPrimary: "Book a discovery call",
    ctaSecondary: "See the offers",
    heroAlt: "Reviewing figures and a laptop at a working desk",
    offersLabel: "Offers",
    offersTitle: "Discover, build, run.",
    colStage: "Stage",
    colOffer: "Offer",
    colShape: "Shape",
    stages: { discovery: "Discovery", build: "Build", run: "Run" },
    offers: [
      {
        stage: "discovery",
        name: "AI opportunity audit",
        shape:
          "One week. We map your processes, data and systems, and hand back a ranked list of automations with effort and payback for each.",
      },
      {
        stage: "discovery",
        name: "Prototype sprint",
        shape:
          "Two weeks. A clickable product on your real data for one use case, so the decision is made on something you can touch.",
      },
      {
        stage: "build",
        name: "Custom application or internal tool",
        shape:
          "Four to eight weeks, fixed scope and price. Web application, database, authentication, admin and hosting. Our own invoicing platform was built this way.",
      },
      {
        stage: "build",
        name: "Personalised agents",
        shape:
          "Support on your own knowledge base, sales qualification, back-office work such as document capture and reporting, staff onboarding.",
      },
      {
        stage: "build",
        name: "Integrations",
        shape:
          "Over the systems you already run: ERP, CRM, accounting, e-commerce. Your staff ask questions of your data in plain language.",
      },
      {
        stage: "build",
        name: "Document automation",
        shape:
          "Contracts, quotes and compliance packs generated from your templates and your data, reviewed by a person before they leave.",
      },
      {
        stage: "run",
        name: "Monthly retainer",
        shape: "Hosting, monitoring, updates and a feature backlog we work through with you every month.",
      },
      {
        stage: "run",
        name: "Fractional technical lead",
        shape: "For founders without a technical partner: architecture, vendor choices, hiring, a weekly review.",
      },
    ],
    segmentsLabel: "Who we build for",
    segmentsTitle: "Small and medium businesses with a specific problem.",
    segments: [
      ["Consulting boutiques and agencies", "Time, billing and client reporting tools that fit how you actually work."],
      ["Trading and sourcing companies", "Order tracking, supplier documents, quotes, landed-cost calculations."],
      ["Professional services", "Intake, drafting and matter tracking for law, accounting and recruitment firms."],
      ["E-commerce and creators", "Attribution, analytics and back-office automation around your storefronts."],
    ],
    proofLabel: "What we have built",
    proofTitle: "Our own products first.",
    proof: [
      {
        t: "Akemis Ledger",
        b: "Invoicing, bank reconciliation and payouts for dozens of consultants across eight currencies, with a self-service portal, contract generation and compliance workflows. Built and run by a two-person team.",
      },
      {
        t: "Creator Analytics",
        b: "A TikTok-connected analytics application: authenticated onboarding, per-video metrics, link attribution and order data from partner platforms.",
      },
      {
        t: "Twenty years of enterprise systems",
        b: "SAP, Oracle and PeopleSoft implementation and integration work since 2003. It is why the integrations we build still respect how an enterprise system actually behaves.",
      },
    ],
    howLabel: "How we work",
    howTitle: "Fixed scope. Weekly demo. Your code, your accounts.",
    how: [
      "Scope and price agreed before the first line is written. Changes are priced, not absorbed silently.",
      "A working demo every week, on your data, from the second week.",
      "Everything lives in your repositories, your cloud accounts and your domain. No lock-in to us.",
      "A person reviews every generated artefact before it reaches a customer or a ledger.",
    ],
    callLabel: "Discovery call",
    callTitle: "Thirty minutes. Bring the problem, not a specification.",
    callBody:
      "Tell us what takes too long or breaks too often. We will say honestly whether a one-week audit, a two-week prototype, or nothing at all is the right next step.",
    callNote: "Independent consultant rather than a business?",
    callNoteLink: "This page is for you",
    callSubmit: "Request a call",
  },
  about: {
    eyebrow: "About Akemis",
    title: "A twenty-year-old Hong Kong company that learned to ship software.",
    lede: "We spent two decades putting enterprise systems into companies and paying the consultants who did the work. The second part turned out to be a business of its own.",
    heroAlt: "Hong Kong harbour and skyline",
    timelineLabel: "How we got here",
    timeline: [
      {
        year: "2003",
        t: "Founded in Hong Kong",
        b: "Enterprise systems consulting: SAP, Oracle and PeopleSoft implementation and integration for clients in Asia, Europe and the Middle East.",
      },
      {
        year: "2010s",
        t: "Consultants, not headcount",
        b: "Projects staffed with independent specialists. Akemis becomes the contracting party between them and the client, and learns the paperwork the hard way.",
      },
      {
        year: "2025",
        t: "The ledger becomes a product",
        b: "Invoicing, bank reconciliation and payouts move from spreadsheets to our own platform, built with AI-assisted engineering by a two-person team.",
      },
      {
        year: "2026",
        t: "Open to new consultants",
        b: "The contracting service opens beyond our own network, with a self-service portal, and the studio that built it starts building for other small businesses.",
      },
    ],
    beliefs: [
      {
        t: "What we believe",
        b: "Independent work should not mean amateur paperwork. A consultant deserves the same contracting, invoicing and collection a company has, without having to become one.",
      },
      {
        t: "What we are not",
        b: "Not a bank, not a payroll company, not an employer of record. Akemis is the contracting party in two service agreements, and a software vendor. Money moves because work was invoiced, never for its own sake.",
      },
      {
        t: "Who runs it",
        b: "A small team in Hong Kong and Europe led by the founder, Philippe Barthelemy. Every consultant on the platform has a named person who knows their file.",
      },
    ],
    linkConsultants: "For consultants",
    linkConsultantsBody: "Contracting, invoicing, collection and payout.",
    linkBuild: "For businesses",
    linkBuildBody: "Custom software and agents, built in weeks.",
  },
  contact: {
    eyebrow: "Contact",
    title: "A person answers.",
    lede: "Within one working day, Hong Kong or Paris time. Tell us who you are and what you need; the form routes it to the right person.",
    emailLabel: "Email",
    companyLabel: "Company",
    companyValue: "Akemis Limited, Hong Kong",
    portalLabel: "Already a consultant with us?",
    portalBody: "Use the portal and your usual contact; it is faster than this form.",
  },
  form: {
    name: "Full name",
    email: "Work email",
    company: "Company",
    iAm: "I am",
    topics: {
      consultant: "an independent consultant",
      business: "a business hiring a consultant",
      build: "a business that needs software built",
      other: "something else",
    },
    message: "How can we help?",
    submit: "Send message",
    sending: "Sending…",
    sentTitle: "Message sent.",
    sentBody: "We answer within one working day, from contact@akemis.com.",
    privacyNote: "We use your details only to answer you. See our",
    privacyLink: "privacy notice",
    errorGeneric: "We could not send your message. Please email contact@akemis.com.",
    errorNetwork: "Network problem. Please email contact@akemis.com.",
  },
  eligibility: {
    qResidence: "Where do you live?",
    qStatus: "How do you work today?",
    qClient: "Where is your client based?",
    qCategory: "What do you do?",
    qVolume: "Monthly invoicing, roughly",
    choose: "Choose…",
    otherCountry: "Another country",
    otherCategory: "Something else",
    statuses: {
      sole: "As a sole trader or self-employed",
      company: "Through my own company",
      none: "Not set up yet",
      employee: "I am an employee looking for a payroll",
    },
    volumes: {
      lt3k: "Under USD 3,000",
      mid: "USD 3,000 to 10,000",
      high: "USD 10,000 to 25,000",
      top: "Over USD 25,000",
    },
    passTitle: "You are in the first wave.",
    passBody:
      "Leave your email and we will send the onboarding pack: what we need for identity checks, the consultant agreement to read, and the fee schedule.",
    failTitle: "Not yet, but soon.",
    failBodyPrefix: "Because",
    failBodySuffix: "Join the waitlist and we will tell you when your situation is covered.",
    reasons: {
      residence: "your country of residence is not in the first launch wave",
      client: "your client's country is not in the first launch wave",
      employee: "the service is for independent consultants, not employees looking for a payroll",
      volume: "engagements below the launch minimum go to the waitlist for the software-only plan",
    },
    emailPlaceholder: "you@example.com",
    emailLabel: "Email address",
    submitPass: "Send me the onboarding pack",
    submitFail: "Join the waitlist",
    thanks: "Thanks. You will hear from us.",
    error: "That did not go through. Please email contact@akemis.com.",
  },
  categories: [
    "Enterprise applications and ERP",
    "CRM and customer platforms",
    "Data, business intelligence and analytics",
    "Software development",
    "AI and automation",
    "Cloud and infrastructure",
    "Project and programme management",
    "Finance and business transformation",
    "HR and payroll systems",
    "Training and change management",
  ],
  footer: {
    blurb:
      "Contracting, invoicing and payment for independent consultants, and AI-native software for small businesses. Hong Kong, since 2003.",
    consultants: "Consultants",
    businesses: "Businesses",
    company: "Company",
    links: {
      how: "How it works",
      included: "What is included",
      countries: "Countries and currencies",
      eligibility: "Check eligibility",
      build: "Akemis Build",
      offers: "Offers",
      proof: "What we have built",
      call: "Book a discovery call",
      about: "About",
      contact: "Contact",
      privacy: "Privacy",
      creators: "Creator Analytics legal",
    },
    rights: "All rights reserved.",
    since: "Hong Kong · est. 2003",
  },
  privacy: {
    updated: "Last updated 5 September 2026. Applies to this website only.",
    sections: [
      {
        h: "Who we are",
        p: "This website is operated by Akemis Limited, a company incorporated in Hong Kong. For anything about your personal data, write to contact@akemis.com.",
      },
      {
        h: "What this site collects",
        p: "Only what you type into a form: your name, email address, company, the topic you choose, your message, and, for the eligibility check, the five answers you selected. The eligibility questions are answered in your browser; nothing is sent to us until you enter your email address and press the button. The site sets no advertising or tracking cookies. It stores your language choice in a cookie so you are not sent to the wrong language on your next visit.",
      },
      {
        h: "What we do with it",
        p: "Form submissions are delivered to our mailbox by an email delivery provider and used to answer you. If you asked for the consultant onboarding pack or joined the waitlist, we use your email address to send that pack or to tell you when your situation is covered. We do not sell or share your details with anyone for their own purposes.",
      },
      {
        h: "How long we keep it",
        p: "Contact messages for up to two years after our last exchange. Waitlist entries until you ask to be removed or the waitlist closes. Reply to any email from us to be removed.",
      },
      {
        h: "Your rights",
        p: "You may ask what we hold about you, ask for it to be corrected or deleted, and object to further contact, under the Hong Kong Personal Data (Privacy) Ordinance and, where it applies to you, the GDPR. Write to the address above; we answer within one month.",
      },
      {
        h: "Other products",
        p: "The consultant portal and the Creator Analytics application have their own terms and privacy policies, provided when you sign up. The Creator Analytics documents are published here:",
      },
    ],
    creatorsLink: "Creator Analytics privacy policy",
  },
};

export default en;
