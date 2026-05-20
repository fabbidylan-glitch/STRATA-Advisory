"use client";

import { useState } from "react";
import Image from "next/image";

export function CompImage({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true);
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-primary">
      {ok && (
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          sizes="(min-width: 640px) 33vw, 100vw"
          onError={() => setOk(false)}
          className="object-cover saturate-[0.85] transition-transform duration-700 hover:scale-[1.04]"
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
