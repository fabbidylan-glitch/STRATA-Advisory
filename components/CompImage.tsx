"use client";

import { useState } from "react";

export function CompImage({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true);
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-primary">
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover saturate-[0.85] transition-transform duration-700 hover:scale-[1.04]"
        />
      )}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(160deg, rgba(15,27,45,0.10) 0%, rgba(15,27,45,0.55) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-soft-light noise" aria-hidden />
    </div>
  );
}
