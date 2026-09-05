import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import { CONTACT_EMAIL } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Akemis about contracting and invoicing as an independent consultant, hiring consultants, or building software for your business.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-crimson">Contact</p>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-navy">
            A person answers.
          </h1>
          <p className="mt-6 leading-relaxed text-ink-2">
            Within one working day, Hong Kong or Paris time. Tell us who you are and what you need;
            the form routes it to the right person.
          </p>
          <dl className="mt-8 grid gap-4 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-navy underline underline-offset-4">
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">Company</dt>
              <dd className="mt-1 text-ink-2">Akemis Limited, Hong Kong</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">Already a consultant with us?</dt>
              <dd className="mt-1 text-ink-2">Use the portal and your usual contact; it is faster than this form.</dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
