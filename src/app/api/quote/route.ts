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
    const { fullName, email, phone, campaignType, startDate, duration, budget, targetAreas } = body;

    if (!fullName || !email || !phone) {
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

    // Create email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #d18d00; color: #000; padding: 20px; text-align: center; }
            .content { background: #fff; padding: 30px; border: 1px solid #ddd; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #9a711a; margin-bottom: 5px; }
            .value { color: #000; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Quote Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Full Name:</div>
                <div class="value">${fullName}</div>
              </div>

              ${body.businessName ? `
                <div class="field">
                  <div class="label">Business Name:</div>
                  <div class="value">${body.businessName}</div>
                </div>
              ` : ''}

              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>

              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>

              <div class="field">
                <div class="label">Campaign Type:</div>
                <div class="value">${campaignType || 'Not specified'}</div>
              </div>

              <div class="field">
                <div class="label">Desired Start Date:</div>
                <div class="value">${startDate || 'Not specified'}</div>
              </div>

              <div class="field">
                <div class="label">Campaign Duration:</div>
                <div class="value">${duration || 'Not specified'}</div>
              </div>

              <div class="field">
                <div class="label">Budget Range:</div>
                <div class="value">${budget || 'Not specified'}</div>
              </div>

              <div class="field">
                <div class="label">Target Areas / Events:</div>
                <div class="value">${targetAreas || 'Not specified'}</div>
              </div>

              <div class="field">
                <div class="label">Creative Needs:</div>
                <div class="value">${body.creativeNeeds || 'Not specified'}</div>
              </div>

              ${body.comments ? `
                <div class="field">
                  <div class="label">Additional Comments:</div>
                  <div class="value">${body.comments}</div>
                </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>BrightPath Billboards - Quote Request System</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'brightpathbillboards@gmail.com',
      replyTo: email,
      subject: `Quote Request — ${fullName} (${body.businessName || 'No Business'})`,
      html: emailHtml,
    });

    return NextResponse.json(
      { success: true, message: 'Quote request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending quote request:', error);
    return NextResponse.json(
      { success: false, message: 'There was an issue sending your request. Please try again.' },
      { status: 500 }
    );
  }
}
