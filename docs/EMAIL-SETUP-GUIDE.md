# Email Setup Guide for Contact Form

Your contact form is now configured to send emails using **Resend**, a modern email API service. Follow these steps to complete the setup:

## Step 1: Install Dependencies

Run this command to install the Resend package:

```bash
npm install
```

## Step 2: Sign Up for Resend (FREE)

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (no credit card required)
3. The free tier includes:
   - 100 emails/day
   - 3,000 emails/month
   - Perfect for small to medium businesses

## Step 3: Get Your API Key

1. After signing up, go to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Cigar Shop Production")
4. Copy the API key (it starts with `re_`)

## Step 4: Configure Environment Variables

1. Create a file named `.env.local` in your project root (next to package.json)
2. Copy the contents from `.env.local.example` and fill in your values:

```env
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your-actual-email@gmail.com
```

### Important Notes:

- **RESEND_API_KEY**: Your API key from Resend
- **RESEND_FROM_EMAIL**: For testing, use `onboarding@resend.dev`. For production, you'll need to verify your own domain.
- **RESEND_TO_EMAIL**: The email address where you want to receive contact form submissions (e.g., cigarandsmokeshop@gmail.com)

## Step 5: Test the Setup

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Visit your contact page at `http://localhost:3000/contact`

3. Fill out and submit the form

4. Check your email (the address you set in `RESEND_TO_EMAIL`)

## Step 6: Production Deployment

When deploying to production (Koyeb, Vercel, etc.), add these environment variables in your hosting platform:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_TO_EMAIL`

### For Koyeb:
1. Go to your service settings
2. Navigate to "Environment Variables"
3. Add each variable

## Optional: Use Your Own Domain

For a more professional setup with your own domain:

1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., cigarandsmokeshop.com)
3. Add the required DNS records
4. Once verified, update `RESEND_FROM_EMAIL` to something like:
   - `contact@yourdomain.com`
   - `noreply@yourdomain.com`

## Features Included

✅ Rate limiting (5 requests per minute per IP)
✅ Spam protection with honeypot
✅ Email validation
✅ Professional HTML email template
✅ Reply-to set to customer's email for easy responses
✅ Error handling and user feedback

## Troubleshooting

### "Failed to send email" error:
- Check that your API key is correct in `.env.local`
- Verify your `.env.local` file is in the project root
- Restart your development server after adding environment variables

### Not receiving emails:
- Check your spam/junk folder
- Verify `RESEND_TO_EMAIL` is correct
- Check Resend dashboard logs at https://resend.com/emails

### Daily limit reached:
- Free tier is 100 emails/day
- Upgrade your Resend plan if needed
- Check for form spam/abuse

## Support

- Resend Documentation: https://resend.com/docs
- Resend Support: support@resend.com

## Alternative Email Services

If you prefer a different service, you can modify `app/api/contact/route.ts` to use:
- **SendGrid**: Popular choice, 100 emails/day free
- **AWS SES**: Very cheap, requires AWS account
- **Mailgun**: 5,000 emails/month free for first 3 months
- **Nodemailer**: Use your own SMTP server

The current implementation is designed to be easily swappable if needed.

