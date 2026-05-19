import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { AdvisoryCard } from "@/components/AdvisoryCard";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Advisory | STRATA Engagement",
  description:
    "STR advisory for investors who want the numbers, tax strategy, and launch plan aligned. Engagements start at $7,500 per property.",
};

const services = [
  {
    title: "Deal underwriting",
    description:
      "We review purchase price, revenue assumptions, debt service, startup costs, and breakeven — independent of the listing agent.",
  },
  {
    title: "Investment modeling",
    description:
      "Cash flow and return modeling with realistic seasonality, repairs, furnishing, and management cost assumptions.",
  },
  {
    title: "Tax planning",
    description:
      "STR classification, material participation, basis, and depreciation strategy mapped before closing.",
  },
  {
    title: "Vendor coordination",
    description:
      "Lender, insurance, inspections, cost segregation provider, and hospitality partner all aligned around the same deadlines.",
  },
  {
    title: "Closing-to-launch support",
    description:
      "Bridge advisory from the moment you close through furnishing, listing, and first guests.",
  },
  {
    title: "Ongoing reporting options",
    description:
      "Monthly or quarterly advisory through FABBI keeps performance, books, and tax planning in one place.",
  },
];

export default function AdvisoryPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-wide pb-12 pt-20 md:pb-16 md:pt-28">
          <div className="max-w-3xl">
            <p className="eyebrow">Advisory Engagement</p>
            <h1 className="mt-4 h-display text-4xl text-balance sm:text-5xl md:text-6xl">
              STR advisory for investors who want the numbers, tax strategy, and
              launch plan aligned.
            </h1>
            <p className="mt-6 text-base text-charcoal/70 sm:text-lg leading-relaxed text-pretty">
              A defined engagement with a defined scope — investor profile
              review, deal underwriting, tax strategy mapping, cost segregation
              coordination, and launch support.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-wide py-20 md:py-28">
          <SectionHeading
            eyebrow="What's Included"
            title="The advisory work, defined."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <AdvisoryCard
                key={s.title}
                num={`0${i + 1}`}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-ivory">
        <div className="container-wide py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHeading
                eyebrow="Engagement Fee"
                title="Starting at $7,500 per property."
                description="Advisory engagements generally start at $7,500 per property, structured as 50% upfront and 50% upon closing. Third-party costs are billed separately."
                tone="dark"
              />
            </div>
            <div className="md:col-span-7">
              <div className="rounded-2xl border border-ivory/15 bg-ink/40 p-8 sm:p-10">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow text-gold-soft">Fee</p>
                    <p className="mt-3 font-serif text-4xl text-ivory">
                      $7,500
                    </p>
                    <p className="mt-1 text-sm text-ivory/65">per property, starting</p>
                  </div>
                  <div>
                    <p className="eyebrow text-gold-soft">Payment</p>
                    <p className="mt-3 font-serif text-2xl text-ivory">
                      50% upfront
                    </p>
                    <p className="mt-1 text-sm text-ivory/65">
                      Balance due upon closing.
                    </p>
                  </div>
                </div>
                <div className="mt-8 border-t border-ivory/15 pt-6 text-sm text-ivory/65">
                  Third-party costs may include cost segregation studies,
                  property management, furnishing, legal, lending, inspections,
                  and other property-specific costs.
                </div>
                <div className="mt-8">
                  <Link href="/contact" className="btn-on-dark">
                    Discuss Your STR Investment
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next Step"
        headline="Tell us about the deal."
        copy="Share property, price range, and your tax situation. We'll review fit before scheduling."
        buttonText="Start the Conversation"
        buttonHref="/contact"
        variant="light"
      />
    </>
  );
}
