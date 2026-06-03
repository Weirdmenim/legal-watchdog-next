import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";

const primaryNav = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "Security", href: "/security" }
];

export function Header() {
  return (
    <header className="site-header quiet-header">
      <Link className="brand" href="/" aria-label="Legal WatchDog home" data-track="nav:home">
        <span className="brand-mark" aria-hidden="true">LW</span>
        <span>{siteConfig.name}</span>
      </Link>
      <nav className="desktop-nav quiet-nav" aria-label="Primary navigation">
        {primaryNav.map((item) => (
          <Link key={item.href} href={item.href} data-track={`nav:${item.label.toLowerCase().replaceAll(" ", "-")}`}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions quiet-header-actions">
        <ButtonLink href="/contact" trackingId="header-demo">Book a Demo</ButtonLink>
      </div>
    </header>
  );
}
