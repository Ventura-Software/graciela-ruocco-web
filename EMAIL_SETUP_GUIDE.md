# 📧 Email Setup Guide - Contact Form

The contact form is now fully integrated with **Resend** for email delivery. Follow these steps to get it working.

---

## 🚀 Quick Start

### Step 1: Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Click "Sign Up" (free plan includes 100 emails/day, 3,000/month)
3. Verify your email address

### Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Go to **API Keys** section
3. Click **"Create API Key"**
4. Give it a name (e.g., "Graciela Ruocco Web")
5. Select permissions: **"Sending access"**
6. Copy the API key (starts with `re_...`)

### Step 3: Configure Environment Variables

1. Open the file `.env.local` in the project root
2. Replace `your_resend_api_key_here` with your actual API key:

```bash
RESEND_API_KEY=re_abc123def456...
CONTACT_EMAIL=contacto@ruoccoasociados.com.uy
```

3. Save the file

### Step 4: Restart the Dev Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
# Server will restart with new environment variables
```

---

## 🧪 Testing the Form

### Local Testing (Development)

**Note:** In development, Resend will send emails FROM: `onboarding@resend.dev`

This is expected! It's Resend's default sender for testing.

To test:

1. Go to http://localhost:3000
2. Scroll to the contact form
3. Fill out all required fields:
   - ✅ Nombre
   - ✅ Email (use a real email you can check)
   - ✅ Mensaje
4. Click "Enviar Consulta"
5. You should see "Mensaje enviado"
6. Check the inbox at `CONTACT_EMAIL` for the email

### What the Email Looks Like

The email will be beautifully formatted with:
- Navy header with "Nueva Consulta Web"
- Badge with the selected service area
- All form fields clearly labeled
- Professional styling matching the website
- Reply-to set to the sender's email
- Click-to-call for phone numbers

---

## 🌐 Production Setup (Custom Domain)

For production, you'll want emails to come from YOUR domain (e.g., `no-reply@ruoccoasociados.com.uy`).

### Step 1: Verify Your Domain in Resend

1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Enter your domain: `ruoccoasociados.com.uy`
4. Resend will provide DNS records (SPF, DKIM, DMARC)

### Step 2: Add DNS Records

Add these records to your domain provider (wherever you bought the domain):

**Example records from Resend:**
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all

Type: CNAME
Name: resend._domainkey
Value: resend._domainkey.resend.com

Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none
```

### Step 3: Update API Route

Once domain is verified, update `/app/api/contact/route.ts`:

```typescript
from: 'Contacto Web <no-reply@ruoccoasociados.com.uy>',
```

Replace the current placeholder:
```typescript
from: 'Graciela Ruocco Web <onboarding@resend.dev>',
```

---

## 🔒 Security Features

The contact form includes:

✅ **Honeypot field** - Catches bots (hidden "website" field)
✅ **Email validation** - Client + server-side
✅ **Rate limiting** - Resend handles this automatically
✅ **Required fields** - Name, email, message
✅ **Error handling** - User-friendly messages
✅ **HTTPS only** - Automatic on Vercel

---

## 📊 Monitoring Emails

### Resend Dashboard

View email activity at [resend.com/emails](https://resend.com/emails):

- ✅ Delivery status
- ✅ Opens (if tracking enabled)
- ✅ Bounces
- ✅ Spam reports
- ✅ Full logs

### Email Notifications

Set up notifications in Resend:
1. Go to Settings → Notifications
2. Enable webhook for failed deliveries
3. Get notified if emails bounce

---

## 🐛 Troubleshooting

### Problem: "Error al enviar el mensaje"

**Possible causes:**

1. **Invalid API Key**
   - Check `.env.local` has correct key
   - Key should start with `re_`
   - No spaces before/after

2. **Environment variables not loaded**
   - Restart dev server after changing `.env.local`
   - Run `npm run dev` again

3. **Resend rate limit**
   - Free plan: 100 emails/day
   - Check Resend dashboard for quota

### Problem: Email not arriving

1. **Check spam folder** - Especially in development
2. **Check CONTACT_EMAIL** - Is it correct in `.env.local`?
3. **Check Resend logs** - Go to dashboard → Emails
4. **Domain not verified** - If using custom domain

### Problem: "Spam detected"

- Honeypot triggered (bot filled hidden field)
- This is GOOD - it blocked spam!

---

## 💰 Resend Pricing

**Free Plan** (Perfect for this site):
- 3,000 emails/month
- 100 emails/day
- All features included

**Pro Plan** ($20/month):
- 50,000 emails/month
- Unlimited daily sending
- Custom domains
- Priority support

For a law firm, the **free plan is more than enough**.

---

## 🔄 Alternative: SendGrid

If you prefer SendGrid instead:

1. Install SendGrid:
```bash
npm install @sendgrid/mail
```

2. Replace `/app/api/contact/route.ts` with SendGrid code
3. Get API key from sendgrid.com
4. Update `.env.local`:
```bash
SENDGRID_API_KEY=SG.xxx
```

---

## ✅ Checklist

Before going live:

- [ ] Resend account created
- [ ] API key added to `.env.local`
- [ ] Contact email verified in `.env.local`
- [ ] Test email sent successfully
- [ ] Email received at `CONTACT_EMAIL`
- [ ] (Optional) Custom domain verified in Resend
- [ ] (Optional) DNS records added for domain
- [ ] Production environment variables set in Vercel

---

## 📝 Adding to Vercel

When deploying to Vercel:

1. Go to your project in Vercel dashboard
2. Settings → Environment Variables
3. Add:
   - `RESEND_API_KEY` = your key
   - `CONTACT_EMAIL` = destination email
4. Redeploy the site

---

## 🎯 Email Template Customization

To customize the email design, edit `/app/api/contact/route.ts`:

```typescript
html: `
  <!-- Your custom HTML here -->
  <div style="...">
    ...
  </div>
`
```

Current template includes:
- Navy header
- Gold accents
- Service area badge
- All form fields
- Reply-to buttons
- Professional footer

---

## 📞 Support

**Resend Issues:**
- Docs: [resend.com/docs](https://resend.com/docs)
- Support: support@resend.com

**Integration Issues:**
- Check the API route: `/app/api/contact/route.ts`
- Check the form: `/components/Contacto.tsx`
- Console errors in browser DevTools

---

**Last Updated:** Abril 2026
