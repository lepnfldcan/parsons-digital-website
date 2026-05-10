import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message, website } = body;

    // Honeypot — bots fill hidden fields, real users don't
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 200 || message.length > 3000) {
      return NextResponse.json(
        { error: 'Input exceeds maximum length.' },
        { status: 400 }
      );
    }

    const safeMessage = String(message)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'Parsons Digital <hello@parsonsdigital.com>',
      to: process.env.CONTACT_TO_EMAIL ?? 'liam@parsonsdigital.com',
      replyTo: email,
      subject: `New inquiry — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f4f4f5;margin:0;padding:32px 16px;">
            <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
              <div style="background:#1e2530;padding:28px 32px;border-bottom:3px solid #0891b2;">
                <p style="color:#0891b2;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 6px;">Parsons Digital</p>
                <h1 style="color:#f4f3f0;font-size:20px;font-weight:700;margin:0;">New inquiry from ${name}</h1>
              </div>
              <div style="padding:28px 32px;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:110px;color:#6b7280;font-size:13px;font-weight:600;">Name</td>
                    <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#111827;font-size:14px;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;font-size:13px;font-weight:600;">Email</td>
                    <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;"><a href="mailto:${email}" style="color:#0891b2;text-decoration:none;">${email}</a></td>
                  </tr>
                  ${service ? `
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;font-size:13px;font-weight:600;">Service</td>
                    <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#111827;font-size:14px;">${service}</td>
                  </tr>` : ''}
                </table>
                <div style="margin-top:20px;">
                  <p style="color:#6b7280;font-size:13px;font-weight:600;margin:0 0 8px;">Message</p>
                  <p style="color:#111827;font-size:14px;line-height:1.65;margin:0;white-space:pre-wrap;background:#f9fafb;padding:16px;border-radius:8px;border:1px solid #f0f0f0;">${safeMessage}</p>
                </div>
                <div style="margin-top:24px;padding-top:20px;border-top:1px solid #f0f0f0;">
                  <a href="mailto:${email}" style="display:inline-block;background:#0891b2;color:white;font-size:13px;font-weight:600;padding:10px 20px;border-radius:6px;text-decoration:none;">Reply to ${name}</a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try emailing directly.' },
      { status: 500 }
    );
  }
}
