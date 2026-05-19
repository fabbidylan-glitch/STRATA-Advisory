import { Stagger, StaggerItem } from "@/components/motion";

const items = [
  "Tax Strategy",
  "Underwriting",
  "Cost Segregation Coordination",
  "STR Launch Advisory",
];

export function TrustBar() {
  return (
    <div className="border-y border-charcoal/10 bg-white">
      <div className="container-wide py-5">
        <Stagger
          as="ul"
          stagger={0.09}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-charcoal/55"
        >
          {items.map((label, idx) => (
            <StaggerItem as="li" key={label} className="flex items-center gap-3">
              <span
                className="font-serif text-[10px] tracking-[0.18em] text-gold"
                aria-hidden
              >
                0{idx + 1}
              </span>
              {label}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
