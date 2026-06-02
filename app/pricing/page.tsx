import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingPlans, seo } from "@/data/site";
import { pageMetadata, softwareSchema } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.pricing, path: "/pricing" });

const pricingDrivers = [
  { title: "Monitoring scope", text: "Projects, jurisdictions, sub-jurisdictions, source count, source type, and scraping frequency." },
  { title: "Governance needs", text: "User roles, external access, audit history, approval steps, and security review requirements." },
  { title: "Integration depth", text: "API usage, internal dashboards, reporting exports, and enterprise onboarding support." },
  { title: "Support model", text: "Standard support, priority support, implementation planning, procurement help, and success planning." }
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={softwareSchema()} />
      <section className="page-hero section-shell">
        <p className="eyebrow">Pricing</p>
        <h1>Enterprise pricing based on monitoring scope, jurisdictions, sources, and governance needs.</h1>
        <p>
          Legal WatchDog pricing should reflect the number of projects, sources, jurisdictions, users, specialist access needs, API usage, support level, and security requirements.
        </p>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Plans" title="Choose the level that matches your compliance operating model." text="Exact pricing is intentionally not invented. Publish real prices only after packaging is approved." />
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
        <SectionHeading eyebrow="Packaging logic" title="What affects price?" align="center" />
        <div className="card-grid four">
          {pricingDrivers.map((driver) => (
            <article className="info-card" key={driver.title}><h3>{driver.title}</h3><p>{driver.text}</p></article>
          ))}
        </div>
      </section>

      <section className="section-shell split-section">
        <div>
          <p className="eyebrow">Buying guidance</p>
          <h2>Bring a real monitoring workflow to the pricing conversation.</h2>
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
