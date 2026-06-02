import { ButtonLink } from "@/components/ButtonLink";

export function CTASection({
  title = "Ready to see how regulatory updates become accountable action?",
  text = "Book a focused enterprise demo and review how Legal WatchDog can fit your monitoring structure, jurisdictions, sources, and response workflow."
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-section section-shell" aria-labelledby="cta-title">
      <div>
        <p className="eyebrow">Enterprise demo</p>
        <h2 id="cta-title">{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-actions">
        <ButtonLink href="/contact" trackingId="cta-demo">Book a Demo</ButtonLink>
        <ButtonLink href="/compliance-monitoring-checklist" variant="secondary" trackingId="cta-checklist">Download Checklist</ButtonLink>
      </div>
    </section>
  );
}
