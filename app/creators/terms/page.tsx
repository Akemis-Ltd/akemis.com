import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing access to and use of the Akemis Creator Analytics application provided by Akemis (HK) Limited.",
};

export default function TermsOfService() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12 border-b border-slate-200 pb-8">
        <p className="text-xs text-[#CD2653] font-semibold tracking-widest uppercase">
          Akemis Creator Analytics
        </p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold text-[#003366]">
          Terms of Service
        </h1>
        <dl className="mt-6 text-sm text-slate-500">
          <div>
            <dt className="inline font-semibold text-slate-700">
              Effective date:{" "}
            </dt>
            <dd className="inline">[TO BE FILLED ON PUBLICATION]</dd>
          </div>
        </dl>
        <div className="mt-6 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong>DRAFT</strong> — pending legal review before publication.
          Required by TikTok at developer-app registration.
        </div>
      </header>

      <div className="space-y-10 text-slate-700 leading-relaxed">
        <Section title="1. About these Terms">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern access to and
            use of the <em>Akemis Creator Analytics</em> application and
            related services (the &ldquo;Service&rdquo;) provided by{" "}
            <strong>Akemis (HK) Limited</strong> (&ldquo;Akemis&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;). By connecting your TikTok
            account to the Service, you (&ldquo;you&rdquo;,
            &ldquo;Creator&rdquo;) agree to these Terms.
          </p>
        </Section>

        <Section title="2. Eligibility and access">
          <p>
            The Service is offered on an invitation-only basis to a closed group
            of content creators with whom Akemis or its commercial partners have
            a marketing relationship. You may use the Service only if Akemis has
            granted you access. Creating an account or attempting access without
            an invitation is prohibited.
          </p>
        </Section>

        <Section title="3. Description of the Service">
          <p>
            The Service connects to your TikTok account via TikTok&rsquo;s
            official OAuth and Display API, retrieves performance metrics about
            videos you have published, and produces analytics, dashboards, and
            recommendations to help you understand and improve the commercial
            impact of your content. Analytics may include automated processing
            of video transcripts, on-screen text, and visual elements.
          </p>
        </Section>

        <Section title="4. Your TikTok account and content">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You retain all rights, title, and interest in your TikTok account,
              your videos, and any content you create.
            </li>
            <li>
              By authorising the Service through TikTok OAuth, you grant Akemis
              a limited, non-exclusive, revocable licence to access, process,
              and display the data described in our{" "}
              <a className="text-[#CD2653] hover:underline" href="/creators/privacy">
                Privacy Policy
              </a>
              , solely to provide the Service to you and to compute commission
              entitlements.
            </li>
            <li>
              You may revoke this access at any time from TikTok settings →
              Manage app permissions, or by emailing{" "}
              <a
                className="text-[#CD2653] hover:underline"
                href="mailto:invoicing@akemis.com"
              >
                invoicing@akemis.com
              </a>
              .
            </li>
          </ul>
        </Section>

        <Section title="5. Commission and partner platforms">
          <p>
            Where the Service tracks click-throughs to partner platforms (e.g.
            Litbuy) and computes commissions on resulting orders, the underlying
            commercial agreement is between you and the partner platform — not
            Akemis. Akemis provides the measurement and reporting layer. Akemis
            makes reasonable efforts to ensure attribution accuracy but does not
            guarantee it. Discrepancies should be raised within 30 days of the
            relevant reporting period.
          </p>
        </Section>

        <Section title="6. Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-4">
            <li>
              Use the Service in violation of TikTok&rsquo;s Terms of Service or
              Community Guidelines
            </li>
            <li>Misrepresent the source or authorship of content</li>
            <li>
              Attempt to access data of other Creators or any data not
              associated with your own account
            </li>
            <li>
              Reverse-engineer, decompile, or attempt to derive the source code
              of the Service
            </li>
            <li>Use the Service for any unlawful purpose</li>
          </ul>
        </Section>

        <Section title="7. Intellectual property">
          <p>
            The Service software, dashboards, models, and aggregated analytics
            outputs are the intellectual property of Akemis. You receive a
            non-exclusive, non-transferable right to use the outputs for your
            own commercial activity in connection with Akemis-affiliated
            partnerships.
          </p>
        </Section>

        <Section title="8. Disclaimers">
          <p>
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo;. Akemis disclaims all warranties to the maximum
            extent permitted by law, including warranties of merchantability,
            fitness for a particular purpose, and non-infringement. We do not
            guarantee uninterrupted access, error-free operation, or specific
            business outcomes from following analytics recommendations.
          </p>
        </Section>

        <Section title="9. Limitation of liability">
          <p>
            To the maximum extent permitted by law, Akemis&rsquo;s total
            liability arising out of or in connection with the Service is
            limited to HKD&nbsp;1,000 or the total fees paid by you to Akemis in
            the 12 months preceding the event giving rise to the claim,
            whichever is greater. Akemis is not liable for indirect, incidental,
            or consequential damages, including lost revenue or lost
            commissions.
          </p>
        </Section>

        <Section title="10. Termination">
          <p>
            Either party may terminate access to the Service at any time and for
            any reason. Upon termination, Akemis will cease processing your data
            and delete or anonymise stored data within the retention windows set
            out in the{" "}
            <a className="text-[#CD2653] hover:underline" href="/creators/privacy">
              Privacy Policy
            </a>
            .
          </p>
        </Section>

        <Section title="11. Changes">
          <p>
            We may update these Terms from time to time. Material changes will
            be communicated to connected Creators by email at least 14 days
            before taking effect. Continued use of the Service after that date
            constitutes acceptance.
          </p>
        </Section>

        <Section title="12. Governing law and disputes">
          <p>
            These Terms are governed by the laws of the{" "}
            <strong>Hong Kong Special Administrative Region</strong>. The courts
            of Hong Kong have exclusive jurisdiction, except that Akemis may
            seek injunctive relief in any competent court. Where applicable
            mandatory consumer-protection laws of your country of residence
            provide stronger rights, those rights are not affected.
          </p>
        </Section>

        <Section title="13. Contact">
          <address className="not-italic">
            Akemis (HK) Limited
            <br />
            [Registered office address]
            <br />
            Email:{" "}
            <a
              className="text-[#CD2653] hover:underline"
              href="mailto:invoicing@akemis.com"
            >
              invoicing@akemis.com
            </a>
          </address>
        </Section>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-[#003366] mb-4 scroll-mt-24">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
