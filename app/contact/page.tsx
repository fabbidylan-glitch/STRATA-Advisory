import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact | Send a Property",
  description:
    "Tell us about the property, the market, or the investment thesis. We'll review the numbers, flag the risks, and discuss whether STRATA is the right fit.",
};

export default function ContactPage() {
  return (
    <section className="bg-background">
      <div className="container-page section-pad">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Left */}
          <FadeIn start="mount" className="md:col-span-5">
            <p className="label-rule">Contact</p>
            <h1 className="display mt-6 text-primary">Send a property.</h1>
            <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.6] text-ink/80 md:text-[17px]">
              Tell us about the property, the market, or the investment thesis.
              We&rsquo;ll review the numbers, flag the risks, and follow up to
              discuss whether STRATA is the right fit.
            </p>

            <div className="mt-9 space-y-6">
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-stone">
                  What to expect
                </p>
                <p className="mt-2 max-w-[44ch] text-[0.92rem] leading-[1.55] text-ink/70">
                  A 25&ndash;30 minute call to review your goals, tax profile,
                  target market, and any property you&rsquo;re evaluating.
                  Focused conversation. No pitch.
                </p>
              </div>
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-stone">
                  Already have a property?
                </p>
                <p className="mt-2 max-w-[44ch] text-[0.92rem] leading-[1.55] text-ink/70">
                  If you&rsquo;re actively looking at a deal, paste the listing
                  link or address in the form. We&rsquo;ll come prepared with
                  initial thoughts.
                </p>
              </div>
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-stone">
                  Direct
                </p>
                <a
                  href="mailto:hello@stratacap.com"
                  className="mt-2 inline-block text-[0.95rem] text-primary underline decoration-accent decoration-1 underline-offset-4 hover:decoration-primary"
                >
                  hello@stratacap.com
                </a>
              </div>
            </div>

            <div className="mt-9 rounded-md border border-border bg-cream/60 px-5 py-4">
              <p className="text-[0.78rem] leading-relaxed text-ink/65">
                STRATA Advisory provides consulting and advisory services. We do
                not provide legal, investment, brokerage, or tax advice unless
                separately agreed in writing with properly licensed
                professionals.
              </p>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.12} className="md:col-span-7">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
