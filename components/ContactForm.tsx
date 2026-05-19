"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion";

const incomeRanges = [
  "Under $200,000",
  "$200,000 – $400,000",
  "$400,000 – $750,000",
  "$750,000 – $1.5M",
  "$1.5M+",
];

const buyingNow = [
  "Yes, actively",
  "Within 3 months",
  "Within 6–12 months",
  "Just exploring",
];

const goals = ["Tax strategy", "Cash flow", "Portfolio growth", "Unsure"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-charcoal/10 bg-white p-8 sm:p-10 shadow-card">
        <p className="eyebrow" aria-live="polite">Received</p>
        <h3 className="mt-3 h-display text-2xl text-charcoal">
          Thanks &mdash; we&rsquo;ll be in touch shortly
        </h3>
        <p className="mt-3 text-charcoal/70 leading-relaxed">
          A STRATA advisor will review your information and reach out within
          one business day to schedule a strategy call.
        </p>
      </div>
    );
  }

  return (
    <FadeIn
      as="div"
      className="rounded-2xl border border-charcoal/10 bg-white p-7 sm:p-9 shadow-card"
    >
    <form onSubmit={onSubmit}>
      <div className="flex items-center justify-between border-b border-charcoal/10 pb-5">
        <span className="text-[10px] uppercase tracking-[0.28em] text-charcoal/55">
          Investor Intake
        </span>
        <span className="font-serif text-[11px] tracking-[0.18em] text-gold">
          STRATA / Review
        </span>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="First name" required>
          <input
            name="firstName"
            required
            type="text"
            autoComplete="given-name"
            placeholder="First name"
            className="input"
          />
        </Field>
        <Field label="Last name" required>
          <input
            name="lastName"
            required
            type="text"
            autoComplete="family-name"
            placeholder="Last name"
            className="input"
          />
        </Field>
        <Field label="Email" required>
          <input
            name="email"
            required
            type="email"
            autoComplete="email"
            placeholder="you@firm.com"
            className="input"
          />
        </Field>
        <Field label="Phone">
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 000-0000"
            className="input"
          />
        </Field>
        <Field label="Annual income range">
          <select name="income" className="input" defaultValue="">
            <option value="" disabled>
              Select range
            </option>
            {incomeRanges.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Buying a property now?">
          <select name="buying" className="input" defaultValue="">
            <option value="" disabled>
              Select timeline
            </option>
            {buyingNow.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Estimated purchase price">
          <input
            name="price"
            type="text"
            placeholder="$ — your target range"
            className="input"
          />
        </Field>
        <Field label="Property link">
          <input
            name="propertyLink"
            type="text"
            placeholder="Paste Zillow / Airbnb / MLS link"
            className="input"
          />
        </Field>
        <Field label="Main goal" full>
          <div className="flex flex-wrap gap-2">
            {goals.map((g) => (
              <label
                key={g}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-charcoal/15 px-4 py-2 text-sm text-charcoal/80 has-[:checked]:border-gold has-[:checked]:bg-gold/10 has-[:checked]:text-charcoal"
              >
                <input
                  type="radio"
                  name="goal"
                  value={g}
                  className="sr-only"
                />
                {g}
              </label>
            ))}
          </div>
        </Field>
        <Field label="Anything else?" full>
          <textarea
            name="message"
            rows={4}
            placeholder="Context on the deal, your tax position, or what's on your mind."
            className="input resize-none"
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col-reverse items-stretch justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-charcoal/55">
          By submitting, you agree to be contacted by a STRATA advisor.
        </p>
        <button type="submit" className="btn-primary whitespace-nowrap">
          Send a Property
          <ArrowRight size={16} />
        </button>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid rgba(23, 23, 23, 0.15);
          background: #f8f5ef;
          padding: 0.7rem 0.85rem;
          font-size: 0.925rem;
          color: #171717;
          transition: border-color 0.15s, background 0.15s;
        }
        :global(.input::placeholder) {
          color: rgba(23, 23, 23, 0.4);
        }
        :global(.input:focus) {
          outline: none;
          border-color: #b9975b;
          background: #ffffff;
        }
      `}</style>
    </form>
    </FadeIn>
  );
}

function Field({
  label,
  children,
  required,
  full,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-charcoal/60">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}
