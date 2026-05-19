const items = [
  "Tax-aware underwriting",
  "Cost segregation coordination",
  "Launch & vendor coordination",
  "Ongoing advisory by FABBI",
];

export function TrustBar() {
  return (
    <div className="border-y border-charcoal/10 bg-white">
      <div className="container-wide py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-charcoal/55">
          {items.map((i, idx) => (
            <li key={i} className="flex items-center gap-3">
              <span
                className="font-serif text-[10px] tracking-[0.18em] text-gold"
                aria-hidden
              >
                0{idx + 1}
              </span>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
