import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Let's review the STR opportunity before you commit capital. Request a STRATA review of the deal, the tax strategy, and the launch plan.",
};

const expect = [
  {
    title: "Confidential review",
    description:
      "Your information is reviewed in private by the practice. Not added to a marketing list.",
  },
  {
    title: "First-pass response",
    description:
      "A STRATA advisor reads the deal and replies within one business day with a short read on fit.",
  },
  {
    title: "Strategy call",
    description:
      "A working call to discuss the property, the tax position, and the right next steps.",
  },
  {
    title: "Engagement proposal",
    description:
      "If we're aligned, you receive a clear advisory engagement scope and fee. If not, we'll tell you on the call.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-wide pb-12 pt-20 md:pb-16 md:pt-28">
          <FadeIn start="mount" className="max-w-3xl">
            <p className="eyebrow-rule">Book a Call</p>
            <h1 className="mt-7 h-display text-[2.5rem] text-balance leading-[1.02] sm:text-5xl md:text-[3.75rem]">
              Let&rsquo;s review the STR opportunity{" "}
              <span className="h-display-italic">
                before you commit capital
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-charcoal/70 sm:text-lg leading-relaxed text-pretty">
              Share the property details and your tax situation. A STRATA
              advisor will review your information and reach out within one
              business day.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white">
        <div className="container-wide py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <p className="eyebrow">What to expect</p>
              <ol className="mt-8 space-y-7">
                {expect.map((e, i) => (
                  <li
                    key={e.title}
                    className="grid grid-cols-[auto_1fr] gap-5"
                  >
                    <span className="display-num text-[3rem]">0{i + 1}</span>
                    <div className="pt-2">
                      <h3 className="h-display text-lg text-charcoal sm:text-xl">
                        {e.title}
                      </h3>
                      <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
                        {e.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 rounded-xl border border-charcoal/10 bg-ivory p-6">
                <p className="eyebrow">Engagements begin at</p>
                <p className="mt-2 font-serif text-3xl text-charcoal">
                  $7,500
                </p>
                <p className="mt-1 text-xs text-charcoal/55">
                  per property &mdash; 50% upfront, 50% upon closing.
                  Third-party costs billed separately.
                </p>
              </div>

              <p className="mt-6 text-xs text-charcoal/55 leading-relaxed">
                Subject to professional review. Outcomes depend on facts and
                circumstances.
              </p>
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
