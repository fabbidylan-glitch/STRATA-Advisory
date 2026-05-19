export const site = {
  name: "STRATA",
  parent: "FABBI",
  url: "https://strata.fabbi.com",
  description:
    "STRATA helps investors evaluate, structure, and launch short-term rental investments with underwriting, tax strategy, cost segregation coordination, and advisory support powered by FABBI.",
  nav: [
    { href: "/process", label: "Process" },
    { href: "/advisory", label: "Advisory" },
    { href: "/hospitality", label: "Hospitality" },
    { href: "/tax-strategy", label: "Tax Strategy" },
    { href: "/about", label: "About" },
  ],
  ctas: {
    primary: { href: "/contact", label: "Book a Strategy Call" },
    secondary: { href: "/process", label: "See How It Works" },
  },
  contact: {
    email: "advisory@strata.fabbi.com",
    phone: "",
  },
} as const;
