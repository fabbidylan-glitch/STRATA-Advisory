import Link from "next/link";
import { ArrowRight } from "lucide-react";

const roadmap = [
  { num: "01", label: "Deal Review", note: "Underwriting" },
  { num: "02", label: "Tax Strategy Fit", note: "Classification & basis" },
  { num: "03", label: "Cost Seg Planning", note: "Coordinated study" },
  { num: "04", label: "Launch & Setup", note: "Books, vendors, ops" },
  { num: "05", label: "Advisory + Reporting", note: "Ongoing through FABBI" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(900px 500px at 85% -10%, rgba(217,195,165,0.35), transparent 60%), radial-gradient(700px 380px at -10% 20%, rgba(185,151,91,0.10), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 -z-10 grain opacity-60" aria-hidden />

      <div className="container-wide pb-20 pt-14 sm:pt-20 md:pb-32 md:pt-24">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left — editorial copy */}
          <div className="lg:col-span-7">
            <p className="eyebrow-rule">A FABBI Advisory Practice</p>

            <h1 className="mt-7 h-display text-[2.25rem] leading-[1.05] text-balance sm:text-[3rem] md:text-[3.5rem] lg:text-[3.75rem]">
              Underwrite the deal{" "}
              <span className="h-display-italic">before you sign.</span>{" "}
              Structure the tax{" "}
              <span className="h-display-italic">before you close.</span>{" "}
              Operate against the same numbers you modeled.
            </h1>

            <p className="mt-7 max-w-xl text-[15px] sm:text-lg leading-relaxed text-charcoal/70 text-pretty">
              STRATA helps high-income investors evaluate, structure, and launch
              short-term rental properties &mdash; with deal underwriting, tax
              strategy, cost segregation coordination, and operational setup
              built in from the start.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a Strategy Call
                <ArrowRight size={16} />
              </Link>
              <Link href="/process" className="btn-secondary">
                See the Process
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-charcoal/10 pt-6 text-[13px] text-charcoal/60">
              <span>
                <span className="font-medium text-charcoal/80">
                  Powered by FABBI
                </span>{" "}
                &mdash; tax, accounting & advisory.
              </span>
              <span className="hidden h-3 w-px bg-charcoal/20 sm:inline-block" />
              <span>
                Engagements begin at{" "}
                <span className="font-medium text-charcoal/80">
                  $7,500 / property
                </span>
                .
              </span>
            </div>
          </div>

          {/* Right — engagement memo card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-sand/50 via-transparent to-stone/40 blur-2xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-soft">
                <div className="flex items-center justify-between border-b border-ivory/15 bg-charcoal px-6 py-4 text-ivory">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-ivory/65">
                    Engagement Memo
                  </span>
                  <span className="font-serif text-[11px] tracking-[0.18em] text-gold-soft">
                    STR / 01
                  </span>
                </div>

                <div className="px-6 pt-6">
                  <p className="font-serif text-xs uppercase tracking-[0.18em] text-charcoal/55">
                    Investment Roadmap
                  </p>
                  <h3 className="mt-2 h-display text-xl text-charcoal sm:text-2xl">
                    From deal review to operating asset
                  </h3>
                </div>

                <ol className="mt-5 divide-y divide-charcoal/8 border-y border-charcoal/8">
                  {roadmap.map((step) => (
                    <li
                      key={step.num}
                      className="grid grid-cols-[44px_1fr] items-center gap-x-4 px-6 py-3.5"
                    >
                      <span className="num-marker">{step.num}</span>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-serif text-[15px] text-charcoal sm:text-base">
                          {step.label}
                        </span>
                        <span className="hidden text-[11px] uppercase tracking-[0.16em] text-charcoal/45 sm:inline">
                          {step.note}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="grid grid-cols-2 divide-x divide-charcoal/8 bg-ivory">
                  <div className="px-6 py-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-charcoal/50">
                      Starting fee
                    </p>
                    <p className="mt-1 font-serif text-lg text-charcoal">
                      $7,500
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-charcoal/50">
                      Structure
                    </p>
                    <p className="mt-1 font-serif text-lg text-charcoal">
                      50 / 50
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
