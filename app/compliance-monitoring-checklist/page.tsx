import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { seo } from "@/data/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.checklist, path: "/compliance-monitoring-checklist" });

const checklist = [
  {
    title: "Source map",
    items: ["Official sources", "Documents", "APIs", "Source owners", "Scraping limits", "Failed-check fallback"]
  },
  {
    title: "Jurisdiction map",
    items: ["Countries", "States or regions", "Business units", "Affected teams", "Priority level", "Review frequency"]
  },
  {
    title: "Response workflow",
    items: ["Reviewer", "Approver", "Ticket owner", "Deadline", "Escalation route", "External specialist rule"]
  },
  {
    title: "Evidence plan",
    items: ["Revision history", "Diff view", "AI summary", "Comments", "Files", "Final decision and close reason"]
  }
];

export default function ChecklistPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { label: "Home", href: "/" },
        { label: "Compliance Monitoring Checklist", href: "/compliance-monitoring-checklist" }
      ])} />
      <Breadcrumbs items={[{ label: "Compliance Monitoring Checklist" }]} />
      <section className="page-hero section-shell">
        <p className="eyebrow">Lead magnet</p>
        <h1>Compliance Monitoring Checklist for enterprise teams.</h1>
        <p>
          Use this checklist to plan sources, jurisdictions, owners, escalation paths, and audit evidence before your next regulatory change lands.
        </p>
      </section>

      <section className="section-shell split-section">
        <div>
          <SectionHeading eyebrow="Download" title="Capture early-stage buyers with a useful planning resource." text="This page is built as a conversion path for visitors who are interested but not ready to book a demo yet." />
          <div className="checklist-preview">
            {checklist.map((group) => (
              <article key={group.title}>
                <h2>{group.title}</h2>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <LeadForm mode="resource" />
      </section>

      <CTASection title="Need help turning the checklist into a working monitoring flow?" />
    </>
  );
}
