"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";

type NavItem = {
  label: string;
  href: string;
  description?: string;
};

type NavGroup = {
  label: string;
  href: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    label: "Product",
    href: "/features",
    items: [
      { label: "Product overview", href: "/features", description: "How monitoring, summaries, tickets, and audit trails work together." },
      { label: "Source monitoring", href: "/features/source-monitoring", description: "Track URLs, documents, and APIs by project and jurisdiction." },
      { label: "Change detection", href: "/features/change-detection", description: "Detect source updates and preserve revision history." },
      { label: "AI summaries", href: "/features/ai-summaries", description: "Review plain-English summaries with source context and human oversight." },
      { label: "Compliance ticketing", href: "/features/compliance-ticketing", description: "Assign owners, deadlines, comments, files, and response status." },
      { label: "Audit trails", href: "/features/audit-trails", description: "Keep access, revisions, decisions, and response evidence visible." }
    ]
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      { label: "All industries", href: "/industries", description: "See where Legal WatchDog fits across regulated teams." },
      { label: "Travel and immigration", href: "/industries/travel-immigration-compliance", description: "Monitor visa, entry, and customer guidance changes." },
      { label: "Healthcare and pharma", href: "/industries/healthcare-pharma-compliance", description: "Track FDA, GMP, recall, and device-related updates." },
      { label: "Finance and banking", href: "/industries/finance-banking-compliance", description: "Watch regulatory notices, reporting rules, and supervisory guidance." },
      { label: "Technology and privacy", href: "/industries/technology-privacy-compliance", description: "Monitor GDPR, CCPA, UK DPA, PDPA, and AI privacy guidance." },
      { label: "Oil, gas, and logistics", href: "/industries/oil-gas-compliance", description: "Track safety, environmental, customs, and operational updates." }
    ]
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Resources hub", href: "/resources", description: "Guides for regulatory monitoring and compliance operations." },
      { label: "Use cases", href: "/use-cases", description: "Practical monitoring workflows for enterprise teams." },
      { label: "Compliance checklist", href: "/compliance-monitoring-checklist", description: "Map sources, jurisdictions, alerts, owners, and evidence." },
      { label: "Regulatory workflow guide", href: "/resources/regulatory-monitoring-workflow-without-manual-checks", description: "Move from manual checks to structured monitoring." },
      { label: "AI summaries guide", href: "/resources/ai-summaries-in-compliance-human-review", description: "Use AI as review support, not legal decision-making." }
    ]
  }
];

const directLinks: NavItem[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Security", href: "/security" }
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function trackingLabel(label: string) {
  return label.toLowerCase().replaceAll(" ", "-").replaceAll(",", "");
}

export function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header className="site-header quiet-header fixed-header-shell">
      <div className="header-main-row">
        <Link className="brand" href="/" aria-label="Legal WatchDog home" data-track="nav:home">
          <span className="brand-mark" aria-hidden="true">LW</span>
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="desktop-nav quiet-nav grouped-desktop-nav" aria-label="Primary navigation">
          {navGroups.map((group) => {
            const active = isActivePath(pathname, group.href) || group.items.some((item) => isActivePath(pathname, item.href));
            return (
              <div className="nav-group" key={group.label}>
                <Link
                  className={`nav-trigger${active ? " is-active" : ""}`}
                  href={group.href}
                  aria-current={active ? "page" : undefined}
                  data-track={`nav:${trackingLabel(group.label)}`}
                >
                  {group.label}
                  <span aria-hidden="true" className="nav-caret">⌄</span>
                </Link>
                <div className="nav-dropdown" aria-label={`${group.label} menu`}>
                  <div className="nav-dropdown-card">
                    {group.items.map((item) => {
                      const itemActive = isActivePath(pathname, item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`nav-dropdown-link${itemActive ? " is-active" : ""}`}
                          aria-current={itemActive ? "page" : undefined}
                          data-track={`nav:${trackingLabel(group.label)}:${trackingLabel(item.label)}`}
                        >
                          <strong>{item.label}</strong>
                          {item.description ? <span>{item.description}</span> : null}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          {directLinks.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                className={`nav-direct-link${active ? " is-active" : ""}`}
                href={item.href}
                aria-current={active ? "page" : undefined}
                data-track={`nav:${trackingLabel(item.label)}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions quiet-header-actions desktop-header-actions">
          <ButtonLink href="/contact" trackingId="header-demo">Book a Demo</ButtonLink>
        </div>

        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-primary-navigation"
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          <span>{isMobileOpen ? "Close" : "Menu"}</span>
          <span aria-hidden="true" className="mobile-menu-icon">{isMobileOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isMobileOpen ? (
        <nav id="mobile-primary-navigation" className="mobile-nav-panel" aria-label="Mobile navigation">
          {navGroups.map((group) => {
            const active = isActivePath(pathname, group.href) || group.items.some((item) => isActivePath(pathname, item.href));
            return (
              <details className="mobile-nav-group" key={group.label} open={active}>
                <summary>{group.label}</summary>
                <div className="mobile-nav-links">
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href} data-track={`mobile-nav:${trackingLabel(item.label)}`}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            );
          })}
          <div className="mobile-direct-links">
            {directLinks.map((item) => (
              <Link key={item.href} href={item.href} data-track={`mobile-nav:${trackingLabel(item.label)}`}>
                {item.label}
              </Link>
            ))}
          </div>
          <ButtonLink href="/contact" trackingId="mobile-header-demo">Book a Demo</ButtonLink>
        </nav>
      ) : null}
    </header>
  );
}
