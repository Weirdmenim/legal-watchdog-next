import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Legal WatchDog home" data-track="nav:home">
        <span className="brand-mark" aria-hidden="true">LW</span>
        <span>{siteConfig.name}</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {siteConfig.nav.map((item) => (
          <Link key={item.href} href={item.href} data-track={`nav:${item.label.toLowerCase().replaceAll(" ", "-")}`}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <ButtonLink href="/compliance-monitoring-checklist" variant="secondary" trackingId="header-checklist">Checklist</ButtonLink>
        <ButtonLink href="/contact" trackingId="header-demo">Book a Demo</ButtonLink>
      </div>
    </header>
  );
}
