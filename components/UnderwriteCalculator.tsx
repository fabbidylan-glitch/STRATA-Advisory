"use client";

import { useState } from "react";

const fmt = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US");
const pct = (n: number) => `${n.toFixed(1)}%`;

const SETUP = 68400;
const OPEX_RATIO = 0.37;
const INTEREST = 0.075;
const DEPR_FACTOR = 0.3; // illustrative accelerated 1st-year depreciation

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink/60">
          {label}
        </span>
        <span className="font-mono tabular-nums text-[0.82rem] font-semibold text-primary">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-accent"
        aria-label={label}
      />
    </label>
  );
}

export function UnderwriteCalculator() {
  const [price, setPrice] = useState(742500);
  const [adr, setAdr] = useState(525);
  const [occ, setOcc] = useState(58);
  const [down, setDown] = useState(25);
  const [taxRate, setTaxRate] = useState(37);

  const grossRevenue = adr * 365 * (occ / 100);
  const opex = grossRevenue * OPEX_RATIO;
  const noi = grossRevenue - opex;
  const loan = price * (1 - down / 100);
  const debtService = loan * INTEREST;
  const cashInvested = price * (down / 100) + SETUP;
  const cashFlow = noi - debtService;
  const coc = (cashFlow / cashInvested) * 100;
  const taxBenefit = price * DEPR_FACTOR * (taxRate / 100);

  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface shadow-card">
      <div className="grid md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-5 border-b border-border p-6 md:border-b-0 md:border-r sm:p-8">
          <Slider label="Purchase price" value={price} min={350000} max={1500000} step={2500} onChange={setPrice} display={fmt(price)} />
          <Slider label="Average daily rate" value={adr} min={150} max={1200} step={5} onChange={setAdr} display={fmt(adr)} />
          <Slider label="Occupancy" value={occ} min={35} max={85} step={1} onChange={setOcc} display={`${occ}%`} />
          <Slider label="Down payment" value={down} min={15} max={50} step={1} onChange={setDown} display={`${down}%`} />
          <Slider label="Marginal tax rate" value={taxRate} min={24} max={50} step={1} onChange={setTaxRate} display={`${taxRate}%`} />
        </div>

        {/* Results */}
        <div className="p-6 sm:p-8">
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-accent-deep">
            Results
          </div>
          <dl className="mt-5 divide-y divide-border">
            {[
              ["Gross Revenue", fmt(grossRevenue)],
              ["NOI", fmt(noi)],
              ["Annual Cash Flow", fmt(cashFlow)],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between py-3">
                <dt className="text-[0.86rem] text-ink/70">{k}</dt>
                <dd className="font-mono tabular-nums text-[0.92rem] text-primary">{v}</dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between py-3">
              <dt className="text-[0.86rem] font-semibold text-primary">Cash-on-Cash</dt>
              <dd className={`font-mono tabular-nums text-[1.05rem] font-semibold ${coc >= 9 ? "text-sage-deep" : "text-accent-deep"}`}>
                {pct(coc)}
              </dd>
            </div>
            <div className="flex items-baseline justify-between py-3">
              <dt className="text-[0.86rem] text-ink/70">Year 1 Tax Benefit</dt>
              <dd className="font-mono tabular-nums text-[0.92rem] text-primary">{fmt(taxBenefit)}</dd>
            </div>
          </dl>
          <p className="mt-5 text-[12px] leading-[1.5] text-stone">
            Built on a 37% expense ratio, 7.5% interest, and roughly 30%
            first-year depreciation. A teaching tool, not a real underwrite.
          </p>
        </div>
      </div>
    </div>
  );
}
