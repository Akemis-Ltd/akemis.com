import type { Locale } from "../i18n/config";

export const SITE_URL = "https://akemis.com";
export const CONTACT_EMAIL = "contact@akemis.com";

/** Currencies the ledger already invoices and pays in. */
export const CURRENCIES = ["EUR", "USD", "GBP", "AED", "MAD", "TND", "XAF", "XOF"];

/**
 * Wave 1 launch scope, by ISO country code. The client's country decides the
 * rules on the receivable; the consultant's country decides them on the
 * payable. Kept here so the eligibility check and the marketing copy agree.
 */
export const WAVE1_CLIENT_COUNTRIES = [
  "HK",
  "SG",
  "AE",
  "GB",
  "CH",
  "FR",
  "BE",
  "NL",
  "DE",
  "ES",
  "IT",
  "PT",
  "LU",
  "US",
  "CA",
] as const;

/** Countries a consultant may live in, beyond the client list above. */
export const WAVE1_CONSULTANT_EXTRA = ["MA", "TN"] as const;

export const WAVE1_CONSULTANT_COUNTRIES = [...WAVE1_CLIENT_COUNTRIES, ...WAVE1_CONSULTANT_EXTRA];

type CountryCode = (typeof WAVE1_CONSULTANT_COUNTRIES)[number];

const COUNTRY_NAMES: Record<Locale, Record<CountryCode, string>> = {
  en: {
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
    MA: "Morocco",
    TN: "Tunisia",
  },
  fr: {
    HK: "Hong Kong",
    SG: "Singapour",
    AE: "Émirats arabes unis",
    GB: "Royaume-Uni",
    CH: "Suisse",
    FR: "France",
    BE: "Belgique",
    NL: "Pays-Bas",
    DE: "Allemagne",
    ES: "Espagne",
    IT: "Italie",
    PT: "Portugal",
    LU: "Luxembourg",
    US: "États-Unis",
    CA: "Canada",
    MA: "Maroc",
    TN: "Tunisie",
  },
  es: {
    HK: "Hong Kong",
    SG: "Singapur",
    AE: "Emiratos Árabes Unidos",
    GB: "Reino Unido",
    CH: "Suiza",
    FR: "Francia",
    BE: "Bélgica",
    NL: "Países Bajos",
    DE: "Alemania",
    ES: "España",
    IT: "Italia",
    PT: "Portugal",
    LU: "Luxemburgo",
    US: "Estados Unidos",
    CA: "Canadá",
    MA: "Marruecos",
    TN: "Túnez",
  },
};

export function countryName(locale: Locale, code: string): string {
  return COUNTRY_NAMES[locale][code as CountryCode] ?? code;
}

/** Country codes with their localised names, sorted for display. */
export function countryList(locale: Locale, codes: readonly string[]): { code: string; name: string }[] {
  return codes
    .map((code) => ({ code, name: countryName(locale, code) }))
    .sort((a, b) => a.name.localeCompare(b.name, locale));
}
