import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { HeroVisual } from "@/components/HeroVisual";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBar } from "@/components/TrustBar";
import { ProductMockup } from "@/components/ProductMockup";
import { TrustStack } from "@/components/TrustStack";
import { industries, seo, useCases } from "@/data/site";
import { faqSchema, organizationSchema, pageMetadata, softwareSchema } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.home, path: "/" });

const workflow = [
  "Create a monitoring project",
  "Add jurisdictions and trusted sources",
  "Detect source changes",
  "Review an AI-assisted summary",
  "Assign owners and track resolution"
];

const coreWorkflows = [
  {
    title: "Monitor trusted sources",
    text: "Track official web pages, documents, and APIs by project, jurisdiction, and source owner.",
    href: "/features/source-monitoring"
  },
  {
    title: "Detect what changed",
    text: "Compare old and new source content so reviewers can see the update without rereading every source manually.",
    href: "/features/change-detection"
  },
  {
    title: "Summarize impact",
    text: "Use AI-assisted summaries and confidence signals to help qualified reviewers understand the change faster.",
    href: "/features/ai-summaries"
  },
  {
    title: "Assign the response",
    text: "Create tickets, add owners, invite specialists, track deadlines, and keep evidence in one place.",
    href: "/features/compliance-ticketing"
  }
];

const homeFaqs = [
  {
    q: "Who is Legal WatchDog built for?",
    a: "Legal WatchDog is built for enterprise and regulated organizations with complex compliance monitoring needs across sources, jurisdictions, and internal teams."
  },
  {
    q: "Does the AI make legal decisions?",
    a: "No. AI summaries help teams understand source changes faster, but final legal and compliance decisions remain with qualified professionals."
  },
  {
    q: "Can teams invite external specialists?",
    a: "Yes. External specialists can be invited into specific tickets so they can review context and comment without full workspace access."
  },
  {
    q: "What happens after a change is detected?",
    a: "The update can be summarized, turned into a ticket, assigned to an owner, discussed with the right people, and tracked until resolution."
  },
  {
    q: "Is this a web app or mobile app?",
    a: "Legal WatchDog is currently positioned as a responsive web app, not a native mobile app."
  }
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), softwareSchema(), faqSchema(homeFaqs)]} />
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Regulatory monitoring software for enterprise teams</p>
          <h1>Regulatory change monitoring for enterprise compliance teams.</h1>
          <p className="hero-text">
            Monitor official sources, detect meaningful changes, review AI-assisted summaries, and assign the response before regulatory updates become operational risk.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact" trackingId="home-hero-demo">Book a Demo</ButtonLink>
            <ButtonLink href="/features" variant="secondary" trackingId="home-hero-features">See the Workflow</ButtonLink>
          </div>
          <p className="microcopy">Built for large teams managing multiple jurisdictions, source updates, reviewers, and audit evidence.</p>
        </div>
        <HeroVisual />
      </section>

      <section className="section-shell trust-section" aria-label="Trust signals">
        <TrustBar />
      </section>

      <section className="section-shell split-section">
        <div>
          <p className="eyebrow">The risk</p>
          <h2>Manual monitoring breaks when updates are scattered and ownership is unclear.</h2>
        </div>
        <div className="stacked-copy">
          <p>Important changes can sit inside official websites, PDFs, portals, emails, and team chats. When review depends on manual checks, teams lose time and context.</p>
          <p>Legal WatchDog gives every detected update a source, summary, owner, status, and evidence trail.</p>
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading
          eyebrow="Product workflow"
          title="Monitor sources. Detect changes. Summarize impact. Assign the response."
          text="A simple operating flow for teams that need to know what changed and what must happen next."
          align="center"
        />
        <div className="workflow-grid">
          {workflow.map((step, index) => (
            <article key={step} className="workflow-step">
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>


      <section className="section-shell mockup-showcase">
        <SectionHeading
          eyebrow="Product preview"
          title="Show every reviewer the source, summary, owner, and evidence trail."
          text="The site now shows realistic product states instead of only explaining the platform in text."
          align="center"
        />
        <div className="mockup-showcase-grid">
          <ProductMockup variant="source" />
          <ProductMockup variant="summary" />
          <ProductMockup variant="tickets" />
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Core workflows"
          title="Everything points toward faster review and clearer accountability."
          text="Each workflow supports the work buyers care about most: monitoring, detection, summary review, response ownership, and evidence."
        />
        <div className="card-grid four">
          {coreWorkflows.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link href={item.href}>Explore feature</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell dark-panel">
        <SectionHeading
          eyebrow="Use cases"
          title="Start with one high-risk monitoring workflow. Expand after the process is proven."
          text="Legal WatchDog is useful where regulatory change creates operational work across legal, compliance, and business teams."
        />
        <div className="card-grid two">
          {useCases.slice(0, 4).map((item) => (
            <article className="dark-card" key={item.title}>
              <p className="mini-label">{item.industry}</p>
              <h3>{item.title}</h3>
              <p>{item.challenge}</p>
              <Link href={`/use-cases#${item.id}`}>View workflow</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell split-section" id="security">
        <div>
          <p className="eyebrow">Enterprise trust</p>
          <h2>Built around control, traceability, and human review.</h2>
        </div>
        <TrustStack />
      </section>

      <section className="section-shell light-panel">
        <SectionHeading
          eyebrow="Industries"
          title="For organizations where a missed update can become serious risk."
          text="Explore the sectors where regulatory monitoring, source evidence, and accountable response workflows matter most."
          align="center"
        />
        <div className="card-grid four">
          {industries.slice(0, 8).map((industry) => (
            <article className="compact-card" key={industry.name}>
              <h3>{industry.name}</h3>
              <p>{industry.text}</p>
              <Link href={industry.href}>View industry</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="FAQ" title="Questions enterprise buyers usually ask first." />
        <FAQ items={homeFaqs} />
      </section>

      <CTASection title="Ready to turn regulatory updates into assigned response work?" text="Book a focused demo and walk through one monitoring workflow your team handles manually today." />
    </>
  );
}
