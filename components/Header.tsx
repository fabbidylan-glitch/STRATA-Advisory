"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-ivory/90 backdrop-blur border-b border-charcoal/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between md:h-[72px]">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="STRATA home"
        >
          <span className="font-serif text-[1.6rem] tracking-tight text-charcoal leading-none">
            STRATA
          </span>
          <span className="hidden h-3 w-px bg-charcoal/25 sm:inline-block" />
          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-charcoal/55 sm:inline">
            A {site.parent} Advisory Practice
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-wide text-charcoal/75 transition hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={site.ctas.primary.href} className="btn-primary !py-2.5 !px-5 text-[13px]">
            {site.ctas.primary.label}
            <ArrowRight size={14} />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-charcoal/15 p-2 text-charcoal lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="border-t border-charcoal/10 bg-ivory">
            <div className="container-wide flex flex-col gap-1 py-5">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 font-serif text-xl text-charcoal/85 hover:bg-charcoal/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={site.ctas.primary.href}
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-full"
              >
                {site.ctas.primary.label}
                <ArrowRight size={14} />
              </Link>
              <p className="mt-4 px-2 text-[10px] uppercase tracking-[0.22em] text-charcoal/45">
                A {site.parent} Advisory Practice
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
