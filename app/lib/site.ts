export const SITE_URL = "https://akemis.com";
export const CONTACT_EMAIL = "contact@akemis.com";

/** Currencies the ledger already invoices and pays in. */
export const CURRENCIES = ["EUR", "USD", "GBP", "AED", "MAD", "TND", "XAF", "XOF"];

/**
 * Wave 1 launch scope. Client countries decide invoicing rules on the
 * receivable; consultant countries decide payout rules on the payable.
 * Kept in one place so the eligibility check and the marketing copy agree.
 */
export const WAVE1_CLIENT_COUNTRIES: Record<string, string> = {
  HK: "Hong Kong",
  SG: "Singapore",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  CH: "Switzerland",
  FR: "France",
  BE: "Belgium",
  NL: "Netherlands",
  DE: "Germany",
  ES: "Spain",
  IT: "Italy",
  PT: "Portugal",
  LU: "Luxembourg",
  US: "United States",
  CA: "Canada",
};

export const WAVE1_CONSULTANT_COUNTRIES: Record<string, string> = {
  ...WAVE1_CLIENT_COUNTRIES,
  MA: "Morocco",
  TN: "Tunisia",
};

export const SERVICE_CATEGORIES = [
  "Enterprise applications and ERP",
  "CRM and customer platforms",
  "Data, BI and analytics",
  "Software development",
  "AI and automation",
  "Cloud and infrastructure",
  "Project and programme management",
  "Finance and business transformation",
  "HR and payroll systems",
  "Training and change management",
];

export const NAV = [
  { href: "/consultants", label: "For consultants" },
  { href: "/build", label: "Build" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
