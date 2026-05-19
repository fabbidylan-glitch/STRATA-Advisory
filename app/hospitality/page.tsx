import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Hospitality Partners | STRATA",
  description:
    "STRATA coordinates the strategy. Hospitality partners handle guest experience, pricing, cleaning, and day-to-day operations.",
};

const strataHandles = [
  "Investor profile and tax strategy",
  "Deal underwriting and return modeling",
  "Cost segregation and entity planning",
  "Launch budget and vendor coordination",
  "Books, KPIs, and ongoing advisory",
];

const partnerHandles = [
  "Listing setup and channel management",
  "Dynamic pricing and revenue management",
  "Guest communication and reviews",
  "Cleaning, turnover, and inspections",
  "Day-to-day local operations",
];

const benefits = [
  {
    title: "Strategy stays connected to operations",
    description:
      "Underwriting assumptions are validated against real performance — and adjusted when the market shifts.",
  },
  {
    title: "Tax position is supported by real records",
    description:
      "Operating data flows into the books so participation, classification, and reporting stay defensible.",
  },
  {
    title: "One coordinated team, not five vendors",
    description:
      "Lender, insurance, PM partner, furnishing, and accounting are coordinated around the same investor outcome.",
  },
];

export default function HospitalityPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-wide pb-12 pt-20 md:pb-16 md:pt-28">
          <div className="max-w-3xl">
            <p className="eyebrow">Hospitality Partners</p>
            <h1 className="mt-4 h-display text-4xl text-balance sm:text-5xl md:text-6xl">
              A better STR investment needs both strategy and execution.
            </h1>
            <p className="mt-6 text-base text-charcoal/70 sm:text-lg leading-relaxed text-pretty">
              STRATA focuses on the advisory, financial, tax, and coordination
              layer. For day-to-day guest operations, STRATA can coordinate with
              hospitality and property management partners who handle guest
              experience, pricing, cleaning, communication, and local
              operations.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-wide py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-charcoal/10 bg-ivory p-8 shadow-card">
              <p className="eyebrow">What STRATA handles</p>
              <ul className="mt-6 space-y-3">
                {strataHandles.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-charcoal/85">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                      aria-hidden
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-charcoal/15 bg-transparent p-8">
              <p className="eyebrow">What hospitality partners handle</p>
              <ul className="mt-6 space-y-3">
                {partnerHandles.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-charcoal/75">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full border border-charcoal/40"
                      aria-hidden
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-wide py-20 md:py-28">
          <SectionHeading
            eyebrow="How Coordination Works"
            title="Aligned on the same investor outcome."
            description="Property management partners are engaged separately by the investor. STRATA stays the advisory layer — underwriting, tax, and reporting — so the strategy keeps shape after launch."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="rounded-2xl border border-charcoal/10 bg-white p-7 shadow-card"
              >
                <span className="num-marker">0{i + 1}</span>
                <h3 className="mt-2 h-display text-xl text-charcoal">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-charcoal/10 bg-white p-7 sm:p-9">
            <p className="eyebrow">Important to know</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Property management is a separate engagement",
                "Management fees are billed separately by the PM partner",
                "Investors are not required to use any single PM partner",
                "STRATA's value is alignment and coordination, not the cleaning calendar",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-sm text-charcoal/80"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        headline="One investor outcome. One coordinated team."
        buttonText="Book a Strategy Call"
        buttonHref="/contact"
      />
    </>
  );
}
