const trustItems = [
  "For 500+ employee organizations",
  "Multi-jurisdiction workflows",
  "Source change detection",
  "Ticket-based accountability",
  "Human review built in",
  "AI supports review, not legal advice"
];

export function TrustBar() {
  return (
    <div className="trust-bar">
      {trustItems.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}
