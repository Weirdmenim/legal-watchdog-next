type ProductMockupProps = {
  variant?: "overview" | "source" | "summary" | "tickets" | "audit" | "jurisdiction";
};

const mockupData = {
  overview: {
    eyebrow: "Command centre",
    title: "Global Privacy Compliance",
    metric: "32 monitored sources",
    rows: ["4 updates detected", "2 tickets awaiting legal review", "1 overdue operational action"],
    insight: "AI summary prepared for GDPR guidance update. Human review required before policy change."
  },
  source: {
    eyebrow: "Source monitoring",
    title: "Official sources by jurisdiction",
    metric: "Last check: 12 min ago",
    rows: ["UK DPA guidance • Updated", "EU Commission page • No change", "Singapore PDPA notice • Check failed"],
    insight: "Failed checks are flagged so teams can confirm coverage instead of assuming monitoring is complete."
  },
  summary: {
    eyebrow: "AI review support",
    title: "What changed and why it matters",
    metric: "Confidence: High",
    rows: ["New language added to data processing guidance", "Product and legal review recommended", "Source and revision history attached"],
    insight: "AI explains the change faster, but final decisions remain with qualified professionals."
  },
  tickets: {
    eyebrow: "Response workflow",
    title: "Ticket board",
    metric: "Due today: 3",
    rows: ["Open • Visa waiver update", "In review • FDA GMP guidance", "Resolved • Contract clause requirement"],
    insight: "Every update becomes easier to assign, discuss, escalate, and close with evidence."
  },
  audit: {
    eyebrow: "Audit trail",
    title: "Evidence history",
    metric: "12 actions logged",
    rows: ["Source checked by system", "Ticket assigned to David", "Legal advisor comment added"],
    insight: "Revision, summary, ticket, comments, files, ownership, and final decision stay connected."
  },
  jurisdiction: {
    eyebrow: "Coverage map",
    title: "Jurisdiction structure",
    metric: "6 regions active",
    rows: ["EU • 14 sources", "United Kingdom • 8 sources", "United States • 10 sources"],
    insight: "Projects can be organized by country, state, branch, department, or regulatory area."
  }
};

export function ProductMockup({ variant = "overview" }: ProductMockupProps) {
  const item = mockupData[variant];

  return (
    <aside className={`product-mockup product-mockup-${variant}`} aria-label={`${item.title} product preview`}>
      <div className="mockup-header">
        <div>
          <p className="mini-label">{item.eyebrow}</p>
          <h3>{item.title}</h3>
        </div>
        <span>{item.metric}</span>
      </div>
      <div className="mockup-body">
        <div className="mockup-sidebar" aria-hidden="true">
          <span className="active" />
          <span />
          <span />
          <span />
        </div>
        <div className="mockup-main">
          {item.rows.map((row) => (
            <div className="mockup-row" key={row}>
              <span aria-hidden="true" />
              <p>{row}</p>
            </div>
          ))}
          <div className="mockup-insight">
            <strong>Reviewer note</strong>
            <p>{item.insight}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
