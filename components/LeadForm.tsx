"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  mode?: "demo" | "contact" | "resource";
};

function modeLabel(mode: LeadFormProps["mode"]) {
  if (mode === "resource") return "Download Checklist";
  if (mode === "contact") return "Send Message";
  return "Request Demo";
}

export function LeadForm({ mode = "demo" }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

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
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} aria-label={`${mode} form`} data-track={`form:${mode}`} noValidate={false}>
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
      {mode !== "resource" ? (
        <>
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
        </>
      ) : (
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
      )}
      <button className="button button-primary" type="submit" disabled={status === "sending"} data-track={`submit:${mode}`}>
        {status === "sending" ? "Submitting..." : modeLabel(mode)}
      </button>
      <p className={`form-status ${status === "error" ? "error" : ""}`} role="status" aria-live="polite">
        {message}
      </p>
      <p className="form-note">By submitting, you agree to be contacted about Legal WatchDog. Connect this placeholder form to your CRM before launch.</p>
    </form>
  );
}
