import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion";

const pillars = [
  {
    label: "Tax planning",
    detail: "For high-income investors and operators",
  },
  {
    label: "Accounting & bookkeeping",
    detail: "Built for real estate cash flows",
  },
  {
    label: "Advisory",
    detail: "Quarterly and year-end reviews",
  },
  {
    label: "Coordination",
    detail: "STR-specific vendor network",
  },
];

export function WhoRunsStrata() {
  return (
    <section className="bg-white border-y border-charcoal/10">
      <div className="container-wide py-24 md:py-32">
        <FadeIn className="max-w-3xl">
          <p className="section-tag-gold">Section 08 &mdash; Who Runs STRATA</p>
          <h2 className="mt-6 h-display text-[2rem] text-balance leading-[1.05] sm:text-4xl md:text-5xl">
            A practice run from inside{" "}
            <span className="h-display-italic">an advisory firm</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-14 border-t border-charcoal/15 pt-14 md:grid-cols-12 md:gap-16">
          {/* Principal column */}
          <FadeIn className="md:col-span-5">
            <div className="flex items-start gap-5">
              <div
                aria-hidden
                className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-charcoal/15 bg-ivory font-serif text-2xl tracking-tight text-charcoal"
              >
                DF
              </div>
              <div>
                <p className="font-serif text-xl text-charcoal sm:text-2xl">
                  Dylan Fabbi
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-charcoal/55">
                  Founder &amp; Lead Advisor
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-[15px] text-charcoal/75 leading-relaxed text-pretty">
              Dylan founded STRATA to bring real underwriting and tax-aware
              planning to short-term rental investing. He runs the practice
              from inside FABBI, the advisory firm behind STRATA&rsquo;s tax,
              accounting, and ongoing reporting infrastructure.
            </p>

            <p className="mt-4 max-w-md text-sm text-charcoal/60 leading-relaxed">
              STRATA engagements are scoped, signed, and delivered through
              FABBI&rsquo;s advisory practice &mdash; not a marketplace and
              not a coaching program.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 border-b border-gold/60 pb-1 text-sm text-charcoal transition hover:border-charcoal"
            >
              More about STRATA &amp; FABBI
              <ArrowUpRight size={14} />
            </Link>
          </FadeIn>

          {/* FABBI infrastructure column */}
          <FadeIn delay={0.1} className="md:col-span-7">
            <p className="eyebrow">FABBI Infrastructure</p>
            <p className="mt-4 max-w-xl text-[15px] text-charcoal/75 leading-relaxed text-pretty">
              Every STRATA engagement is supported by the same firm
              infrastructure that backs FABBI&rsquo;s tax and advisory work for
              business owners and real estate investors.
            </p>

            <ul className="mt-8 grid divide-y divide-charcoal/15 border-y border-charcoal/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {pillars.map((p, i) => (
                <li
                  key={p.label}
                  className={`py-5 sm:py-6 ${
                    i % 2 === 1 ? "sm:pl-8" : "sm:pr-8"
                  } ${i >= 2 ? "sm:border-t" : ""}`}
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-charcoal/55">
                    {p.label}
                  </p>
                  <p className="mt-2 font-serif text-lg text-charcoal sm:text-xl">
                    {p.detail}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
