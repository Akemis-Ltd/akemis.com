import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://akemis.com";
const TITLE = "Akemis - Global Consulting Firm";
const DESCRIPTION =
  "Accelerate Your Growth with Global Consulting Expertise. We help businesses in Hong Kong and beyond optimize operations, integrate solutions, and scale efficiently.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Akemis",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/hong-kong-skyline.jpg",
        width: 1920,
        height: 1080,
        alt: "Hong Kong skyline — Akemis global consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hong-kong-skyline.jpg"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Akemis Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  email: "contact@akemis.com",
  foundingDate: "2003",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hong Kong",
    addressCountry: "HK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "contact@akemis.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
