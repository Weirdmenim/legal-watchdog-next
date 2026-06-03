import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { seo } from "@/data/site";
import { organizationSchema, pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.about, path: "/about" });

const principles = [
  "Compliance work needs reliable evidence, not scattered screenshots.",
  "AI should reduce reading time without replacing professional judgment.",
  "External experts should get the right context without unnecessary access.",
  "Every important regulatory update should have an owner, status, and history."
];

const boundaries = [
  "Legal WatchDog is built for enterprise organizations and regulated teams with serious monitoring responsibilities.",
  "Legal WatchDog is currently positioned as a responsive web app, not a native mobile app.",
  "AI summaries are review support, not legal advice.",
  "Some websites may block scraping, so failed checks and source status remain visible to the team.",
  "External specialists should only access the tickets they were invited to review."
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <section className="page-hero section-shell">
        <p className="eyebrow">About Legal WatchDog</p>
        <h1>Built for enterprise teams that cannot afford to miss regulatory change.</h1>
        <p>
          Legal WatchDog centralizes monitoring, AI-assisted summaries, ticketing, and collaboration so compliance, legal, and operations teams can move from update detection to accountable response.
        </p>
      </section>

      <section className="section-shell split-section">
        <div>
          <p className="eyebrow">Why it exists</p>
          <h2>Regulatory work is not just research. It is coordination, proof, and action.</h2>
        </div>
        <div className="stacked-copy">
          <p>Many organizations still depend on manual source checks, internal chats, spreadsheets, and email threads. This creates blind spots when sources change, when teams are stretched, or when ownership is unclear.</p>
          <p>Legal WatchDog gives enterprise teams a structured way to monitor sources, review changes, invite the right stakeholders, and preserve the evidence of what happened.</p>
          <Link href="/resources/regulatory-change-management-enterprise-teams">Read the regulatory change management guide</Link>
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Product principles" title="Serious compliance teams need a serious operating system." align="center" />
        <div className="card-grid two">
          {principles.map((item) => (
            <article className="info-card" key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell split-section">
        <div>
          <p className="eyebrow">AI with boundaries</p>
          <h2>Summaries help teams move faster. They do not replace legal judgment.</h2>
        </div>
        <div className="stacked-copy">
          <p>Legal WatchDog uses AI to explain what changed, highlight potential impact, and make long or technical updates easier to review. It also keeps source context, diff history, and confidence scores visible.</p>
          <p>Important decisions should still be reviewed by qualified legal, compliance, or domain professionals. The product is built to support that human review loop.</p>
          <Link href="/resources/ai-summaries-in-compliance-human-review">Read the AI summaries guide</Link>
        </div>
      </section>

      <section className="section-shell dark-panel">
        <SectionHeading eyebrow="Responsible product boundaries" title="Trust improves when the product is clear about what it does and does not do." />
        <div className="card-grid two">
          {boundaries.map((item) => <article className="dark-card" key={item}><h3>{item}</h3></article>)}
        </div>
      </section>

      <InternalLinks />
      <CTASection title="See how Legal WatchDog fits your compliance operating model." />
    </>
  );
}
