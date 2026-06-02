# Legal WatchDog Next.js Website

A production-ready, Vercel-ready Next.js website for Legal WatchDog, improved with the same growth, SEO, conversion, accessibility, internal-linking, and testing approach used in the Gomentum website work.

## Pages included

Core website pages:

1. Home
2. About
3. Features
4. Industries Served
5. Pricing
6. Case Studies
7. Resources / Blog
8. Contact

Additional SEO and conversion pages:

1. Compliance Monitoring Checklist
2. Six individual resource/article pages

## What is included

- Next.js App Router project structure
- TypeScript
- Responsive enterprise SaaS visual system
- Shared reusable components
- SEO metadata per page
- Canonical URLs
- Sitemap and robots routes
- JSON-LD schema for organization, software, FAQ, breadcrumbs, and articles
- Real resource/blog pages, not just topic ideas
- Internal linking across pages
- Lead/demo/contact/resource form UI
- Placeholder API route for lead capture
- Conversion tracking hooks with `data-track` attributes
- Accessibility basics: skip link, form labels, focus states, reduced motion support, readable tap targets, and status messages
- Smoke test script
- QA report in `docs/QA_REPORT.md`
- Vercel-ready configuration

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Test locally

```bash
npm test
```

This runs:

```bash
npm run typecheck
npm run test:smoke
npm run build
```

## Build locally

```bash
npm run build
npm run start
```

## Deploy to Vercel

### Option 1: GitHub workflow

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Add environment variables if needed:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_DEMO_EMAIL`
5. Deploy.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

## Important production notes

- The API route at `app/api/lead/route.ts` is a placeholder. Connect it to HubSpot, Brevo, Salesforce, Airtable, Resend, or your backend before launch.
- Replace all testimonial, customer proof, result, and security placeholders with verified real proof.
- Legal WatchDog should not claim to provide legal advice. The site copy positions AI summaries as review support only.
- Exact pricing is intentionally not invented. Replace pricing placeholders when pricing is approved.
- Run Lighthouse and WAVE on the deployed Vercel URL and capture screenshots for final submission evidence.
