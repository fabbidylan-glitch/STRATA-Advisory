import Link from "next/link";
import { StrataMark } from "@/components/StrataMark";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border-dark bg-primary text-background">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <StrataMark size={32} />
              <span className="wordmark text-xl text-background">STRATA</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">
              STRATA Advisory reviews the deal before closing. STRATA
              Hospitality runs the asset after launch.
            </p>
            <p className="mt-6 text-[13px] leading-[1.5] text-background/65">
              STR advisory and hospitality operations.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">
              Advisory
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/advisory" className="text-background/75 transition-colors hover:text-background">
                  STRATA Advisory
                </Link>
              </li>
              <li>
                <Link href="/tax-strategy" className="text-background/75 transition-colors hover:text-background">
                  Tax Strategy
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-background/75 transition-colors hover:text-background">
                  Investment Process
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">
              Hospitality
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/hospitality" className="text-background/75 transition-colors hover:text-background">
                  STRATA Hospitality
                </Link>
              </li>
              <li>
                <Link href="/#sample-underwrite" className="text-background/75 transition-colors hover:text-background">
                  Sample Underwrite
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">
              Contact
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-background/75">
              <li>
                <Link href="/contact" className="transition-colors hover:text-background">
                  Send a Property
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-background">
                  Book a Strategy Call
                </Link>
              </li>
              <li>
                <a href="mailto:info@strata.com" className="transition-colors hover:text-background">
                  info@strata.com
                </a>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-background">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-background/10" />

        <div className="mt-8 grid gap-6 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-2">
            <div className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">
              Disclosures
            </div>
          </div>
          <div className="md:col-span-10">
            <p className="text-[0.78rem] leading-relaxed text-background/60">
              STRATA does not guarantee investment returns, tax savings,
              occupancy, revenue, or property performance. Tax outcomes depend
              on income type, basis, financing, material participation, state
              rules, filing position, and individual facts. All projections
              shown on this site are estimates based on assumptions and
              available market data. Listing examples are illustrative market
              comps unless explicitly labeled as STRATA-managed properties.
            </p>
            <p className="mt-4 text-[0.7rem] leading-relaxed text-background/45">
              STRATA Advisory provides consulting and advisory services. It
              does not provide legal, investment, brokerage, or tax advice
              unless separately agreed in writing with properly licensed
              professionals.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-background/10 pt-6 text-[0.7rem] text-background/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} STRATA. All rights reserved.</p>
          <p className="text-[12px]">STR investment platform</p>
        </div>
      </div>
    </footer>
  );
}
