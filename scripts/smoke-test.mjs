import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredFiles = [
  "app/page.tsx",
  "app/about/page.tsx",
  "app/features/page.tsx",
  "app/industries/page.tsx",
  "app/pricing/page.tsx",
  "app/case-studies/page.tsx",
  "app/resources/page.tsx",
  "app/resources/[slug]/page.tsx",
  "app/compliance-monitoring-checklist/page.tsx",
  "app/contact/page.tsx",
  "app/api/lead/route.ts",
  "app/sitemap.ts",
  "app/robots.ts",
  "components/LeadForm.tsx",
  "components/InternalLinks.tsx",
  "data/site.ts"
];

const requiredContentChecks = [
  ["app/page.tsx", "Detect regulatory changes earlier"],
  ["app/features/page.tsx", "What this version should not overpromise"],
  ["app/resources/page.tsx", "real, clickable resource pages"],
  ["app/contact/page.tsx", "Show us what your team monitors"],
  ["data/site.ts", "regulatory-monitoring-workflow-without-manual-checks"],
  ["data/site.ts", "AI summaries are review support, not legal advice"],
  ["app/sitemap.ts", "resourcePosts"],
  ["components/LeadForm.tsx", "honeypot"]
];

let failures = 0;

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing required file: ${file}`);
    failures += 1;
  }
}

for (const [file, expected] of requiredContentChecks) {
  const fullPath = path.join(root, file);
  const text = fs.existsSync(fullPath) ? fs.readFileSync(fullPath, "utf8") : "";
  if (!text.includes(expected)) {
    console.error(`Missing expected content in ${file}: ${expected}`);
    failures += 1;
  }
}

if (failures > 0) {
  console.error(`Smoke test failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log("Smoke test passed: required routes, content, sitemap, forms, and resource pages are present.");
