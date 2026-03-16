import type { Handler, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";

interface FormSubmissionPayload {
  payload: {
    form_name: string;
    data: Record<string, string>;
    created_at: string;
  };
}

const handler: Handler = async (event: HandlerEvent) => {
  try {
    const { payload } = JSON.parse(event.body || "{}") as FormSubmissionPayload;

    // Only process the "quote" form
    if (payload.form_name !== "quote") {
      return { statusCode: 200, body: "Ignored: not a quote form submission" };
    }

    const data = payload.data;

    // Skip if SMTP credentials are not configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error(
        "submission-created: SMTP credentials not configured. Set SMTP_USER and SMTP_PASS environment variables in Netlify dashboard."
      );
      return { statusCode: 200, body: "Skipped: SMTP not configured" };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fullName = data.fullName || "Unknown";
    const email = data.email || "";
    const phone = data.phone || "";
    const businessName = data.businessName || "";

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

              ${businessName ? `
                <div class="field">
                  <div class="label">Business Name:</div>
                  <div class="value">${businessName}</div>
                </div>
              ` : ""}

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
                <div class="value">${data.campaignType || "Not specified"}</div>
              </div>

              <div class="field">
                <div class="label">Desired Start Date:</div>
                <div class="value">${data.startDate || "Not specified"}</div>
              </div>

              <div class="field">
                <div class="label">Campaign Duration:</div>
                <div class="value">${data.duration || "Not specified"}</div>
              </div>

              <div class="field">
                <div class="label">Budget Range:</div>
                <div class="value">${data.budget || "Not specified"}</div>
              </div>

              <div class="field">
                <div class="label">Target Areas / Events:</div>
                <div class="value">${data.targetAreas || "Not specified"}</div>
              </div>

              <div class="field">
                <div class="label">Creative Needs:</div>
                <div class="value">${data.creativeNeeds || "Not specified"}</div>
              </div>

              ${data.comments ? `
                <div class="field">
                  <div class="label">Additional Comments:</div>
                  <div class="value">${data.comments}</div>
                </div>
              ` : ""}
            </div>
            <div class="footer">
              <p>BrightPath Billboards - Quote Request System</p>
              <p>Submitted: ${payload.created_at ? new Date(payload.created_at).toLocaleString() : new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "brightpathbillboards@gmail.com",
      replyTo: email || undefined,
      subject: `Quote Request — ${fullName} (${businessName || "No Business"})`,
      html: emailHtml,
    });

    console.log(`submission-created: Email sent for quote from ${fullName}`);

    return { statusCode: 200, body: "Email notification sent" };
  } catch (error) {
    console.error("submission-created: Error sending email:", error);
    return { statusCode: 500, body: "Error processing submission" };
  }
};

export { handler };
