import Link from "next/link";
import { siteConfig } from "@/data/site";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" }
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Checklist", href: "/compliance-monitoring-checklist" },
  { label: "Contact", href: "/contact" }
];

const resourceLinks = [
  { label: "Regulatory workflow guide", href: "/resources/regulatory-monitoring-workflow-without-manual-checks" },
  { label: "Change management guide", href: "/resources/regulatory-change-management-enterprise-teams" },
  { label: "AI summaries guide", href: "/resources/ai-summaries-in-compliance-human-review" },
  { label: "Audit trails guide", href: "/resources/compliance-audit-trails-regulatory-updates" }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link className="brand footer-brand" href="/" aria-label="Legal WatchDog home">
            <span className="brand-mark" aria-hidden="true">LW</span>
            <span>{siteConfig.name}</span>
          </Link>
          <p className="footer-copy">
            Regulatory monitoring, AI-assisted change summaries, ticketing, and accountable response workflows for enterprise teams.
          </p>
          <p className="legal-note">
            Legal WatchDog supports compliance review workflows. It does not replace qualified legal advice.
          </p>
        </div>
        <div>
          <h2>Product</h2>
          {productLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>
        <div>
          <h2>Company</h2>
          {companyLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>
        <div>
          <h2>Resources</h2>
          {resourceLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Legal WatchDog. All rights reserved.</span>
        <span>Privacy • Terms • Security placeholders</span>
      </div>
    </footer>
  );
}
