import type { Metadata } from "next";
import { Inter, Playfair_Display, DM_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { site } from "@/lib/site";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});
const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});
const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "STRATA Advisory & Hospitality | STR Deal Underwriting, Tax Strategy & Operations",
    template: "%s | STRATA",
  },
  description: site.description,
  metadataBase: new URL(site.url),
  keywords: [
    "short-term rental underwriting",
    "STR tax strategy",
    "cost segregation short-term rental",
    "Airbnb investment analysis",
    "STR revenue management",
    "short-term rental advisory",
    "vacation rental operations",
    "STR acquisition advisory",
  ],
  openGraph: {
    title:
      "STRATA Advisory & Hospitality | STR Deal Underwriting, Tax Strategy & Operations",
    description:
      "Underwriting, tax strategy, cost segregation, and operations for serious short-term rental investors. The pro forma should not die at closing.",
    siteName: "STRATA",
    locale: "en_US",
    type: "website",
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "STRATA",
  description: site.description,
  url: site.url,
  email: site.email,
  areaServed: "US",
  serviceType: [
    "Short-term rental deal underwriting",
    "STR tax strategy and cost segregation coordination",
    "Short-term rental hospitality operations",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        {/* If JS fails to run, reveal elements that motion left hidden */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to main content
        </a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
