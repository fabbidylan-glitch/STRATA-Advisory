import Link from "next/link";
import { ArrowRight, ChartLine, FileSearch, Layers, Building2, Calculator, ClipboardCheck, Briefcase, ScrollText } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { SectionHeading } from "@/components/SectionHeading";
import { AdvisoryCard } from "@/components/AdvisoryCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";

const problems = [
  {
    title: "The numbers are incomplete",
    description:
      "Revenue projections often ignore seasonality, occupancy swings, debt service, furnishing, insurance, repairs, and management fees.",
  },
  {
    title: "The tax strategy is an afterthought",
    description:
      "STR tax treatment, material participation, cost segregation, and basis planning need to be considered before the investment is made.",
  },
  {
    title: "The launch is fragmented",
    description:
      "Agents, lenders, cost seg providers, furnishing teams, cleaners, and property managers rarely coordinate around one investor outcome.",
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

const helpCards = [
  { title: "STR deal underwriting", icon: <FileSearch size={20} /> },
  { title: "Tax strategy planning", icon: <Calculator size={20} /> },
  { title: "Cost segregation coordination", icon: <Layers size={20} /> },
  { title: "Entity & accounting setup", icon: <Briefcase size={20} /> },
  { title: "Launch budget planning", icon: <ClipboardCheck size={20} /> },
  { title: "Property management coordination", icon: <Building2 size={20} /> },
  { title: "Ongoing bookkeeping & reporting", icon: <ChartLine size={20} /> },
  { title: "Year-end tax planning", icon: <ScrollText size={20} /> },
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

      {/* Problem */}
      <section className="bg-ivory">
        <div className="container-wide py-20 md:py-28">
          <SectionHeading
            eyebrow="The Problem"
            title="Most STR investors start with the property. We start with the full picture."
            description="The wrong STR deal can look profitable on Airbnb screenshots and still fail after debt service, furnishing, management, taxes, repairs, and seasonality. STRATA helps investors look at the deal through an accounting, tax, and operating lens before committing capital."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {problems.map((p, i) => (
              <AdvisoryCard
                key={p.title}
                num={`0${i + 1}`}
                title={p.title}
                description={p.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-wide py-20 md:py-28">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="The STRATA Method"
                title="One coordinated advisory process from idea to operating asset."
              />
            </div>
            <div className="md:col-span-5">
              <p className="text-charcoal/70 leading-relaxed text-pretty">
                Five steps, one team. Each phase builds on the last so the tax
                strategy, deal economics, and launch plan stay aligned with the
                investor&rsquo;s goals.
              </p>
            </div>
          </div>
          <div className="mt-14">
            <ProcessTimeline steps={method} />
          </div>
        </div>
      </section>

      {/* What we help with */}
      <section className="bg-ivory">
        <div className="container-wide py-20 md:py-28">
          <SectionHeading
            eyebrow="Where We Help"
            title="Advisory support where STR investments usually break down."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {helpCards.map((c) => (
              <div
                key={c.title}
                className="flex h-full flex-col justify-between rounded-2xl border border-charcoal/10 bg-white p-6 shadow-card"
              >
                <div className="text-gold">{c.icon}</div>
                <p className="mt-10 font-serif text-lg text-charcoal">
                  {c.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement / Fee */}
      <section className="bg-charcoal text-ivory">
        <div className="container-wide py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHeading
                eyebrow="Engagement"
                title="A clear advisory fee for a serious investment decision."
                description="STRATA engagements are structured for investors who want a professional, coordinated process — not a sales funnel."
                tone="dark"
              />
            </div>

            <div className="md:col-span-7">
              <div className="rounded-2xl border border-ivory/15 bg-ink/40 p-8 sm:p-10">
                <p className="eyebrow text-gold-soft">
                  STRATA Advisory Engagement
                </p>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="font-serif text-5xl text-ivory">$7,500</span>
                  <span className="text-ivory/65">starting fee, per property</span>
                </div>
                <p className="mt-2 text-ivory/65">
                  Structured as 50% upfront, 50% upon closing.
                </p>

                <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {[
                    "Investor profile and tax strategy review",
                    "STR deal underwriting support",
                    "Cost segregation planning coordination",
                    "Launch budget and setup guidance",
                    "Vendor and property management coordination",
                    "Accounting and advisory setup roadmap",
                    "Closing-to-launch advisory support",
                  ].map((line) => (
                    <div
                      key={line}
                      className="flex items-start gap-3 text-sm text-ivory/85"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-ivory/15 pt-6 text-sm text-ivory/60">
                  Third-party costs are billed separately and may include cost
                  segregation, underwriting support, launch support, furnishing,
                  legal, lending, property management, inspections, and other
                  property-specific costs.
                </div>

                <div className="mt-8">
                  <Link href="/advisory" className="btn-on-dark">
                    Advisory Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax strategy */}
      <section className="bg-ivory">
        <div className="container-wide py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <SectionHeading
                eyebrow="Tax Strategy"
                title="The tax strategy needs to be built before the return is filed."
                description="Many investors hear about STR losses, cost segregation, and bonus depreciation only after they already purchased the property. STRATA helps evaluate the strategy before the investment so the client understands the rules, documentation, and operating requirements from the start."
              />
              <div className="mt-8">
                <Link href="/tax-strategy" className="btn-secondary">
                  Tax Strategy Detail
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="rounded-2xl border border-charcoal/10 bg-white p-7 shadow-card">
                <p className="eyebrow">What we evaluate</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {taxBullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-charcoal/80"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-charcoal/10 pt-5 text-xs text-charcoal/55">
                  Tax outcomes depend on each investor&rsquo;s facts, income,
                  participation, property use, financing, and applicable law.
                  STRATA and FABBI do not guarantee tax savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality */}
      <section className="bg-white border-y border-charcoal/10">
        <div className="container-wide py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="Hospitality Partners"
                title="STRATA coordinates the strategy. Hospitality partners handle the guest experience."
                description="For investors who need operational support, STRATA can coordinate with hospitality and property management partners for launch, guest experience, pricing, cleaning, and day-to-day operations. This keeps advisory, tax, and accounting strategy aligned with the actual performance of the property."
              />
              <div className="mt-8">
                <Link href="/hospitality" className="btn-secondary">
                  How coordination works
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="grid gap-4">
                <div className="rounded-2xl border border-charcoal/10 bg-ivory p-6">
                  <p className="eyebrow">STRATA handles</p>
                  <p className="mt-2 font-serif text-xl text-charcoal">
                    Advisory, tax, deal review, coordination
                  </p>
                </div>
                <div className="rounded-2xl border border-charcoal/10 bg-ivory p-6">
                  <p className="eyebrow">Hospitality partner handles</p>
                  <p className="mt-2 font-serif text-xl text-charcoal">
                    Guest ops, pricing, cleaning, communication
                  </p>
                </div>
                <div className="rounded-2xl border border-charcoal/10 bg-ivory p-6">
                  <p className="eyebrow">Investor chooses</p>
                  <p className="mt-2 font-serif text-xl text-charcoal">
                    Whether to engage a PM partner at all
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For / Not For */}
      <section className="bg-ivory">
        <div className="container-wide py-20 md:py-28">
          <SectionHeading
            eyebrow="Who It's For"
            title="Built for investors who want clarity before committing capital."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-charcoal/10 bg-white p-8 shadow-card">
              <p className="eyebrow">Built for</p>
              <ul className="mt-5 space-y-3">
                {forList.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-charcoal/85"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-charcoal/15 bg-transparent p-8">
              <p className="eyebrow">Not built for</p>
              <ul className="mt-5 space-y-3">
                {notFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-charcoal/70"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full border border-charcoal/40"
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

      {/* FAQ */}
      <section className="bg-white border-t border-charcoal/10">
        <div className="container-tight py-20 md:py-28">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Next Step"
        headline="Before you buy the property, validate the strategy."
        copy="Book a STRATA strategy call to review whether an STR investment makes sense for your goals, tax profile, and capital plan."
        buttonText="Book a Strategy Call"
        buttonHref="/contact"
        secondary={{ text: "View the Process", href: "/process" }}
      />
    </>
  );
}
