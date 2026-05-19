"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQItem = { q: string; a: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-charcoal/15">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.q} className="border-b border-charcoal/15">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-6 py-6 text-left transition sm:py-7"
            >
              <span className="num-marker">0{idx + 1}</span>
              <span className="font-serif text-lg text-charcoal sm:text-xl">
                {item.q}
              </span>
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center self-center rounded-full border border-charcoal/15 text-charcoal transition group-hover:border-charcoal/40">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            {isOpen && (
              <div className="grid grid-cols-[auto_1fr] gap-6 pb-7 sm:pb-8">
                <span aria-hidden className="w-[1.5rem]" />
                <p className="max-w-2xl pr-8 text-charcoal/75 leading-relaxed text-pretty">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
