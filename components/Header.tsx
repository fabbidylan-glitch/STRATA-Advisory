"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { StrataMark } from "@/components/StrataMark";

const nav = [
  { href: "/advisory", label: "Advisory" },
  { href: "/hospitality", label: "Hospitality" },
  { href: "/process", label: "Process" },
  { href: "/tax-strategy", label: "Tax Strategy" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="flex items-center gap-3.5">
          <StrataMark size={34} />
          <span className="wordmark text-xl text-primary md:text-[1.4rem]">
            STRATA
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ink/75 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="cta-primary">
            Send a Property
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(true)}
          className="rounded-md p-2 text-primary lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? "" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-primary/60 backdrop-blur-md transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-background shadow-card-lg transition-transform duration-300 ease-out sm:w-[420px] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-20 items-center justify-between border-b border-border px-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <StrataMark size={30} />
              <span className="wordmark text-lg text-primary">STRATA</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-md p-2 text-primary transition-colors hover:bg-surface"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-md bg-surface px-3 py-4 text-lg font-semibold uppercase tracking-[0.22em] text-primary"
                >
                  <span>Home</span>
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-md px-3 py-4 text-lg font-medium uppercase tracking-[0.22em] text-ink/80 transition-colors hover:bg-surface hover:text-primary"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-border bg-cream/50 p-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="cta-primary w-full"
            >
              Send a Property
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 block text-center font-mono text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ink/70 transition-colors hover:text-primary"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
