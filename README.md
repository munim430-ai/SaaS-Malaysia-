# Keystone Workforce Bridge

**Bangladesh–Malaysia Workforce Documentation & Compliance Support**

B2B documentation, compliance reporting, employer liaison, and post-arrival welfare-data support for licensed agencies, Malaysian employers, HRO partners, and ESG teams.

> Keystone is NOT a recruitment agency. We do not recruit workers, collect worker fees, hold passports, or act as a migration intermediary.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL + Row Level Security)
- **Deployment**: Vercel
- **Validation**: Zod

## Features

- Hero section with WhatsApp CTA
- 5 B2B service cards
- WRO Exposure Calculator (5-question tool with risk banding)
- Lead capture form → Supabase
- Legal boundary section
- About/credibility section
- Privacy Policy & Terms pages
- SEO metadata + OpenGraph
- Mobile-first responsive layout
- Rate-limited API routes
- Honeypot spam protection

## Setup

```bash
cp .env.example .env.local
# Fill in your Supabase and site values
npm install
npm run dev
```

## Database

See `supabase/schema.sql` for the full schema.

Tables:
- `leads` — B2B contact form submissions
- `wro_exposure_submissions` — WRO calculator results
- `contact_events` — analytics events

## Environment Variables

See `.env.example` for all required variables.

## Business Information

- **Company**: Keystone Education Consultancy
- **Service**: Keystone Workforce Bridge
- **Country**: Bangladesh
- **Email**: munimhasibul10@gmail.com
- **WhatsApp**: +8801941646278
