import { ButtonLink } from "@/components/ButtonLink";

const goals = [
  "Map the jurisdictions your team monitors",
  "Review source types and current manual checks",
  "Walk through summaries, tickets, ownership, and evidence",
  "Decide which workflow should be piloted first"
];

export function ConversionPanel() {
  return (
    <section className="conversion-panel section-shell" aria-labelledby="conversion-panel-title">
      <div>
        <p className="eyebrow">Demo planning</p>
        <h2 id="conversion-panel-title">A better demo starts with your real sources and response workflow.</h2>
        <p>
          Instead of a generic product tour, use the demo to pressure-test one monitoring workflow your team already handles manually.
        </p>
      </div>
      <div className="check-list compact">
        {goals.map((goal) => <p key={goal}>{goal}</p>)}
      </div>
      <ButtonLink href="/contact" trackingId="conversion-panel-demo">Book a Demo</ButtonLink>
    </section>
  );
}
