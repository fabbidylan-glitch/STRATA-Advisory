import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/motion";

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

const costSeg = [
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
];

export default function TaxStrategyPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-wide pb-12 pt-20 md:pb-16 md:pt-28">
          <FadeIn start="mount" className="max-w-3xl">
            <p className="eyebrow-rule">Tax Strategy</p>
            <h1 className="mt-7 h-display text-[2.5rem] text-balance leading-[1.02] sm:text-5xl md:text-[3.75rem]">
              STR tax strategy starts{" "}
              <span className="h-display-italic">before the property is purchased</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-charcoal/70 sm:text-lg leading-relaxed text-pretty">
              The most valuable STR planning happens before closing. Once
              acquisition is complete, the window for material participation
              setup, entity structuring, and cost segregation planning narrows.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-wide py-24 md:py-32">
          <div className="grid gap-14 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <p className="section-tag-gold">Section 01 — Why Timing Matters</p>
              <h2 className="mt-6 h-display text-[2rem] text-balance leading-[1.05] sm:text-4xl md:text-5xl">
                Waiting until filing season{" "}
                <span className="h-display-italic">is usually waiting too long</span>
              </h2>
              <p className="mt-6 max-w-lg text-charcoal/70 leading-relaxed text-pretty">
                By April, documentation gaps, weak participation records, poor
                entity setup, and unclear cost segregation expectations are
                already locked in. We work backward from the return &mdash; and
                forward from acquisition.
              </p>
            </div>
            <div className="md:col-span-6">
              <div className="rounded-2xl border border-charcoal/10 bg-ivory p-7 sm:p-9">
                <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
                  <p className="eyebrow">What we review</p>
                  <span className="font-serif text-xs tracking-[0.18em] text-charcoal/45">
                    Pre-acquisition
                  </span>
                </div>
                <ul className="mt-5 divide-y divide-charcoal/8">
                  {review.map((r) => (
                    <li
                      key={r}
                      className="flex items-center gap-4 py-3.5 text-[15px] text-charcoal/85"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden />
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
        <div className="container-wide py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="section-tag-gold">Section 02 — Cost Segregation</p>
            <h2 className="mt-6 h-display text-[2rem] text-balance leading-[1.05] sm:text-4xl md:text-5xl">
              Coordinated through{" "}
              <span className="h-display-italic">qualified providers</span>
            </h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed text-pretty">
              STRATA can coordinate cost segregation studies through qualified
              providers &mdash; including timing, scope, and how the study
              integrates with the rest of the tax plan. Cost segregation fees
              are separate third-party costs.
            </p>
          </div>

          <div className="mt-14 border-t border-charcoal/15">
            {costSeg.map((b, i) => (
              <div
                key={b.title}
                className="grid gap-6 border-b border-charcoal/15 py-8 md:grid-cols-12 md:gap-10 md:py-10"
              >
                <div className="md:col-span-4">
                  <div className="flex items-baseline gap-5">
                    <span className="display-num">0{i + 1}</span>
                    <p className="pt-3 text-[11px] uppercase tracking-[0.22em] text-charcoal/45">
                      Phase {i + 1}
                    </p>
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
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-tight py-16">
          <div className="rounded-2xl border border-charcoal/10 bg-ivory p-7 sm:p-9">
            <p className="eyebrow">Compliance note</p>
            <p className="mt-4 text-charcoal/75 leading-relaxed text-pretty">
              STR tax results depend on each investor&rsquo;s facts and
              circumstances &mdash; income, participation, property use,
              financing, documentation, and applicable law. STRATA and FABBI do
              not guarantee deductions, refunds, or tax savings. All planning
              is subject to professional review.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Plan Early"
        headline="Build the tax strategy"
        italicTail="before the property closes"
        copy="Book a strategy call to review whether STR tax treatment fits your income profile, participation plan, and timeline."
        buttonText="Book a Strategy Call"
        buttonHref="/contact"
      />
    </>
  );
}
