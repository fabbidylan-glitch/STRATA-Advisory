import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion";

type Props = {
  eyebrow?: string;
  headline: string;
  italicTail?: string;
  copy?: string;
  buttonText: string;
  buttonHref: string;
  secondary?: { text: string; href: string };
  variant?: "dark" | "light";
};

export function CTASection({
  eyebrow,
  headline,
  italicTail,
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
          ? "relative overflow-hidden bg-charcoal text-ivory"
          : "bg-ivory text-charcoal border-y border-charcoal/10"
      }
    >
      {isDark && (
        <>
          <div className="absolute inset-0 -z-0 grain-dark opacity-50" aria-hidden />
          <div
            className="absolute inset-0 -z-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(700px 380px at 80% 30%, rgba(185,151,91,0.16), transparent 60%)",
            }}
          />
        </>
      )}
      <div className="container-tight relative py-24 md:py-32">
        <FadeIn className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            {eyebrow && (
              <p
                className={
                  isDark
                    ? "section-tag-gold !text-gold-soft"
                    : "section-tag-gold"
                }
              >
                {eyebrow}
              </p>
            )}
            <h2
              className={`mt-6 h-display text-[2rem] text-balance leading-[1.05] sm:text-4xl md:text-5xl ${
                isDark ? "text-ivory" : "text-charcoal"
              }`}
            >
              {headline}
              {italicTail && (
                <>
                  {" "}
                  <span
                    className={`font-serif italic font-normal ${
                      isDark ? "text-ivory/95" : "text-charcoal/90"
                    }`}
                  >
                    {italicTail}
                  </span>
                </>
              )}
            </h2>
            {copy && (
              <p
                className={`mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-pretty ${
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
        </FadeIn>
      </div>
    </section>
  );
}
