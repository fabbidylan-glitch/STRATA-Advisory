type Step = {
  num: string;
  title: string;
  description: string;
  points?: string[];
};

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="space-y-0">
      {steps.map((step, i) => (
        <li
          key={step.num}
          className={`grid gap-6 border-t border-charcoal/15 py-10 md:grid-cols-12 md:gap-10 md:py-12 ${
            i === steps.length - 1 ? "border-b" : ""
          }`}
        >
          <div className="md:col-span-4">
            <div className="flex items-baseline gap-5">
              <span className="display-num">{step.num}</span>
              <div className="pt-2">
                <p className="text-[11px] uppercase tracking-[0.22em] text-charcoal/45">
                  Phase {parseInt(step.num, 10)}
                </p>
                <h3 className="mt-2 h-display text-xl text-charcoal sm:text-2xl">
                  {step.title}
                </h3>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 md:pt-2">
            <p className="max-w-2xl text-[15px] text-charcoal/75 leading-relaxed text-pretty sm:text-base">
              {step.description}
            </p>
            {step.points && step.points.length > 0 && (
              <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {step.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 border-b border-charcoal/8 py-2 text-sm text-charcoal/80"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold"
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
    </ol>
  );
}
