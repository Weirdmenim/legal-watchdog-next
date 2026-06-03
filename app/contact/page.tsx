import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { seo } from "@/data/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.contact, path: "/contact" });

const demoSteps = [
  "Share one monitoring workflow your team handles manually today.",
  "Map the jurisdictions, sources, reviewers, and response owners.",
  "Review how Legal WatchDog would detect, summarize, ticket, and track the change.",
  "Identify the best first pilot workflow and what proof to collect."
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }])} />
      <section className="page-hero section-shell">
        <p className="eyebrow">Book a demo</p>
        <h1>Book a demo for your regulatory monitoring workflow.</h1>
        <p>
          Share your industry, jurisdictions, source types, and current compliance challenge. The demo will focus on one workflow your team handles today.
        </p>
      </section>

      <section className="section-shell contact-layout">
        <div>
          <SectionHeading eyebrow="Demo request" title="Request an enterprise walkthrough." text="Best for compliance leaders, legal teams, regulatory analysts, operations directors, and enterprise buyers." />
          <div className="contact-notes">
            <p><strong>What we will cover:</strong> monitoring projects, jurisdictions, source setup, AI summaries, tickets, specialist access, API data, and audit readiness.</p>
            <p><strong>Good fit:</strong> organizations with 500+ employees or teams in highly regulated sectors.</p>
            <p><strong>Not legal advice:</strong> Legal WatchDog supports monitoring and review workflows. Final decisions remain with qualified professionals.</p>
          </div>
          <div className="check-list compact">
            {demoSteps.map((step) => <p key={step}>{step}</p>)}
          </div>
        </div>
        <LeadForm mode="demo" />
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Alternative contact paths" title="Choose the right conversation for your team." align="center" />
        <div className="card-grid three">
          <article className="info-card"><h2>Sales enquiry</h2><p>For pricing, procurement, enterprise packaging, or contract questions.</p></article>
          <article className="info-card"><h2>Security review</h2><p>For audit logs, encryption, access control, external invite, and data-handling questions.</p></article>
          <article className="info-card"><h2>Product fit</h2><p>For source monitoring scope, jurisdiction complexity, API access, and MVP constraints.</p></article>
        </div>
      </section>
    </>
  );
}
