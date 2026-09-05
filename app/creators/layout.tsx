import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: "Akemis Creator Analytics",
    template: "%s — Akemis Creator Analytics",
  },
  description:
    "Privacy Policy and Terms of Service for Akemis Creator Analytics — an internal application used by authorised TikTok content creators in partnership with Akemis (HK) Limited.",
  robots: { index: false, follow: false },
};

export default function CreatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo.png"
                alt="Akemis"
                width={180}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <div className="flex space-x-6 items-center text-sm">
              <Link
                href="/creators/privacy"
                className="text-slate-600 hover:text-[#003366] font-medium"
              >
                Privacy
              </Link>
              <Link
                href="/creators/terms"
                className="text-slate-600 hover:text-[#003366] font-medium"
              >
                Terms
              </Link>
              <Link
                href="/"
                className="text-[#003366] hover:underline font-medium"
              >
                ← akemis.com
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Akemis (HK) Limited. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
