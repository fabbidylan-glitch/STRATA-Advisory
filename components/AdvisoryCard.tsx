import type { ReactNode } from "react";

type Props = {
  num?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  variant?: "ivory" | "outline";
};

export function AdvisoryCard({
  num,
  title,
  description,
  icon,
  variant = "ivory",
}: Props) {
  const base =
    variant === "ivory"
      ? "bg-white border border-charcoal/10 shadow-card"
      : "bg-transparent border border-charcoal/15";
  return (
    <div className={`flex h-full flex-col rounded-2xl p-7 ${base}`}>
      {num && <span className="num-marker">{num}</span>}
      {icon && <div className="mb-4 text-gold">{icon}</div>}
      <h3 className="mt-2 h-display text-xl text-charcoal">{title}</h3>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-charcoal/70 text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
