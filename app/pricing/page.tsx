import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingPlans, seo } from "@/data/site";
import { pageMetadata, softwareSchema } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.pricing, path: "/pricing" });

const pricingDrivers = [
  { title: "Monitoring scope", text: "Projects, jurisdictions, source count, source type, and check frequency." },
  { title: "Governance needs", text: "Roles, external access, audit history, approvals, and security review requirements." },
  { title: "Integration depth", text: "API usage, internal dashboards, reporting exports, and implementation support." },
  { title: "Support model", text: "Standard support, priority support, onboarding, procurement help, and success planning." }
];

const comparisonRows = [
  ["Best fit", "First workflow", "Multiple teams", "Large governance needs", "Complex enterprise setup"],
  ["Projects", "Core projects", "Multiple projects", "Scaled projects", "Custom scope"],
  ["Jurisdictions", "Focused coverage", "Multi-jurisdiction", "Advanced coverage", "Custom structure"],
  ["Source monitoring", "Manual setup", "AI-assisted discovery", "Higher source volume", "Custom limits"],
  ["Tickets", "Included", "Included", "Included", "Custom workflows"],
  ["External specialists", "Limited", "Included", "Included", "Custom access policy"],
  ["API access", "Not included", "Included", "Included", "Custom integration"],
  ["Support", "Standard", "Priority", "Implementation support", "Dedicated planning"]
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={softwareSchema()} />
      <section className="page-hero section-shell">
        <p className="eyebrow">Pricing</p>
        <h1>Pricing built around your monitoring scope.</h1>
        <p>
          Choose a plan based on the number of teams, sources, jurisdictions, workflows, and governance needs your organization manages.
        </p>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Plans" title="Start with the operating model that matches your compliance team." text="Pricing is customized for enterprise monitoring scope. Talk to sales to map the right plan for your team." />
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article className="pricing-card" key={plan.name}>
              <h2>{plan.name}</h2>
              <p>{plan.fit}</p>
              <ul>
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <Link className="button button-primary" href="/contact" data-track={`pricing:${plan.name}`}>{plan.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Compare plans" title="What changes as your monitoring operation grows." align="center" />
        <div className="comparison-table" role="table" aria-label="Pricing plan comparison">
          <div className="comparison-row comparison-head" role="row">
            <span role="columnheader">Capability</span>
            <span role="columnheader">Team</span>
            <span role="columnheader">Business</span>
            <span role="columnheader">Enterprise</span>
            <span role="columnheader">Custom</span>
          </div>
          {comparisonRows.map((row) => (
            <div className="comparison-row" role="row" key={row[0]}>
              {row.map((cell, index) => <span role={index === 0 ? "rowheader" : "cell"} key={cell}>{cell}</span>)}
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Pricing drivers" title="What affects the final quote?" align="center" />
        <div className="card-grid four">
          {pricingDrivers.map((driver) => (
            <article className="info-card" key={driver.title}><h3>{driver.title}</h3><p>{driver.text}</p></article>
          ))}
        </div>
      </section>

      <section className="section-shell split-section">
        <div>
          <p className="eyebrow">Buying guidance</p>
          <h2>Bring one real monitoring workflow to the pricing conversation.</h2>
        </div>
        <div className="stacked-copy">
          <p>For a better sales discussion, prepare the number of jurisdictions, sources, departments, users, external specialists, and internal systems your team needs to connect.</p>
          <Link href="/compliance-monitoring-checklist">Download the Compliance Monitoring Checklist</Link>
        </div>
      </section>

      <InternalLinks />
      <CTASection title="Need a plan for multiple jurisdictions or teams?" text="Talk with sales to map the right monitoring scope, source limits, user access, and support level." />
    </>
  );
}
