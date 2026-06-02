import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { FeatureGrid } from "@/components/FeatureGrid";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { seo } from "@/data/site";
import { faqSchema, pageMetadata, softwareSchema } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.features, path: "/features" });

const featureFaqs = [
  { q: "Can the platform scrape many sources at once?", a: "Yes. The intended workflow supports background scraping for multiple sources while keeping source-level revision histories." },
  { q: "Can users trigger a manual check?", a: "Yes. Teams should be able to run manual checks when they need to confirm the latest source information." },
  { q: "Can tickets be created manually?", a: "Yes. Teams can create manual tickets for issues that are not directly tied to an automatically detected change." },
  { q: "Can API access be revoked?", a: "Yes. Admins should be able to reset or revoke keys from the workspace." }
];

const groups = [
  {
    id: "project-jurisdiction",
    title: "Project, jurisdiction, and sub-jurisdiction management",
    intro: "Structure monitoring around the way the organization actually works.",
    items: ["Create projects for regulatory areas", "Assign jurisdictions and sub-jurisdictions", "Show source and jurisdiction counts", "Use prompts to guide AI monitoring", "Keep each regulatory domain separate and clear"]
  },
  {
    id: "source-management",
    title: "Source discovery and source management",
    intro: "Give teams a cleaner way to find and manage the sources they depend on.",
    items: ["Manual source entry for URLs, documents, and APIs", "AI-assisted source suggestions", "Bulk source upload", "URL scrapability checks", "Source status for active, broken, or updated sources"]
  },
  {
    id: "monitoring",
    title: "Automatic, manual, and scheduled monitoring",
    intro: "Support regular checks and urgent manual confirmation without slowing down large projects.",
    items: ["Automatic recurring checks", "Manual checks on demand", "Scheduled scraping options", "Concurrent background scraping", "Last-scraped time and failed scrape flags"]
  },
  {
    id: "change-detection",
    title: "Change detection, revision history, and review evidence",
    intro: "Show what changed and preserve the evidence behind every review.",
    items: ["Old versus new content comparison", "Revision history per source", "Diff views", "Reviewed status", "Version history for monitored sources"]
  },
  {
    id: "ai-summaries",
    title: "AI summaries with confidence scores",
    intro: "Reduce reading time while keeping source context and human review visible.",
    items: ["Plain-English summaries", "Confidence scores", "Prompt-driven review output", "Human validation loop", "Clear boundary that AI is not legal advice"]
  },
  {
    id: "collaboration",
    title: "Ticketing and collaboration",
    intro: "Move from detected change to assigned response work inside one thread.",
    items: ["Automatic ticket creation for detected updates", "Manual ticket creation", "Assigned owners and ticket statuses", "Threaded comments and file uploads", "Decision and approval context"]
  },
  {
    id: "specialist-access",
    title: "Controlled specialist access",
    intro: "Bring in external expertise without exposing the full workspace.",
    items: ["Invite specialists by email", "Ticket-only access", "Comments, files, and decisions", "Access ends when ticket closes", "Audit trail for specialist participation"]
  },
  {
    id: "notifications",
    title: "Notifications and escalation rules",
    intro: "Make urgent updates visible before they become delayed action.",
    items: ["In-app notifications", "Email alerts", "High-priority immediate alerts", "Overdue task escalation", "Assignment notifications"]
  },
  {
    id: "security",
    title: "Admin, security, and auditability",
    intro: "Give enterprise teams confidence in access, traceability, and reliability.",
    items: ["Organization and team management", "Admin, manager, specialist, and member roles", "Project-level permissions", "Audit logs", "Secure external invitations"]
  },
  {
    id: "api",
    title: "API and data access",
    intro: "Let organizations connect monitoring data to internal dashboards and workflows.",
    items: ["API keys from the workspace", "Project data access", "Revision and monitoring result access", "Organization-only data scope", "Key reset and revocation"]
  }
];

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={[softwareSchema(), faqSchema(featureFaqs)]} />
      <section className="page-hero section-shell">
        <p className="eyebrow">Features</p>
        <h1>Everything enterprise teams need to monitor, review, assign, and prove regulatory response work.</h1>
        <p>
          Legal WatchDog combines source monitoring, AI-assisted summaries, revision tracking, ticketing, collaboration, permissions, notifications, and API access in one compliance workflow.
        </p>
      </section>

      <section className="section-shell">
        <FeatureGrid />
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Feature detail" title="A practical system, not a vague AI layer." text="Each capability connects to a real compliance workflow from source setup to review evidence." align="center" />
        <div className="feature-list">
          {groups.map((group) => (
            <article className="feature-group" id={group.id} key={group.title}>
              <p className="eyebrow">{group.id.replaceAll("-", " ")}</p>
              <h2>{group.title}</h2>
              <p>{group.intro}</p>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell split-section">
        <div>
          <p className="eyebrow">MVP clarity</p>
          <h2>What this version should not overpromise.</h2>
        </div>
        <div className="check-list warning-list">
          <p>No native mobile app in the MVP.</p>
          <p>No full specialist marketplace.</p>
          <p>No in-app chat beyond ticket discussions.</p>
          <p>No claim that AI provides legal advice.</p>
          <p>No advanced analytics dashboard until validated after the MVP.</p>
          <Link href="/about">Read the product principles</Link>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="FAQ" title="Feature questions buyers may ask." />
        <FAQ items={featureFaqs} />
      </section>

      <InternalLinks title="Feature-related next steps" />
      <CTASection />
    </>
  );
}
