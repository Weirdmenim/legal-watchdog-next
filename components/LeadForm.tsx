"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  mode?: "demo" | "contact" | "resource";
};

type BasicFields = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
};

function modeLabel(mode: LeadFormProps["mode"]) {
  if (mode === "resource") return "Download Checklist";
  if (mode === "contact") return "Send Message";
  return "Request Demo";
}

const emptyBasic: BasicFields = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  jobTitle: ""
};

export function LeadForm({ mode = "demo" }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const [basic, setBasic] = useState<BasicFields>(emptyBasic);

  function updateBasic(field: keyof BasicFields, value: string) {
    setBasic((current) => ({ ...current, [field]: value }));
  }

  function canContinue() {
    return basic.firstName.trim().length >= 2 &&
      basic.lastName.trim().length >= 2 &&
      basic.email.includes("@") &&
      basic.company.trim().length >= 2 &&
      basic.jobTitle.trim().length >= 2;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode, ...payload })
      });

      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Lead submission failed");
      setStatus("success");
      setMessage(data.message || "Thanks. Your request has been captured.");
      setBasic(emptyBasic);
      setStep(1);
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  if (mode === "resource") {
    return (
      <form className="lead-form" onSubmit={handleSubmit} aria-label="resource form" data-track="form:resource" noValidate={false}>
        <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="form-grid two">
          <label>
            First name
            <input name="firstName" type="text" autoComplete="given-name" required minLength={2} />
          </label>
          <label>
            Last name
            <input name="lastName" type="text" autoComplete="family-name" required minLength={2} />
          </label>
        </div>
        <label>
          Work email
          <input name="email" type="email" autoComplete="email" required inputMode="email" />
        </label>
        <div className="form-grid two">
          <label>
            Company
            <input name="company" type="text" autoComplete="organization" required minLength={2} />
          </label>
          <label>
            Job title
            <input name="jobTitle" type="text" autoComplete="organization-title" required minLength={2} />
          </label>
        </div>
        <label>
          Main regulatory interest
          <select name="interest" required defaultValue="">
            <option value="" disabled>Select interest</option>
            <option>Regulatory monitoring</option>
            <option>Compliance operations</option>
            <option>Legal operations</option>
            <option>Audit readiness</option>
            <option>AI summaries in compliance</option>
          </select>
        </label>
        <button className="button button-primary" type="submit" disabled={status === "sending"} data-track="submit:resource">
          {status === "sending" ? "Submitting..." : modeLabel(mode)}
        </button>
        <p className={`form-status ${status === "error" ? "error" : ""}`} role="status" aria-live="polite">{message}</p>
        <p className="form-note">By submitting, you agree to be contacted about Legal WatchDog. We use your details only to respond to your request.</p>
      </form>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} aria-label={`${mode} form`} data-track={`form:${mode}`} noValidate={false}>
      <input className="honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-progress" aria-label={`Step ${step} of 2`}>
        <span className={step === 1 ? "active" : ""}>1. Basic details</span>
        <span className={step === 2 ? "active" : ""}>2. Monitoring needs</span>
      </div>

      {step === 1 ? (
        <div className="form-step">
          <div className="form-grid two">
            <label>
              First name
              <input value={basic.firstName} onChange={(event) => updateBasic("firstName", event.target.value)} type="text" autoComplete="given-name" required minLength={2} />
            </label>
            <label>
              Last name
              <input value={basic.lastName} onChange={(event) => updateBasic("lastName", event.target.value)} type="text" autoComplete="family-name" required minLength={2} />
            </label>
          </div>
          <label>
            Work email
            <input value={basic.email} onChange={(event) => updateBasic("email", event.target.value)} type="email" autoComplete="email" required inputMode="email" />
          </label>
          <div className="form-grid two">
            <label>
              Company
              <input value={basic.company} onChange={(event) => updateBasic("company", event.target.value)} type="text" autoComplete="organization" required minLength={2} />
            </label>
            <label>
              Job title
              <input value={basic.jobTitle} onChange={(event) => updateBasic("jobTitle", event.target.value)} type="text" autoComplete="organization-title" required minLength={2} />
            </label>
          </div>
          <button className="button button-primary" type="button" onClick={() => canContinue() ? setStep(2) : setMessage("Please complete your name, work email, company, and job title first.")}>Continue</button>
        </div>
      ) : (
        <div className="form-step">
          {Object.entries(basic).map(([name, value]) => <input key={name} type="hidden" name={name} value={value} />)}
          <div className="form-grid two">
            <label>
              Industry
              <select name="industry" required defaultValue="">
                <option value="" disabled>Select industry</option>
                <option>Travel and Tourism</option>
                <option>Aviation</option>
                <option>Healthcare and Pharma</option>
                <option>Finance and Banking</option>
                <option>Technology and Privacy</option>
                <option>Oil and Gas</option>
                <option>Logistics</option>
                <option>Manufacturing</option>
                <option>Other regulated industry</option>
              </select>
            </label>
            <label>
              Company size
              <select name="companySize" required defaultValue="">
                <option value="" disabled>Select size</option>
                <option>500-1,000 employees</option>
                <option>1,001-5,000 employees</option>
                <option>5,001-20,000 employees</option>
                <option>20,000+ employees</option>
              </select>
            </label>
          </div>
          <label>
            Jurisdictions monitored
            <input name="jurisdictions" type="text" placeholder="Example: US, EU, UK, China" />
          </label>
          <label>
            Main compliance challenge
            <textarea name="challenge" rows={4} placeholder="Tell us what sources, jurisdictions, or response workflow you need to improve." required />
          </label>
          <div className="form-actions-row">
            <button className="button button-secondary" type="button" onClick={() => setStep(1)}>Back</button>
            <button className="button button-primary" type="submit" disabled={status === "sending"} data-track={`submit:${mode}`}>
              {status === "sending" ? "Submitting..." : modeLabel(mode)}
            </button>
          </div>
        </div>
      )}

      <p className={`form-status ${status === "error" ? "error" : ""}`} role="status" aria-live="polite">{message}</p>
      <p className="form-note">By submitting, you agree to be contacted about Legal WatchDog. We use your details only to respond to your request.</p>
    </form>
  );
}
