import Link from "next/link";

const links = [
  { href: "/features#monitoring", label: "Source monitoring" },
  { href: "/features#change-detection", label: "Change detection" },
  { href: "/features#collaboration", label: "Ticket workflow" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Use cases" },
  { href: "/contact", label: "Book a demo" }
];

export function InternalLinks({ title = "Continue exploring Legal WatchDog" }: { title?: string }) {
  return (
    <aside className="internal-links" aria-labelledby="internal-links-title">
      <h2 id="internal-links-title">{title}</h2>
      <div>
        {links.map((link) => (
          <Link key={link.href} href={link.href} data-track={`internal:${link.href}`}>
            {link.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
