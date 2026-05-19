import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Minus } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { FAQ } from "@/components/FAQ";
import { WhoRunsStrata } from "@/components/WhoRunsStrata";
import { HomeIntake } from "@/components/HomeIntake";
import { SampleUnderwrite } from "@/components/SampleUnderwrite";

const problems = [
  {
    num: "01",
    title: "The numbers are incomplete",
    body: "Revenue projections often ignore seasonality, occupancy swings, debt service, furnishing, insurance, repairs, and management fees. Listing-level math is not investment-grade math.",
  },
  {
    num: "02",
    title: "The tax strategy is an afterthought",
    body: "STR classification, material participation, cost segregation, and basis planning need to be considered before the investment is made — not in April once decisions are locked in.",
  },
  {
    num: "03",
    title: "The launch is fragmented",
    body: "Agents, lenders, cost seg providers, furnishing teams, cleaners, and property managers rarely coordinate around one investor outcome. The investor ends up as the project manager.",
  },
];

const method = [
  {
    num: "01",
    title: "Investor Profile & Tax Fit",
    description:
      "Understand income, tax exposure, goals, liquidity, timing, and risk tolerance before any property is considered.",
  },
  {
    num: "02",
    title: "Market & Deal Underwriting",
    description:
      "Review purchase price, projected revenue, debt service, startup costs, management fees, and the breakeven point.",
  },
  {
    num: "03",
    title: "Tax Strategy & Cost Seg Planning",
    description:
      "Evaluate STR tax strategy, material participation, cost segregation, bonus depreciation, and the expected tax impact.",
  },
  {
    num: "04",
    title: "Acquisition & Vendor Coordination",
    description:
      "Coordinate around lending, property management, launch partners, furnishing, and operational setup.",
  },
  {
    num: "05",
    title: "Launch, Books & Advisory",
    description:
      "Set up books, track performance, review profitability, and continue tax and advisory planning through ownership.",
  },
];

const capabilities = [
  {
    eyebrow: "Investment",
    items: [
      "Deal underwriting",
      "Investment modeling",
      "Launch budget planning",
    ],
  },
  {
    eyebrow: "Tax & Structure",
    items: [
      "Tax strategy planning",
      "Cost segregation coordination",
      "Entity & accounting setup",
      "Year-end tax planning",
    ],
  },
  {
    eyebrow: "Operations & Launch",
    items: [
      "Property management coordination",
      "Vendor & launch coordination",
      "Ongoing bookkeeping & reporting",
    ],
  },
];

const taxBullets = [
  "Material participation planning",
  "STR average rental period analysis",
  "Cost segregation coordination",
  "Bonus depreciation impact",
  "Basis and financing considerations",
  "Year-end tax planning",
  "Documentation expectations",
];

const forList = [
  "High-income professionals seeking tax-aware real estate investments",
  "Investors buying their first STR",
  "Investors evaluating multiple markets",
  "Business owners with taxable income",
  "Real estate investors who want advisory support before closing",
];

const notFor = [
  "Investors looking for guaranteed passive income",
  "Buyers who only want a cheap tax return",
  "People unwilling to document participation",
  "Investors who do not want to review actual numbers",
  "Anyone expecting tax savings without following the rules",
];

const faqs = [
  {
    q: "Is STRATA a property management company?",
    a: "STRATA is primarily an advisory and coordination platform. Property management may be handled by separate hospitality partners if the investor chooses to engage them.",
  },
  {
    q: "Do you guarantee tax savings?",
    a: "No. Tax outcomes depend on each investor's facts, documentation, income, participation, property use, and applicable law.",
  },
  {
    q: "What does the advisory fee include?",
    a: "It includes investor profile review, deal underwriting support, tax strategy mapping, cost segregation planning coordination, launch guidance, and vendor coordination. Third-party costs are separate.",
  },
  {
    q: "When should I contact STRATA?",
    a: "Ideally before making an offer or before closing, so the numbers, tax strategy, and launch plan can be evaluated in advance.",
  },
  {
    q: "Can you help if I already own the property?",
    a: "Yes, but the best planning opportunities are usually available before acquisition and launch.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Sample STR Underwrite — proof block */}
      <SampleUnderwrite />

      {/* Problem — editorial split */}
      <section className="border-t border-gold/20 bg-white">
        <div className="container-wide py-24 md:py-32">
          <div className="grid gap-14 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
              <p className="section-tag-gold">Section 01 &mdash; The Problem</p>
              <h2 className="mt-6 h-display text-[2rem] text-balance sm:text-4xl md:text-[2.75rem] leading-[1.05]">
                Most STR investors start with the property &mdash;{" "}
                <span className="h-display-italic">we start with the full picture</span>
              </h2>
              <p className="mt-6 max-w-md text-charcoal/70 leading-relaxed text-pretty">
                The wrong STR deal can look profitable on Airbnb screenshots
                and still fail after debt service, furnishing, management,
                taxes, repairs, and seasonality. STRATA reviews the deal
                through an accounting, tax, and operating lens &mdash; before
                any capital is committed.
              </p>
            </div>

            <div className="md:col-span-7">
              <ol className="space-y-10">
                {problems.map((p) => (
                  <li
                    key={p.num}
                    className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-charcoal/15 pt-8 sm:gap-x-10"
                  >
                    <span className="display-num font-serif">{p.num}</span>
                    <div>
                      <h3 className="h-display text-2xl text-charcoal sm:text-[1.6rem]">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-[15px] text-charcoal/70 leading-relaxed text-pretty">
                        {p.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-wide py-24 md:py-32">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="section-tag-gold">Section 02 &mdash; The Method</p>
              <h2 className="mt-6 h-display text-[2rem] text-balance sm:text-4xl md:text-5xl leading-[1.05]">
                One coordinated process,{" "}
                <span className="h-display-italic">
                  from idea to operating asset
                </span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-charcoal/70 leading-relaxed text-pretty">
                Five phases, one team. Each phase builds on the last so the
                tax strategy, deal economics, and launch plan stay aligned
                with the investor&rsquo;s goals &mdash; not handed off vendor
                to vendor.
              </p>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <ProcessTimeline steps={method} />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-ivory">
        <div className="container-wide py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="section-tag-gold">Section 03 &mdash; Capabilities</p>
            <h2 className="mt-6 h-display text-[2rem] text-balance sm:text-4xl md:text-5xl leading-[1.05]">
              Advisory support where STR investments{" "}
              <span className="h-display-italic">usually break down</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-12 border-t border-charcoal/15 pt-12 md:grid-cols-3 md:gap-10">
            {capabilities.map((c) => (
              <div key={c.eyebrow}>
                <p className="eyebrow">{c.eyebrow}</p>
                <ul className="mt-6 space-y-4">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-charcoal/10 pb-4 font-serif text-lg text-charcoal"
                    >
                      <span className="num-marker pt-2 text-xs">&mdash;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement — term sheet */}
      <section className="relative overflow-hidden bg-charcoal text-ivory">
        <div className="absolute inset-0 -z-0 grain-dark opacity-60" aria-hidden />
        <div className="container-wide relative py-24 md:py-32">
          <div className="grid gap-14 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="section-tag-gold !text-gold-soft">
                Section 04 &mdash; The Engagement
              </p>
              <h2 className="mt-6 h-display text-[2rem] text-balance sm:text-4xl md:text-5xl leading-[1.05] text-ivory">
                A defined advisory engagement{" "}
                <span className="h-display-italic text-ivory">
                  for a serious investment decision
                </span>
              </h2>
              <p className="mt-6 max-w-md text-ivory/70 leading-relaxed text-pretty">
                STRATA engagements are scoped like an advisory letter &mdash;
                clear deliverables, clear timeline, clear fee. Not a
                subscription, not a funnel.
              </p>

              <div className="mt-10 flex items-end gap-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-gold-soft">
                    Starting fee
                  </p>
                  <p className="mt-2 font-serif text-[4rem] leading-none text-ivory sm:text-[5rem]">
                    $7,500
                  </p>
                  <p className="mt-3 text-sm text-ivory/65">
                    per property &mdash; 50% upfront, 50% upon closing.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="rounded-2xl border border-ivory/15 bg-ink/40 p-7 sm:p-9">
                <div className="flex items-center justify-between border-b border-ivory/15 pb-5">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-ivory/55">
                    Term Sheet
                  </span>
                  <span className="font-serif text-[11px] tracking-[0.18em] text-gold-soft">
                    STRATA / Advisory
                  </span>
                </div>

                <dl className="mt-2">
                  <div className="term-row">
                    <dt>Scope</dt>
                    <dd>
                      Investor profile review, deal underwriting, tax strategy
                      mapping, cost segregation planning coordination, launch
                      guidance, and vendor coordination.
                    </dd>
                  </div>
                  <div className="term-row">
                    <dt>Deliverables</dt>
                    <dd>
                      Underwriting review, tax strategy memo, launch
                      coordination plan, accounting & advisory setup roadmap.
                    </dd>
                  </div>
                  <div className="term-row">
                    <dt>Timeline</dt>
                    <dd>
                      Engagement begins immediately. Closing-to-launch advisory
                      continues through first guest.
                    </dd>
                  </div>
                  <div className="term-row">
                    <dt>Fee</dt>
                    <dd>
                      $7,500 per property &mdash; 50% upfront, 50% upon closing.
                    </dd>
                  </div>
                  <div className="term-row">
                    <dt>Excluded</dt>
                    <dd className="text-ivory/65">
                      Cost segregation, property management, furnishing, legal,
                      lending, inspections, and other third-party costs are
                      billed separately by their providers.
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href="/advisory" className="btn-on-dark">
                    Full Engagement Detail
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn-link-on-dark">
                    Discuss your deal
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax strategy */}
      <section className="bg-ivory">
        <div className="container-wide py-24 md:py-32">
          <div className="grid gap-14 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-6">
              <p className="section-tag-gold">Section 05 &mdash; Tax Strategy</p>
              <h2 className="mt-6 h-display text-[2rem] text-balance sm:text-4xl md:text-5xl leading-[1.05]">
                Build the tax strategy{" "}
                <span className="h-display-italic">
                  before the return is filed
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-charcoal/70 leading-relaxed text-pretty">
                Many investors hear about STR losses, cost segregation, and
                bonus depreciation only after they already purchased the
                property. STRATA evaluates the strategy beforehand so the
                client understands the rules, documentation, and operating
                requirements from the start.
              </p>
              <div className="mt-8">
                <Link href="/tax-strategy" className="btn-link">
                  Tax Strategy Detail
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="rounded-2xl border border-charcoal/10 bg-white p-7 shadow-card sm:p-9">
                <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
                  <p className="eyebrow">What we evaluate</p>
                  <span className="font-serif text-xs tracking-[0.18em] text-charcoal/45">
                    Pre-acquisition
                  </span>
                </div>
                <ul className="mt-5 divide-y divide-charcoal/8">
                  {taxBullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-4 py-3.5 text-[15px] text-charcoal/85"
                    >
                      <span
                        className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-charcoal/10 pt-5 text-xs text-charcoal/55 leading-relaxed">
                  Tax outcomes turn on each investor&rsquo;s facts &mdash;
                  participation, classification, financing, and applicable
                  law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality */}
      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-wide py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="section-tag-gold">Section 06 &mdash; Hospitality</p>
            <h2 className="mt-6 h-display text-[2rem] text-balance sm:text-4xl md:text-5xl leading-[1.05]">
              STRATA coordinates the strategy &mdash;{" "}
              <span className="h-display-italic">
                hospitality partners handle the guest experience
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-charcoal/70 leading-relaxed text-pretty">
              For investors who need operational support, STRATA can coordinate
              with hospitality and property management partners &mdash;
              keeping the advisory, tax, and accounting strategy aligned with
              the actual performance of the property.
            </p>
          </div>

          <div className="mt-14 grid items-stretch overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory md:grid-cols-2">
            <div className="border-b border-charcoal/10 p-8 md:border-b-0 md:border-r md:p-10">
              <p className="eyebrow">STRATA handles</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Investor profile & tax strategy",
                  "Deal underwriting & return modeling",
                  "Cost segregation & entity planning",
                  "Launch budget & vendor coordination",
                  "Books, KPIs, and ongoing advisory",
                ].map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 font-serif text-lg text-charcoal"
                  >
                    <span
                      className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                      aria-hidden
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-10">
              <p className="eyebrow !text-charcoal/55">Partner handles</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Listing setup & channel management",
                  "Dynamic pricing & revenue management",
                  "Guest communication & reviews",
                  "Cleaning, turnover, inspections",
                  "Day-to-day local operations",
                ].map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 font-serif text-lg text-charcoal/80"
                  >
                    <span
                      className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full border border-charcoal/40"
                      aria-hidden
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-xs text-charcoal/55 leading-relaxed">
            Property management is a separate engagement; fees are billed by
            the PM partner. Investors are not required to use any single
            partner.
          </p>

          <div className="mt-8">
            <Link href="/hospitality" className="btn-link">
              How coordination works
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* For / Not for */}
      <section className="bg-ivory">
        <div className="container-wide py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="section-tag-gold">Section 07 &mdash; Fit</p>
            <h2 className="mt-6 h-display text-[2rem] text-balance sm:text-4xl md:text-5xl leading-[1.05]">
              Built for investors who want clarity{" "}
              <span className="h-display-italic">
                before committing capital
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-10 border-t border-charcoal/15 pt-12 md:grid-cols-2 md:gap-16">
            <div>
              <p className="eyebrow">Built for</p>
              <ul className="mt-6 space-y-4">
                {forList.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-charcoal/10 pb-4 text-[15px] text-charcoal/85"
                  >
                    <Check
                      size={16}
                      className="mt-1 flex-shrink-0 text-gold"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow !text-charcoal/55">Not built for</p>
              <ul className="mt-6 space-y-4">
                {notFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-charcoal/10 pb-4 text-[15px] text-charcoal/65"
                  >
                    <Minus
                      size={16}
                      className="mt-1 flex-shrink-0 text-charcoal/40"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who runs STRATA */}
      <WhoRunsStrata />

      {/* FAQ */}
      <section className="bg-ivory">
        <div className="container-tight py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="section-tag-gold">Section 09 &mdash; FAQ</p>
            <h2 className="mt-6 h-display text-[2rem] text-balance sm:text-4xl md:text-5xl leading-[1.05]">
              Questions investors ask{" "}
              <span className="h-display-italic">before we begin</span>
            </h2>
          </div>
          <div className="mt-12">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Inline intake */}
      <HomeIntake />

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-charcoal text-ivory">
        <div className="absolute inset-0 -z-0 grain-dark opacity-50" aria-hidden />
        <div
          className="absolute inset-0 -z-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(700px 380px at 80% 30%, rgba(185,151,91,0.18), transparent 60%)",
          }}
        />
        <div className="container-tight relative py-28 md:py-36">
          <div className="max-w-3xl">
            <p className="section-tag-gold !text-gold-soft">
              Before the offer is signed
            </p>
            <h2 className="mt-6 h-display text-[2.25rem] text-balance leading-[1.05] sm:text-5xl md:text-6xl text-ivory">
              Validate the strategy{" "}
              <span className="h-display-italic text-ivory">
                before you buy the property
              </span>
            </h2>
            <p className="mt-7 max-w-2xl text-lg text-ivory/75 leading-relaxed text-pretty">
              Book a STRATA strategy call to review whether an STR investment
              makes sense for your goals, tax profile, and capital plan. If we
              are not the right fit, we will tell you on the first call.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-on-dark">
                Book a Strategy Call
                <ArrowRight size={16} />
              </Link>
              <Link href="/process" className="btn-ghost-on-dark">
                See How It Works
              </Link>
            </div>

            <p className="mt-12 border-t border-ivory/15 pt-6 text-xs text-ivory/55">
              Subject to professional review. STRATA does not guarantee tax
              outcomes or investment results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
