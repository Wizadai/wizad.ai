# EmailJS Setup Guide for Wizad.ai Feedback Form

## Overview
This guide will walk you through setting up EmailJS to receive feedback form submissions directly to your email.

## Prerequisites
- EmailJS account (you've already created one ✅)
- Access to your Wizad.ai project

## Step-by-Step Setup

### Step 1: Get Your EmailJS Service ID

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Log in to your account
3. Navigate to **Email Services** in the left sidebar
4. If you haven't added a service yet:
   - Click **Add New Service**
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the connection steps for your provider
   - Click **Create Service**
5. Copy your **Service ID** (it looks like: `service_xxxxxxx`)

### Step 2: Create an Email Template

1. In the EmailJS Dashboard, go to **Email Templates**
2. Click **Create New Template**
3. **Set the Subject Line:**
   ```
   New Callback Request from {{from_name}}
   ```
4. **Set the Email Body** (switch to HTML mode if available, or use the rich text editor):
   ```html
   <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
     <div>A message by {{from_name}} has been received. Kindly respond at your earliest convenience.</div>
     <div
       style="
         margin-top: 20px;
         padding: 15px 0;
         border-width: 1px 0;
         border-style: dashed;
         border-color: lightgrey;
       "
     >
       <table role="presentation">
         <tr>
           <td style="vertical-align: top">
             <div
               style="
                 padding: 6px 10px;
                 margin: 0 10px;
                 background-color: aliceblue;
                 border-radius: 5px;
                 font-size: 26px;
               "
               role="img"
             >
               👤
             </div>
           </td>
           <td style="vertical-align: top">
             <div style="color: #2c3e50; font-size: 16px">
               <strong>{{from_name}}</strong>
             </div>
             <div style="color: #7f8c8d; font-size: 13px; margin-top: 4px">
               Email: {{from_email}}
             </div>
             <div style="color: #7f8c8d; font-size: 13px; margin-top: 2px">
               Phone: {{phone}}
             </div>
           </td>
         </tr>
       </table>
     </div>
     <div style="margin-top: 20px; color: #95a5a6; font-size: 11px">
       This is an automated message from Wizad.ai website contact form.
     </div>
   </div>
   ```
5. **Important**: Make sure these variable names match exactly:
   - `{{from_name}}` - Customer's name
   - `{{from_email}}` - Customer's email
   - `{{phone}}` - Customer's phone number
6. Click **Save**
7. Copy your **Template ID** (it looks like: `template_xxxxxxx`)

### Step 3: Get Your Public Key

1. In the EmailJS Dashboard, click on your account name (top right)
2. Select **Account** from the dropdown
3. Go to the **API Keys** tab
4. Copy your **Public Key** (it looks like a long string)

### Step 4: Update Your Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```
3. Save the file

### Step 5: Test Your Setup

1. Restart your development server:
   ```bash
   npm run dev
   ```
2. Navigate to your website's homepage
3. Scroll down to the "Request a call back" form
4. Fill in the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: +1234567890
5. Click "Request a call back"
6. You should see a success message
7. Check your email inbox for the submission

## Template Variables Reference

The form sends these fields to EmailJS:
- `from_name` - The customer's full name
- `from_email` - The customer's email address
- `phone` - The customer's phone number

## Troubleshooting

### Issue: Emails not being received
- **Check your spam folder** - EmailJS emails sometimes go to spam
- **Verify your service is connected** - Go to Email Services and ensure status is "Connected"
- **Check your template variables** - Ensure they match: `{{from_name}}`, `{{from_email}}`, `{{phone}}`
- **Verify your Public Key** - Make sure you copied the correct key from Account > API Keys

### Issue: "Failed to send your request" error
- **Check browser console** for detailed error messages (F12 > Console tab)
- **Verify environment variables** - Make sure all three variables are set correctly
- **Restart dev server** - Environment variable changes require a restart
- **Check EmailJS quota** - Free accounts have 200 emails/month limit

### Issue: Template variables showing as {{variable}}
- **Update your template** - Go to Email Templates and ensure variables are correctly placed
- **Check spelling** - Variable names are case-sensitive and must match exactly

## Security Notes

- The `.env.local` file is already in `.gitignore` - don't commit it to version control
- Public keys are safe to use in client-side code (that's why they're "public")
- For production, add these same variables to your hosting platform's environment variables:
  - **Vercel**: Project Settings > Environment Variables
  - **Netlify**: Site Settings > Environment Variables
  - **Other hosts**: Check their documentation for environment variable setup

## Email Service Recommendations

For best deliverability, we recommend:
1. **Gmail** - Easy setup, reliable
2. **Outlook** - Good for business accounts
3. **SendGrid** - More advanced, better for high volume

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)
- Check the browser console for error messages (F12 > Console)

## What Changed in Your Code

The feedback form now:
- ✅ Uses EmailJS instead of Google App Script webhook
- ✅ Shows loading state while submitting ("Sending..." button text)
- ✅ Displays success message after successful submission
- ✅ Shows error message if submission fails
- ✅ Has form validation (all fields required)
- ✅ Auto-clears form after successful submission
- ✅ Messages auto-disappear after 5 seconds

---

**Ready to go!** Once you've completed these steps, your feedback form will send emails directly to your inbox.
