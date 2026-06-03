import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { featureLandingPages, seo } from "@/data/site";
import { faqSchema, pageMetadata, softwareSchema } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.features, path: "/features" });

const featureFaqs = [
  { q: "Can Legal WatchDog monitor many sources at once?", a: "Yes. The product direction supports background checks across multiple sources while preserving source-level revision history." },
  { q: "Can users trigger a manual check?", a: "Yes. Teams should be able to run manual checks when they need to confirm the latest source information." },
  { q: "Can tickets be created manually?", a: "Yes. Teams can create manual tickets for issues that are not directly tied to an automatically detected change." },
  { q: "Can external specialists review a ticket?", a: "Yes. Specialists can be invited into a specific ticket without full workspace access." }
];

const workflowGroups = [
  {
    title: "Monitor",
    text: "Create projects, add jurisdictions, manage sources, and run scheduled or manual checks.",
    links: ["/features/source-monitoring", "/features/change-detection"]
  },
  {
    title: "Understand",
    text: "Review changes with revision history, AI-assisted summaries, confidence signals, and source context.",
    links: ["/features/change-detection", "/features/ai-summaries"]
  },
  {
    title: "Respond",
    text: "Turn updates into tickets, assign owners, invite specialists, track comments, and close the loop.",
    links: ["/features/compliance-ticketing"]
  },
  {
    title: "Prove",
    text: "Keep audit trails, access events, assignments, comments, files, and final decisions connected.",
    links: ["/features/audit-trails"]
  }
];

const supportingFeatures = [
  "Project and jurisdiction management",
  "AI-assisted source discovery",
  "Manual and scheduled scraping",
  "Notifications and escalation rules",
  "Team permissions and controlled access",
  "API access for internal dashboards"
];

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={[softwareSchema(), faqSchema(featureFaqs)]} />
      <section className="page-hero section-shell">
        <p className="eyebrow">Features</p>
        <h1>Compliance monitoring features built around response workflows.</h1>
        <p>
          Legal WatchDog helps enterprise teams monitor trusted sources, detect changes, understand impact, assign work, and keep evidence close to every decision.
        </p>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Core workflow" title="The product is easier to understand in four parts." text="Each feature supports one of the jobs compliance teams need to complete after a source changes." />
        <div className="card-grid four">
          {workflowGroups.map((group) => (
            <article className="info-card" key={group.title}>
              <h2>{group.title}</h2>
              <p>{group.text}</p>
              <div className="resource-actions">
                {group.links.map((href) => <Link key={href} href={href}>View</Link>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Feature pages" title="Explore the highest-value capabilities." text="These pages give buyers a clearer explanation of the product areas most likely to affect purchase decisions." align="center" />
        <div className="card-grid three">
          {featureLandingPages.map((page) => (
            <article className="info-card" key={page.slug}>
              <p className="mini-label">{page.keyword}</p>
              <h2><Link href={`/features/${page.slug}`}>{page.title}</Link></h2>
              <p>{page.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Supporting capabilities" title="The operating layer behind the workflow." />
        <div className="card-grid three">
          {supportingFeatures.map((item) => <article className="compact-card" key={item}><h3>{item}</h3></article>)}
        </div>
      </section>

      <section className="section-shell split-section">
        <div>
          <p className="eyebrow">Responsible boundaries</p>
          <h2>Clear product expectations for serious buyers.</h2>
        </div>
        <div className="check-list warning-list">
          <p>Responsive web app experience, not a native mobile app.</p>
          <p>Controlled specialist invitations, not an open specialist marketplace.</p>
          <p>Ticket discussions keep context close to the detected change.</p>
          <p>AI supports review. It does not provide legal advice.</p>
          <p>Reporting focuses on source status, tickets, revisions, and response evidence.</p>
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
