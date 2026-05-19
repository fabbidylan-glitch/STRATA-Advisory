"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HomeIntake() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-ivory">
      <div className="container-wide py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="section-tag-gold">Section 10 &mdash; Begin</p>
          <h2 className="mt-6 h-display text-[2rem] text-balance leading-[1.05] sm:text-4xl md:text-5xl">
            Send us the deal{" "}
            <span className="h-display-italic">for a private review</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-12 border-t border-charcoal/15 pt-14 md:grid-cols-12 md:gap-16">
          {/* Left — what happens next */}
          <div className="md:col-span-5">
            <p className="eyebrow">Review Process</p>
            <ol className="mt-8 space-y-7">
              <li className="grid grid-cols-[auto_1fr] gap-5">
                <span className="display-num text-[3rem]">01</span>
                <div className="pt-2">
                  <p className="font-serif text-lg text-charcoal sm:text-xl">
                    Confidential review
                  </p>
                  <p className="mt-1.5 text-sm text-charcoal/65 leading-relaxed">
                    Send the listing link, price, and a sentence about your
                    tax situation. Reviewed in private by the practice.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-5">
                <span className="display-num text-[3rem]">02</span>
                <div className="pt-2">
                  <p className="font-serif text-lg text-charcoal sm:text-xl">
                    First-pass response
                  </p>
                  <p className="mt-1.5 text-sm text-charcoal/65 leading-relaxed">
                    Within one business day, we reply with a short read on
                    fit and a proposed strategy call.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-5">
                <span className="display-num text-[3rem]">03</span>
                <div className="pt-2">
                  <p className="font-serif text-lg text-charcoal sm:text-xl">
                    Engagement, if aligned
                  </p>
                  <p className="mt-1.5 text-sm text-charcoal/65 leading-relaxed">
                    If we are the right fit, you receive a scoped advisory
                    engagement letter. If not, we&rsquo;ll tell you on the
                    first call.
                  </p>
                </div>
              </li>
            </ol>

            <p className="mt-10 max-w-md text-xs text-charcoal/55 leading-relaxed">
              Sent in confidence. No marketing list. Subject to professional
              review.
            </p>
          </div>

          {/* Right — compact intake form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="rounded-2xl border border-charcoal/10 bg-white p-8 shadow-card sm:p-10">
                <p className="eyebrow">Received</p>
                <h3 className="mt-3 h-display text-2xl text-charcoal sm:text-3xl">
                  Thank you &mdash; we have your deal
                </h3>
                <p className="mt-4 text-charcoal/75 leading-relaxed">
                  A STRATA advisor will review your submission and reach out
                  within one business day to schedule a strategy call. For a
                  more detailed intake, you can also use the{" "}
                  <Link
                    href="/contact"
                    className="underline decoration-gold decoration-2 underline-offset-[5px] hover:decoration-charcoal"
                  >
                    full review form
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-charcoal/10 bg-white p-7 shadow-card sm:p-9"
              >
                <div className="flex items-center justify-between border-b border-charcoal/10 pb-5">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-charcoal/55">
                    Private Deal Review
                  </span>
                  <span className="font-serif text-[11px] tracking-[0.18em] text-gold">
                    STRATA / Intake
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
                  <Field label="Email" required full>
                    <input
                      name="email"
                      required
                      type="email"
                      autoComplete="email"
                      placeholder="you@firm.com"
                      className="input"
                    />
                  </Field>
                  <Field label="Property link" full>
                    <input
                      name="propertyLink"
                      type="text"
                      placeholder="Paste Zillow / Airbnb / MLS link"
                      className="input"
                    />
                  </Field>
                  <Field label="What you'd like reviewed" full>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="A sentence on the deal, your tax position, or what's on your mind."
                      className="input resize-none"
                    />
                  </Field>
                </div>

                <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-charcoal/55">
                    Or use the{" "}
                    <Link
                      href="/contact"
                      className="underline decoration-gold decoration-2 underline-offset-[5px] hover:decoration-charcoal"
                    >
                      detailed review form
                    </Link>
                    .
                  </p>
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap"
                  >
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
            )}
          </div>
        </div>
      </div>
    </section>
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
