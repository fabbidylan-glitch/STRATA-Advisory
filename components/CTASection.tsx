import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  headline: string;
  copy?: string;
  buttonText: string;
  buttonHref: string;
  secondary?: { text: string; href: string };
  variant?: "dark" | "light";
};

export function CTASection({
  eyebrow,
  headline,
  copy,
  buttonText,
  buttonHref,
  secondary,
  variant = "dark",
}: Props) {
  const isDark = variant === "dark";
  return (
    <section
      className={
        isDark
          ? "bg-charcoal text-ivory"
          : "bg-ivory text-charcoal border-y border-charcoal/10"
      }
    >
      <div className="container-tight py-20 md:py-28">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            {eyebrow && (
              <p
                className={`eyebrow ${
                  isDark ? "text-gold-soft" : "text-gold"
                }`}
              >
                {eyebrow}
              </p>
            )}
            <h2 className={`mt-3 h-display text-3xl sm:text-4xl md:text-5xl text-balance ${
              isDark ? "text-ivory" : "text-charcoal"
            }`}>
              {headline}
            </h2>
            {copy && (
              <p
                className={`mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-pretty ${
                  isDark ? "text-ivory/70" : "text-charcoal/70"
                }`}
              >
                {copy}
              </p>
            )}
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href={buttonHref}
                className={isDark ? "btn-on-dark" : "btn-primary"}
              >
                {buttonText}
                <ArrowRight size={16} />
              </Link>
              {secondary && (
                <Link
                  href={secondary.href}
                  className={isDark ? "btn-ghost-on-dark" : "btn-secondary"}
                >
                  {secondary.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
