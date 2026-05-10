import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Akemis (HK) Limited collects, uses, and protects personal data in connection with the Akemis Creator Analytics application.",
};

export default function PrivacyPolicy() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12 border-b border-slate-200 pb-8">
        <p className="text-xs text-[#CD2653] font-semibold tracking-widest uppercase">
          Akemis Creator Analytics
        </p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold text-[#003366]">
          Privacy Policy
        </h1>
        <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-500">
          <div>
            <dt className="inline font-semibold text-slate-700">
              Effective date:{" "}
            </dt>
            <dd className="inline">[TO BE FILLED ON PUBLICATION]</dd>
          </div>
          <div>
            <dt className="inline font-semibold text-slate-700">
              Last updated:{" "}
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
        <Section title="1. Who we are">
          <p>
            This Privacy Policy describes how{" "}
            <strong>Akemis (HK) Limited</strong> (&ldquo;Akemis&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, and protects
            personal data in connection with the{" "}
            <em>Akemis Creator Analytics</em> application (the
            &ldquo;Service&rdquo;).
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-4">
            <li>
              <strong>Data controller:</strong> Akemis (HK) Limited,
              [Registered office address, Hong Kong]
            </li>
            <li>
              <strong>Contact for privacy enquiries:</strong>{" "}
              <a
                className="text-[#CD2653] hover:underline"
                href="mailto:invoicing@akemis.com"
              >
                invoicing@akemis.com
              </a>
            </li>
            <li>
              <strong>EU Representative (GDPR Article 27):</strong> [To be
              appointed if/when EU-resident data subjects are processed —
              e.g.&nbsp;a service such as EDPO, Prighter, or VeraSafe]
            </li>
          </ul>
        </Section>

        <Section title="2. What the Service does">
          <p>
            The Service is an internal analytics tool that helps a small number
            of authorised content creators understand the performance of their
            TikTok videos and the resulting commercial impact of links they
            include in those videos. The Service is not offered to the general
            public, does not sell data, and does not deliver advertising.
          </p>
        </Section>

        <Section title="3. Personal data we collect">
          <p>We process the following categories of personal data:</p>

          <SubHeading>
            From content creators who connect their TikTok account to the
            Service:
          </SubHeading>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Public profile information (display name, handle, avatar, bio,
              follower count, total likes)
            </li>
            <li>
              List of their published videos and associated metadata (caption,
              hashtags, sound, posting time)
            </li>
            <li>
              Per-video engagement metrics (views, likes, comments, shares,
              saves)
            </li>
            <li>
              Authentication tokens (OAuth access and refresh tokens issued by
              TikTok)
            </li>
            <li>
              Video files downloaded from TikTok for content analysis
              (transcripts, on-screen text, scene description)
            </li>
          </ul>

          <SubHeading>
            From viewers and customers who interact with creator-supplied links:
          </SubHeading>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Click events on shortened URLs (timestamp, country derived from
              IP, referring page, device type)
            </li>
            <li>
              Pseudonymised order data forwarded by partner platforms (e.g.
              Litbuy) — typically: pseudonymised customer ID, supplier ID,
              order amount, order timestamp, referring video identifier
            </li>
            <li>
              We do <strong>not</strong> collect names, email addresses, postal
              addresses, or payment details of viewers or customers.
            </li>
          </ul>

          <SubHeading>From operational use:</SubHeading>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Diagnostic logs from the analytics pipeline (error messages, sync
              timestamps)
            </li>
          </ul>
        </Section>

        <Section title="4. Why we process this data (purposes and legal bases)">
          <Table
            headers={["Purpose", "Legal basis (GDPR)"]}
            rows={[
              [
                "Reading creators' TikTok metrics via OAuth",
                "Consent (Art. 6(1)(a)) — granted via TikTok OAuth screen",
              ],
              [
                "Downloading and analysing creator videos for performance insights",
                "Consent (Art. 6(1)(a)) and contract (Art. 6(1)(b)) — necessary to provide the Service",
              ],
              [
                "Counting and attributing link clicks at video level",
                "Legitimate interest (Art. 6(1)(f)) — measuring marketing effectiveness; minimal data, no individual profiling",
              ],
              [
                "Calculating commissions based on conversions reported by partners",
                "Contract (Art. 6(1)(b)) and legitimate interest (Art. 6(1)(f))",
              ],
              [
                "Security, troubleshooting, fraud prevention",
                "Legitimate interest (Art. 6(1)(f))",
              ],
            ]}
          />
          <p className="mt-4">
            Under Hong Kong&rsquo;s PDPO, the corresponding lawful basis is
            consent (creators) and legitimate purpose directly related to a
            function or activity of Akemis (operational data).
          </p>
        </Section>

        <Section title="5. Who we share data with">
          <p>
            We share personal data only with the following categories of
            recipients, each acting as a processor under a written agreement:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-4">
            <li>
              <strong>TikTok / ByteDance</strong> (source of creator and video
              data — pursuant to the TikTok API Terms of Service)
            </li>
            <li>
              <strong>Cloud infrastructure providers:</strong> [Supabase /
              Cloudflare / Cloudinary — list the ones actually used]
            </li>
            <li>
              <strong>Link-tracking provider:</strong> [Bitly, if used]
            </li>
            <li>
              <strong>AI processing providers</strong> for transcription and
              content analysis: [OpenAI (Whisper), Google (Gemini), and/or
              Anthropic (Claude) — list the ones actually used]
            </li>
            <li>
              <strong>Partner platforms</strong> (e.g. Litbuy) for the limited
              purpose of receiving pseudonymised conversion data
            </li>
          </ul>
          <p className="mt-4">
            We do not sell personal data and do not share it with advertisers.
          </p>
        </Section>

        <Section title="6. International transfers">
          <p>
            Personal data may be processed outside Hong Kong and outside the
            European Economic Area, including in the United States and other
            jurisdictions where our processors operate. Where applicable:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-4">
            <li>
              Transfers from the EEA are governed by the{" "}
              <strong>European Commission&rsquo;s Standard Contractual Clauses</strong>{" "}
              (SCCs).
            </li>
            <li>
              Transfers from Hong Kong follow the cross-border transfer guidance
              issued by the PCPD (Office of the Privacy Commissioner for
              Personal Data).
            </li>
          </ul>
        </Section>

        <Section title="7. Retention">
          <Table
            headers={["Data category", "Retention"]}
            rows={[
              [
                "Creator OAuth tokens",
                "Until creator revokes access or relationship ends, plus 30 days",
              ],
              ["Video metrics and analysis", "24 months after collection"],
              ["Click and order events", "24 months after collection"],
              [
                "Aggregated/anonymised analytics",
                "Indefinite (no longer personal data)",
              ],
              ["Operational logs", "90 days"],
            ]}
          />
        </Section>

        <Section title="8. Your rights">
          <p>Depending on the jurisdiction, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-4">
            <li>Access the personal data we hold about you</li>
            <li>Have inaccurate data corrected</li>
            <li>Have your data erased (&ldquo;right to be forgotten&rdquo;)</li>
            <li>Object to or restrict certain processing</li>
            <li>Receive your data in a portable format</li>
            <li>
              Withdraw consent at any time (without affecting prior processing)
            </li>
            <li>
              Lodge a complaint with a supervisory authority — in the EEA, your
              local DPA; in Hong Kong, the PCPD (
              <a
                className="text-[#CD2653] hover:underline"
                href="https://www.pcpd.org.hk"
                target="_blank"
                rel="noopener noreferrer"
              >
                pcpd.org.hk
              </a>
              )
            </li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, email{" "}
            <a
              className="text-[#CD2653] hover:underline"
              href="mailto:invoicing@akemis.com"
            >
              invoicing@akemis.com
            </a>{" "}
            with the subject line &ldquo;Privacy Request&rdquo;. We respond
            within 30 days.
          </p>
          <p className="mt-4">
            Creators can also revoke the Service&rsquo;s access to their TikTok
            account at any time directly from TikTok settings → Manage app
            permissions.
          </p>
        </Section>

        <Section title="9. Security">
          <p>
            We protect personal data with: encryption in transit (TLS 1.2+),
            encryption at rest, access controls limited to authorised personnel,
            OAuth tokens stored in a secrets vault (not in code or logs), audit
            logging of administrative actions.
          </p>
        </Section>

        <Section title="10. Children">
          <p>
            The Service is not directed at children. We do not knowingly process
            personal data of anyone under 16.
          </p>
        </Section>

        <Section title="11. Changes to this policy">
          <p>
            We will update this page when our processing changes. Material
            changes will be notified to connected creators by email at least 14
            days before taking effect.
          </p>
        </Section>

        <Section title="12. Contact">
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-[#003366] mt-6 mb-2">
      {children}
    </h3>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-md border border-slate-200">
      <table className="w-full text-sm">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left py-3 px-4 font-semibold text-[#003366] border-b border-slate-200"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i < rows.length - 1 ? "border-b border-slate-100" : ""}
            >
              {row.map((cell, j) => (
                <td key={j} className="py-3 px-4 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
