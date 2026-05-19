import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CTASection } from "@/components/CTASection";

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
            <p className="eyebrow-rule">Advisory Engagement</p>
            <h1 className="mt-7 h-display text-[2.5rem] text-balance leading-[1.02] sm:text-5xl md:text-[3.75rem]">
              STR advisory for investors who want{" "}
              <span className="h-display-italic">
                the numbers, tax strategy, and launch plan aligned.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-charcoal/70 sm:text-lg leading-relaxed text-pretty">
              A defined engagement with defined scope &mdash; investor profile
              review, deal underwriting, tax strategy mapping, cost segregation
              coordination, and launch support.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-wide py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="section-tag-gold">Section 01 — Scope</p>
            <h2 className="mt-6 h-display text-[2rem] text-balance leading-[1.05] sm:text-4xl md:text-5xl">
              The advisory work,{" "}
              <span className="h-display-italic">defined</span>
            </h2>
          </div>
          <div className="mt-14 grid border-t border-charcoal/15 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`border-b border-charcoal/15 p-7 lg:p-8 ${
                  i % 3 !== 2 ? "lg:border-r" : ""
                } ${i % 2 !== 1 ? "sm:border-r lg:border-r" : ""}`}
              >
                <span className="num-marker">0{i + 1}</span>
                <h3 className="mt-3 h-display text-xl text-charcoal sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70 text-pretty">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Term sheet section */}
      <section className="relative overflow-hidden bg-charcoal text-ivory">
        <div className="absolute inset-0 -z-0 grain-dark opacity-60" aria-hidden />
        <div className="container-wide relative py-24 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="section-tag-gold !text-gold-soft">
                Section 02 — Engagement Fee
              </p>
              <h2 className="mt-6 h-display text-[2rem] text-balance leading-[1.05] sm:text-4xl md:text-5xl text-ivory">
                Starting at{" "}
                <span className="h-display-italic text-ivory">$7,500 per property</span>
              </h2>
              <p className="mt-6 max-w-md text-ivory/70 leading-relaxed text-pretty">
                Advisory engagements are structured as a clear fee for clear
                scope &mdash; 50% upfront, 50% upon closing. Third-party costs
                are billed separately by their providers.
              </p>
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
                <div className="mt-6 grid items-end gap-8 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold-soft">
                      Fee
                    </p>
                    <p className="mt-3 font-serif text-5xl leading-none text-ivory">
                      $7,500
                    </p>
                    <p className="mt-2 text-sm text-ivory/65">
                      per property, starting
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold-soft">
                      Payment
                    </p>
                    <p className="mt-3 font-serif text-3xl leading-none text-ivory">
                      50 / 50
                    </p>
                    <p className="mt-2 text-sm text-ivory/65">
                      Upfront and at closing
                    </p>
                  </div>
                </div>
                <p className="mt-8 border-t border-ivory/15 pt-6 text-sm leading-relaxed text-ivory/65">
                  Third-party costs may include cost segregation studies,
                  property management, furnishing, legal, lending, inspections,
                  and other property-specific costs &mdash; billed separately
                  by their providers.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href="/contact" className="btn-on-dark">
                    Discuss Your STR Investment
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/process" className="btn-link-on-dark">
                    See the process
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next Step"
        headline="Tell us about"
        italicTail="the deal"
        copy="Share property, price range, and your tax situation. We'll review fit before scheduling."
        buttonText="Start the Conversation"
        buttonHref="/contact"
        variant="light"
      />
    </>
  );
}
