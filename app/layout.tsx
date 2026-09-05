import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./lib/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Akemis",
  description:
    "Contracting, invoicing and payment for independent consultants, and AI-native software development for small businesses. Hong Kong, since 2003.",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Akemis Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  email: "contact@akemis.com",
  foundingDate: "2003",
  address: { "@type": "PostalAddress", addressLocality: "Hong Kong", addressCountry: "HK" },
  contactPoint: { "@type": "ContactPoint", contactType: "sales", email: "contact@akemis.com" },
};

/**
 * The html lang attribute is set per request by the [lang] segment; this root
 * layout only carries the fonts and the organisation data shared by every page.
 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
