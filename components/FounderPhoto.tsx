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
        className="flex h-32 w-32 shrink-0 items-center justify-center rounded-md border border-border bg-cream font-serif text-3xl text-primary"
      >
        DF
      </div>
    );
  }

  return (
    <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-md border border-border bg-white">
      <Image
        src="/dylan-fabbi.png"
        alt="Dylan Fabbi, founder of STRATA"
        fill
        sizes="128px"
        className="object-cover object-top"
        onError={() => setOk(false)}
      />
    </div>
  );
}
