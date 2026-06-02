import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ConversionPanel } from "@/components/ConversionPanel";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HeroVisual } from "@/components/HeroVisual";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBar } from "@/components/TrustBar";
import { faqs, industries, personas, resourcePosts, seo, useCases } from "@/data/site";
import { faqSchema, organizationSchema, pageMetadata, softwareSchema } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.home, path: "/" });

const steps = [
  "Create a monitoring project",
  "Add jurisdictions and sub-jurisdictions",
  "Add or discover credible sources",
  "Detect changes and generate AI summaries",
  "Create tickets, assign owners, and track resolution"
];

const proofToCollect = [
  "Pilot quote from a named compliance leader",
  "Before-and-after review time from a monitored project",
  "Security review status or approved procurement language",
  "Number of monitored sources and jurisdictions after pilot"
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), softwareSchema(), faqSchema(faqs)]} />
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">AI regulatory monitoring for enterprise teams</p>
          <h1>Detect regulatory changes earlier. Understand them faster. Assign response work before compliance risk grows.</h1>
          <p className="hero-text">
            Legal WatchDog helps legal, compliance, regulatory, and operations teams monitor trusted sources, detect updates, summarize what changed, and coordinate action through accountable tickets.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact" trackingId="home-hero-demo">Book a Demo</ButtonLink>
            <ButtonLink href="/features" variant="secondary" trackingId="home-hero-features">See How It Works</ButtonLink>
          </div>
          <p className="microcopy">Built for enterprise teams managing multiple jurisdictions, sources, response owners, and audit evidence.</p>
        </div>
        <HeroVisual />
      </section>

      <section className="section-shell trust-section" aria-label="Trust signals">
        <TrustBar />
      </section>

      <section className="section-shell split-section">
        <div>
          <p className="eyebrow">The problem</p>
          <h2>Manual regulatory monitoring breaks when the organization becomes complex.</h2>
        </div>
        <div className="stacked-copy">
          <p>Important updates sit across websites, documents, portals, emails, and department chats. A small compliance team may be responsible for many jurisdictions while operations teams wait for instructions.</p>
          <p>When no one can see what changed, who owns the review, or whether action was taken, regulatory updates become business risk.</p>
          <Link href="/resources/regulatory-monitoring-workflow-without-manual-checks">Read the regulatory monitoring workflow guide</Link>
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading
          eyebrow="The solution"
          title="One system for monitoring, understanding, assigning, and proving response work."
          text="Legal WatchDog brings source tracking, AI-assisted summaries, revision history, notifications, and ticket-based collaboration into a structured enterprise workflow."
          align="center"
        />
        <FeatureGrid limit={6} />
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="How it works"
          title="From source update to accountable action in five steps."
          text="The workflow is designed for teams that need clarity, speed, and evidence, not another scattered inbox."
        />
        <div className="workflow-grid">
          {steps.map((step, index) => (
            <article key={step} className="workflow-step">
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell dark-panel">
        <SectionHeading
          eyebrow="Use cases"
          title="Designed for regulated teams with real monitoring pressure."
          text="Use Legal WatchDog to organize source tracking by industry, jurisdiction, and response workflow."
        />
        <div className="card-grid two">
          {useCases.map((item) => (
            <article className="dark-card" key={item.title}>
              <p className="mini-label">{item.industry}</p>
              <h3>{item.title}</h3>
              <p>{item.challenge}</p>
              <p>{item.solution}</p>
              <small>{item.result}</small>
              <br />
              <Link href={`/case-studies#${item.id}`}>View use case</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Who it supports"
          title="Every stakeholder sees the context they need without losing control of access."
        />
        <div className="card-grid three">
          {personas.map((persona) => (
            <article className="info-card" key={persona.role}>
              <p className="mini-label">{persona.name}</p>
              <h3>{persona.role}</h3>
              <p>{persona.pain}</p>
              <strong>{persona.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell split-section" id="security">
        <div>
          <p className="eyebrow">Enterprise readiness</p>
          <h2>Built around control, traceability, and human review.</h2>
        </div>
        <div className="check-list">
          <p>Role-based access and project-level permissions.</p>
          <p>Audit logs for source changes, tickets, comments, assignments, and access events.</p>
          <p>Temporary specialist access limited to specific tickets.</p>
          <p>Encryption, secure sessions, daily backups, and a 99.9% uptime target.</p>
          <p>AI summaries support review, but final legal decisions remain with qualified professionals.</p>
          <Link href="/resources/compliance-audit-trails-regulatory-updates">Read why audit trails matter</Link>
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading
          eyebrow="Industries"
          title="For teams where missed updates are expensive."
          text="Legal WatchDog is designed for enterprise and regulated organizations, not casual users or small businesses."
          align="center"
        />
        <div className="card-grid four">
          {industries.slice(0, 8).map((industry) => (
            <article className="compact-card" key={industry.name}>
              <h3>{industry.name}</h3>
              <p>{industry.text}</p>
              <Link href={industry.href}>Related workflow</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell proof-section">
        <SectionHeading
          eyebrow="Proof plan"
          title="No fake claims. Clear placeholders for the proof to collect before launch."
          text="This build avoids fake testimonials, fake logos, and fake percentages. Replace these proof blocks after pilot validation."
          align="center"
        />
        <div className="card-grid four">
          {proofToCollect.map((item) => (
            <article className="info-card" key={item}><h3>{item}</h3></article>
          ))}
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Resources" title="Search-friendly guides that support the buying journey." text="Each guide links back to product pages, industry pages, and demo CTAs so the Resources section supports SEO and conversion." align="center" />
        <div className="card-grid three">
          {resourcePosts.slice(0, 3).map((post) => (
            <article className="resource-card" key={post.slug}>
              <p className="mini-label">{post.category}</p>
              <h3><Link href={`/resources/${post.slug}`}>{post.title}</Link></h3>
              <p>{post.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <ConversionPanel />

      <section className="section-shell">
        <SectionHeading eyebrow="FAQ" title="Questions enterprise buyers usually ask first." />
        <FAQ />
      </section>

      <InternalLinks />
      <CTASection />
    </>
  );
}
