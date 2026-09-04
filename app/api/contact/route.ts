import { createContactHandler } from '@/lib/contact-handler';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  return createContactHandler({
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.CONTACT_FROM_EMAIL,
  })(request);
}
