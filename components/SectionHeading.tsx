type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const titleCls =
    tone === "dark" ? "text-ivory" : "text-charcoal";
  const descCls =
    tone === "dark" ? "text-ivory/70" : "text-charcoal/70";
  const eyebrowCls =
    tone === "dark" ? "text-gold-soft" : "text-gold";

  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow ${eyebrowCls}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-3 h-display text-3xl sm:text-4xl md:text-5xl text-balance ${titleCls}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${descCls} text-pretty`}>
          {description}
        </p>
      )}
    </div>
  );
}
