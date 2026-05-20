import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";

export const metadata: Metadata = {
  title: {
    default:
      "STRATA Advisory & Hospitality | STR Deal Underwriting, Tax Strategy & Operations",
    template: "%s | STRATA",
  },
  description:
    "STRATA helps short-term rental investors underwrite deals, model tax strategy, coordinate cost segregation, launch guest-ready units, and manage STR operations against the pro forma.",
  metadataBase: new URL("https://strata-advisory.vercel.app"),
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
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
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
