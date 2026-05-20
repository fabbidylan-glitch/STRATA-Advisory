"use client";

import { useState } from "react";
import Image from "next/image";

// Renders /public/dylan-fabbi.png on a white frame. Falls back to a
// monogram until the file is added, so the page never shows a broken image.
export function FounderPhoto() {
  const [ok, setOk] = useState(true);

  if (!ok) {
    return (
      <div
        aria-hidden
        className="flex aspect-square w-full max-w-[280px] items-center justify-center rounded-lg border border-border bg-cream font-serif text-5xl text-primary"
      >
        DF
      </div>
    );
  }

  return (
    <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-lg border border-border bg-white">
      <Image
        src="/dylan-fabbi.png"
        alt="Dylan Fabbi, founder of STRATA"
        fill
        sizes="(min-width: 768px) 280px, 70vw"
        className="object-cover object-top"
        onError={() => setOk(false)}
      />
    </div>
  );
}
