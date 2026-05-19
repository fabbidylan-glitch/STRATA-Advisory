import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Tax Strategy | STR Investment Planning",
  description:
    "STR tax strategy starts before the property is purchased — material participation, cost segregation, bonus depreciation, and documentation planned in advance.",
};

const review = [
  "Investor income profile",
  "Property usage",
  "Average rental period expectations",
  "Material participation pathway",
  "Cost segregation feasibility",
  "Bonus depreciation impact",
  "State tax considerations",
];

export default function TaxStrategyPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-wide pb-12 pt-20 md:pb-16 md:pt-28">
          <div className="max-w-3xl">
            <p className="eyebrow">Tax Strategy</p>
            <h1 className="mt-4 h-display text-4xl text-balance sm:text-5xl md:text-6xl">
              STR tax strategy starts before the property is purchased.
            </h1>
            <p className="mt-6 text-base text-charcoal/70 sm:text-lg leading-relaxed text-pretty">
              The most valuable STR planning happens before closing. Once
              acquisition is complete, the window for material participation
              setup, entity structuring, and cost segregation planning narrows.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-wide py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <SectionHeading
                eyebrow="Why Timing Matters"
                title="Waiting until filing season is usually waiting too long."
                description="By April, documentation gaps, weak participation records, poor entity setup, and unclear cost segregation expectations are already locked in. We work backward from the return — and forward from acquisition."
              />
            </div>
            <div className="md:col-span-6">
              <div className="rounded-2xl border border-charcoal/10 bg-ivory p-7 sm:p-9">
                <p className="eyebrow">What we review</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {review.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-3 text-sm text-charcoal/80"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                        aria-hidden
                      />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-wide py-20 md:py-28">
          <SectionHeading
            eyebrow="Cost Segregation"
            title="Coordinated through qualified providers."
            description="STRATA can coordinate cost segregation studies through qualified providers — including timing, scope, and how the study integrates with the rest of the tax plan. Cost segregation fees are separate third-party costs."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Feasibility review",
                description:
                  "Whether a cost seg study is appropriate given purchase price, basis, and projected income.",
              },
              {
                title: "Timing and scope",
                description:
                  "When to engage the study — and at what level of detail — to fit the investor's tax year.",
              },
              {
                title: "Integration with the plan",
                description:
                  "Coordinating the study with participation, entity setup, and the year-end tax position.",
              },
            ].map((b, i) => (
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
        </div>
      </section>

      <section className="bg-white border-y border-charcoal/10">
        <div className="container-tight py-16">
          <div className="rounded-2xl border border-charcoal/10 bg-ivory p-7 sm:p-9">
            <p className="eyebrow">Compliance note</p>
            <p className="mt-4 text-charcoal/75 leading-relaxed text-pretty">
              STR tax results depend on each investor&rsquo;s facts and
              circumstances — income, participation, property use, financing,
              documentation, and applicable law. STRATA and FABBI do not
              guarantee deductions, refunds, or tax savings. All planning is
              subject to professional review.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Plan Early"
        headline="Build the tax strategy before the property closes."
        copy="Book a strategy call to review whether STR tax treatment fits your income profile, participation plan, and timeline."
        buttonText="Book a Strategy Call"
        buttonHref="/contact"
      />
    </>
  );
}
