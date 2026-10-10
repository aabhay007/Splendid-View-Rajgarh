import React from "react";
import Image from "next/image";
import Link from "next/link";
import { businessDetails } from "@/content/business";
import { rooms } from "@/content/rooms";
import { amenitiesList } from "@/content/amenities";
import { experiencesList } from "@/content/experiences";
import { masterFaqList } from "@/content/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { getResortSchema, getFaqSchema } from "@/lib/seo/schema";
import { constructMetadata } from "@/lib/seo/metadata";
import { RoomCard } from "@/components/ui/RoomCard";
import { AmenityCard } from "@/components/ui/AmenityCard";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@/components/ui/icons";

export const metadata = constructMetadata({
  title: "Splendid View Eco Orchard Resort | Resort in Rajgarh Himachal Pradesh",
  description:
    "Discover Splendid View Eco Orchard Resort in Rajgarh, Himachal Pradesh. Experience hillside cottages with private balconies, panoramic Giri valley vistas, lush peach orchards & authentic Himachali hospitality. Book direct for best tariffs.",
  path: "/",
  image: "/images/hero/resort-cottages.webp",
  keywords: [
    "Splendid View Eco Orchard Resort",
    "Eco Orchard Resort Rajgarh",
    "Resort in Rajgarh",
    "Hotel in Rajgarh Himachal Pradesh",
    "Splendid View Rajgarh",
    "Cottages in Rajgarh Sirmour",
    "Best resort in Sirmour",
    "Rajgarh peach valley stay",
    "Weekend getaway from Chandigarh to Rajgarh",
    "Weekend getaway from Delhi NCR",
  ],
});

export default function HomePage() {
  const primaryPhone = businessDetails.phones[0];
  const displayPhone = businessDetails.displayPhones[0];
  const featuredAmenities = amenitiesList.filter((a) => a.featured).slice(0, 6);
  const homeFaqs = masterFaqList.slice(0, 6);

  return (
    <>
      {/* Schema.org LodgingBusiness / Resort structured data */}
      <JsonLd data={getResortSchema()} />
      {/* Schema.org FAQPage structured data */}
      <JsonLd data={getFaqSchema(homeFaqs)} />

      {/* 1. HERO SECTION (Optimized for LCP < 2.5s with Real Resort Cottages Photo) */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center bg-forest-950 text-white overflow-hidden">
        {/* LCP Hero Image with Next/Image, priority=true, explicit sizes */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/resort-cottages.webp"
            alt="Splendid View Rajgarh - Real Hillside Cottages with Alpine Pine Roofs overlooking Giri Valley"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.75] contrast-[1.1] scale-105"
          />
          {/* Subtle gradient overlay to ensure WCAG AA text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-5 sm:space-y-6">
          {/* Geographic Authority Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/90 backdrop-blur-md border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm font-medium shadow-lg max-w-full">
            <MapPinIcon className="w-4 h-4 text-peach-400 shrink-0" />
            <span className="truncate">Village Tikkari Tali, Rajgarh, District Sirmour, HP</span>
          </div>

          {/* Primary H1 with target keyword */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-warm-50 leading-[1.15]">
            Resort in Rajgarh, Himachal Pradesh:{" "}
            <span className="text-peach-300 block sm:inline">
              Splendid View Rajgarh
            </span>
          </h1>

          {/* Value Proposition Subtitle */}
          <p className="text-sm sm:text-lg lg:text-xl text-warm-200 max-w-3xl mx-auto leading-relaxed">
            Hillside cottages with private balconies perched above the Giri valley.
            Crisp mountain air, peaceful pine ridges, homestyle Himachali food, and authentic mountain peace.
          </p>

          {/* Dual Primary Conversion CTAs */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none w-full">
            <a
              href={`tel:${primaryPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-forest-700 hover:bg-forest-600 active:scale-95 text-white font-bold text-sm sm:text-base py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-xl transition-all border border-emerald-500/30 min-h-[48px]"
              aria-label="Call Splendid View Rajgarh directly"
            >
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300 shrink-0" />
              <span>Call: {displayPhone}</span>
            </a>

            <a
              href={businessDetails.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-bold text-sm sm:text-base py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-xl transition-all min-h-[48px]"
              aria-label="Chat on WhatsApp with Splendid View Rajgarh"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Key Distance Quick Badges */}
          <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-warm-300">
            <span className="bg-forest-900/80 px-3 py-1.5 rounded-lg border border-warm-100/10 backdrop-blur-sm">
              🚗 Chandigarh: 2.5–3.5 Hours
            </span>
            <span className="bg-forest-900/80 px-3 py-1.5 rounded-lg border border-warm-100/10 backdrop-blur-sm">
              🚗 Delhi / NCR: 6.5–7.5 Hours
            </span>
            <span className="bg-forest-900/80 px-3 py-1.5 rounded-lg border border-warm-100/10 backdrop-blur-sm">
              🚗 Shimla: ~2.0 Hours
            </span>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION & TRANQUILITY HIGHLIGHTS */}
      <section className="py-16 sm:py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
              Escape The Commercial Noise
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950">
              Why Discerning Travelers Choose Rajgarh
            </h2>
            <p className="text-sm sm:text-base text-warm-700 leading-relaxed">
              Unlike congested tourist hubs, Rajgarh in District Sirmour retains
              its pristine natural charm, clean mountain air, and peaceful agrarian
              tranquility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-warm-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950">
                180° Panoramic Giri Valley Views
              </h3>
              <p className="text-sm text-warm-700 leading-relaxed">
                Positioned on an elevated ridge in Village Tikkari Tali, every
                room features a private balcony overlooking the dramatic Giri
                river valley and rolling Himalayan pine ridges.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-warm-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950">
                Heart of the Peach Bowl of Asia
              </h3>
              <p className="text-sm text-warm-700 leading-relaxed">
                Surrounded by thousands of acres of terraced peach and apple
                orchards. Marvel at delicate pink blossoms in spring and taste
                fresh tree-ripened fruit during summer harvests.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-warm-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950">
                Homestyle Mountain Comfort
              </h3>
              <p className="text-sm text-warm-700 leading-relaxed">
                Enjoy piping hot North Indian and Himachali meals cooked with
                fresh regional ingredients, 24/7 hot running water, high-speed
                Wi-Fi, and cozy evening bonfires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ROOMS SHOWCASE */}
      <section className="py-16 sm:py-20 bg-warm-100/60 border-y border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
                Accommodation
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950">
                Valley-Facing Rooms & Suites
              </h2>
              <p className="text-sm sm:text-base text-warm-700 max-w-xl">
                Every room is designed with private balconies, large picture
                windows, and modern comforts to frame the breathtaking mountain
                panoramas.
              </p>
            </div>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-forest-900 font-semibold text-sm hover:text-peach-600 transition-colors group"
            >
              <span>View All Rooms</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROPERTY AMENITIES */}
      <section className="py-16 sm:py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
              Guest Comforts
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950">
              Thoughtful Mountain Amenities
            </h2>
            <p className="text-sm text-warm-700">
              Everything you need for a restful, seamless mountain stay in
              District Sirmour.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAmenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/amenities"
              className="inline-flex items-center gap-2 bg-white text-forest-900 font-semibold text-sm py-3 px-6 rounded-xl border border-warm-300 hover:border-forest-700 transition-all shadow-sm"
            >
              <span>Explore All Amenities</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LOCAL EXPERIENCES & ATTRACTIONS */}
      <section className="py-16 sm:py-20 bg-warm-100/60 border-t border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
                Discover Sirmour
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950">
                Experiences Around Rajgarh
              </h2>
              <p className="text-sm sm:text-base text-warm-700 max-w-xl">
                From wandering through peach orchards to riverside walks along the
                Giri river, explore authentic Himachal Pradesh.
              </p>
            </div>
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 text-forest-900 font-semibold text-sm hover:text-peach-600 transition-colors group"
            >
              <span>View All Experiences</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiencesList.slice(0, 3).map((exp) => (
              <ExperienceCard key={exp.slug} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW TO REACH SUMMARY */}
      <section className="py-16 bg-forest-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="inline-block px-3 py-1 rounded-full bg-forest-800 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
                Smooth Mountain Highway Access
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-warm-50 leading-tight">
                How to Reach Splendid View Rajgarh
              </h2>
              <p className="text-sm sm:text-base text-warm-200 leading-relaxed">
                Conveniently located off the Solan-Rajgarh state highway, our
                property is easily reached via well-paved roads suitable for all
                passenger vehicles.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm">
                  <CheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>From Chandigarh:</strong> 2.5 to 3.5 hours (~105 km)
                    via Himalayan Expressway and Kumarhatti bypass.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <CheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>From Delhi / NCR:</strong> 6.5 to 7.5 hours (~340 km)
                    via 6-lane NH44 and Himalayan Expressway.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <CheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>From Shimla:</strong> ~2.0 hours (~75 km) via Solan /
                    Giri valley route.
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/how-to-reach"
                  className="bg-peach-500 hover:bg-peach-600 text-white font-medium text-sm py-3 px-6 rounded-xl transition-all shadow"
                >
                  View Detailed Driving Routes
                </Link>
                <a
                  href={businessDetails.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-forest-800 hover:bg-forest-700 text-warm-100 font-medium text-sm py-3 px-6 rounded-xl transition-all border border-forest-700"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Quick Destination Card */}
            <div className="bg-forest-950/80 p-8 rounded-3xl border border-forest-800 shadow-2xl space-y-6">
              <h3 className="font-serif text-xl font-bold text-warm-50">
                Official Resort Location
              </h3>
              <p className="text-sm text-warm-300 leading-relaxed">
                {businessDetails.address.fullFormatted}
              </p>
              <div className="border-t border-forest-800 pt-4 space-y-2 text-xs text-warm-300">
                <div className="flex justify-between py-1">
                  <span>Elevation:</span>
                  <span className="font-semibold text-white">
                    {businessDetails.geo.elevation}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Nearest Railway Station:</span>
                  <span className="font-semibold text-white">Kalka (85 km)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Nearest Airport:</span>
                  <span className="font-semibold text-white">
                    Chandigarh (115 km)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-20 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
              Guest Inquiries
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-warm-700">
              Everything you need to know about booking, amenities, routes, and
              our property.
            </p>
          </div>

          <FaqAccordion items={homeFaqs} defaultOpenFirst={true} />

          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-forest-900 font-semibold text-sm hover:text-peach-600 transition-colors"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. HIGH-CONVERSION CTA BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaBanner
          heading="Ready to Experience Splendid View Rajgarh?"
          subheading="Leave the city crowds behind. Contact us directly to reserve your valley-facing room with best available direct tariffs."
        />
      </div>
    </>
  );
}
