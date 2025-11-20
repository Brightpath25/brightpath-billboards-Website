# Quote Request Page - Setup Guide

## Overview

A professional quote request page has been added to the BrightPath Billboards website at `/quote`. When users click the "Get a Quote" button on the homepage, it opens this new page in a new browser tab.

## Features

✅ **Professional Form**: Collects comprehensive campaign details
✅ **Email Integration**: Sends quote requests to brightpathbillboards@gmail.com
✅ **Spam Protection**: Hidden honeypot field prevents bot submissions
✅ **Success/Error Messages**: Clear user feedback after form submission
✅ **Brand Styling**: Uses BrightPath colors (Orange #d18d00, Black #000000, Brown #9a711a)
✅ **Mobile Responsive**: Works perfectly on desktop, tablet, and mobile devices

## How to Access

1. Visit the homepage
2. Click the "Get a Quote" button in the hero section
3. The quote page will open in a new browser tab at `/quote`

## Form Fields

### Contact Information (Required)
- Full Name *
- Business Name (optional)
- Email *
- Phone *

### Campaign Details
- Campaign Type (dropdown: Business Advertising, Event Promotion, Political Campaign, Community Outreach, Other)
- Desired Start Date (date picker)
- Campaign Duration (dropdown: 1-2 days, 1 week, 2-4 weeks, Ongoing)
- Budget Range (dropdown: $500-$1,000, $1,000-$3,000, $3,000-$10,000, $10K+)
- Target Areas / Events (text input)
- Creative Needs (dropdown: I have ready-to-go visuals, I need design assistance)
- Additional Comments (textarea)

## Email Configuration

The quote form uses Nodemailer to send emails via Gmail SMTP. To enable this functionality in production:

### Step 1: Create a Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable **2-Step Verification** if not already enabled
3. Go to https://myaccount.google.com/apppasswords
4. Select "Mail" and your device
5. Click "Generate"
6. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

### Step 2: Update Environment Variables

Create or update `.env.local` file in the project root:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=brightpathbillboards@gmail.com
SMTP_PASS=your_actual_app_password_here  # Replace with the app password from Step 1
```

⚠️ **IMPORTANT**: Never commit `.env.local` to version control. It's already in `.gitignore`.

### Step 3: Deploy with Environment Variables

When deploying to Netlify or another platform, add these environment variables in your hosting dashboard:

**Netlify:**
1. Go to Site Settings → Environment Variables
2. Add each variable:
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `465`
   - `SMTP_USER` = `brightpathbillboards@gmail.com`
   - `SMTP_PASS` = `your_app_password`

## Testing the Form

### Local Testing

1. Make sure `.env.local` is configured with valid credentials
2. Run `bun run dev`
3. Navigate to `http://localhost:3000/quote`
4. Fill out the form and submit
5. Check your email inbox at brightpathbillboards@gmail.com

### Production Testing

1. Deploy the site with environment variables configured
2. Visit `/quote` on your live site
3. Submit a test quote request
4. Verify email delivery

## Email Format

When a quote is submitted, an email is sent to **brightpathbillboards@gmail.com** with:

**Subject:** `Quote Request — [Full Name] ([Business Name or 'No Business'])`

**Reply-To:** The submitter's email address (so you can reply directly)

**Body:** Formatted HTML email with all form field data clearly displayed

## Files Created/Modified

**New Files:**
- `src/app/quote/page.tsx` - Quote request page component
- `src/app/api/quote/route.ts` - API endpoint for handling form submissions
- `.env.local.example` - Environment variables template
- `.env.local` - Local environment variables (gitignored)

**Modified Files:**
- `src/app/page.tsx` - Updated "Get a Quote" button to link to /quote
- `next.config.js` - Removed static export to support API routes
- `netlify.toml` - Updated for dynamic Next.js deployment

## Troubleshooting

### Email Not Sending

1. **Check Environment Variables**: Ensure `.env.local` has correct SMTP credentials
2. **Verify App Password**: Make sure you're using an App Password, not your regular Gmail password
3. **Check Gmail Settings**: Ensure 2-Step Verification is enabled
4. **Review Logs**: Check the browser console and server logs for error messages

### Form Submission Errors

1. **Required Fields**: Name, Email, and Phone are required
2. **Email Validation**: Email must be in valid format (user@domain.com)
3. **Network Issues**: Ensure API route is accessible at `/api/quote`

### Spam Protection Triggered

If legitimate submissions are being blocked, check if the honeypot field `_hp` is being filled by browser autofill. This should be hidden and empty.

## Security Features

✅ **Honeypot Field**: Hidden field `_hp` catches bots
✅ **Server-Side Validation**: All inputs validated on backend
✅ **Email Validation**: Regex pattern matching for email format
✅ **Environment Variables**: Sensitive credentials stored securely
✅ **Rate Limiting**: Consider adding rate limiting in production

## Next Steps

1. ✅ Configure Gmail App Password
2. ✅ Test form submission locally
3. ✅ Deploy to production with environment variables
4. ✅ Test production form submission
5. ✅ Set up email notifications/alerts
6. ✅ Monitor quote submissions

## Support

For questions or issues, contact the development team or refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Nodemailer Documentation](https://nodemailer.com/)
- [Gmail App Passwords Help](https://support.google.com/accounts/answer/185833)
