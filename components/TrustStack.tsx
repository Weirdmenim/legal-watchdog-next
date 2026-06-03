const trustItems = [
  { title: "Access control", text: "Role-based permissions, project access, and ticket-only specialist invites." },
  { title: "Evidence trail", text: "Source, revision, summary, comments, assignments, files, and decisions stay connected." },
  { title: "Human review", text: "AI supports faster review. Final legal and compliance decisions remain with qualified professionals." },
  { title: "Operational reliability", text: "Designed for scheduled checks, failed-source visibility, backups, audit logs, and enterprise workflows." }
];

export function TrustStack() {
  return (
    <div className="trust-stack">
      {trustItems.map((item) => (
        <article key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
