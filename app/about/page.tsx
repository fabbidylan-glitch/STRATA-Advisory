import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About STRATA",
  description:
    "STRATA was built because STR investors needed more than a property manager — a tax-aware advisory layer powered by FABBI.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-wide pb-12 pt-20 md:pb-16 md:pt-28">
          <div className="max-w-3xl">
            <p className="eyebrow">About</p>
            <h1 className="mt-4 h-display text-4xl text-balance sm:text-5xl md:text-6xl">
              STRATA was built because STR investors needed more than a property
              manager.
            </h1>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-tight py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-lg text-charcoal/80 leading-relaxed text-pretty">
                Most STR conversations start with occupancy, nightly rates, and
                property management. But for high-income investors, the bigger
                question is whether the investment actually works after taxes,
                financing, launch costs, and operating complexity.
              </p>
              <p className="mt-5 text-lg text-charcoal/80 leading-relaxed text-pretty">
                STRATA was created to bring the tax, accounting, advisory, and
                operational pieces into one process — so the deal is evaluated
                the way an investor should evaluate it, not the way a listing
                agent presents it.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-charcoal/10 bg-ivory p-7">
                <p className="eyebrow">In one sentence</p>
                <p className="mt-3 font-serif text-2xl text-charcoal leading-snug">
                  STRATA is the advisory layer around the investment — not the
                  cleaning calendar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-wide py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHeading
                eyebrow="Powered by FABBI"
                title="An advisory firm behind every engagement."
              />
            </div>
            <div className="md:col-span-7">
              <p className="text-charcoal/75 leading-relaxed text-pretty">
                FABBI supports business owners, real estate investors, and
                high-income clients with tax planning, accounting, bookkeeping,
                and advisory. STRATA applies that advisory mindset specifically
                to short-term rental investments — and continues the
                relationship through bookkeeping and year-end planning once the
                property is live.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Tax planning", value: "For high-income investors" },
                  { label: "Accounting & bookkeeping", value: "Built for real estate operators" },
                  { label: "Advisory", value: "Quarterly and year-end" },
                  { label: "Coordination", value: "STR-specific vendor network" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="rounded-xl border border-charcoal/10 bg-white p-5"
                  >
                    <p className="eyebrow">{c.label}</p>
                    <p className="mt-2 font-serif text-lg text-charcoal">
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
        headline="Bring the full picture to your STR investment."
        buttonText="Book a Strategy Call"
        buttonHref="/contact"
      />
    </>
  );
}
