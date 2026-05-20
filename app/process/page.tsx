import type { Metadata } from "next";
import Link from "next/link";
import { UnderwriteCalculator } from "@/components/UnderwriteCalculator";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Process | From First Look to First Guest",
  description:
    "STRATA reviews the property before closing, coordinates the tax angle, plans the launch, and manages performance against the same pro forma after the unit goes live.",
};

const steps: { num: string; title: string; body: string; points: string[] }[] = [
  {
    num: "01",
    title: "Property or Market Intake",
    body: "Send the address, listing link, purchase price, financing assumptions, target use, and income profile. If you have AirDNA, Rabbu, PriceLabs, lender, or broker projections, include those too.",
    points: ["Property or market scoped", "Financing assumptions on the table", "Investor income + goals reviewed"],
  },
  {
    num: "02",
    title: "Deal Underwriting",
    body: "Revenue comps adjusted for seasonality. Expense modeling against real STR operating costs. Furnishing budget. Downside case. Local rule review.",
    points: ["Pro forma with adjusted assumptions", "Downside case modeled", "Furnishing + local-risk flags"],
  },
  {
    num: "03",
    title: "Tax and Structure Review",
    body: "Material participation, cost segregation potential, basis, financing, and ownership structure. Coordinated with your CPA before the deal closes, not after.",
    points: ["Cost segregation feasibility", "Material participation framework", "Entity + financing review"],
  },
  {
    num: "04",
    title: "Go, Renegotiate, or Walk Away",
    body: "A clear recommendation before capital is committed. Sometimes the answer is walk away.",
    points: ["Written recommendation", "Negotiation points (if renegotiate)", "Reasons documented (if walk away)"],
  },
  {
    num: "05",
    title: "Launch Plan",
    body: "Furnishing direction, photography, listing setup, dynamic pricing rules, and vendor coordination. The unit goes live ready to perform against the pro forma.",
    points: ["Furnishing + photography plan", "Listing setup across platforms", "Pricing rules + vendor onboarding"],
  },
  {
    num: "06",
    title: "Operate Against the Pro Forma",
    body: "Monthly: revenue, ADR, occupancy, reviews, cleaning costs, and maintenance tracked against the assumptions that closed the deal. If anything drifts, you hear about it.",
    points: ["Monthly owner report", "Variance vs pro forma", "Pricing + operations adjustments"],
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-page section-pad">
          <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent-deep">
            The STRATA Process
          </p>
          <div className="mt-6 grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <h1 className="display text-primary">From first look to first guest.</h1>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link href="/contact" className="cta-primary">
                  Send a Property
                </Link>
                <Link
                  href="/contact"
                  className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-primary"
                >
                  Book a Strategy Call &rarr;
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <p className="text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
                STRATA reviews the property before closing, coordinates the tax
                angle, plans the launch, and manages performance against the
                same pro forma after the unit goes live.
              </p>
              <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-stone">
                Outcomes
              </p>
              <p className="mt-2 text-[0.92rem] text-ink/70">
                Buy, renegotiate, or walk away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-t border-border bg-background">
        <div className="container-page">
          {steps.map((s) => (
            <FadeIn
              key={s.num}
              className="grid gap-6 border-b border-border py-10 md:grid-cols-12 md:gap-10 md:py-12"
            >
              <div className="md:col-span-1">
                <span className="font-mono text-[0.7rem] text-accent-deep">{s.num}</span>
              </div>
              <div className="md:col-span-11">
                <h2 className="h3 text-primary">{s.title}</h2>
                <p className="mt-2 max-w-[72ch] text-[15px] leading-[1.6] text-ink/75">
                  {s.body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-[0.82rem] text-ink/60">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Interactive underwrite */}
      <section className="bg-cream">
        <div className="container-page section-pad">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <FadeIn className="md:col-span-5">
              <h2 className="h2 max-w-[16ch]">An illustrative underwrite.</h2>
              <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.6] text-ink/75">
                Adjust the inputs to see how purchase price, daily rate,
                occupancy, financing, and the tax angle move the numbers on a
                representative deal. This is a teaching tool, not a substitute
                for a full underwrite.
              </p>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.6] text-ink/60">
                The real version we deliver to clients includes detailed expense
                lines, market-specific interest rates, depreciation scenarios,
                financing alternatives, and cost-seg modeling tailored to the
                deal in front of them.
              </p>
              <p className="mt-6 text-[13px] leading-[1.5] text-stone">
                Illustrative only. Actual results vary.
              </p>
            </FadeIn>
            <FadeIn delay={0.12} className="md:col-span-7">
              <UnderwriteCalculator />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Three columns */}
      <section className="bg-background">
        <div className="container-page section-pad">
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {[
              ["Pressure-Check Every Assumption", "A pro forma without a downside case is not an investment decision. The model what happens if revenue misses by 20% before you sign anything."],
              ["Coordinate Tax Before Closing", "Tax outcomes depend on structure, basis, financing, and timing. We bring the tax review into the underwrite, not after the deal closes."],
              ["Hand Off to Operations", "The day after closing matters. We help you slide into vendor relationships, listing setup, and monthly reporting with a clear plan."],
            ].map(([t, b]) => (
              <FadeIn key={t} className="border-t border-border pt-6">
                <h3 className="h3 text-primary">{t}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink/70">{b}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="container-page section-pad pt-0">
          <div className="mx-auto max-w-[62ch]">
            <h2 className="h2 max-w-[22ch]">
              Send a property. We&rsquo;ll tell you whether it pencils.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-ink/75 md:text-[17px]">
              Bring us a property, a market, or a deal. Sometimes the answer is
              walk away.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/contact" className="cta-primary">
                Send a Property
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
