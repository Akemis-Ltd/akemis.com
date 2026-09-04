# Contact email on Vercel

The EN/ES/FR contact form posts to `/api/contact`, a Vercel Node.js function.
The function sends plain-text email through the Resend HTTPS API. No client-side
secret or additional SDK is needed. Recipients are fixed to `contact@akemis.com`;
the visitor address is used only as Reply-To.

## Activation

1. Connect Resend to the existing **akemis-com** Vercel project using
   <https://vercel.com/marketplace/resend>. Create or use a Resend account.
2. Verify a sending domain in Resend using its provided DNS records. A dedicated
   sending subdomain is suitable; preserve existing inbound email MX records.
3. Set **Preview** environment variables in Vercel:
   - `RESEND_API_KEY`: a sending key for the verified domain.
   - `CONTACT_FROM_EMAIL`: a sender on that domain, e.g.
     `Akemis Website <website@mail.akemis.com>` **only after that domain is verified**.
4. Redeploy the preview. Send one clearly labelled test enquiry to
   `contact@akemis.com`. Confirm Resend's delivery event and receipt in the mailbox.
5. Before production release, configure the same variables for Production and
   rate limiting for POST `/api/contact` in Vercel Firewall. The origin check,
   size limits and honeypot are basic filtering, not a distributed rate limiter.

Without the two variables the endpoint returns 503; no email is sent. The form
keeps entered text and offers the direct email address. Provider errors return
502. A successful provider receipt means **accepted for sending**, not confirmed
inbox delivery; the UI deliberately describes only that state.

Requests are limited to 24 KB, fields are validated server-side, and repeated
submissions of unchanged form data reuse a provider idempotency key. Message
contents and provider credentials are not logged by this application.

## Verification

`node --experimental-strip-types --test tests/contact.test.mjs` covers malformed
input, origin restrictions, body limits, missing configuration, provider failure,
the fixed recipient and receipt handling. These tests use a mock transport and
do not demonstrate live delivery.

Run `npm run lint` and `npm run build` before deploying. Production domains and
settings remain unchanged while preview testing is underway.
