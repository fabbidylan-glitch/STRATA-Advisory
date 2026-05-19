import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Let's review the STR opportunity before you commit capital. Request a STRATA review of the deal, the tax strategy, and the launch plan.",
};

const expect = [
  {
    title: "Quick fit review",
    description:
      "We confirm STRATA is the right fit for your goals, income, and timeline before scheduling.",
  },
  {
    title: "Initial strategy call",
    description:
      "A working call to discuss the property, the tax position, and the right next steps.",
  },
  {
    title: "Engagement proposal",
    description:
      "If we're aligned, you receive a clear advisory engagement scope and fee.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-wide pb-12 pt-20 md:pb-16 md:pt-28">
          <div className="max-w-3xl">
            <p className="eyebrow">Book a Call</p>
            <h1 className="mt-4 h-display text-4xl text-balance sm:text-5xl md:text-6xl">
              Let&rsquo;s review the STR opportunity before you commit capital.
            </h1>
            <p className="mt-6 text-base text-charcoal/70 sm:text-lg leading-relaxed text-pretty">
              Share the property details and your tax situation. A STRATA
              advisor will review your information and reach out within one
              business day.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-wide py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow">What to expect</p>
              <ol className="mt-6 space-y-6">
                {expect.map((e, i) => (
                  <li key={e.title} className="flex gap-4">
                    <span className="num-marker pt-0.5">0{i + 1}</span>
                    <div>
                      <h3 className="h-display text-lg text-charcoal">
                        {e.title}
                      </h3>
                      <p className="mt-1 text-sm text-charcoal/70 leading-relaxed">
                        {e.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 rounded-xl border border-charcoal/10 bg-ivory p-5 text-xs text-charcoal/60">
                STRATA and FABBI do not guarantee tax savings or investment
                outcomes. All advisory work is subject to professional review.
              </div>
            </div>

            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
