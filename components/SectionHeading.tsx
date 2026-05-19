type Props = {
  eyebrow?: string;
  title: string;
  italicTail?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  italicTail,
  description,
  align = "left",
  tone = "light",
  className = "",
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const titleCls = tone === "dark" ? "text-ivory" : "text-charcoal";
  const descCls = tone === "dark" ? "text-ivory/70" : "text-charcoal/70";
  const eyebrowCls =
    tone === "dark"
      ? "section-tag-gold !text-gold-soft"
      : "section-tag-gold";

  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && <p className={eyebrowCls}>{eyebrow}</p>}
      <h2
        className={`mt-6 h-display text-[2rem] leading-[1.05] text-balance sm:text-4xl md:text-5xl ${titleCls}`}
      >
        {title}
        {italicTail && (
          <>
            {" "}
            <span
              className={`font-serif italic font-normal ${
                tone === "dark" ? "text-ivory/95" : "text-charcoal/90"
              }`}
            >
              {italicTail}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={`mt-6 text-base sm:text-lg leading-relaxed ${descCls} text-pretty`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
