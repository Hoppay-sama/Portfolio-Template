import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(20),
  honeypot: z.string().max(0).optional(), // Spam prevention
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: 'Invalid input', errors: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, company, subject, message } = result.data;

    // In production, you would send an email here using Resend, SendGrid, etc.
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@yourportfolio.com',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New Contact: ${subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || 'N/A'}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // For now, just log the message
    console.log('Contact form submission:', { name, email, company, subject, message });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
      id: `msg_${Date.now()}`,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
