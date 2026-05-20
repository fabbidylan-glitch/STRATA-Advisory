"use client";

import { useState } from "react";

const interestedIn = [
  "Buying, under contract",
  "Buying, still searching",
  "Already own, need operations",
  "Tax strategy review",
  "Not sure yet",
];

const priceRanges = [
  "Under $500K",
  "$500K to $750K",
  "$750K to $1M",
  "$1M to $1.5M",
  "$1.5M+",
];

const statuses = [
  "Just researching",
  "Actively evaluating a deal",
  "Under contract",
  "Already own the property",
];

const labelCls =
  "font-mono text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-accent-deep";
const inputCls =
  "mt-2 w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-[0.92rem] text-ink placeholder:text-ink/35 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-md border border-border bg-surface p-8 shadow-card sm:p-10">
        <p className={labelCls} aria-live="polite">
          Received
        </p>
        <h3 className="h3 mt-3 text-primary">Thank you. We have your property.</h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/75">
          A STRATA advisor will review your submission and follow up within one
          business day to schedule a strategy call.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-md border border-border bg-surface p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelCls}>First name</span>
          <input name="firstName" type="text" required autoComplete="given-name" placeholder="Jane" className={inputCls} />
        </label>
        <label className="block">
          <span className={labelCls}>Last name</span>
          <input name="lastName" type="text" required autoComplete="family-name" placeholder="Doe" className={inputCls} />
        </label>
        <label className="block">
          <span className={labelCls}>Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={inputCls} />
        </label>
        <label className="block">
          <span className={labelCls}>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="(555) 555-5555" className={inputCls} />
        </label>

        <label className="block sm:col-span-2">
          <span className={labelCls}>Interested in</span>
          <select name="interestedIn" className={inputCls} defaultValue="">
            <option value="" disabled>Select one</option>
            {interestedIn.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className={labelCls}>Property address or listing URL</span>
          <input
            name="propertyLink"
            type="text"
            placeholder="123 Lake Dr, Pocono Pines, PA. Or a Zillow or Airbnb link."
            className={inputCls}
          />
        </label>

        <label className="block">
          <span className={labelCls}>Target market</span>
          <input name="market" type="text" placeholder="Smoky Mtns · 30A · Joshua Tree" className={inputCls} />
        </label>
        <label className="block">
          <span className={labelCls}>Purchase price or budget</span>
          <select name="budget" className={inputCls} defaultValue="">
            <option value="" disabled>Select a range</option>
            {priceRanges.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className={labelCls}>Current status</span>
          <select name="status" className={inputCls} defaultValue="">
            <option value="" disabled>Select one</option>
            {statuses.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className={labelCls}>Notes</span>
          <textarea
            name="notes"
            rows={4}
            placeholder="Goals, timeline, what you'd like a second opinion on, projections from AirDNA/Rabbu/PriceLabs if you have them."
            className={`${inputCls} resize-none`}
          />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-sm border border-critical/30 bg-critical/[0.08] px-4 py-3 text-[0.82rem] text-critical">
          Something went wrong sending your inquiry. Please try again, or email{" "}
          <a href="mailto:hello@stratacap.com" className="underline">hello@stratacap.com</a>.
        </p>
      )}
      <div className="mt-7 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[44ch] text-[0.72rem] leading-[1.5] text-ink/55">
          By submitting, you agree to be contacted by STRATA about your inquiry.
          We don&rsquo;t share or sell your information.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="cta-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send a Property"}
        </button>
      </div>
    </form>
  );
}
