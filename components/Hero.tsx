import Link from "next/link";
import { ArrowRight } from "lucide-react";

const roadmap = [
  { num: "01", label: "Deal Review" },
  { num: "02", label: "Tax Strategy Fit" },
  { num: "03", label: "Cost Seg Planning" },
  { num: "04", label: "Launch & Setup" },
  { num: "05", label: "Advisory + Reporting" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="absolute inset-0 -z-10 bg-ivory-fade" aria-hidden />
      <div className="container-wide pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="eyebrow">STR Investment Advisory</p>
            <h1 className="mt-5 h-display text-4xl text-balance sm:text-5xl md:text-[3.75rem] lg:text-6xl">
              Build a short-term rental investment with the tax strategy,
              underwriting, and launch plan already mapped out.
            </h1>
            <p className="mt-6 max-w-xl text-base text-charcoal/70 sm:text-lg leading-relaxed text-pretty">
              STRATA helps high-income investors evaluate, acquire, structure,
              and launch short-term rental properties — with advisory support
              from deal analysis through tax planning, cost segregation, and
              operational setup.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a Strategy Call
                <ArrowRight size={16} />
              </Link>
              <Link href="/process" className="btn-secondary">
                View the Process
              </Link>
            </div>
            <p className="mt-7 max-w-md text-sm text-charcoal/55">
              <span className="font-medium text-charcoal/80">Powered by FABBI</span>{" "}
              — tax, accounting, bookkeeping, and advisory support for real
              estate investors and business owners.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-sand/40 via-transparent to-stone/40 blur-2xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-soft">
                <div className="flex items-center justify-between border-b border-charcoal/10 bg-charcoal px-6 py-4 text-ivory">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ivory/70">
                    STRATA
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-gold-soft">
                    Investment Roadmap
                  </span>
                </div>
                <ol className="divide-y divide-charcoal/10">
                  {roadmap.map((step) => (
                    <li
                      key={step.num}
                      className="flex items-center gap-5 px-6 py-4"
                    >
                      <span className="num-marker w-8">{step.num}</span>
                      <span className="text-sm font-medium text-charcoal sm:text-base">
                        {step.label}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="border-t border-charcoal/10 bg-ivory px-6 py-4">
                  <p className="text-xs text-charcoal/60">
                    One coordinated team — underwriting, tax, launch, and
                    advisory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
