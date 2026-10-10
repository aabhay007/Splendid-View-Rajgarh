import React from "react";
import Image from "next/image";
import Link from "next/link";
import { businessDetails } from "@/content/business";
import { amenitiesList } from "@/content/amenities";
import { experiencesList } from "@/content/experiences";
import { masterFaqList } from "@/content/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { getResortSchema, getFaqSchema } from "@/lib/seo/schema";
import { constructMetadata } from "@/lib/seo/metadata";
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

      {/* 1. HERO SECTION (Full Uncropped Image on Mobile + Full-Screen Immersive on Desktop) */}
      <section className="relative bg-forest-950 text-white overflow-hidden">
        {/* ================= MOBILE VIEW (< md) ================= */}
        {/* Displays the FULL 16:9 uncropped photo with organic gradient fade into text */}
        <div className="md:hidden flex flex-col bg-forest-950">
          {/* Photo Stage with CSS mask-image: image fades softly to 0% opacity at bottom */}
          <div className="relative w-full aspect-[16/9] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_45%,rgba(0,0,0,0)_98%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_45%,rgba(0,0,0,0)_98%)]">
            <Image
              src="/images/hero/resort-cottages.webp"
              alt="Splendid View Eco Orchard Resort - All 6 Hillside Cottages overlooking Giri Valley"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Top vignette for readability of header pill */}
            <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

            {/* Over-image floating authority pill */}
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-forest-950/85 backdrop-blur-md border border-white/20 text-emerald-200 text-[10px] font-semibold shadow">
                <MapPinIcon className="w-3 h-3 text-peach-400 shrink-0" />
                <span className="truncate">Village Tikkari Tali, Rajgarh, HP</span>
              </span>
              <span className="inline-block px-2 py-0.5 rounded-full bg-forest-900/85 text-emerald-300 text-[9px] font-bold border border-emerald-500/30 backdrop-blur-md shadow">
                Full Panorama
              </span>
            </div>
          </div>

          {/* Mobile Content Block with bg-transparent: zero borders, zero hard edges, pure seamless blend */}
          <div className="relative z-10 px-4 -mt-10 pt-0 pb-7 text-center space-y-3.5 bg-transparent">
            <h1 className="font-serif text-2xl font-bold tracking-tight text-white leading-tight">
              Resort in Rajgarh, Himachal Pradesh:{" "}
              <span className="text-peach-300 block text-xl mt-0.5">
                Splendid View Eco Orchard Resort
              </span>
            </h1>

            <p className="text-xs text-warm-200 leading-relaxed max-w-sm mx-auto">
              Hillside cottages with private balconies perched above the Giri valley.
              Crisp mountain air, peaceful pine ridges, homestyle food, and authentic Himachali peace.
            </p>

            {/* Mobile Explore CTA (Call & WhatsApp already available in the fixed bottom bar) */}
            <div className="pt-0.5 flex justify-center">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 bg-white text-forest-950 font-bold text-xs py-2.5 px-6 rounded-full shadow-md active:scale-95 transition-all"
              >
                <span>Explore Cottages & Rates</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-forest-700" />
              </Link>
            </div>

            {/* Quick Travel Badges */}
            <div className="pt-1 flex flex-wrap items-center justify-center gap-1.5 text-[10px] text-warm-300">
              <span className="bg-forest-950/70 px-2.5 py-1 rounded-lg border border-white/10">
                🚗 Chandigarh: 2.5–3.5h
              </span>
              <span className="bg-forest-950/70 px-2.5 py-1 rounded-lg border border-white/10">
                🚗 Delhi: 6.5–7.5h
              </span>
              <span className="bg-forest-950/70 px-2.5 py-1 rounded-lg border border-white/10">
                🚗 Shimla: ~2h
              </span>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP VIEW (md: and up) ================= */}
        {/* Full-bleed immersive wide background */}
        <div className="hidden md:flex relative min-h-[88vh] lg:min-h-[92vh] items-center justify-center">
          {/* Desktop Full-Screen Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/resort-cottages.webp"
              alt="Splendid View Eco Orchard Resort - Hillside Cottages overlooking Giri Valley"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center scale-105 animate-subtle-zoom"
            />
            {/* Soft, minimal gradient overlay on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-black/20 to-black/25" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center space-y-6">
            {/* Geographic Authority Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-950/80 backdrop-blur-md border border-white/20 text-emerald-200 text-sm font-medium shadow-lg max-w-full">
              <MapPinIcon className="w-4 h-4 text-peach-400 shrink-0" />
              <span>Village Tikkari Tali, Rajgarh, District Sirmour, Himachal Pradesh</span>
            </div>

            {/* Desktop H1 with target keyword & drop shadow */}
            <h1 className="font-serif text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
              Resort in Rajgarh, Himachal Pradesh:{" "}
              <span className="text-peach-300 block sm:inline">
                Splendid View Eco Orchard Resort
              </span>
            </h1>

            {/* Desktop Value Proposition Subtitle */}
            <p className="text-lg lg:text-xl text-warm-100 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] font-medium">
              Hillside cottages with private balconies perched above the Giri valley.
              Crisp mountain air, peaceful pine ridges, homestyle Himachali food, and authentic mountain peace.
            </p>

            {/* Desktop Dual Primary Conversion CTAs */}
            <div className="pt-4 flex items-center justify-center gap-4 w-full">
              <a
                href={`tel:${primaryPhone}`}
                className="inline-flex items-center justify-center gap-2.5 bg-forest-800/90 hover:bg-forest-700 active:scale-95 text-white font-bold text-base py-4 px-8 rounded-2xl shadow-xl transition-all border border-emerald-500/30 min-h-[48px] backdrop-blur-sm"
                aria-label="Call Splendid View Rajgarh directly"
              >
                <PhoneIcon className="w-5 h-5 text-emerald-300 shrink-0" />
                <span>Call: {displayPhone}</span>
              </a>

              <a
                href={businessDetails.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-bold text-base py-4 px-8 rounded-2xl shadow-xl transition-all min-h-[48px]"
                aria-label="Chat on WhatsApp with Splendid View Rajgarh"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>WhatsApp Direct</span>
              </a>
            </div>

            {/* Desktop Key Distance Quick Badges */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-warm-200">
              <span className="bg-forest-950/70 px-3.5 py-1.5 rounded-lg border border-white/10 backdrop-blur-md shadow-sm">
                🚗 Chandigarh: 2.5–3.5 Hours
              </span>
              <span className="bg-forest-950/70 px-3.5 py-1.5 rounded-lg border border-white/10 backdrop-blur-md shadow-sm">
                🚗 Delhi / NCR: 6.5–7.5 Hours
              </span>
              <span className="bg-forest-950/70 px-3.5 py-1.5 rounded-lg border border-white/10 backdrop-blur-md shadow-sm">
                🚗 Shimla: ~2.0 Hours
              </span>
            </div>
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

      {/* 3. COTTAGES SHOWCASE */}
      <section className="py-16 sm:py-20 bg-warm-100/60 border-y border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
                Hillside Accommodation
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950">
                Private Valley-Facing Cottages
              </h2>
              <p className="text-sm sm:text-base text-warm-700 max-w-xl">
                All 6 of our hillside cottages are independent units featuring private
                balconies, warm wooden interiors, and panoramic Giri river valley vistas.
              </p>
            </div>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-forest-900 font-semibold text-sm hover:text-peach-600 transition-colors group"
            >
              <span>Explore All Cottages & Rates</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cottage Feature Card */}
          <div className="bg-white rounded-3xl border border-warm-200/90 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Visuals (Left 7 Cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-warm-100 shadow-sm mb-4">
                    <Image
                      src="/resort-images/rooms/cottage-bedroom-master-bed.webp"
                      alt="Private Valley View Cottage interior at Splendid View Rajgarh"
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-warm-200 shadow-xs">
                      <Image
                        src="/resort-images/rooms/cottage-bedroom-panoramic-view.webp"
                        alt="High sloped ceiling cottage interior"
                        fill
                        sizes="20vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-warm-200 shadow-xs">
                      <Image
                        src="/resort-images/home/two-cottages-balconies-sitout.jpeg"
                        alt="Private balcony and stone sit-out courtyard"
                        fill
                        sizes="20vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-warm-200 shadow-xs">
                      <Image
                        src="/resort-images/home/six-standalone-cottages-row.jpeg"
                        alt="All 6 hillside cottages along the ridge"
                        fill
                        sizes="20vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6 pt-6 border-t border-warm-100 text-xs text-warm-800">
                  <div className="p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60 flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-forest-700 shrink-0" />
                    <span className="truncate">2–3 Guests / Cottage</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60 flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-forest-700 shrink-0" />
                    <span className="truncate">King / Queen Bed</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60 flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-forest-700 shrink-0" />
                    <span className="truncate">24/7 Hot Water</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60 flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-forest-700 shrink-0" />
                    <span className="truncate">High-Speed Wi-Fi</span>
                  </div>
                </div>
              </div>

              {/* Content & Actions (Right 5 Cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-warm-50/40 lg:border-l border-warm-200/80 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
                      Independent Hillside Stay
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-forest-950 mt-1">
                      Private Valley View Cottage
                    </h3>
                    <p className="text-xs text-peach-700 font-medium mt-1">
                      Standalone cottage with private sit-out balcony overlooking Giri Valley
                    </p>
                  </div>

                  <p className="text-sm text-warm-700 leading-relaxed">
                    Surrounded by peach orchards and pine forests, every cottage combines
                    natural Himalayan timber warmth with modern essentials. Wake up to golden
                    mountain sunrises, sip morning tea on your private balcony, and unwind
                    in total hill peace.
                  </p>

                  <div className="space-y-2 pt-1">
                    <h4 className="font-serif text-xs font-bold text-forest-950 uppercase tracking-wider">
                      Included Cottage Amenities:
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-warm-700">
                      <span className="flex items-center gap-1.5">
                        <CheckIcon className="w-3.5 h-3.5 text-forest-700" />
                        Private Balcony
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckIcon className="w-3.5 h-3.5 text-forest-700" />
                        Ensuite Bathroom
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckIcon className="w-3.5 h-3.5 text-forest-700" />
                        Flat Screen TV
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckIcon className="w-3.5 h-3.5 text-forest-700" />
                        Tea & Coffee Kettle
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckIcon className="w-3.5 h-3.5 text-forest-700" />
                        Work / Study Desk
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckIcon className="w-3.5 h-3.5 text-forest-700" />
                        Direct Room Service
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-forest-950 text-warm-100 text-xs space-y-1">
                    <strong className="text-white block font-semibold">
                      6 Standalone Cottages on Property
                    </strong>
                    <p className="text-[11px] text-warm-200">
                      Book a single cottage for couples or reserve multiple cottages for family reunions and friend trips.
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 border-t border-warm-200/80 flex flex-wrap gap-2.5">
                  <Link
                    href="/rooms"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-forest-900 text-white font-semibold text-xs py-3 px-4 rounded-xl hover:bg-forest-800 transition-colors"
                  >
                    <span>View Cottage Details & Tariffs</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={businessDetails.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-3 bg-[#25D366] text-white rounded-xl hover:bg-[#20bd5a] transition-colors"
                    aria-label="Inquire about cottages on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
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
