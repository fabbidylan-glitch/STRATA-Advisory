import { ShieldCheck } from "lucide-react";

const acquisition = [
  { label: "Purchase Price", value: "$725,000" },
  { label: "Down Payment", value: "$181,250" },
  { label: "Estimated Furnishing / Launch", value: "$42,000" },
];

const operations = [
  { label: "Projected Gross Revenue", value: "$118,000" },
  { label: "Management Fee", value: "25%" },
];

const costs = [
  { label: "Estimated Cost Seg Study", value: "Separate third-party cost" },
  { label: "Advisory Fee", value: "$7,500" },
];

function Ledger({
  heading,
  rows,
}: {
  heading: string;
  rows: { label: string; value: string }[];
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.24em] text-charcoal/45">
        {heading}
      </p>
      <dl className="mt-3">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-baseline justify-between gap-4 border-b border-dotted border-charcoal/20 py-2.5"
          >
            <dt className="text-[13px] text-charcoal/70 sm:text-sm">
              {r.label}
            </dt>
            <dd className="flex-shrink-0 font-serif text-[15px] text-charcoal sm:text-base">
              {r.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function SampleUnderwrite() {
  return (
    <section className="bg-ivory">
      <div className="container-wide py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-12 md:gap-12">
          {/* Left — framing */}
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <p className="section-tag-gold">Sample STR Underwrite</p>
            <h2 className="mt-6 h-display text-[2rem] text-balance leading-[1.05] sm:text-4xl md:text-[2.75rem]">
              Before the tax strategy,{" "}
              <span className="h-display-italic">the deal still has to work</span>
            </h2>
            <p className="mt-6 max-w-md text-charcoal/70 leading-relaxed text-pretty">
              STRATA reviews the property, financing, launch budget, management
              assumptions, and tax strategy together &mdash; so the investor
              understands the opportunity before committing capital.
            </p>

            <p className="mt-8 max-w-md text-xs text-charcoal/55 leading-relaxed">
              Illustrative only. Actual results depend on the property,
              financing, market data, tax facts, participation, and execution.
            </p>
          </div>

          {/* Right — the memo */}
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-soft">
              {/* Memo header */}
              <div className="flex items-center justify-between border-b border-ivory/15 bg-charcoal px-6 py-4 text-ivory sm:px-8">
                <span className="text-[10px] uppercase tracking-[0.28em] text-ivory/65">
                  Underwriting Memo
                </span>
                <span className="font-serif text-[11px] tracking-[0.18em] text-gold-soft">
                  Sample / Confidential
                </span>
              </div>

              {/* Redacted identifiers */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-charcoal/10 bg-ivory/60 px-6 py-4 sm:px-8">
                <span className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-charcoal/50">
                  Property
                  <span
                    className="inline-block h-3 w-28 rounded-[3px] bg-charcoal/80 align-middle"
                    aria-hidden
                  />
                </span>
                <span className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-charcoal/50">
                  Market
                  <span
                    className="inline-block h-3 w-20 rounded-[3px] bg-charcoal/80 align-middle"
                    aria-hidden
                  />
                </span>
              </div>

              <div className="space-y-7 px-6 py-7 sm:px-8 sm:py-8">
                <Ledger heading="Acquisition" rows={acquisition} />
                <Ledger heading="Operations" rows={operations} />

                {/* Outcome — base vs stress */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-charcoal/45">
                    Outcome &mdash; Year One Cash Flow
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-charcoal/10 bg-ivory p-5">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-charcoal/50">
                        Base Case
                      </p>
                      <p className="mt-2 font-serif text-3xl text-charcoal">
                        $24,600
                      </p>
                    </div>
                    <div className="rounded-xl border border-charcoal/10 bg-ivory p-5">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-charcoal/50">
                        Stress Case
                      </p>
                      <p className="mt-2 font-serif text-3xl text-charcoal/80">
                        $11,900
                      </p>
                    </div>
                  </div>
                </div>

                <Ledger heading="Costs" rows={costs} />

                {/* Recommendation */}
                <div className="rounded-xl border border-gold/30 bg-gold/[0.06] p-5 sm:p-6">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck size={15} className="text-gold" aria-hidden />
                    <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                      Preliminary Read
                    </p>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal/80 text-pretty">
                    Worth deeper review if financing terms hold and the
                    investor can document material participation. Tax impact
                    should be modeled before offer terms are finalized.
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
