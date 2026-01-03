import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Rate limiting store (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimit.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, email, subject, message, honeypot } = body;

    // Honeypot check for spam bots
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the submission for debugging
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Check if email is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('⚠️  RESEND_API_KEY is not configured. Email will not be sent.');
      console.log('📧 Contact form data (not sent via email):');
      console.log('   From:', `${firstName} ${lastName} <${email}>`);
      console.log('   Subject:', subject);
      console.log('   Message:', message);
      console.log('\n👉 To enable email sending, add RESEND_API_KEY to your .env.local file');
      
      return NextResponse.json(
        { 
          error: 'Email service not configured. Your message was logged but not sent. Please call us directly.' 
        },
        { status: 503 }
      );
    }

    // Send email using Resend
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: process.env.RESEND_TO_EMAIL || 'nealbhalodia@gmail.com',
        replyTo: email, // Customer's email for easy reply
        subject: `Contact Form: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>From:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> 
                <a href="mailto:${email}">${email}</a>
              </p>
              <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Message:</strong></p>
              <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
              <p>Sent from your website contact form on ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      });
      
      console.log('✅ Email sent successfully to:', process.env.RESEND_TO_EMAIL);
    } catch (emailError: any) {
      console.error('❌ Failed to send email:', emailError);
      return NextResponse.json(
        { error: emailError?.message || 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

