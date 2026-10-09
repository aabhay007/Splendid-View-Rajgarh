import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWebSiteSchema } from "@/lib/seo/schema";
import { businessDetails } from "@/content/business";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["600", "700", "800"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://splendidviewrajgarh.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${businessDetails.name} | Resort in Rajgarh, Himachal Pradesh`,
    template: `%s | ${businessDetails.name}`,
  },
  description: businessDetails.description,
  keywords: [
    "Resort in Rajgarh",
    "Hotel in Rajgarh",
    "Splendid View Rajgarh",
    "Rajgarh Sirmour",
    "Peach Valley Rajgarh",
    "Himachal Pradesh stay",
    "Weekend getaway from Chandigarh",
    "Weekend getaway from Delhi",
  ],
  authors: [{ name: businessDetails.name, url: SITE_URL }],
  creator: businessDetails.name,
  publisher: businessDetails.name,
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
  other: {
    "geo.region": "IN-HP",
    "geo.placename": "Rajgarh, District Sirmour",
    "geo.position": `${businessDetails.geo.latitude};${businessDetails.geo.longitude}`,
    ICBM: `${businessDetails.geo.latitude}, ${businessDetails.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const isRealGaId = gaId && !gaId.includes("TODO") && gaId.startsWith("G-");

  return (
    <html lang="en-IN" className={`${sansFont.variable} ${serifFont.variable}`}>
      <body className="min-h-screen flex flex-col bg-warm-50 text-stone-900 antialiased selection:bg-peach-500 selection:text-white">
        {/* WebSite and Organization Schema */}
        <JsonLd data={getWebSiteSchema()} />

        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-forest-900 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>

        {/* Global Navigation Header */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile-Only Sticky Call & WhatsApp Conversion Bar */}
        <StickyMobileBar />

        {/* Google Analytics 4 (Loaded if valid ID supplied) */}
        {isRealGaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
