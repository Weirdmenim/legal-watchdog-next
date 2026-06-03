import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredFiles = [
  "app/page.tsx",
  "app/about/page.tsx",
  "app/features/page.tsx",
  "app/features/[slug]/page.tsx",
  "app/industries/page.tsx",
  "app/industries/[slug]/page.tsx",
  "app/pricing/page.tsx",
  "app/security/page.tsx",
  "app/use-cases/page.tsx",
  "app/resources/page.tsx",
  "app/resources/[slug]/page.tsx",
  "app/compliance-monitoring-checklist/page.tsx",
  "app/contact/page.tsx",
  "app/api/lead/route.ts",
  "app/sitemap.ts",
  "app/robots.ts",
  "components/LeadForm.tsx",
  "components/InternalLinks.tsx",
  "components/ProductMockup.tsx",
  "components/TrustStack.tsx",
  "data/site.ts"
];

const requiredContentChecks = [
  ["app/page.tsx", "Regulatory change monitoring for enterprise compliance teams"],
  ["app/features/page.tsx", "Compliance monitoring features built around response workflows"],
  ["app/features/[slug]/page.tsx", "FeatureLandingPage"],
  ["app/industries/[slug]/page.tsx", "IndustryPage"],
  ["app/resources/page.tsx", "Compliance operations resources for enterprise teams"],
  ["app/use-cases/page.tsx", "Regulatory monitoring use cases for complex enterprise teams"],
  ["app/contact/page.tsx", "Book a demo for your regulatory monitoring workflow"],
  ["app/security/page.tsx", "Enterprise trust starts with control"],
  ["components/ProductMockup.tsx", "Command centre"],
  ["components/TrustStack.tsx", "Access control"],
  ["components/LeadForm.tsx", "2. Monitoring needs"],
  ["data/site.ts", "source-monitoring"],
  ["data/site.ts", "travel-immigration-compliance"],
  ["data/site.ts", "href: \"/use-cases\""],
  ["app/sitemap.ts", "featureLandingPages"],
  ["app/sitemap.ts", "industryLandingPages"],
  ["app/sitemap.ts", "/security"]
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

const publicFacingFiles = [
  "app/page.tsx",
  "app/pricing/page.tsx",
  "app/security/page.tsx",
  "app/use-cases/page.tsx",
  "app/resources/page.tsx",
  "components/Footer.tsx",
  "components/LeadForm.tsx",
  "components/ArticleCard.tsx"
];

for (const file of publicFacingFiles) {
  const text = fs.readFileSync(path.join(root, file), "utf8");
  const banned = ["built for SEO", "not invented", "fake customer", "Quote placeholder", "Result placeholder", "proof blocks", "Target keyword", "Search intent", "Lead magnet", "case-studies"];
  for (const word of banned) {
    if (text.toLowerCase().includes(word.toLowerCase())) {
      console.error(`Public-facing file still contains internal wording: ${file} -> ${word}`);
      failures += 1;
    }
  }
}

if (failures > 0) {
  console.error(`Smoke test failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log("Smoke test passed: improved routes, content, forms, SEO pages, and public copy checks are present.");
