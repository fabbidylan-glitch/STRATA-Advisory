import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/motion";

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
    title: "Strategy stays connected to operations.",
    description:
      "Underwriting assumptions are validated against real performance — and adjusted when the market shifts.",
  },
  {
    title: "Tax position is supported by real records.",
    description:
      "Operating data flows into the books so participation, classification, and reporting stay defensible.",
  },
  {
    title: "One coordinated team, not five vendors.",
    description:
      "Lender, insurance, PM partner, furnishing, and accounting are coordinated around the same investor outcome.",
  },
];

export default function HospitalityPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-wide pb-12 pt-20 md:pb-16 md:pt-28">
          <FadeIn start="mount" className="max-w-3xl">
            <p className="eyebrow-rule">Hospitality Partners</p>
            <h1 className="mt-7 h-display text-[2.5rem] text-balance leading-[1.02] sm:text-5xl md:text-[3.75rem]">
              A better STR investment needs{" "}
              <span className="h-display-italic">both strategy and execution</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-charcoal/70 sm:text-lg leading-relaxed text-pretty">
              STRATA focuses on the advisory, financial, tax, and coordination
              layer. For day-to-day guest operations, STRATA can coordinate
              with hospitality and property management partners who handle
              guest experience, pricing, cleaning, communication, and local
              operations.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-wide py-24 md:py-32">
          <div className="grid items-stretch overflow-hidden rounded-2xl border border-charcoal/15 bg-ivory md:grid-cols-2">
            <div className="border-b border-charcoal/15 p-8 md:border-b-0 md:border-r md:p-10">
              <p className="eyebrow">STRATA handles</p>
              <ul className="mt-6 space-y-3">
                {strataHandles.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 font-serif text-lg text-charcoal"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-10">
              <p className="eyebrow !text-charcoal/55">Partner handles</p>
              <ul className="mt-6 space-y-3">
                {partnerHandles.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 font-serif text-lg text-charcoal/80"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full border border-charcoal/40" aria-hidden />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-wide py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="section-tag-gold">Section 02 — How it Works</p>
            <h2 className="mt-6 h-display text-[2rem] text-balance leading-[1.05] sm:text-4xl md:text-5xl">
              Aligned on the{" "}
              <span className="h-display-italic">same investor outcome</span>
            </h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed text-pretty">
              Property management partners are engaged separately by the
              investor. STRATA stays the advisory layer &mdash; underwriting,
              tax, and reporting &mdash; so the strategy keeps shape after
              launch.
            </p>
          </div>

          <div className="mt-14 border-t border-charcoal/15">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="grid gap-6 border-b border-charcoal/15 py-8 md:grid-cols-12 md:gap-10 md:py-10"
              >
                <div className="md:col-span-4">
                  <div className="flex items-baseline gap-5">
                    <span className="display-num">0{i + 1}</span>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <h3 className="h-display text-xl text-charcoal sm:text-2xl">
                    {b.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] text-charcoal/70 leading-relaxed text-pretty">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-charcoal/10 bg-white p-7 sm:p-9">
            <p className="eyebrow">Important to know</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Property management is a separate engagement",
                "Management fees are billed by the PM partner",
                "Investors are not required to use any single partner",
                "STRATA's value is alignment and coordination",
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
        headline="One investor outcome."
        italicTail="one coordinated team"
        buttonText="Book a Strategy Call"
        buttonHref="/contact"
      />
    </>
  );
}
