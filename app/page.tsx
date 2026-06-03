import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { HeroVisual } from "@/components/HeroVisual";
import { JsonLd } from "@/components/JsonLd";
import { ProductMockup } from "@/components/ProductMockup";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBar } from "@/components/TrustBar";
import { TrustStack } from "@/components/TrustStack";
import { seo } from "@/data/site";
import { organizationSchema, pageMetadata, softwareSchema } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.home, path: "/" });

const workflow = [
  {
    title: "Monitor sources",
    text: "Keep official websites, documents, and APIs organized by project and jurisdiction."
  },
  {
    title: "Detect changes",
    text: "Compare updates against previous versions so teams can see what actually changed."
  },
  {
    title: "Review summary",
    text: "Use AI-assisted summaries to understand impact faster, with human review still in control."
  },
  {
    title: "Assign response",
    text: "Create tickets, add owners, invite specialists, and preserve the evidence trail."
  }
];

const audiences = [
  {
    title: "Compliance managers",
    text: "Replace manual checks with monitored sources, alert review, and accountable follow-up."
  },
  {
    title: "Legal teams",
    text: "Review source context, AI-assisted summaries, version history, and ticket decisions in one place."
  },
  {
    title: "Operations leads",
    text: "See what changed, what action is needed, who owns it, and when it is due."
  },
  {
    title: "Enterprise leaders",
    text: "Improve visibility into regulatory response work without relying on scattered email threads."
  }
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), softwareSchema()]} />
      <section className="hero section-shell quiet-hero">
        <div className="hero-copy">
          <p className="eyebrow">Regulatory monitoring software for enterprise teams</p>
          <h1>Regulatory change monitoring for enterprise compliance teams.</h1>
          <p className="hero-text">
            Legal WatchDog monitors trusted sources, detects regulatory changes, summarizes impact, and turns each update into assigned response work.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact" trackingId="home-hero-demo">Book a Demo</ButtonLink>
            <ButtonLink href="/features" variant="secondary" trackingId="home-hero-features">See Product Workflow</ButtonLink>
          </div>
          <p className="microcopy">Built for teams managing jurisdictions, source updates, reviewers, and audit evidence.</p>
        </div>
        <HeroVisual />
      </section>

      <section className="section-shell trust-section quiet-trust" aria-label="Trust signals">
        <TrustBar />
      </section>

      <section className="section-shell split-section quiet-section">
        <div>
          <p className="eyebrow">The problem</p>
          <h2>Manual monitoring gets risky when sources, updates, and owners are scattered.</h2>
        </div>
        <div className="stacked-copy short-copy">
          <p>Regulatory changes can appear across official websites, PDFs, portals, and guidance pages. When teams track them manually, important updates can be missed or reviewed too late.</p>
          <p>Legal WatchDog gives every update a source, summary, owner, status, and evidence trail.</p>
        </div>
      </section>

      <section className="section-shell light-panel quiet-panel">
        <SectionHeading
          eyebrow="Product workflow"
          title="Monitor sources. Detect changes. Assign the response."
          text="A simple operating flow for enterprise teams that need clarity before regulatory updates become risk."
          align="center"
        />
        <div className="workflow-grid quiet-workflow-grid">
          {workflow.map((step, index) => (
            <article key={step.title} className="workflow-step quiet-step">
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell split-section quiet-section">
        <div>
          <p className="eyebrow">Command centre</p>
          <h2>One workspace for the source, summary, ticket, owner, and audit trail.</h2>
          <div className="hero-actions compact-actions">
            <ButtonLink href="/features" trackingId="home-command-features">Explore Features</ButtonLink>
            <ButtonLink href="/security" variant="secondary" trackingId="home-command-security">Review Security</ButtonLink>
          </div>
        </div>
        <ProductMockup variant="overview" />
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Who it helps"
          title="Built for the teams responsible for noticing, reviewing, and acting on change."
          text="The homepage stays simple. Deeper details live on the feature, industry, security, and resource pages."
        />
        <div className="card-grid four calm-card-grid">
          {audiences.map((item) => (
            <article className="info-card calm-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell split-section quiet-section" id="security">
        <div>
          <p className="eyebrow">Enterprise trust</p>
          <h2>AI supports review. It does not replace legal judgment.</h2>
          <p className="section-support">Legal WatchDog is designed around role-based access, controlled specialist invites, audit logs, source evidence, and human review for important decisions.</p>
        </div>
        <TrustStack />
      </section>

      <CTASection title="Ready to turn regulatory updates into assigned response work?" text="Book a focused demo around one monitoring workflow your team handles manually today." />
    </>
  );
}
