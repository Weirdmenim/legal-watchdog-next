import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  trackingId?: string;
  ariaLabel?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "", trackingId, ariaLabel }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      data-track={trackingId}
      className={`button button-${variant} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
