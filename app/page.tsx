import React from "react";
import Image from "next/image";
import Link from "next/link";
import { businessDetails } from "@/content/business";
import { amenitiesList } from "@/content/amenities";
import { experiencesList } from "@/content/experiences";
import { JsonLd } from "@/components/seo/JsonLd";
import { getResortSchema } from "@/lib/seo/schema";
import { constructMetadata } from "@/lib/seo/metadata";
import { AmenityCard } from "@/components/ui/AmenityCard";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { CtaBanner } from "@/components/ui/CtaBanner";
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  GoogleIcon,
  UsersIcon,
  BedIcon,
  DropletIcon,
  MountainIcon,
  UtensilsIcon,
  FlameIcon,
  WifiIcon,
  CarIcon,
} from "@/components/ui/icons";

function getAmenityIcon(iconName: string) {
  switch (iconName) {
    case "mountain":
      return <MountainIcon className="w-4 h-4 text-forest-700" />;
    case "utensils":
      return <UtensilsIcon className="w-4 h-4 text-forest-700" />;
    case "flame":
      return <FlameIcon className="w-4 h-4 text-peach-600" />;
    case "wifi":
      return <WifiIcon className="w-4 h-4 text-forest-700" />;
    case "car":
      return <CarIcon className="w-4 h-4 text-forest-700" />;
    case "droplet":
      return <DropletIcon className="w-4 h-4 text-sky-600" />;
    default:
      return <MountainIcon className="w-4 h-4 text-forest-700" />;
  }
}
import { googleReviewsList } from "@/content/reviews";
import { CottageImageSlider } from "@/components/ui/CottageImageSlider";
import { ReviewsSlider } from "@/components/ui/ReviewsSlider";

const cottageImages = [
  {
    src: "/resort-images/rooms/cottage-bedroom-master-bed.webp",
    alt: "Master bedroom in wooden hillside cottage",
    title: "Master Bedroom & King Bed",
  },
  {
    src: "/resort-images/rooms/cottage-bedroom-panoramic-view.webp",
    alt: "Valley window panoramic view from cottage bed",
    title: "Panoramic Valley View Window",
  },
  {
    src: "/resort-images/home/two-cottages-balconies-sitout.jpeg",
    alt: "Private balcony and stone sit-out courtyard",
    title: "Private Balconies & Sit-Out",
  },
  {
    src: "/resort-images/views/Sunrise-view.jpeg",
    alt: "Private balcony and stone sit-out courtyard",
    title: "Private Balconies & Sit-Out",
  },
  {
    src: "/resort-images/views/Morning-view.jpeg",
    alt: "Row of 6 standalone Swiss cottages amidst orchards",
    title: "6 Standalone Cottages on Ridge",
  },
];


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

  return (
    <>
      {/* Schema.org LodgingBusiness / Resort structured data */}
      <JsonLd data={getResortSchema()} />

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
            <h1 className="font-serif tracking-tight leading-tight">
              <span className="block text-2xl font-bold text-white">
                Splendid View Eco Orchard Resort
              </span>
              <span className="text-peach-300 block text-base sm:text-lg font-medium mt-1">
                Resort in Rajgarh, Himachal Pradesh
              </span>
            </h1>

            <p className="text-xs text-warm-200 leading-relaxed max-w-sm mx-auto">
            Swiss-style cottages nestled above The Peach Valley of Rajgarh. Breathtaking mountain views,
            crisp Himalayan air, lush fruit orchards, homestyle Himachali cuisine, and peaceful escapes
            where nature slows life down.
            </p>

            {/* Quick Travel Badges */}
            <div className="pt-1 flex flex-wrap items-center justify-center gap-1.5 text-[10px] text-warm-300">
              <span className="bg-forest-950/70 px-2.5 py-1 rounded-lg border border-white/10">
                🚗 Chandigarh: 3:30–4:00h (124 km)
              </span>
              <span className="bg-forest-950/70 px-2.5 py-1 rounded-lg border border-white/10">
                🚗 Delhi: 7:30–8:00h (369 km)
              </span>
              <span className="bg-forest-950/70 px-2.5 py-1 rounded-lg border border-white/10">
                🚗 Shimla: 3:30–4:00h (108 km)
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
            <h1 className="font-serif tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
              <span className="block text-4xl lg:text-6xl font-bold text-white leading-tight">
                Splendid View Eco Orchard Resort
              </span>
              <span className="text-peach-300 block text-2xl lg:text-3xl font-medium mt-3">
                Resort in Rajgarh, Himachal Pradesh
              </span>
            </h1>

            {/* Desktop Value Proposition Subtitle */}
            <p className="text-lg lg:text-xl text-warm-100 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] font-medium">
            Swiss-style cottages nestled above The Peach Valley of Rajgarh. Breathtaking mountain views,
            crisp Himalayan air, lush fruit orchards, homestyle Himachali cuisine, and peaceful escapes
            where nature slows life down.
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
                🚗 Chandigarh: 3:30–4:00 Hours (124 km)
              </span>
              <span className="bg-forest-950/70 px-3.5 py-1.5 rounded-lg border border-white/10 backdrop-blur-md shadow-sm">
                🚗 Delhi / NCR: 7:30–8:00 Hours (369 km)
              </span>
              <span className="bg-forest-950/70 px-3.5 py-1.5 rounded-lg border border-white/10 backdrop-blur-md shadow-sm">
                🚗 Shimla: 3:30–4:00 Hours (108 km)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SPLENDID VIEW (WHAT WE HAVE IN ABOUT PAGE) */}
      <section className="py-12 sm:py-20 bg-beige-100 border-t border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12 space-y-3">
            <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
              Our Mountain Sanctuary • 7,000 Ft Elevation
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950">
              About Splendid View Rajgarh
            </h2>
            <p className="text-sm sm:text-base text-olive-800 leading-relaxed">
              Splendid View (Eco Orchard Resort) is more than a resort amidst a 6-acre orchard property of
              apple, peach, apricot, pears, and cherries. It is situated at an altitude of 7,000 ft in the lap
              of the famous Shirgul Maharaj temple peak Churdhar on Habban Road, 21 km from Rajgarh, Distt. Sirmour, H.P.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Overview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-md bg-warm-200">
                <Image
                  src="/resort-images/home/resort-cottages-and-dining-overview.jpeg"
                  alt="Splendid View Rajgarh full resort grounds overlooking Giri valley"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="bg-forest-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 font-medium">
                    Altitude: 7,000 ft • Churdhar Lap
                  </span>
                  <span className="bg-peach-700/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 font-medium">
                    6 Acres Fruit Orchards
                  </span>
                </div>
              </div>

              {/* Property Overview Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
                <div className="p-3 rounded-2xl bg-beige-50 border border-warm-300/80 shadow-xs">
                  <strong className="block text-forest-950 font-bold text-sm">7,000 ft</strong>
                  <span className="text-warm-600 text-[11px]">Elevation</span>
                </div>
                <div className="p-3 rounded-2xl bg-beige-50 border border-warm-300/80 shadow-xs">
                  <strong className="block text-forest-950 font-bold text-sm">6 Acres</strong>
                  <span className="text-warm-600 text-[11px]">Fruit Orchards</span>
                </div>
                <div className="p-3 rounded-2xl bg-beige-50 border border-warm-300/80 shadow-xs">
                  <strong className="block text-forest-950 font-bold text-sm">6 Units</strong>
                  <span className="text-warm-600 text-[11px]">Swiss Cottages</span>
                </div>
                <div className="p-3 rounded-2xl bg-beige-50 border border-warm-300/80 shadow-xs">
                  <strong className="block text-forest-950 font-bold text-sm">360° Views</strong>
                  <span className="text-warm-600 text-[11px]">Panoramic Valley View</span>
                </div>
              </div>
            </div>

            {/* Story & Guiding Hospitality Pillars */}
            <div className="lg:col-span-6 space-y-6 text-warm-800">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 mb-2">
                  Rooted in the Peach Valley of Himachal Pradesh
                </h3>
                <p className="text-sm sm:text-base text-olive-800 leading-relaxed mb-3">
                  Splendid View Eco Orchard Resort is a serene mountain retreat nestled at an altitude of 7,000
                  feet in Rajgarh(The Peach Valley of Asia), Himachal Pradesh. Spread across six acres of lush apple, peach, apricot, pear,
                  and cherry orchards, our resort offers breathtaking valley views, fresh mountain air, and a
                  peaceful escape from everyday life.
                </p>
                <p className="text-sm sm:text-base text-olive-800 leading-relaxed">
                  With cozy Swiss-style cottages, private balconies, authentic Himachali cuisine, and the beauty
                  of the surrounding mountains, we invite you to slow down, reconnect with nature, and create
                  unforgettable memories. Whether it’s a romantic getaway or a relaxing family holiday, Splendid
                  View is where the road ends and peace begins. 🌿
                </p><br/>
                <p className="text-sm sm:text-base text-olive-800 leading-relaxed">
                At Splendid View Eco Orchard Resort, our hospitality reflects the warmth and traditions of 
                 Himachal Pradesh. We believe in making every guest feel at home through personalised care 
                 and gracious service.
                </p><br/>
                <p className="text-sm sm:text-base text-olive-800 leading-relaxed">
            From fresh farm produce to delicious, home-style Himachali meals, we bring nature’s goodness
                 straight to your table whether be diary products, fruits, vegetables, etc. Surrounded by orchards 
                 and mountains, every meal and every moment is an experience of comfort, freshness, and heartfelt hospitality.
                 </p><br/>
                 <p className="text-sm sm:text-base text-olive-800 leading-relaxed">
                 Fresh from the farm, served with love.</p>
              </div>  

              <div className="space-y-3 pt-1">
                <h4 className="font-serif text-xs font-bold text-forest-950 uppercase tracking-wider">
                  What Guides Our Hospitality:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-olive-800">
                  <li className="flex items-start gap-2.5">
                    <CheckIcon className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-forest-950">Peace Over Crowds:</strong> We deliberately preserve a
                      quiet, calm residential atmosphere for couples and families.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-forest-950">Wholesome, Fresh Food:</strong> Every meal is cooked
                      fresh in our kitchen using quality regional ingredients and pure mountain water.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckIcon className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-forest-950">Direct, Transparent Service:</strong> We communicate
                      directly with our guests—no inflated intermediary markups or hidden service fees.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-forest-900 text-white font-semibold text-xs py-3 px-5 rounded-xl hover:bg-forest-800 transition-colors shadow-sm"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 bg-forest-900 hover:bg-forest-800 text-white font-semibold text-xs py-3 px-5 rounded-xl transition-colors shadow-sm"
                >
                  <span>View Resort Gallery</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COTTAGES SHOWCASE (ROOMS) */}
      <section className="py-12 sm:py-20 bg-beige-200/40 border-t border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
                Tranquil Hillside Accommodation
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950">
                Private Valley-Facing Cottages
              </h2>
              <p className="text-sm sm:text-base text-olive-800 max-w-2xl leading-relaxed">
              Perched on a scenic mountain ridge in Village Tikkari Tali, Splendid View Eco Orchard Resort 
              offers six independent hillside cottages with breathtaking Himalayan views. From your private 
              balcony or window, admire distant hill towns including Shimla, Solan, Chail, Kufri, Chhabra, and 
              Rajgarh on clear days. With warm wooden interiors, modern attached bathrooms, and peaceful 
              surroundings, each cottage is a cozy retreat to unwind and enjoy unforgettable mountain sunsets.
              </p>
            </div>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-forest-900 font-semibold text-sm hover:text-peach-600 transition-colors group shrink-0"
            >
              <span>Explore All Cottages</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cottage Feature Card */}
          <div className="bg-beige-50 rounded-3xl border border-warm-300/80 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Visuals (Left 7 Cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <CottageImageSlider images={cottageImages} />
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6 pt-6 border-t border-warm-100 text-xs text-olive-800">
                  <div className="p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60 flex items-center gap-1.5">
                    <UsersIcon className="w-4 h-4 text-forest-700 shrink-0" />
                    <span className="truncate">2–3 Guests / Cottage</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60 flex items-center gap-1.5">
                    <BedIcon className="w-4 h-4 text-forest-700 shrink-0" />
                    <span className="truncate">King / Queen Bed</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60 flex items-center gap-1.5">
                    <DropletIcon className="w-4 h-4 text-sky-600 shrink-0" />
                    <span className="truncate">24/7 Hot Water</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60 flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-forest-700 shrink-0" />
                    <span className="truncate">High-Speed Wi-Fi</span>
                  </div>
                </div>
              </div>

              {/* Content & Amenities (Right 5 Cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-warm-50/40 lg:border-l border-warm-200/80 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                      Cottage Amenities:
                    </h3>
                    <div className="grid grid-cols-2 gap-2.5 text-xs text-olive-800">
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

                  <div className="p-4 rounded-2xl bg-forest-950 text-warm-100 text-xs space-y-1.5">
                    <strong className="text-white block font-semibold text-sm">
                      6 Standalone Cottages on Property with maximum occupancy of 18 pax.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GOOGLE REVIEWS SHOWCASE */}
      <section className="py-12 sm:py-20 bg-beige-100 border-t border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige-50 border border-warm-300/80 text-xs font-semibold shadow-2xs">
                <GoogleIcon className="w-4 h-4 shrink-0" />
                <span className="text-forest-950">Google Verified Guest Reviews</span>
                <span className="flex items-center text-amber-500 gap-0.5 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span className="font-bold text-forest-900 ml-0.5">5.0</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950">
                What Our Guests Say on Google
              </h2>
              <p className="text-sm sm:text-base text-olive-800 max-w-2xl leading-relaxed">
                Real experiences from couples, families, and travelers who found peace
                in the peach orchards of Rajgarh.
              </p>
            </div>

            <a
              href={businessDetails.googleMaps.cidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-forest-900 hover:bg-forest-800 text-white font-semibold text-xs py-3 px-5 rounded-xl transition-colors shadow-sm shrink-0"
            >
              <GoogleIcon className="w-4 h-4 shrink-0" />
              <span>View Google Business Profile</span>
              <ArrowRightIcon className="w-3.5 h-3.5 text-emerald-300" />
            </a>
          </div>

          {/* Mobile View: Auto + Manual Slider */}
          <div className="md:hidden">
            <ReviewsSlider reviews={googleReviewsList} />
          </div>

          {/* Desktop View: 2-Column Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-5 sm:gap-6">
            {googleReviewsList.map((review) => (
              <div
                key={review.id}
                className="bg-beige-50 rounded-2xl p-6 sm:p-7 border border-warm-300/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Top Bar: Stars + Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-block text-[11px] font-semibold text-forest-800 bg-forest-50 px-2.5 py-0.5 rounded-full border border-forest-100">
                      {review.tag}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-olive-800 leading-relaxed italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Reviewer Meta */}
                <div className="pt-3 border-t border-warm-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-forest-800 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                      {review.avatarInitial}
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs sm:text-sm text-forest-950">
                        {review.author}
                      </h4>
                      <p className="text-[11px] text-olive-700">
                        {review.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-warm-500 text-[11px]">
                    <GoogleIcon className="w-3.5 h-3.5 shrink-0 opacity-80" />
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Stats Footer */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-forest-950 text-warm-100 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <StarIcon className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                <span>5.0 Star Rating on Location & Cleanliness</span>
              </span>
              <span className="text-warm-400">•</span>
              <span className="text-white font-medium">Accommodation</span>
              <span className="text-warm-400">•</span>
              <span className="text-white font-medium">Peace</span>
              <span className="text-warm-400">•</span>
              <span className="text-white font-medium">Authentic Himachali Food & Valley Views</span>
            </div>
            <a
              href={businessDetails.googleMaps.cidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-peach-300 hover:text-peach-200 font-semibold underline underline-offset-4 text-xs whitespace-nowrap"
            >
              Read all Google reviews →
            </a>
          </div>
        </div>
      </section>


      {/* 4. PROPERTY AMENITIES */}
      <section className="py-16 sm:py-20 bg-beige-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
              Guest Comforts
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950">
              Thoughtful Mountain Amenities
            </h2>
            <p className="text-sm text-olive-800">
              Everything you need for a restful, seamless mountain stay in
              District Sirmour.
            </p>
          </div>

          {/* Mobile View: Minimized Single Block with Icons and Title (No Cards/Descriptions) */}
          <div className="sm:hidden bg-beige-50 rounded-2xl p-4 border border-warm-300/80 shadow-sm">
            <div className="grid grid-cols-2 gap-2.5">
              {featuredAmenities.map((amenity) => (
                <div
                  key={amenity.id}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-beige-100/80 border border-warm-300/60"
                >
                  <div className="w-8 h-8 rounded-lg bg-forest-100 text-forest-800 flex items-center justify-center shrink-0 shadow-2xs">
                    {getAmenityIcon(amenity.icon)}
                  </div>
                  <span className="text-xs font-semibold text-forest-950 leading-snug">
                    {amenity.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop & Tablet View: Explanatory Cards Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAmenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/amenities"
              className="inline-flex items-center gap-2 bg-forest-900 hover:bg-forest-800 text-white font-semibold text-sm py-3.5 px-6 rounded-xl transition-all shadow-sm"
            >
              <span>Explore All Amenities</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LOCAL EXPERIENCES & ATTRACTIONS */}
      <section className="py-16 sm:py-20 bg-beige-200/40 border-t border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
                Discover Sirmour
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950">
                Experiences Around Rajgarh
              </h2>
              <p className="text-sm sm:text-base text-olive-800 max-w-xl">
                From wandering through peach orchards to riverside walks along the
                Giri river, explore authentic Himachal Pradesh.
              </p>
            </div>
            <Link
              href="/experiences"
              className="hidden md:inline-flex items-center gap-2 text-forest-900 font-semibold text-sm hover:text-peach-600 transition-colors group"
            >
              <span>View All Experiences</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {experiencesList.slice(0, 3).map((exp, idx) => (
              <div
                key={exp.slug}
                className={idx === 2 ? "hidden md:flex flex-col h-full" : "flex flex-col h-full"}
              >
                <ExperienceCard experience={exp} />
              </div>
            ))}
          </div>

          {/* Mobile "View All Experiences" button on last */}
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/experiences"
              className="inline-flex items-center justify-center gap-2 w-full bg-forest-900 hover:bg-forest-800 text-white font-semibold text-sm py-3.5 px-6 rounded-xl active:scale-[0.98] transition-all shadow-sm"
            >
              <span>View All Experiences</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
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
                    <strong>From Chandigarh:</strong> 3:30 to 4:00 hours (124 km)
                    via Himalayan Expressway and Kumarhatti bypass.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <CheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>From Delhi / NCR:</strong> 7:30 to 8:00 hours (369 km)
                    via 6-lane NH44 and Himalayan Expressway.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <CheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>From Shimla:</strong> 3:30 to 4:00 hours (108 km) via Solan /
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

      {/* 7. HIGH-CONVERSION CTA BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CtaBanner
          heading="Ready to Experience Splendid View Rajgarh?"
          subheading="Leave the city crowds behind. Contact us directly to reserve your valley-facing room with best available direct tariffs."
        />
      </div>
    </>
  );
}
