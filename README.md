# Legal WatchDog Next.js Website

Enterprise SaaS website for Legal WatchDog, an AI-powered regulatory monitoring and compliance response platform.

## Pages included

- Home
- About
- Features
- Feature landing pages
- Industries
- Industry landing pages
- Pricing
- Security
- Use Cases
- Resources / Blog
- Compliance Monitoring Checklist
- Contact / Demo

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Test before deployment

```bash
npm run typecheck
npm run test:smoke
npm run build
```

## Deploy to Vercel

Push the project to GitHub, then import it into Vercel.

Recommended Vercel settings:

- Framework: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: leave empty
- Root directory: `./`

Set this environment variable after deployment:

```bash
NEXT_PUBLIC_SITE_URL=https://your-vercel-url.vercel.app
```

Then redeploy.

## Production note

The `/api/lead` route validates and accepts lead submissions, but it does not yet send leads to a CRM, email, database, or automation tool. Connect it before using the site for real campaigns.
