import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Hospitality | STR Launch & Operations",
  description:
    "STRATA Hospitality launches, operates, and optimizes short-term rentals so the asset performs the way the underwrite said it would.",
};

const steps: { num: string; title: string; body: string; chips: string[] }[] = [
  {
    num: "01",
    title: "Setup & Furnishing",
    body: "A property either reads as a designed stay or a furnished house. We treat setup as part of the investment. What guests actually book matters more than what looks good in isolation.",
    chips: [
      "Furnishing strategy aligned to ADR target and guest segment",
      "Design direction with budget discipline",
      "Vendor and installation coordination",
      "Soft goods, kitchen, outdoor, and amenity scoping",
    ],
  },
  {
    num: "02",
    title: "Listing & Photography",
    body: "Listings carry the deal. We handle photography direction, copy, structure, and platform setup so the listing competes on the first scroll, not the third.",
    chips: [
      "Professional photography coordination and shot list",
      "Listing copy written to convert, not just describe",
      "Platform setup across Airbnb, Vrbo, and direct",
      "Amenity, calendar, and rule configuration",
    ],
  },
  {
    num: "03",
    title: "Pricing & Revenue Management",
    body: "Dynamic pricing is the difference between an average year and a strong one. We manage rate, length-of-stay, lead time, and discounts continuously. Not on autopilot.",
    chips: [
      "Dynamic pricing with seasonality and event overlays",
      "Length-of-stay and minimum-night strategy",
      "Promotional and last-minute discount management",
      "Ongoing rate testing and competitive monitoring",
    ],
  },
  {
    num: "04",
    title: "Guest Operations",
    body: "Guest experience drives reviews. Reviews drive ranking. Ranking drives revenue. We run operations with that loop in mind, not as a cost center.",
    chips: [
      "Pre-arrival, in-stay, and post-stay messaging",
      "Inquiry response and screening protocols",
      "Issue resolution and on-the-ground escalation",
      "Review request workflow and response strategy",
    ],
  },
  {
    num: "05",
    title: "Property Management",
    body: "The execution layer behind every stay: cleaners scheduled, supplies stocked, maintenance handled, vendors held to standard. Run the property like a business, because it is one.",
    chips: [
      "Cleaner scheduling, oversight, and turnover quality control",
      "Linen, supplies, and consumables management",
      "Preventative maintenance and repair coordination",
      "Vendor sourcing and standards enforcement",
    ],
  },
  {
    num: "06",
    title: "Owner Reporting & Performance",
    body: "You should know how the property is performing, what changed this month, and what we're doing about it. Reporting is monthly, plain-English, and tied to the underwrite you bought into.",
    chips: [
      "Monthly performance reporting against pro forma",
      "Occupancy, ADR, RevPAR, and revenue tracking",
      "Booking pace and forward-looking visibility",
      "Quarterly strategy review and optimization plan",
    ],
  },
];

export default function HospitalityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-page section-pad">
          <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent-deep">
            STRATA Hospitality
          </p>
          <div className="mt-6 grid gap-10 md:grid-cols-12 md:gap-16">
            <h1 className="display text-primary md:col-span-7">
              Turn the property into a performing asset.
            </h1>
            <div className="md:col-span-5">
              <p className="text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
                Once the numbers work, execution decides the outcome. STRATA
                Hospitality launches, operates, and optimizes short-term rentals
                so the asset performs the way the underwrite said it would.
              </p>
              <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-stone">
                First 30 days
              </p>
              <p className="mt-2 text-[0.92rem] leading-[1.5] text-ink/70">
                Listing photos, pricing rules, guest guide, cleaner assignment,
                maintenance log, owner report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbered operations */}
      <section className="border-t border-border bg-background">
        <div className="container-page">
          {steps.map((s) => (
            <FadeIn
              key={s.num}
              className="grid gap-6 border-b border-border py-12 md:grid-cols-12 md:gap-10 md:py-16"
            >
              <div className="md:col-span-3">
                <span className="font-serif text-3xl text-accent-deep/70">{s.num}</span>
                <span className="mt-2 block h-px w-8 bg-accent/50" />
              </div>
              <div className="md:col-span-9">
                <h2 className="h3 text-primary">{s.title}</h2>
                <p className="mt-3 max-w-[64ch] text-[16px] leading-[1.6] text-ink/75">
                  {s.body}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.chips.map((chip) => (
                    <div
                      key={chip}
                      className="flex items-start gap-2.5 rounded-sm border border-border bg-surface px-4 py-3 text-[0.86rem] leading-[1.4] text-ink/75"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{chip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="container-page section-pad">
          <div className="mx-auto max-w-[62ch]">
            <h2 className="h2 max-w-[24ch]">
              A pro forma is a hypothesis. Operations is the experiment.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-ink/75 md:text-[17px]">
              Whether you&rsquo;re launching a new unit or improving an existing
              one, send us the property. We&rsquo;ll review the market position,
              operating gaps, and recommend a launch plan.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/contact" className="cta-primary">
                Send a Property
              </Link>
              <Link
                href="/#sample-underwrite"
                className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-primary"
              >
                See the Underwrite &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
