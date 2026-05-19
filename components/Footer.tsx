import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-wide py-20 md:py-24">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl tracking-tight text-ivory">
                STRATA
              </span>
              <span className="h-3 w-px bg-ivory/25" aria-hidden />
              <span className="text-[10px] uppercase tracking-[0.25em] text-ivory/55">
                A {site.parent} Advisory Practice
              </span>
            </div>
            <p className="mt-7 max-w-md font-serif text-2xl leading-snug text-ivory/90 sm:text-[1.6rem]">
              Strategy, tax, and launch coordination for short-term rental
              investments &mdash;{" "}
              <span className="italic text-ivory/70">
                from first review to operating asset.
              </span>
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 border-b border-gold/60 pb-1 text-sm text-ivory transition hover:border-ivory"
            >
              Book a Strategy Call
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-ivory/55">
              Explore
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ivory/85 hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-ivory/85 hover:text-ivory">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-ivory/55">
              Contact
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-ivory/85">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-ivory"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="text-ivory/65">
                STRATA is the short-term rental advisory arm of {site.parent}.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-ivory/15 pt-8 text-xs text-ivory/55 md:grid-cols-2">
          <p className="max-w-3xl text-pretty leading-relaxed">
            STRATA provides advisory and coordination support. Property
            performance, financing, tax outcomes, and investment results are
            not guaranteed. Tax advice depends on each client&rsquo;s facts and
            circumstances.
          </p>
          <p className="md:text-right">
            &copy; {new Date().getFullYear()} STRATA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
