import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tax Strategy | STR Cost Segregation & Depreciation",
  description:
    "STR tax strategy starts before closing — material participation, cost segregation, bonus depreciation, and structure, modeled before the property is purchased.",
};

const scenario: [string, string][] = [
  ["W-2 income", "$718,500"],
  ["Property purchase price", "$912,750"],
  ["Cost segregation study", "Completed"],
  ["Potential accelerated depreciation", "Around $221,300"],
];

const concepts: { num: string; title: string; paras: string[] }[] = [
  {
    num: "01",
    title: "The STR Loophole in Plain English",
    paras: [
      "Real estate is generally treated as passive for tax purposes, which limits how losses can offset W-2 or active business income. Short-term rentals can be different. When the average guest stay is seven days or less and the investor materially participates in the activity, the IRS may treat the rental as non-passive. That means depreciation losses can potentially offset active income.",
      "That's the strategic opening. The rules around it are specific, and the result depends on how the property is used, documented, and managed.",
    ],
  },
  {
    num: "02",
    title: "Material Participation",
    paras: [
      "For the STR strategy to work, the investor typically needs to materially participate in the activity. The IRS has multiple tests for material participation. The most common involve hours of involvement and whether the investor performs substantially all the work.",
      "This isn't about working full-time on a property. It's about clear, documented involvement that satisfies one of the recognized tests. We help investors understand what that looks like in practice and coordinate documentation alongside their CPA.",
    ],
  },
  {
    num: "03",
    title: "Cost Segregation",
    paras: [
      "A cost segregation study breaks the property into components like land improvements, fixtures, and finishes that depreciate on shorter schedules than the building shell. The result is often meaningful accelerated depreciation in year one, which (with the right structure) can offset active income for qualifying STR investors.",
      "The size of the depreciation depends on the property, the study, and the investor's tax facts. We help evaluate feasibility and introduce qualified study providers when the deal warrants it.",
    ],
  },
  {
    num: "04",
    title: "Bonus Depreciation",
    paras: [
      "Bonus depreciation allows a portion of qualifying short-life assets to be deducted in the year placed in service. The bonus percentage has been phasing down from 100%, so the timing of the purchase, the placed-in-service date, and the cost segregation study all matter.",
      "We help investors think about all three together as part of the underwrite, not as separate items handled after closing.",
    ],
  },
  {
    num: "05",
    title: "Why Structure Before Closing",
    paras: [
      "Most of the leverage in STR tax strategy comes from decisions made before the deal closes: entity structure, financing, intended use, and how the property will be operated. Trying to retrofit the strategy after closing usually leaves benefits on the table or introduces risk.",
      "The strategy call exists to surface these decisions early, while there's still time to align the deal with the tax outcome you're after.",
    ],
  },
];

export default function TaxStrategyPage() {
  return (
    <>
      {/* Hero (dark) */}
      <section className="bg-primary text-background">
        <div className="container-page section-pad grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">
              STR Tax Strategy
            </p>
            <h1 className="display mt-5 text-background">
              Cost segregation only works if the facts support it.
            </h1>
            <p className="mt-7 max-w-[56ch] text-[16px] leading-[1.6] text-background/75 md:text-[17px]">
              For the right short-term rental investor, depreciation can
              materially change the after-tax return profile. But it only works
              when the property, use pattern, ownership structure, basis,
              financing, and material participation facts line up.
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="rounded-md border border-background/15 bg-background/[0.04] p-6 backdrop-blur-sm sm:p-8">
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-accent-soft">
                Illustrative scenario
              </div>
              <p className="mt-2 text-[0.92rem] text-background/80">
                High-Income W-2 Earner &middot; Cost Segregation Pathway
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
                {scenario.map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[0.56rem] uppercase tracking-[0.16em] text-background/50">
                      {k}
                    </dt>
                    <dd className="mt-1.5 font-mono tabular-nums text-[1.05rem] font-semibold text-background">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-7 text-[12px] leading-[1.5] text-background/55">
                Illustrative only. Actual results depend on the property,
                financing, market data, tax facts, participation, and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key concepts */}
      <section className="bg-background">
        <div className="container-page section-pad">
          <div className="max-w-[62ch]">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-accent-deep">
              Key concepts
            </p>
            <h2 className="h2 mt-4 max-w-[18ch]">The pieces that have to line up.</h2>
            <p className="mt-5 text-[16px] leading-[1.6] text-ink/75 md:text-[17px]">
              None of these stand alone. The STR tax strategy works only when
              they&rsquo;re assembled together with proper documentation.
            </p>
          </div>

          <div className="mt-14 border-t border-border">
            {concepts.map((c) => (
              <div
                key={c.num}
                className="grid gap-6 border-b border-border py-10 md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-3">
                  <span className="font-serif text-2xl text-accent-deep/70">{c.num}</span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="h3 text-primary">{c.title}</h3>
                  <div className="mt-3 space-y-4 max-w-[68ch] text-[15px] leading-[1.65] text-ink/75">
                    {c.paras.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance band */}
      <section className="bg-background">
        <div className="container-page pb-4">
          <div className="rounded-md border border-border bg-cream/60 px-6 py-5">
            <p className="max-w-[95ch] text-[0.82rem] leading-relaxed text-ink/65">
              This page is for educational purposes only. It is not legal,
              investment, or tax advice. Tax outcomes depend on each
              investor&rsquo;s facts and circumstances, including income type,
              property use, hours of participation, entity structure, and
              applicable state and federal rules. Investors should consult their
              CPA or tax advisor before implementing any strategy. STRATA
              Advisory does not provide tax advice unless separately agreed in
              writing with properly licensed professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Three columns */}
      <section className="bg-background">
        <div className="container-page section-pad pt-10">
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {[
              ["Educational", "We translate the rules into plain English so investors understand what's actually driving the outcome."],
              ["Coordinated", "We work alongside your CPA, attorney, and lender, not around them. Tax strategy lives downstream of the right team."],
              ["Realistic", "We won't promise tax savings. We'll tell you what's plausible given your facts and what it would take to get there."],
            ].map(([t, b]) => (
              <div key={t} className="border-t border-border pt-6">
                <h3 className="h3 text-primary">{t}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink/70">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="container-page section-pad">
          <div className="mx-auto max-w-[62ch]">
            <h2 className="h2 max-w-[20ch]">Model the tax impact before you buy.</h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-ink/75 md:text-[17px]">
              Send the property and your income profile. We&rsquo;ll model the
              depreciation, tax benefit range, and what would need to be true
              for the strategy to work for you.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/contact" className="cta-primary">
                Model the Tax Impact
              </Link>
              <Link
                href="/contact"
                className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-primary"
              >
                Book a Strategy Call &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
