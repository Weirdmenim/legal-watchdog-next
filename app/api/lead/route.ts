import { NextRequest, NextResponse } from "next/server";

const allowedModes = new Set(["demo", "contact", "resource"]);

function clean(value: unknown) {
  return String(value || "").trim();
}

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const mode = clean(body.mode) || "demo";
    const email = clean(body.email).toLowerCase();
    const company = clean(body.company);
    const firstName = clean(body.firstName);
    const lastName = clean(body.lastName);
    const jobTitle = clean(body.jobTitle);
    const honeypot = clean(body.website);

    if (honeypot) {
      return NextResponse.json({ ok: true, message: "Thanks. Your request has been captured." });
    }

    if (!allowedModes.has(mode)) {
      return NextResponse.json({ ok: false, message: "Unsupported form type." }, { status: 400 });
    }

    if (!validEmail(email) || !company || !firstName || !lastName || !jobTitle) {
      return NextResponse.json(
        { ok: false, message: "Please provide your name, valid work email, company, and job title." },
        { status: 400 }
      );
    }

    // Production note:
    // Connect this route to HubSpot, Brevo, Airtable, Salesforce, Resend, or your backend endpoint.
    // Avoid logging sensitive lead data in production.
    const acceptedLead = {
      mode,
      email,
      company,
      firstName,
      lastName,
      jobTitle,
      createdAt: new Date().toISOString()
    };

    return NextResponse.json({
      ok: true,
      message: mode === "resource" ? "Thanks. The checklist request has been captured." : "Thanks. Your demo request has been captured.",
      lead: acceptedLead
    });
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }
}
