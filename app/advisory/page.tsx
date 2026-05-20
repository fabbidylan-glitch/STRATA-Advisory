import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Advisory | Deal Underwriting Before You Buy",
  description:
    "STRATA Advisory reviews the deal before capital is committed: deal economics, the tax angle, and a clear recommendation to buy, renegotiate, or walk away.",
};

const summary: [string, string, ("plain" | "bold" | "stress")?][] = [
  ["Purchase price", "$742,500"],
  ["Debt assumption", "75% LTV"],
  ["Furnishing budget", "$68,400"],
  ["Projected gross revenue", "$117,840"],
  ["Operating expenses", "$43,950"],
  ["NOI", "$73,890"],
  ["Cash-on-cash return", "13.7%", "bold"],
  ["Stress case CoC", "8.9%", "stress"],
];

const checklist: [string, string, string][] = [
  ["Material participation", "500+ hours documented; substantially-all test reviewed", "Model review"],
  ["STR classification", "Average guest stay ≤ 7 days verified", "Clear"],
  ["Cost segregation potential", "Property type and basis support a study", "Strong"],
  ["Depreciable basis", "Land allocation pulled from county assessor", "Modeled"],
  ["State tax considerations", "Property state, investor residency state", "Model review"],
  ["Filing position", "Coordinated with the investor's CPA", "Coordinate"],
];

const decision: [string, string][] = [
  [
    "Proceed",
    "Pro forma holds under the stress case. Material participation is realistic for the investor. Cash-on-cash clears the threshold to justify the work. Local rules stable.",
  ],
  [
    "Renegotiate",
    "Furnishing budget runs hot at this price. CoC drops below 9% on the stress case without concession. Recommend seller credits of $18K+ or a price reduction.",
  ],
  [
    "Walk away",
    "Material participation cannot be documented at the investor's expected hours. State permitting is under review. Stress-case revenue breaks debt service. Better deals exist.",
  ],
];

export default function AdvisoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="container-page section-pad">
          <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent-deep">
            STRATA Advisory
          </p>
          <div className="mt-6 grid gap-10 md:grid-cols-12 md:gap-16">
            <h1 className="display text-primary md:col-span-7">
              Know the numbers before you buy.
            </h1>
            <div className="md:col-span-5">
              <p className="text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
                STRATA Advisory reviews the deal before capital is committed:
                the economics, the tax angle, and the recommendation. We
                coordinate with your CPA, lender, and operator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we review band */}
      <section className="border-y border-border bg-cream">
        <div className="container-page py-8 md:py-10">
          <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-stone">
              What we review
            </p>
            <p className="max-w-[70ch] text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
              Every Advisory engagement runs through three lenses:{" "}
              <span className="font-semibold text-primary">deal economics</span>,
              the <span className="font-semibold text-primary">tax angle</span>,
              and a clear{" "}
              <span className="font-semibold text-primary">recommendation</span>{" "}
              to buy, renegotiate, or walk away.
            </p>
          </div>
        </div>
      </section>

      {/* 01 Deal economics */}
      <section className="bg-background">
        <div className="container-page section-pad grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-accent-deep">
              01 &middot; Deal economics
            </p>
            <h2 className="h2 mt-4 max-w-[16ch]">
              The numbers, modeled before they matter.
            </h2>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.6] text-ink/75">
              Revenue comps adjusted for seasonality. Expense lines built from
              real STR operating costs. Furnishing budget. NOI. Cash-on-cash.
              Plus a stress case to the downside, on the table from day one.
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-stone">
              Illustrative &middot; 4BR &middot; Pocono Mtns, PA
            </p>
          </div>
          <div className="md:col-span-7">
            <FadeIn className="overflow-hidden rounded-md border border-border bg-surface shadow-card">
              <div className="border-b border-border bg-background/70 px-6 py-3.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted">
                Underwriting summary
              </div>
              <dl>
                {summary.map(([label, value, kind]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-6 border-b border-border px-6 py-3.5 last:border-b-0"
                  >
                    <dt
                      className={`text-[0.9rem] ${
                        kind === "bold" ? "font-semibold text-primary" : "text-ink/75"
                      }`}
                    >
                      {label}
                    </dt>
                    <dd
                      className={`font-mono tabular-nums text-[0.92rem] ${
                        kind === "bold"
                          ? "font-semibold text-primary"
                          : kind === "stress"
                            ? "font-semibold text-accent-deep"
                            : "text-ink/80"
                      }`}
                    >
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
            <p className="mt-4 text-[13px] leading-[1.5] text-stone">
              Illustrative only. Actual results vary.
            </p>
          </div>
        </div>
      </section>

      {/* 02 Tax angle */}
      <section className="bg-cream">
        <div className="container-page section-pad grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-accent-deep">
              02 &middot; Tax angle
            </p>
            <h2 className="h2 mt-4 max-w-[16ch]">
              Cost segregation only works if the facts support it.
            </h2>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.6] text-ink/75">
              Material participation, STR classification, cost segregation
              potential, depreciable basis, state rules, and filing position.
              Each gets a flag. Each gets resolved before closing, not after.
            </p>
          </div>
          <div className="md:col-span-7">
            <FadeIn className="overflow-hidden rounded-md border border-border bg-surface shadow-card">
              <div className="border-b border-border bg-background/70 px-6 py-3.5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted">
                The deal checklist
              </div>
              <ul>
                {checklist.map(([title, note, badge]) => (
                  <li
                    key={title}
                    className="flex items-start justify-between gap-4 border-b border-border px-6 py-4 last:border-b-0"
                  >
                    <div>
                      <p className="text-[0.92rem] font-medium text-primary">{title}</p>
                      <p className="mt-1 text-[0.82rem] leading-[1.5] text-ink/60">{note}</p>
                    </div>
                    <span className="mt-0.5 shrink-0 rounded-sm border border-border px-2.5 py-1 font-mono text-[0.56rem] uppercase tracking-[0.16em] text-accent-deep">
                      {badge}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <p className="mt-4 max-w-[64ch] text-[13px] leading-[1.5] text-stone">
              Illustrative only. Tax outcomes depend on income type, basis,
              financing, material participation, state rules, filing position,
              and individual facts.
            </p>
          </div>
        </div>
      </section>

      {/* 03 Recommendation */}
      <section className="bg-primary text-background">
        <div className="container-page section-pad grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-accent-soft">
              03 &middot; Recommendation
            </p>
            <h2 className="h2 mt-4 max-w-[14ch] text-background">
              Buy. Renegotiate. Walk away.
            </h2>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.6] text-background/75">
              Every deal ends with one of three answers. Written down. Reasoned
              through. Delivered before capital moves.
            </p>
            <p className="mt-6 max-w-[44ch] font-serif text-[1.15rem] italic leading-[1.4] text-accent-soft">
              Sometimes the highest-value advice is not to buy the property.
            </p>
          </div>
          <FadeIn delay={0.1} className="md:col-span-7">
            <div className="rounded-md border border-background/15 bg-background/[0.04] p-6 backdrop-blur-sm sm:p-8">
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-accent-soft">
                Decision mode &middot; Sample property
              </div>
              <div className="mt-6 space-y-5">
                {decision.map(([label, body]) => (
                  <div key={label} className="grid grid-cols-[120px_1fr] gap-5 border-t border-background/10 pt-5">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-accent-soft">
                      {label}
                    </span>
                    <p className="text-[0.9rem] leading-[1.55] text-background/80">{body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-background/45">
                Illustrative &middot; Sample deal structure
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Disclaimer band */}
      <section className="bg-background">
        <div className="container-page py-10">
          <div className="rounded-md border border-border bg-cream/60 px-6 py-5">
            <p className="max-w-[90ch] text-[0.82rem] leading-relaxed text-ink/65">
              STRATA Advisory provides consulting and advisory services. It does
              not act as legal counsel, investment advisor, broker, or CPA
              unless separately agreed in writing with properly licensed
              professionals. Tax, legal, and brokerage decisions should be
              reviewed with the appropriate advisors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="container-page section-pad">
          <div className="mx-auto max-w-[62ch]">
            <h2 className="h2 max-w-[20ch]">
              Send a property. We&rsquo;ll tell you whether it pencils.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-ink/75 md:text-[17px]">
              One deal at a time. Send the address or listing link, the price,
              and your income profile. Sometimes the answer is walk away.
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
          </div>
        </div>
      </section>
    </>
  );
}
