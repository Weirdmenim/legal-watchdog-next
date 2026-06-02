export const siteConfig = {
  name: "Legal WatchDog",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://legal-watchdog.vercel.app",
  description:
    "Legal WatchDog helps enterprise legal, compliance, and operations teams monitor regulatory sources, detect changes, summarize impact, and assign response work.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" }
  ]
};

export const seo = {
  home: {
    title: "AI Regulatory Monitoring Software for Enterprise Teams",
    description:
      "Detect regulatory changes, summarize impact, create tickets, and coordinate compliance response across jurisdictions with Legal WatchDog.",
    keywords: ["AI regulatory monitoring software", "regulatory change management", "compliance monitoring platform"]
  },
  about: {
    title: "About Legal WatchDog",
    description:
      "Learn how Legal WatchDog helps enterprise teams replace scattered regulatory research with structured monitoring, summaries, tickets, and audit evidence.",
    keywords: ["enterprise compliance software", "regulatory intelligence platform"]
  },
  features: {
    title: "Features for Regulatory Monitoring and Compliance Response",
    description:
      "Explore source monitoring, AI summaries, revision history, ticketing, notifications, permissions, audit logs, specialist access, and API access.",
    keywords: ["compliance ticketing system", "AI compliance summaries", "regulatory update alerts"]
  },
  industries: {
    title: "Industries Served by Legal WatchDog",
    description:
      "Regulatory monitoring for travel, aviation, healthcare, finance, insurance, logistics, manufacturing, technology, and other regulated sectors.",
    keywords: ["multi jurisdiction compliance", "regulated industry compliance monitoring"]
  },
  pricing: {
    title: "Enterprise Pricing for Regulatory Monitoring",
    description:
      "Review Legal WatchDog pricing packages for enterprise teams based on projects, sources, jurisdictions, users, specialist access, API needs, and support.",
    keywords: ["regulatory monitoring pricing", "enterprise compliance software pricing"]
  },
  caseStudies: {
    title: "Regulatory Monitoring Use Cases and Case Study Templates",
    description:
      "See how Legal WatchDog supports immigration monitoring, FDA update tracking, privacy law monitoring, and enterprise risk workflows.",
    keywords: ["regulatory monitoring case studies", "compliance workflow examples"]
  },
  resources: {
    title: "Resources on Regulatory Monitoring and Compliance Operations",
    description:
      "Read practical guides on regulatory monitoring, AI summaries, audit trails, multi-jurisdiction compliance, and compliance workflow automation.",
    keywords: ["regulatory monitoring resources", "compliance operations blog"]
  },
  checklist: {
    title: "Compliance Monitoring Checklist",
    description:
      "Download a practical checklist for mapping sources, jurisdictions, alerts, tickets, owners, and audit evidence before implementing regulatory monitoring software.",
    keywords: ["compliance monitoring checklist", "regulatory monitoring checklist"]
  },
  contact: {
    title: "Book a Legal WatchDog Demo",
    description:
      "Request an enterprise demo and review how Legal WatchDog can fit your sources, jurisdictions, response owners, API needs, and compliance workflow.",
    keywords: ["book regulatory monitoring demo", "compliance software demo"]
  }
};

export const features = [
  {
    title: "Project and jurisdiction management",
    text: "Create monitoring projects, assign jurisdictions and sub-jurisdictions, and keep complex regulatory areas organized by business need.",
    href: "/features#project-jurisdiction"
  },
  {
    title: "Source discovery and source management",
    text: "Add URLs, documents, and APIs manually, or use AI-assisted suggestions to identify credible sources for a project.",
    href: "/features#source-management"
  },
  {
    title: "Automatic and manual scraping",
    text: "Run scheduled checks in the background and trigger manual checks when teams need to confirm the latest source information.",
    href: "/features#monitoring"
  },
  {
    title: "Change detection and revision history",
    text: "Compare old and new source content, preserve revision history, and give reviewers evidence for what changed.",
    href: "/features#change-detection"
  },
  {
    title: "AI summaries with confidence scores",
    text: "Turn long or technical updates into clear summaries that help professionals review faster without replacing legal judgment.",
    href: "/features#ai-summaries"
  },
  {
    title: "Ticketing and accountable response",
    text: "Create tickets automatically or manually, assign owners, track status, upload files, and keep decisions in one thread.",
    href: "/features#collaboration"
  },
  {
    title: "Notifications and escalation rules",
    text: "Notify teams in-app and by email when revisions, assignments, overdue tickets, or high-priority updates need attention.",
    href: "/features#notifications"
  },
  {
    title: "Controlled external specialist access",
    text: "Invite legal advisors or specialists to specific tickets without giving them unnecessary workspace access.",
    href: "/features#specialist-access"
  },
  {
    title: "Team permissions and audit logs",
    text: "Manage users, roles, project-level permissions, and audit trails for actions that affect compliance review.",
    href: "/features#security"
  },
  {
    title: "API access for internal systems",
    text: "Pull project data, revision history, and monitoring results into internal dashboards and automation workflows.",
    href: "/features#api"
  }
];

export const personas = [
  {
    name: "Sarah",
    role: "Organization Administrator",
    pain: "Needs clean access control, workspace structure, onboarding, offboarding, and reliable audit visibility.",
    value: "Sees role-based permissions, controlled external access, audit logs, and secure team management."
  },
  {
    name: "David",
    role: "Compliance Project Manager",
    pain: "Needs to reduce noisy alerts, assign the right owner, and keep monitoring projects moving.",
    value: "Sees project setup, jurisdiction hierarchy, source checks, summaries, tickets, and status visibility."
  },
  {
    name: "Amina",
    role: "Compliance Team Member",
    pain: "Needs context when she is tagged into a ticket and a clear view of what changed.",
    value: "Sees AI-assisted summaries, revision history, ticket comments, file uploads, and review context."
  },
  {
    name: "Legal Advisor",
    role: "External Specialist",
    pain: "Needs to review a regulatory issue quickly without long setup or unnecessary access.",
    value: "Sees ticket-only access, source context, summary, discussion thread, and clean exit after resolution."
  },
  {
    name: "Operations Lead",
    role: "Operational Stakeholder",
    pain: "Needs to know what changed, what action is required, who owns it, and when it is due.",
    value: "Sees notifications, tickets, due dates, assignments, status updates, and escalation paths."
  },
  {
    name: "Executive Buyer",
    role: "Head of Legal, Compliance, or Operations",
    pain: "Needs risk reduction, visibility, reliability, governance, and proof that the team responded on time.",
    value: "Sees audit trails, reporting, enterprise readiness, human review boundaries, and scalable workflows."
  }
];

export const industries = [
  {
    name: "Tourism and Travel",
    text: "Monitor visa, immigration, entry, customer guidance, and cross-border policy changes across priority destinations.",
    href: "/case-studies#travel"
  },
  {
    name: "Aviation",
    text: "Track operational rules, safety updates, airport guidance, fueling requirements, and government notices.",
    href: "/case-studies#travel"
  },
  {
    name: "Healthcare and Pharma",
    text: "Monitor FDA updates, recalls, GMP guidance, device classifications, and public health policy changes.",
    href: "/case-studies#healthcare"
  },
  {
    name: "Finance and Banking",
    text: "Track regulatory notices, risk guidance, compliance obligations, reporting rules, and multi-market updates.",
    href: "/resources/multi-jurisdiction-compliance-monitoring-guide"
  },
  {
    name: "Insurance",
    text: "Keep policy, claims, consumer protection, privacy, and supervisory updates visible across teams.",
    href: "/resources/regulatory-change-management-enterprise-teams"
  },
  {
    name: "Technology and Privacy",
    text: "Monitor GDPR, CCPA, UK DPA, Singapore PDPA, AI data processing guidance, and privacy requirements.",
    href: "/case-studies#privacy"
  },
  {
    name: "Oil and Gas",
    text: "Keep legal, safety, operational, environmental, and contract-related regulatory changes in one workflow.",
    href: "/case-studies#risk"
  },
  {
    name: "Logistics",
    text: "Watch customs, transport, port, safety, and cross-border operational policy updates.",
    href: "/case-studies#risk"
  },
  {
    name: "Manufacturing",
    text: "Track standards, safety rules, import/export obligations, labor rules, and supply chain compliance changes.",
    href: "/resources/compliance-audit-trails-regulatory-updates"
  }
];

export const useCases = [
  {
    id: "travel",
    title: "Travel company monitoring immigration rules",
    industry: "Tourism, travel, and aviation",
    challenge: "Visa policies and entry rules change across several countries, creating customer guidance and operational risk.",
    solution: "Monitor official sources across priority jurisdictions, detect changes, summarize impact, and assign customer guidance updates.",
    result: "Placeholder result: fewer manual checks, faster customer guidance updates, and reduced missed-policy risk."
  },
  {
    id: "healthcare",
    title: "Healthcare company tracking FDA updates",
    industry: "Healthcare and pharma",
    challenge: "Medical device guidance, recalls, GMP updates, and process requirements need fast review by compliance teams.",
    solution: "Track official FDA sources, detect revisions, summarize possible impact, and open review tickets for accountable follow-up.",
    result: "Placeholder result: faster review cycle and better evidence for compliance follow-up."
  },
  {
    id: "privacy",
    title: "Tech company monitoring privacy laws",
    industry: "Technology and privacy",
    challenge: "Privacy obligations shift across GDPR, CCPA, UK DPA, Singapore PDPA, and AI-related guidance.",
    solution: "Map privacy jurisdictions, monitor official updates, and assign legal review tickets with source context.",
    result: "Placeholder result: improved legal visibility and reduced external research load."
  },
  {
    id: "risk",
    title: "Corporate risk team tracking contract-related rules",
    industry: "Enterprise risk",
    challenge: "Contract obligations and regulatory conditions change across local, state, and international sources.",
    solution: "Group sources by project, detect revisions, and document decisions in ticket threads with owners and deadlines.",
    result: "Placeholder result: stronger accountability and clearer audit evidence."
  }
];

export const pricingPlans = [
  {
    name: "Team",
    fit: "Best for a focused enterprise compliance team validating a first monitoring workflow.",
    cta: "Book a Demo",
    features: ["Core projects", "Jurisdiction setup", "Manual source management", "Revision history", "In-app and email alerts", "Ticketing", "Standard support"]
  },
  {
    name: "Business",
    fit: "Best for regulated teams monitoring multiple departments, source groups, or jurisdictions.",
    cta: "Talk to Sales",
    features: ["Everything in Team", "AI-assisted source discovery", "Scheduled scraping", "External specialist invites", "Reviewed status", "API access", "Priority support"]
  },
  {
    name: "Enterprise",
    fit: "Best for large organizations needing stronger governance, scale, implementation help, and audit readiness.",
    cta: "Contact Sales",
    features: ["Everything in Business", "Project-level permissions", "Audit logs", "Exportable reports", "Custom onboarding", "Security review support", "Success planning"]
  },
  {
    name: "Custom Enterprise",
    fit: "Best for complex organizations with strict procurement, security, jurisdiction, or integration requirements.",
    cta: "Request Enterprise Review",
    features: ["Custom monitoring scope", "Custom source limits", "Integration planning", "Procurement support", "Dedicated success planning", "Custom legal and security review", "Roadmap alignment"]
  }
];

export const resourceCategories = [
  "Regulatory monitoring",
  "Compliance operations",
  "Legal operations",
  "AI in compliance",
  "Risk management",
  "Audit readiness"
];

export type ResourcePost = {
  slug: string;
  title: string;
  category: string;
  keyword: string;
  intent: string;
  summary: string;
  audience: string;
  relatedFeature: string;
  relatedFeatureHref: string;
  sections: { heading: string; body: string[] }[];
};

export const resourcePosts: ResourcePost[] = [
  {
    slug: "regulatory-monitoring-workflow-without-manual-checks",
    title: "How to Build a Regulatory Monitoring Workflow That Does Not Depend on Manual Checks",
    category: "Regulatory monitoring",
    keyword: "regulatory monitoring workflow",
    intent: "Educate compliance managers on moving from scattered research to structured monitoring.",
    audience: "Compliance managers and project owners",
    relatedFeature: "Source monitoring and revision history",
    relatedFeatureHref: "/features#monitoring",
    summary: "A practical guide to source mapping, update detection, ticket ownership, and review discipline.",
    sections: [
      {
        heading: "Start with the sources that create real risk",
        body: [
          "A useful monitoring workflow does not begin with every possible source. It begins with the sources your team already worries about missing. List the official websites, documents, notices, APIs, and guidance pages that affect your business decisions.",
          "Group each source by project, jurisdiction, and business owner. This makes the workflow easier to review and easier to defend later."
        ]
      },
      {
        heading: "Turn each update into a review action",
        body: [
          "A detected change is not enough. Someone must review the change, decide whether it matters, and assign the next action. That is why monitoring should connect directly to tickets, owners, due dates, and status tracking.",
          "Legal WatchDog is designed around that bridge: source change, AI-assisted summary, ticket, owner, response, and history."
        ]
      },
      {
        heading: "Keep evidence close to the decision",
        body: [
          "Manual workflows often lose the evidence behind a decision. A stronger workflow keeps the source, revision, summary, comments, files, and final action in one place.",
          "That structure helps future reviewers understand not only what changed, but how the team responded."
        ]
      }
    ]
  },
  {
    slug: "regulatory-change-management-enterprise-teams",
    title: "Regulatory Change Management: What Enterprise Teams Need Before the Next Update Lands",
    category: "Compliance operations",
    keyword: "regulatory change management",
    intent: "Capture buyers researching regulatory change processes.",
    audience: "Heads of compliance, legal operations, and operations leaders",
    relatedFeature: "Tickets and collaboration",
    relatedFeatureHref: "/features#collaboration",
    summary: "The steps from source tracking to impact review, escalation, ownership, and audit evidence.",
    sections: [
      {
        heading: "Change management fails when ownership is unclear",
        body: [
          "Most regulatory change problems are not only research problems. They are ownership problems. A team may know that something changed but still fail to act because no owner, deadline, or review path was created.",
          "A serious change workflow should define who reviews updates, who approves the next step, who implements the action, and when escalation happens."
        ]
      },
      {
        heading: "Use projects and jurisdictions to reduce confusion",
        body: [
          "Enterprise teams often monitor many regions and many types of rules. A project-based structure keeps the work understandable. One team can monitor immigration rules, another can monitor FDA guidance, and another can track privacy laws.",
          "Jurisdictions and sub-jurisdictions make the structure match how the organization actually operates."
        ]
      },
      {
        heading: "Measure response quality, not just detection speed",
        body: [
          "Fast alerts matter, but they are only part of the workflow. Teams should also measure review time, ticket resolution time, overdue tickets, escalations, and evidence completeness.",
          "That is the difference between being notified and being ready for audit."
        ]
      }
    ]
  },
  {
    slug: "ai-summaries-in-compliance-human-review",
    title: "AI Summaries in Compliance: Helpful Assistant, Not Legal Decision-Maker",
    category: "AI in compliance",
    keyword: "AI compliance summaries",
    intent: "Address AI trust, accuracy, and legal review concerns.",
    audience: "Legal teams, compliance leaders, and enterprise buyers",
    relatedFeature: "AI summaries with confidence scores",
    relatedFeatureHref: "/features#ai-summaries",
    summary: "How AI can reduce reading time while keeping final judgment with qualified professionals.",
    sections: [
      {
        heading: "AI should make review faster, not remove review",
        body: [
          "Compliance and legal teams do not need AI that pretends to make final decisions. They need help finding changes, understanding what changed, and routing the right work to the right people.",
          "AI summaries are review support, not legal advice. Legal WatchDog treats AI summaries as review support. The platform should show source context, revision history, and confidence signals so people can judge the output."
        ]
      },
      {
        heading: "Keep source context visible",
        body: [
          "A summary is only useful when the reviewer can see where it came from. The source, prior version, new version, detected difference, and ticket discussion should stay connected.",
          "That context prevents teams from treating summaries as unsupported conclusions."
        ]
      },
      {
        heading: "Use disclaimers without weakening the product",
        body: [
          "The right message is clear: AI helps teams understand regulatory updates faster, but important legal and compliance decisions remain with qualified professionals.",
          "This builds trust with enterprise buyers who care about control and accountability."
        ]
      }
    ]
  },
  {
    slug: "compliance-audit-trails-regulatory-updates",
    title: "Why Compliance Teams Need Audit Trails for Regulatory Updates",
    category: "Audit readiness",
    keyword: "compliance audit trail",
    intent: "Educate admins and executives on traceability.",
    audience: "Organization administrators, auditors, and executives",
    relatedFeature: "Team permissions and audit logs",
    relatedFeatureHref: "/features#security",
    summary: "Covers revision history, tickets, comments, approvals, and ownership evidence.",
    sections: [
      {
        heading: "Audit trails answer the questions teams forget to document",
        body: [
          "When a regulator, customer, or executive asks what happened, the team needs more than memory. They need to show what changed, when it changed, who reviewed it, and what action was taken.",
          "A strong audit trail keeps the source, revision, summary, ticket, comments, files, assignments, and status changes together."
        ]
      },
      {
        heading: "Access control is part of the evidence",
        body: [
          "It matters who could see, edit, invite, or approve work inside the system. Role-based access and project-level permissions help organizations prove that sensitive compliance work was controlled.",
          "Temporary specialist access should also be limited and visible, so external review does not become a security problem."
        ]
      },
      {
        heading: "Good evidence reduces future rework",
        body: [
          "When decisions are documented near the source change, teams do not need to rebuild context months later. The system becomes a memory layer for compliance response.",
          "This is especially useful for teams with many jurisdictions, sources, and cross-functional owners."
        ]
      }
    ]
  },
  {
    slug: "multi-jurisdiction-compliance-monitoring-guide",
    title: "Multi-Jurisdiction Compliance Monitoring: A Practical Setup Guide",
    category: "Regulatory monitoring",
    keyword: "multi-jurisdiction compliance monitoring",
    intent: "Help teams structure monitoring across countries, regions, and departments.",
    audience: "Compliance project managers and legal operations teams",
    relatedFeature: "Project and jurisdiction management",
    relatedFeatureHref: "/features#project-jurisdiction",
    summary: "A guide to structuring projects, jurisdictions, sub-jurisdictions, sources, alerts, and owners.",
    sections: [
      {
        heading: "Separate the project from the geography",
        body: [
          "A project should describe the regulatory area. A jurisdiction should describe where the rule applies. This makes complex monitoring easier to scale.",
          "For example, a privacy compliance project may cover GDPR, CCPA, UK DPA, and Singapore PDPA. Each jurisdiction can have its own sources, reviewers, and response path."
        ]
      },
      {
        heading: "Give each jurisdiction a source owner",
        body: [
          "Multi-jurisdiction monitoring fails when every alert goes to the same person. A better setup assigns source owners, reviewers, and escalation routes by jurisdiction or source type.",
          "This keeps alerts relevant and reduces review delays."
        ]
      },
      {
        heading: "Use reporting to find weak spots",
        body: [
          "Teams should review source status, failed scrapes, overdue tickets, unresolved revisions, and jurisdictions with poor coverage.",
          "This turns monitoring from a passive alert system into an operating rhythm."
        ]
      }
    ]
  },
  {
    slug: "compliance-ticketing-system-for-regulatory-response",
    title: "What a Compliance Ticketing System Should Do After a Regulatory Change Is Found",
    category: "Compliance operations",
    keyword: "compliance ticketing system",
    intent: "Explain why tickets are central to response accountability.",
    audience: "Operations directors, compliance managers, and legal operations leads",
    relatedFeature: "Ticketing and accountable response",
    relatedFeatureHref: "/features#collaboration",
    summary: "The essentials: context, owner, deadline, discussion, evidence, external specialist access, and final status.",
    sections: [
      {
        heading: "A ticket should carry the context, not just the task",
        body: [
          "A compliance ticket is weak if it only says that an update happened. It should include the source, detected change, AI-assisted summary, affected jurisdiction, reviewer, assigned owner, and due date.",
          "That gives every participant enough context to respond without chasing messages across email and chat."
        ]
      },
      {
        heading: "External review needs narrow access",
        body: [
          "Sometimes a legal advisor or specialist must review a specific issue. They should be able to see that ticket, comment, upload files, and leave a decision without seeing unrelated workspace data.",
          "This preserves collaboration without weakening security."
        ]
      },
      {
        heading: "Closed tickets should become evidence",
        body: [
          "After resolution, the ticket should show what changed, what was decided, who participated, what files were attached, and when the work was closed.",
          "That history is useful for audits, internal reviews, and future similar changes."
        ]
      }
    ]
  }
];

export const faqs = [
  {
    q: "Does Legal WatchDog provide legal advice?",
    a: "No. Legal WatchDog supports regulatory monitoring, summaries, tickets, and review workflows. Final legal decisions should remain with qualified professionals."
  },
  {
    q: "How does the platform handle AI accuracy concerns?",
    a: "The product should keep source context, revision history, diff views, confidence scores, and human review loops visible so teams can verify important updates."
  },
  {
    q: "Can external specialists access the whole workspace?",
    a: "No. External specialists should receive controlled, ticket-only access and that access should end when the ticket is closed."
  },
  {
    q: "What happens if a website blocks scraping?",
    a: "Some websites may block scraping. The product should flag failed checks, show source status, and support alternative source handling where possible."
  },
  {
    q: "Can teams monitor documents and APIs, not just web pages?",
    a: "Yes. The PRD direction includes URLs, documents, and APIs as supported source types, with structured and unstructured data handling."
  },
  {
    q: "Is there a mobile app?",
    a: "No. The current MVP should be positioned as a web app. The website is responsive, but the product should not promise a native mobile app yet."
  },
  {
    q: "Can Legal WatchDog connect to internal dashboards?",
    a: "Yes. The MVP includes basic API access for project data, revision history, and monitoring results with organization-limited scope."
  },
  {
    q: "Who is the best fit for Legal WatchDog?",
    a: "Large enterprises and regulated organizations where compliance failures can create major financial, legal, or operational risk."
  }
];
