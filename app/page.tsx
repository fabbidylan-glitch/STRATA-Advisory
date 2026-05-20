import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

function PfRow({
  label,
  base,
  stress,
  dim,
  bold,
  context,
}: {
  label: string;
  base: string;
  stress: string;
  dim?: boolean;
  bold?: boolean;
  context?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[1.4fr_1fr_1fr] border-b border-border ${
        context ? "bg-accent/5" : ""
      }`}
    >
      <div
        className={`px-5 py-3.5 text-[0.82rem] sm:px-6 ${
          dim ? "text-ink/55" : "text-ink/80"
        } ${bold ? "font-semibold text-primary" : ""}`}
      >
        {label}
      </div>
      <div
        className={`border-l border-border px-5 py-3.5 text-right font-mono tabular-nums text-[0.9rem] sm:px-6 ${
          bold ? "font-semibold text-primary" : dim ? "text-ink/65" : "text-primary"
        }`}
      >
        {base}
      </div>
      <div
        className={`border-l border-border px-5 py-3.5 text-right font-mono tabular-nums text-[0.9rem] sm:px-6 ${
          bold ? "font-semibold text-accent-deep" : dim ? "text-ink/55" : "text-ink/75"
        }`}
      >
        {stress}
      </div>
    </div>
  );
}

function TaxRow({
  label,
  value,
  dim,
  highlight,
}: {
  label: string;
  value: string;
  dim?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-3.5">
      <dt className={`text-[0.82rem] ${dim ? "text-background/50" : "text-background/70"}`}>
        {label}
      </dt>
      <dd
        className={`font-mono tabular-nums text-[0.95rem] ${
          highlight
            ? "text-[1.15rem] font-semibold text-accent-soft"
            : dim
              ? "text-background/65"
              : "font-semibold text-background"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

const faqs = [
  {
    q: "Do you tell investors not to buy a deal?",
    a: "Yes. If the numbers do not work, the local rules are weak, the furnishing budget is unrealistic, or the tax angle does not support the strategy, we would rather tell you before closing than explain it after.",
  },
  {
    q: "Can I use STRATA Advisory without STRATA Hospitality?",
    a: "Yes. Some investors only need underwriting, tax modeling, or a second opinion before buying. Others want the full advisory-to-operations model.",
  },
  {
    q: "Can I use STRATA Hospitality if I already own the property?",
    a: "Yes. Existing STR owners can use STRATA Hospitality for listing optimization, pricing, guest operations, vendor coordination, and performance reporting.",
  },
  {
    q: "Do you guarantee tax savings?",
    a: "No. Tax outcomes depend on income type, basis, financing, material participation, state rules, filing position, and individual facts. We model the strategy and coordinate with your CPA. We do not guarantee outcomes.",
  },
  {
    q: "Do you guarantee revenue or occupancy?",
    a: "No. STRATA can model, manage, and optimize, but revenue depends on market demand, seasonality, pricing, property quality, reviews, competition, and local rules.",
  },
  {
    q: "What do you need to review a property?",
    a: "The address or listing link, purchase price, estimated financing, target use, income profile, and your goals. If you have AirDNA, Rabbu, PriceLabs, lender, or broker projections, include those too.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-[#F4EFE4]">
        <div className="grid lg:min-h-[640px] lg:grid-cols-2 lg:items-stretch">
          <Stagger
            start="mount"
            stagger={0.12}
            className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 md:px-14 md:py-[88px] lg:py-28 lg:pl-12 lg:pr-16 xl:pl-20 xl:pr-20"
          >
            <StaggerItem>
              <p className="label-rule-soft">STR Investment Platform</p>
            </StaggerItem>
            <div className="max-w-[36ch]">
              <StaggerItem>
                <h1 className="display mt-7 text-[#F4EFE4]">
                  <span className="block">We underwrite the deal.</span>
                  <span className="block">We structure the tax.</span>
                  <span className="block text-[#E3C99F]">We run the unit.</span>
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-8 max-w-[56ch] text-[16px] leading-[1.6] text-[#F4EFE4]/85 md:text-[17px]">
                  We review the property before you buy it. Then we help manage
                  the unit against the same numbers after launch.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="cta-primary">
                    Send a Property
                  </Link>
                  <a
                    href="#sample-underwrite"
                    className="cta-outline text-[#F4EFE4] hover:bg-[#F4EFE4]/10"
                    style={{ borderColor: "rgb(244 239 228 / 0.35)" }}
                  >
                    See a Sample Underwrite
                  </a>
                </div>
              </StaggerItem>
            </div>
          </Stagger>

          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=2400&q=88&auto=format&fit=crop"
              alt="Short-term rental property reviewed for underwriting"
              className="hero-photo absolute inset-0 h-full w-full object-cover object-[50%_35%]"
            />
            {/* navy scrim so the photo blends into the brand, not raw stock */}
            <div
              className="absolute inset-0"
              aria-hidden
              style={{
                background:
                  "linear-gradient(90deg, rgba(15,27,45,0.92) 0%, rgba(15,27,45,0.30) 38%, rgba(15,27,45,0.05) 70%, rgba(15,27,45,0.18) 100%)",
              }}
            />
            <div className="absolute inset-0 opacity-[0.12] mix-blend-soft-light noise" aria-hidden />
            <p
              className="absolute bottom-4 right-4 z-10 max-w-[50ch] font-mono text-[11px] uppercase tracking-[0.18em] text-[#F4EFE4]/70 sm:bottom-6 sm:right-6"
              style={{ textShadow: "0 1px 8px rgb(15 27 45 / 0.7)" }}
            >
              Sample STR asset reviewed for underwriting
            </p>
          </div>
        </div>
      </section>

      {/* Most STRs fail */}
      <section className="bg-background">
        <div className="container-page section-pad">
          <FadeIn className="mx-auto max-w-[62ch]">
            <p className="label-rule">Why deals fail</p>
            <h2 className="h2 mt-5 max-w-[18ch]">Most STRs fail in two places.</h2>
            <div className="mt-10 space-y-6 text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
              <p>
                First, the investor buys on optimistic revenue, light expenses,
                and a tax plan that was never fully checked.
              </p>
              <p>
                Then the property launches, and no one is managing against the
                original model.
              </p>
              <p className="text-primary">STRATA connects those two moments.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sample underwrite */}
      <section id="sample-underwrite" className="bg-cream">
        <div className="container-page section-pad">
          <div className="grid gap-14 md:grid-cols-12 md:gap-16">
            <FadeIn className="md:col-span-4">
              <p className="label-rule">Sample underwrite</p>
              <h2 className="h2 mt-5 max-w-[18ch]">
                The numbers we model on every deal.
              </h2>
              <p className="mt-6 max-w-[56ch] text-[16px] leading-[1.6] text-ink/75 md:text-[17px]">
                Every property comes with a full pro forma plus a stress case.
                Both run before you sign a contract.
              </p>
              <p className="mt-4 max-w-[56ch] text-[16px] leading-[1.6] text-ink/65">
                If the stress case doesn&rsquo;t hold, we tell you.
              </p>
              <div className="mt-9">
                <Link href="/contact" className="cta-primary">
                  Send a Property
                </Link>
              </div>
              <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-stone">
                Illustrative &middot; 4BR &middot; Pocono Mtns, PA
              </p>
            </FadeIn>

            <FadeIn delay={0.12} className="min-w-0 md:col-span-8">
              <div className="overflow-x-auto rounded-md border border-border bg-surface shadow-card">
                <div className="min-w-[460px]">
                  <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-border bg-background/70">
                    <div className="px-4 py-3.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted sm:px-6">
                      Line Item
                    </div>
                    <div className="border-l border-border px-4 py-3.5 text-right font-mono text-[0.6rem] uppercase tracking-[0.18em] text-sage-deep sm:px-6">
                      Base Case
                    </div>
                    <div className="border-l border-border px-4 py-3.5 text-right font-mono text-[0.6rem] uppercase tracking-[0.18em] text-accent-deep sm:px-6">
                      Stress Case
                    </div>
                  </div>
                  <PfRow label="Purchase Price" base="$742,500" stress="$742,500" />
                  <PfRow label="Down Payment (25%)" base="$185,625" stress="$185,625" dim />
                  <PfRow label="Setup Budget" base="$68,400" stress="$68,400" dim />
                  <PfRow label="Projected Revenue" base="$117,840" stress="$96,275" />
                  <PfRow label="Operating Expenses" base="$43,950" stress="$45,820" dim />
                  <PfRow label="NOI" base="$73,890" stress="$50,455" />
                  <PfRow label="Cash-on-Cash Return" base="13.7%" stress="8.9%" bold />
                  <PfRow label="Est. 1st-Yr Depreciation" base="$221,300" stress="$221,300" context />
                  <PfRow label="Est. Tax Benefit Range" base="$84,000–$99,500" stress="$84,000–$99,500" context />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-[auto_1fr] gap-4 rounded-md border border-critical/30 bg-critical/[0.08] px-5 py-4">
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-critical">
                  Recommendation
                </div>
                <p className="text-[0.9rem] leading-relaxed text-primary">
                  Renegotiate unless seller credits exceed{" "}
                  <span className="font-mono font-semibold tabular-nums">$18,000</span>
                  . Furnishing budget runs hot at this price point; stress-case
                  CoC drops below 9% without concession.
                </p>
              </div>
              <p className="mt-4 max-w-[58ch] text-[13px] leading-[1.5] text-stone">
                Illustrative only. Actual results depend on the property,
                financing, market data, tax facts, participation, and execution.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Advisory + Hospitality */}
      <section className="bg-background">
        <div className="container-page section-pad">
          <FadeIn className="mx-auto max-w-[62ch]">
            <p className="label-rule">The model</p>
            <h2 className="h2 mt-5">Advisory + Hospitality.</h2>
            <div className="mt-10 space-y-5 text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
              <p>
                <span className="font-semibold text-primary">
                  Advisory is before closing.
                </span>{" "}
                Deal underwriting, tax modeling, cost segregation, and a clear
                recommendation.
              </p>
              <p>
                <span className="font-semibold text-primary">
                  Hospitality is after closing.
                </span>{" "}
                Unit setup, listing, pricing, guest operations, and owner
                reporting.
              </p>
              <p className="pt-2 text-ink/75">
                The point is simple. The person reviewing the deal and the
                person running the unit should be working from the same numbers.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tax */}
      <section className="relative overflow-hidden bg-secondary-deep text-background">
        <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light noise" aria-hidden />
        <div className="container-page section-pad relative grid gap-14 md:grid-cols-12 md:gap-16">
          <FadeIn className="md:col-span-5">
            <p className="label-rule-soft">Tax strategy</p>
            <h2 className="h2 mt-5 max-w-[22ch] text-background">
              The tax strategy only works when the facts line up.
            </h2>
            <p className="mt-7 max-w-[56ch] text-[16px] leading-[1.6] text-background/75 md:text-[17px]">
              For the right short-term rental investor, depreciation can
              materially change the after-tax return profile. But it only works
              when the property, use pattern, ownership structure, basis,
              financing, and material participation facts line up.
            </p>
            <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.6] text-background/75 md:text-[17px]">
              STRATA Advisory helps model the tax angle before the property is
              purchased, so the investor understands both the cash return and
              the potential after-tax impact.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="cta-primary focus-visible:ring-offset-secondary-deep"
              >
                Model the Tax Impact
              </Link>
              <Link
                href="/tax-strategy"
                className="text-[12px] font-medium uppercase tracking-[0.16em] text-background/70 transition-colors hover:text-accent-soft"
              >
                Read the deep-dive &rarr;
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.12} className="md:col-span-7">
            <div className="rounded-md border border-background/15 bg-background/[0.04] p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-baseline justify-between gap-3">
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-accent-soft">
                  Sample Scenario &middot; High-Income W-2 Earner
                </div>
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-background/45">
                  Illustrative
                </span>
              </div>
              <dl className="mt-6 divide-y divide-background/10">
                <TaxRow label="Investor income (W-2)" value="$718,500" />
                <TaxRow label="STR purchase price" value="$912,750" />
                <TaxRow label="Estimated depreciable basis" value="$731,000" dim />
                <TaxRow label="Estimated 1st-year depreciation" value="$221,300" />
                <TaxRow label="Estimated combined tax rate" value="42.4%" dim />
                <TaxRow label="Estimated tax benefit range" value="$84,000–$99,500" highlight />
              </dl>
              <p className="mt-6 text-[13px] leading-[1.5] text-background/65">
                Illustrative only. Actual results depend on the property,
                financing, market data, tax facts, participation, and execution.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Manage against the model */}
      <section className="bg-background">
        <div className="container-page section-pad">
          <FadeIn className="mx-auto max-w-[62ch]">
            <p className="label-rule">After launch</p>
            <h2 className="h2 mt-5 max-w-[26ch]">
              A model is only useful if someone manages against it.
            </h2>
            <p className="mt-7 text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
              The numbers we use before closing are the numbers we manage after
              launch. If revenue drifts, cleaning costs creep, or reviews slip,
              the owner hears about it.
            </p>
          </FadeIn>

          <FadeIn className="mx-auto mt-14 max-w-[62ch] border-l-2 border-accent pl-6 md:mt-16 md:pl-8">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-stone">
              From a recent owner note
            </p>
            <p className="mt-3 text-[16px] leading-[1.6] text-ink/85 md:text-[17px]">
              Revenue is tracking below the original model because midweek
              demand is softer than expected. We adjusted weekday pricing,
              tightened weekend minimum stays, and flagged cleaning cost
              variance for review.
            </p>
            <p className="mt-4 max-w-[58ch] text-[13px] leading-[1.5] text-stone">
              Illustrative only. Actual reports vary by property.
            </p>
          </FadeIn>

          <FadeIn className="mx-auto mt-16 max-w-[62ch] md:mt-20">
            <h3 className="h3">The first 30 days</h3>
            <ul className="mt-6 grid gap-3 text-[16px] leading-[1.6] text-ink/80 sm:grid-cols-2 sm:gap-x-10">
              <li>Listing photos shot and uploaded</li>
              <li>Cleaner assigned and walked through the unit</li>
              <li>Pricing rules set for season, midweek, and weekend</li>
              <li>Minimum stay rules tightened for peak weekends</li>
              <li>Guest guide written and tested with a real arrival</li>
              <li>Maintenance log opened with vendor contacts</li>
              <li>Review response template approved with the owner</li>
              <li>First owner report sent at day 30</li>
            </ul>
            <div className="mt-10">
              <Link href="/hospitality" className="cta-primary">
                See the Launch Plan
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Examples / comps */}
      <section className="bg-cream">
        <div className="container-page section-pad">
          <FadeIn className="mx-auto max-w-[62ch]">
            <p className="label-rule">Field notes</p>
            <h2 className="h2 mt-5 max-w-[18ch]">Examples of what we look at.</h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-ink/75 md:text-[17px]">
              These are illustrative market comps, not properties STRATA
              manages. They show the shape of the analysis, not the answer.
            </p>
          </FadeIn>

          <FadeIn className="mx-auto mt-14 max-w-[62ch] border-t border-border pt-10">
            <h3 className="h3">Pocono Mountains, PA</h3>
            <p className="mt-1 text-[13px] text-stone">
              4 bed, sleeps 10. Sample featured comp.
            </p>
            <dl className="mt-6 space-y-3 text-[16px] leading-[1.6] text-ink/85">
              {[
                ["Revenue range", "$96K to $118K", true],
                ["Main risk", "Seasonality and cleaning cost.", false],
                ["Tax angle", "Likely worth modeling, but not enough to carry a bad deal.", false],
                ["Setup note", "Heavy furnishing budget. Lake access lifts ADR in summer.", false],
              ].map(([dt, dd, mono]) => (
                <div key={dt as string} className="grid grid-cols-[140px_1fr] gap-x-6 sm:grid-cols-[180px_1fr]">
                  <dt className="text-ink/55">{dt}</dt>
                  <dd className={mono ? "font-mono tabular-nums" : ""}>{dd}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn className="mx-auto mt-14 max-w-[62ch] border-t border-border pt-10">
            <h4 className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-stone">
              Other comps we&rsquo;ve recently reviewed
            </h4>
            <div className="mt-6 grid gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <p className="text-[16px] font-semibold text-primary">Smoky Mountains, TN</p>
                <p className="mt-1 text-[14px] leading-[1.55] text-ink/65">
                  4 bed cabin. Revenue range reviewed roughly $95K to $108K.
                  Local rules open. Setup standard.
                </p>
              </div>
              <div>
                <p className="text-[16px] font-semibold text-primary">Scottsdale, AZ</p>
                <p className="mt-1 text-[14px] leading-[1.55] text-ink/65">
                  5 bed pool home. Summer rate softness. Permit required. Tax
                  angle moderate.
                </p>
              </div>
              <div>
                <p className="text-[16px] font-semibold text-primary">Destin, FL</p>
                <p className="mt-1 text-[14px] leading-[1.55] text-ink/65">
                  4 bed coastal. March to August carries most of the year.
                  Storm-season softness. Permit required.
                </p>
              </div>
            </div>
          </FadeIn>

          <p className="mx-auto mt-12 max-w-[58ch] text-[13px] leading-[1.5] text-stone">
            Illustrative only. Actual results vary.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="container-page section-pad">
          <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <FadeIn>
              <p className="label-rule">FAQ</p>
              <h2 className="h2 mt-5 max-w-[18ch]">Common questions from investors.</h2>
              <p className="mt-6 max-w-[56ch] text-[16px] leading-[1.6] text-ink/75 md:text-[17px]">
                If something isn&rsquo;t covered here, the strategy call is the
                fastest way to get a real answer.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} as="ul" className="border-t border-border">
              {faqs.map((item) => (
                <li key={item.q} className="border-b border-border">
                  <details className="group py-6">
                    <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6">
                      <span className="h3 text-primary">{item.q}</span>
                      <span
                        aria-hidden
                        className="ml-3 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-ink/60 transition-transform duration-200 group-open:rotate-45"
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 max-w-[62ch] text-[16px] leading-[1.6] text-ink/75">
                      {item.a}
                    </p>
                  </details>
                </li>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background">
        <div className="container-page section-pad">
          <FadeIn className="mx-auto max-w-[62ch]">
            <p className="label-rule">Get started</p>
            <h2 className="h2 mt-5 max-w-[22ch]">Send us the property.</h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-ink/75 md:text-[17px]">
              We&rsquo;ll tell you what we see before you buy it.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/contact" className="cta-primary">
                Send a Property
              </Link>
              <Link
                href="/process"
                className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-primary"
              >
                View the Process &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
