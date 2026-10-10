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
    "Splendid View Eco Orchard Resort",
    "Eco Orchard Resort Rajgarh",
    "Resort in Rajgarh Himachal Pradesh",
    "Hotel in Rajgarh Sirmour",
    "Splendid View Rajgarh",
    "Rajgarh Sirmour cottages",
    "Peach Valley Rajgarh resort",
    "Himachal Pradesh eco resort stay",
    "Weekend getaway from Chandigarh to Rajgarh",
    "Weekend getaway from Delhi to Rajgarh",
    "Places to stay near Solan Shimla",
    "Offbeat mountain resort Himachal",
  ],
  authors: [{ name: businessDetails.name, url: SITE_URL }],
  creator: businessDetails.name,
  publisher: businessDetails.name,
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
    },
  },
  openGraph: {
    title: `${businessDetails.name} | Resort in Rajgarh, Himachal Pradesh`,
    description: businessDetails.description,
    url: SITE_URL,
    siteName: businessDetails.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero/resort-cottages.webp`,
        width: 1200,
        height: 630,
        alt: `${businessDetails.name} - Panoramic Cottages overlooking Giri Valley`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessDetails.name} | Resort in Rajgarh, Himachal Pradesh`,
    description: businessDetails.description,
    images: [`${SITE_URL}/images/hero/resort-cottages.webp`],
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
      <body className="min-h-screen flex flex-col bg-warm-50 text-stone-900 antialiased selection:bg-forest-800 selection:text-white overflow-x-hidden max-w-full relative">
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
        <main id="main-content" className="flex-1 flex flex-col pb-16 md:pb-0 overflow-x-hidden max-w-full">
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
