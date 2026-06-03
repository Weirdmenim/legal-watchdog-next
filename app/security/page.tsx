import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { ProductMockup } from "@/components/ProductMockup";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustStack } from "@/components/TrustStack";
import { seo } from "@/data/site";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.security, path: "/security" });

const securityFaq = [
  {
    q: "Does Legal WatchDog replace legal review?",
    a: "No. Legal WatchDog supports source monitoring, summaries, tickets, and review workflows. Final legal decisions remain with qualified professionals."
  },
  {
    q: "Can external specialists see the whole workspace?",
    a: "No. External specialists should be invited into specific tickets only, with access limited to the context they need for review."
  },
  {
    q: "What happens when a source check fails?",
    a: "Failed checks should be visible to the team so coverage gaps can be reviewed instead of hidden."
  },
  {
    q: "What evidence should be retained for review?",
    a: "The source, detected revision, AI-assisted summary, confidence signal, ticket thread, files, assignments, status changes, and final decision should remain connected."
  }
];

const controls = [
  "Role-based access and project-level permissions",
  "Ticket-only access for external specialists",
  "Audit logs for key compliance workflow actions",
  "Encrypted data in transit and at rest as an enterprise requirement",
  "Secure session handling and controlled invites",
  "Daily backups and recovery planning as a reliability requirement",
  "Source status visibility for failed or blocked checks",
  "Human review boundaries for AI-generated summaries"
];

export default function SecurityPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Security", href: "/security" }]),
        faqSchema(securityFaq)
      ]} />
      <section className="page-hero section-shell feature-hero-layout">
        <div>
          <p className="eyebrow">Security and trust</p>
          <h1>Enterprise trust starts with control, traceability, and review discipline.</h1>
          <p>
            Legal WatchDog is designed for regulated teams that need controlled access, visible evidence, source context, and clear boundaries around AI-assisted review.
          </p>
          <div className="hero-actions compact-actions">
            <Link className="button button-primary" href="/contact" data-track="security-demo">Book a Demo</Link>
            <Link className="button button-secondary" href="/features/audit-trails" data-track="security-audit-trails">View Audit Trails</Link>
          </div>
        </div>
        <ProductMockup variant="audit" />
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Trust model" title="Built for teams that must prove what changed and how they responded." text="The platform should make sensitive workflow actions visible, limited, and traceable across projects, jurisdictions, tickets, and external review." />
        <TrustStack />
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Controls" title="Security and governance controls buyers should expect." align="center" />
        <div className="card-grid four">
          {controls.map((control) => <article className="info-card" key={control}><h3>{control}</h3></article>)}
        </div>
      </section>

      <section className="section-shell split-section">
        <div>
          <p className="eyebrow">AI boundary</p>
          <h2>AI helps teams understand changes faster. It does not make legal decisions.</h2>
        </div>
        <div className="stacked-copy">
          <p>AI-assisted summaries should always stay connected to the source, revision history, confidence signal, and ticket context.</p>
          <p>Legal WatchDog should help professionals review faster, not replace the professional judgment required for important compliance decisions.</p>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="FAQ" title="Security and trust questions." />
        <FAQ items={securityFaq} />
      </section>

      <CTASection title="Need to review access control, audit trails, and AI boundaries?" text="Book a demo and walk through the security and trust questions your procurement team will ask." />
    </>
  );
}
