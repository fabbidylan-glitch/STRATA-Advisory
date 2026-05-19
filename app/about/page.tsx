import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About STRATA",
  description:
    "STRATA was built because STR investors needed more than a property manager — a tax-aware advisory layer powered by FABBI.",
};

const fabbiPillars = [
  { label: "Tax planning", value: "For high-income investors" },
  { label: "Accounting & bookkeeping", value: "Built for real estate operators" },
  { label: "Advisory", value: "Quarterly and year-end" },
  { label: "Coordination", value: "STR-specific vendor network" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-wide pb-12 pt-20 md:pb-16 md:pt-28">
          <div className="max-w-3xl">
            <p className="eyebrow-rule">About</p>
            <h1 className="mt-7 h-display text-[2.5rem] text-balance leading-[1.02] sm:text-5xl md:text-[3.75rem]">
              STRATA was built because STR investors needed{" "}
              <span className="h-display-italic">more than a property manager</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-tight py-24 md:py-32">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-lg text-charcoal/80 leading-relaxed text-pretty sm:text-xl">
                Most STR conversations start with occupancy, nightly rates, and
                property management. But for high-income investors, the bigger
                question is whether the investment actually works after taxes,
                financing, launch costs, and operating complexity.
              </p>
              <p className="mt-6 text-lg text-charcoal/80 leading-relaxed text-pretty sm:text-xl">
                STRATA was created to bring the tax, accounting, advisory, and
                operational pieces into one process &mdash; so the deal is
                evaluated the way an investor should evaluate it, not the way a
                listing agent presents it.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-charcoal/15 bg-ivory p-7 sm:p-8">
                <p className="eyebrow">In one sentence</p>
                <p className="mt-4 font-serif text-2xl leading-snug text-charcoal sm:text-[1.6rem]">
                  STRATA is the advisory layer around the investment &mdash;{" "}
                  <span className="italic text-charcoal/70">
                    not the cleaning calendar.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-wide py-24 md:py-32">
          <div className="grid gap-14 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
              <p className="section-tag-gold">Powered by FABBI</p>
              <h2 className="mt-6 h-display text-[2rem] text-balance leading-[1.05] sm:text-4xl md:text-5xl">
                An advisory firm{" "}
                <span className="h-display-italic">behind every engagement</span>
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg text-charcoal/75 leading-relaxed text-pretty">
                FABBI supports business owners, real estate investors, and
                high-income clients with tax planning, accounting, bookkeeping,
                and advisory. STRATA applies that advisory mindset specifically
                to short-term rental investments &mdash; and continues the
                relationship through bookkeeping and year-end planning once the
                property is live.
              </p>

              <div className="mt-10 grid divide-y divide-charcoal/15 border-y border-charcoal/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                {fabbiPillars.map((c, i) => (
                  <div
                    key={c.label}
                    className={`py-6 sm:py-7 ${i % 2 === 1 ? "sm:pl-8" : "sm:pr-8"} ${
                      i >= 2 ? "sm:border-t sm:!divide-y-0" : ""
                    }`}
                  >
                    <p className="eyebrow">{c.label}</p>
                    <p className="mt-2 font-serif text-xl text-charcoal sm:text-2xl">
                      {c.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Let's Talk"
        headline="Bring the full picture"
        italicTail="to your STR investment"
        buttonText="Book a Strategy Call"
        buttonHref="/contact"
      />
    </>
  );
}
