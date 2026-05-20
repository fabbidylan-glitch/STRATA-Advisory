import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion";
import { FounderPhoto } from "@/components/FounderPhoto";

export const metadata: Metadata = {
  title: "About | A Buy-Side Brain and an Operating Team",
  description:
    "STRATA was built to close the gap between the people who underwrite STR deals and the people who run them. The pro forma becomes the operating scorecard.",
};

const principles: { num: string; title: string; body: string }[] = [
  {
    num: "01",
    title: "We work with capital, not products.",
    body: "Hired by the investor. Not paid by lenders, operators, or vendors. Recommendations sit on the same side of the table as the person writing the check.",
  },
  {
    num: "02",
    title: "We say no to deals.",
    body: "Most properties don't pencil under realistic assumptions. A clear “don't buy this” is often the most valuable output of a strategy call.",
  },
  {
    num: "03",
    title: "Advisory and operations are the same team.",
    body: "The people who run the pro forma should sit close to the people who run the property. Otherwise the assumptions get lost between underwriting and launch.",
  },
];

const weDo = [
  "Review STR deals before closing",
  "Pressure-check revenue and expense assumptions",
  "Model the tax angle before purchase",
  "Coordinate cost segregation planning",
  "Build launch plans for guest-ready units",
  "Manage performance against the pro forma",
];

const weDont = [
  "Promise tax savings",
  "Guarantee revenue or occupancy",
  "Push every deal forward",
  "Pretend every vacation home is an investment",
  "Treat property management as separate from the underwriting",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-page section-pad">
          <FadeIn start="mount">
            <p className="label-rule">About STRATA</p>
            <h1 className="display mt-6 max-w-[18ch] text-primary">
              STR investing needs both a buy-side brain and an operating team.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10 grid gap-8 md:grid-cols-2 md:gap-16">
            <p className="text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
              Most investors separate the people who analyze the deal from the
              people who operate it. That creates a gap. The underwriter assumes
              one level of revenue, expenses, cleaning cost, ADR, occupancy,
              furnishing budget, and tax impact. Then the operator inherits a
              property without knowing why those assumptions mattered.
            </p>
            <p className="text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
              STRATA was designed to close that gap. STRATA Advisory reviews the
              property before capital is committed. STRATA Hospitality manages
              the unit after launch. The pro forma does not disappear at
              closing. It becomes the operating scorecard.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-10 rounded-md border border-border bg-cream/60 px-6 py-5">
            <p className="max-w-[80ch] text-[15px] leading-[1.6] text-ink/75">
              We do not sell courses. We do not push every deal. We review
              properties and help operate the ones that make sense.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How we work */}
      <section className="border-y border-border bg-background">
        <div className="container-page section-pad grid gap-14 md:grid-cols-12 md:gap-16">
          <FadeIn className="md:col-span-5">
            <p className="label-rule">How we work</p>
            <h2 className="h2 mt-5 max-w-[16ch]">
              Three things that shape every engagement.
            </h2>
          </FadeIn>
          <div className="md:col-span-7">
            {principles.map((p, i) => (
              <FadeIn
                key={p.num}
                delay={i * 0.08}
                className="grid grid-cols-[auto_1fr] gap-5 border-t border-border py-7 first:border-t-0 first:pt-0 md:gap-8"
              >
                <span className="font-mono text-[0.65rem] text-accent-deep">{p.num}</span>
                <div>
                  <h3 className="h3 text-primary">{p.title}</h3>
                  <p className="mt-3 max-w-[60ch] text-[15px] leading-[1.6] text-ink/70">
                    {p.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of service */}
      <section className="bg-cream">
        <div className="container-page section-pad">
          <FadeIn className="max-w-[62ch]">
            <p className="label-rule">Scope of service</p>
            <h2 className="h2 mt-5">What STRATA does. What STRATA doesn&rsquo;t.</h2>
            <p className="mt-5 text-[16px] leading-[1.6] text-ink/75 md:text-[17px]">
              Reputable advisory means being precise about your scope. We work
              alongside licensed professionals. We don&rsquo;t replace them.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-12 overflow-hidden rounded-md border border-border bg-surface">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-border md:border-b-0 md:border-r">
                <div className="border-b border-border bg-background/70 px-6 py-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-sage-deep">
                  We do
                </div>
                <ul>
                  {weDo.map((item) => (
                    <li key={item} className="flex items-start gap-3 border-b border-border px-6 py-3.5 text-[0.9rem] text-ink/80 last:border-b-0">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-deep" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="border-b border-border bg-background/70 px-6 py-3 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-accent-deep">
                  We don&rsquo;t
                </div>
                <ul>
                  {weDont.map((item) => (
                    <li key={item} className="flex items-start gap-3 border-b border-border px-6 py-3.5 text-[0.9rem] text-ink/65 last:border-b-0">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full border border-accent-deep/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-background">
        <div className="container-page section-pad grid gap-12 md:grid-cols-12 md:gap-16">
          <FadeIn className="md:col-span-5">
            <p className="label-rule">Leadership</p>
            <h2 className="h2 mt-5 max-w-[16ch]">
              An investor on one side. An operator on the other.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-7">
            <div className="flex items-start gap-5">
              <FounderPhoto />
              <div>
                <p className="font-serif text-xl text-primary sm:text-2xl">
                  Dylan Fabbi, CPA
                </p>
                <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-stone">
                  Founder &middot; CPA &middot; Real estate investor
                </p>
              </div>
            </div>
            <div className="mt-7 space-y-5 text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
              <p>
                STRATA is led by Dylan Fabbi, a CPA and active short-term rental
                investor. He underwrites the deals and oversees how the
                properties are run, so the advisory side and the operating side
                report off the same pro forma.
              </p>
              <p>
                Every engagement is reviewed before it goes to an investor. If
                the deal doesn&rsquo;t pencil, the recommendation is to walk
                away.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Disclosures */}
      <section className="bg-background">
        <div className="container-page section-pad pt-0 grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="label-rule">Disclosures</p>
            <h2 className="h2 mt-5">Plain-language disclosures.</h2>
          </div>
          <div className="space-y-4 md:col-span-7">
            <div className="rounded-md border border-border bg-cream/60 px-6 py-5">
              <p className="text-[0.82rem] leading-relaxed text-ink/65">
                STRATA Advisory provides consulting and advisory services. We do
                not provide legal, tax, investment, brokerage, or property
                management services unless separately agreed in writing with
                properly licensed professionals. All scenarios, calculators, and
                figures shown on this site are illustrative and depend on each
                investor&rsquo;s specific facts and circumstances.
              </p>
            </div>
            <div className="rounded-md border border-border bg-cream/60 px-6 py-5">
              <p className="text-[0.82rem] leading-relaxed text-ink/65">
                Past performance, including illustrative scenarios, is not
                indicative of future results. All investment and tax decisions
                should be reviewed with the appropriate licensed advisors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="container-page section-pad">
          <FadeIn className="mx-auto max-w-[62ch]">
            <h2 className="h2 max-w-[20ch]">
              Send a property. We&rsquo;ll tell you whether it pencils.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-ink/75 md:text-[17px]">
              A short strategy call is the cleanest way to understand whether our
              underwriting and operating approach matches your situation.
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
