type Step = {
  num: string;
  title: string;
  description: string;
  points?: string[];
};

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative">
      <span
        className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-charcoal/15 md:block"
        aria-hidden
      />
      <div className="space-y-12 md:space-y-16">
        {steps.map((step) => (
          <li key={step.num} className="grid gap-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <div className="flex items-center gap-4">
                <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 bg-ivory font-serif text-sm text-gold">
                  {step.num}
                </span>
                <h3 className="h-display text-xl sm:text-2xl text-charcoal">
                  {step.title}
                </h3>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-base text-charcoal/75 leading-relaxed text-pretty">
                {step.description}
              </p>
              {step.points && step.points.length > 0 && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {step.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm text-charcoal/80"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                        aria-hidden
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </div>
    </ol>
  );
}
