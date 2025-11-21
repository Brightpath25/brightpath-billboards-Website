import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot spam protection
    if (body._hp) {
      return NextResponse.json(
        { success: false, message: 'Spam detected' },
        { status: 400 }
      );
    }

    // Validate required fields
    const { email, name, leadType } = body;

    if (!email || !name) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Determine lead magnet type
    const leadMagnets = {
      'pricing-guide': {
        title: '2024 Mobile Billboard Pricing Guide',
        description: 'Comprehensive pricing breakdown for all services'
      },
      'event-calendar': {
        title: '2024-2025 Coachella Valley Event Calendar',
        description: 'Major events and optimal advertising dates'
      },
      'roi-calculator': {
        title: 'Mobile LED ROI Calculator & Planning Template',
        description: 'Calculate your campaign ROI and plan your budget'
      }
    };

    const leadMagnet = leadMagnets[leadType as keyof typeof leadMagnets] || leadMagnets['pricing-guide'];

    // Email to business
    const businessEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #d18d00; color: #000; padding: 20px; text-align: center; }
            .content { background: #fff; padding: 30px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #9a711a; }
            .value { color: #000; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Lead Magnet Download</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>

              <div class="field">
                <div class="label">Downloaded:</div>
                <div class="value">${leadMagnet.title}</div>
              </div>

              <div class="field">
                <div class="label">Timestamp:</div>
                <div class="value">${new Date().toLocaleString()}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email to user (confirmation + download link)
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #A8741A 0%, #E3B04B 50%, #F7D382 100%); color: #000; padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #fff; padding: 40px 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .button { display: inline-block; background: #d18d00; color: #000; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
            h1 { margin: 0; font-size: 28px; }
            p { margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${name}!</h1>
            </div>
            <div class="content">
              <p>Your <strong>${leadMagnet.title}</strong> is ready for download.</p>

              <p>${leadMagnet.description}</p>

              <p style="margin-top: 30px;">We're excited to help you plan your mobile LED advertising campaign across the Coachella Valley!</p>

              <p><strong>What's Next?</strong></p>
              <ul>
                <li>Review the guide to understand pricing and options</li>
                <li>Identify your target audience and ideal locations</li>
                <li>Request a custom quote for your specific needs</li>
                <li>Our team will respond within 24 hours</li>
              </ul>

              <p style="text-align: center; margin-top: 30px;">
                <a href="https://brightpathbillboards.com/quote" class="button" style="color: #000;">Get a Custom Quote →</a>
              </p>

              <p style="margin-top: 30px; padding-top: 30px; border-top: 1px solid #ddd;">
                Have questions? Call us at <strong>(407) 686-8294</strong> or reply to this email.
              </p>

              <p><strong>BrightPath Billboards</strong><br>
              Your Voice in the Community<br>
              La Quinta, CA</p>
            </div>
            <div class="footer">
              <p>You're receiving this because you downloaded ${leadMagnet.title} from BrightPath Billboards.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send notification to business
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'brightpathbillboards@gmail.com',
      subject: `New Lead: ${name} - ${leadMagnet.title}`,
      html: businessEmailHtml,
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: `Your ${leadMagnet.title} from BrightPath Billboards`,
      html: userEmailHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Check your email for your download link.',
        leadMagnet: leadMagnet.title
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing lead magnet:', error);
    return NextResponse.json(
      { success: false, message: 'There was an issue processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
