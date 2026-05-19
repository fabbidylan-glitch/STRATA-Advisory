import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl tracking-tight">STRATA</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-ivory/55">
                powered by {site.parent}
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm text-ivory/70">
              Advisory and coordination for short-term rental investments — deal
              underwriting, tax strategy, cost segregation planning, and launch
              support, integrated from the start.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-ivory/55">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ivory/85 hover:text-ivory">
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

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.18em] text-ivory/55">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ivory/85">
              <li>
                <a href={`mailto:${site.contact.email}`} className="hover:text-ivory">
                  {site.contact.email}
                </a>
              </li>
              <li className="text-ivory/65">
                STRATA is the short-term rental advisory arm of {site.parent}.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/15 pt-8 text-xs text-ivory/55">
          <p className="max-w-3xl text-pretty">
            STRATA provides advisory and coordination support. Property
            performance, financing, tax outcomes, and investment results are not
            guaranteed. Tax advice depends on each client&rsquo;s facts and
            circumstances.
          </p>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} STRATA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
