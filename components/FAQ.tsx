"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQItem = { q: string; a: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-charcoal/10 rounded-2xl border border-charcoal/10 bg-white">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-ivory/40 sm:px-8"
            >
              <span className="font-serif text-lg text-charcoal sm:text-xl">
                {item.q}
              </span>
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-charcoal">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pr-12 text-charcoal/75 sm:px-8">
                <p className="text-pretty leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
