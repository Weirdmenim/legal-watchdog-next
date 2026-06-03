# Legal WatchDog v6 QA Report

## Scope
This v6 build keeps the same project/package naming (`legal-watchdog-next`) and preserves the existing routes while simplifying the homepage, reducing navigation noise, and moving detail into the feature, industry, security, use case, and resource pages.

## Improvements applied
- Reduced homepage sections into a cleaner executive summary.
- Removed homepage detail overload: no long industry grid, use case grid, or full FAQ block on the homepage.
- Kept deeper content available on existing pages instead of deleting it.
- Simplified top navigation to Features, Industries, Resources, Pricing, Security, and Book a Demo.
- Preserved `/case-studies` as a redirect to `/use-cases`.
- Preserved IBM Plex Sans and improved quiet visual hierarchy with calmer backgrounds, fewer card-heavy sections, and softer shadows.
- Kept PRD boundaries: no fake customer proof, no legal-advice claim, and no mobile-app promise.

## Commands run
```bash
npm install --ignore-scripts
npm run typecheck
npm run test:smoke
NEXT_TELEMETRY_DISABLED=1 npm run build
npm run start
```

## Production route checks
```text
200 /
200 /about
200 /features
200 /features/source-monitoring
200 /industries
200 /pricing
200 /security
200 /use-cases
307 /case-studies
200 /resources
200 /compliance-monitoring-checklist
200 /contact
200 /sitemap.xml
200 /robots.txt
200 /api/lead POST
```

## Notes
- The form API captures and validates demo requests in the app response, but it is not yet connected to a CRM, Brevo, HubSpot, Airtable, email delivery, or database.
- Run Lighthouse and WAVE again after deployment on Vercel, because live production checks can differ from local build checks.
