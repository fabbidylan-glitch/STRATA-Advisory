const items = [
  "Tax-aware underwriting",
  "Cost segregation coordination",
  "Launch & vendor coordination",
  "Ongoing advisory by FABBI",
];

export function TrustBar() {
  return (
    <div className="border-y border-charcoal/10 bg-stone/40">
      <div className="container-wide py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-charcoal/65">
          {items.map((i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-gold"
                aria-hidden
              />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
