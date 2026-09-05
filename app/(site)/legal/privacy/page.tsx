import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Website privacy notice",
  description: "How akemis.com handles the personal data you send through its forms.",
  alternates: { canonical: "/legal/privacy" },
  robots: { index: false, follow: true },
};

const UPDATED = "2 September 2026";

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">Legal</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-navy">
        Website privacy notice
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated {UPDATED}. Applies to this website only.</p>

      <div className="prose-akemis mt-10 space-y-8 leading-relaxed text-ink-2">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Who we are</h2>
          <p className="mt-2">
            This website is operated by Akemis Limited, a company incorporated in Hong Kong. For
            anything about your personal data, write to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">What this site collects</h2>
          <p className="mt-2">
            Only what you type into a form: your name, email address, company, the topic you
            choose, your message, and, for the eligibility check, the five answers you selected.
            The eligibility questions are answered in your browser; nothing is sent to us until you
            enter your email address and press the button.
          </p>
          <p className="mt-2">
            The site sets no advertising or tracking cookies. If we enable privacy-preserving,
            aggregate page analytics, it will not identify you and this notice will say so.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">What we do with it</h2>
          <p className="mt-2">
            Form submissions are delivered to our mailbox by an email delivery provider and used to
            answer you. If you asked for the consultant onboarding pack or joined the waitlist, we
            use your email to send that pack or to tell you when your situation is covered. We do
            not sell or share your details with anyone for their own purposes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">How long we keep it</h2>
          <p className="mt-2">
            Contact messages for up to two years after our last exchange. Waitlist entries until you
            ask to be removed or the waitlist closes. Reply to any email from us to be removed.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Your rights</h2>
          <p className="mt-2">
            You may ask what we hold about you, ask for it to be corrected or deleted, and object to
            further contact, under the Hong Kong Personal Data (Privacy) Ordinance and, where it
            applies to you, the GDPR. Write to the address above; we answer within one month.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-ink">Other products</h2>
          <p className="mt-2">
            The consultant portal and the Creator Analytics application have their own terms and
            privacy policies, provided when you sign up. The Creator Analytics documents are{" "}
            <Link href="/creators/privacy" className="text-navy underline underline-offset-4">
              published here
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
