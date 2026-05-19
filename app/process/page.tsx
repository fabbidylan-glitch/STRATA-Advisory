import type { Metadata } from "next";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Process | STR Investment Advisory",
  description:
    "A clear STR investment process from first review to operating asset — discovery, underwriting, tax strategy, acquisition coordination, and launch advisory.",
};

const steps = [
  {
    num: "01",
    title: "Discovery & Investor Fit",
    description:
      "Before discussing any property, we make sure an STR investment fits the investor's overall financial picture and tax position.",
    points: [
      "Income profile",
      "Tax exposure",
      "Available capital",
      "Investment goals",
      "Timeline",
      "Risk tolerance",
    ],
  },
  {
    num: "02",
    title: "Deal Review & Underwriting",
    description:
      "We pressure-test the deal economics so projected returns survive contact with reality — debt service, seasonality, repairs, and launch costs included.",
    points: [
      "Purchase price",
      "Financing assumptions",
      "Revenue projections",
      "Seasonality",
      "Management fees",
      "Repairs and maintenance",
      "Furnishing and startup budget",
      "Breakeven point",
    ],
  },
  {
    num: "03",
    title: "Tax Strategy Mapping",
    description:
      "We translate the deal into a tax strategy: STR classification, participation, cost segregation, and basis planning — before purchase, not after.",
    points: [
      "STR classification",
      "Material participation plan",
      "Cost segregation estimate",
      "Bonus depreciation impact",
      "Entity / accounting setup",
      "Documentation requirements",
    ],
  },
  {
    num: "04",
    title: "Acquisition Coordination",
    description:
      "We coordinate the moving parts so closing leads cleanly into launch — lender, PM partner, insurance, and inspection timelines lined up.",
    points: [
      "Lender coordination where applicable",
      "Property management / hospitality partner review",
      "Insurance, inspections, compliance reminders",
      "Closing timeline",
    ],
  },
  {
    num: "05",
    title: "Launch & Advisory",
    description:
      "Once the property is live, advisory continues — books, KPIs, and tax planning stay connected to the original strategy.",
    points: [
      "Books setup",
      "KPI tracking",
      "Monthly / quarterly advisory options",
      "Tax planning",
      "Year-end reporting",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-wide pb-12 pt-20 md:pb-16 md:pt-28">
          <FadeIn start="mount" className="max-w-3xl">
            <p className="eyebrow-rule">The Process</p>
            <h1 className="mt-7 h-display text-[2.5rem] text-balance leading-[1.02] sm:text-5xl md:text-[3.75rem]">
              A clear STR investment process —{" "}
              <span className="h-display-italic">from first review to operating asset</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-charcoal/70 sm:text-lg leading-relaxed text-pretty">
              STRATA brings the deal, the tax strategy, and the launch plan into
              one coordinated workflow &mdash; so investors aren&rsquo;t
              stitching vendors together while capital is on the line.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-wide py-20 md:py-28">
          <ProcessTimeline steps={steps} />
        </div>
      </section>

      <CTASection
        eyebrow="Start"
        headline="Map the strategy"
        italicTail="before the offer is signed"
        copy="STRATA's process works best when it begins before acquisition — but we can pick up at any stage."
        buttonText="Book a Strategy Call"
        buttonHref="/contact"
        secondary={{ text: "Review Advisory Engagement", href: "/advisory" }}
      />
    </>
  );
}
