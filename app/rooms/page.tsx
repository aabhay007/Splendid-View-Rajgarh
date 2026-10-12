import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { businessDetails } from "@/content/business";
import { CottageImageSlider } from "@/components/ui/CottageImageSlider";
import {
  CheckIcon,
  UsersIcon,
  BedIcon,
  DropletIcon,
  PhoneIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  UtensilsIcon,
} from "@/components/ui/icons";

export const metadata = constructMetadata({
  title: "Cottages & Rooms in Rajgarh | Splendid View Eco Orchard Resort",
  description:
    "Discover our private valley-facing hillside cottages and Valley View Kitchen Cottage in Rajgarh, Himachal Pradesh. Private balconies, 180° Giri valley panoramas, 24/7 hot water & fast Wi-Fi.",
  path: "/rooms",
  image: "/resort-images/rooms/cottage-bedroom-master-bed.webp",
  keywords: [
    "Cottages in Rajgarh Himachal",
    "Rooms in Rajgarh resort",
    "Splendid View Eco Orchard Resort cottages",
    "Valley view cottages Rajgarh",
    "Valley view kitchen cottage",
    "Private cottages Himachal",
    "Himalayan cottage stay",
    "Rajgarh hillside cottages",
  ],
});

// Images for Section 1: Private Valley-Facing Cottages
const valleyFacingCottageImages = [
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
    src: "/resort-images/home/six-standalone-cottages-row.jpeg",
    alt: "Row of 6 standalone Swiss cottages amidst orchards",
    title: "6 Standalone Cottages on Ridge",
  },
  {
    src: "/resort-images/views/Sunrise-view.jpeg",
    alt: "Cottage interior with work desk and wooden wardrobes",
    title: "Work Desk & Wooden Interiors",
  },
];

// Images for Section 2: Valley View Kitchen Cottage (User will adjust these images later)
const kitchenCottageImages = [
  {
    src: "/resort-images/rooms/cottage-bedroom-interior-wide.webp",
    alt: "Valley View Kitchen Cottage spacious wooden bedroom interior",
    title: "Spacious Wooden Cottage Interior",
  },
  {
    src: "/resort-images/rooms/cottage-work-desk-and-wardrobe.webp",
    alt: "Work desk and storage console in cottage",
    title: "Work Desk & Storage Console",
  },
  {
    src: "/resort-images/home/cottage-private-balcony-view.jpeg",
    alt: "Private balcony view overlooking Giri Valley",
    title: "Private Valley-Facing Balcony",
  },
  {
    src: "/resort-images/home/two-cottages-balconies-sitout.jpeg",
    alt: "Cottage exterior and orchard courtyard sitout",
    title: "Courtyard & Orchard Surroundings",
  },
];

export default function RoomsPage() {
  const cottageWhatsAppUrl = `https://wa.me/${businessDetails.whatsapp.number}?text=${encodeURIComponent(
    "Hello Splendid View! I am interested in inquiring about cottage availability and tariffs."
  )}`;

  const kitchenWhatsAppUrl = `https://wa.me/${businessDetails.whatsapp.number}?text=${encodeURIComponent(
    "Hello Splendid View! I am interested in inquiring about the Valley View Kitchen Cottage availability and tariffs."
  )}`;

  const cottageGallery = [
    { src: "/resort-images/rooms/cottage-bedroom-panoramic-view.webp", title: "High Wooden Sloped Ceiling & Room Layout" },
    { src: "/resort-images/rooms/cottage-bedroom-master-bed.webp", title: "Cottage Bedroom & Wooden Headboard" },
    { src: "/resort-images/views/Sunrise-view.jpeg", title: "Study Desk, Luggage Console & Wardrobe" },
    { src: "/resort-images/home/two-cottages-balconies-sitout.jpeg", title: "Private Balcony & Stone Sit-Out Courtyard" },
    { src: "/resort-images/home/six-standalone-cottages-row.jpeg", title: "Row of 6 Hillside Cottages on the Ridge" },
    { src: "/resort-images/rooms/cottage-bedroom-sloped-ceiling.webp", title: "Cottage Bedroom View & Balcony Door" },
  ];

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Cottages & Rooms", href: "/rooms" }]} />

        {/* 1. SECTION: PRIVATE VALLEY-FACING COTTAGES */}
        <div className="max-w-3xl my-8 space-y-4">
          <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
            Tranquil Hillside Accommodation
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 leading-tight">
            Private Valley-Facing Cottages at Splendid View
          </h1>
          <p className="text-base sm:text-lg text-olive-800 leading-relaxed">
            Perched on a scenic mountain ridge in Village Tikkari Tali, Splendid View Eco Orchard Resort 
            features six independent hillside cottages offering breathtaking panoramic views of the 
            surrounding Himalayan landscapes. From your private balcony or cottage window, admire the 
            beautiful hill towns and distant mountain ranges, with views stretching towards Shimla, Solan, 
            Chail, Kufri, Chhabra, Rajgarh, and beyond on clear days. With warm wooden interiors, modern 
            attached bathrooms, and peaceful surroundings, every cottage offers a private sanctuary to 
            unwind, soak in spectacular sunsets, and experience the timeless beauty of the mountains.
          </p>
        </div>

        {/* Private Valley-Facing Cottage Feature Card */}
        <div className="bg-beige-50 rounded-3xl border border-warm-300/80 shadow-sm overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visuals with Auto + Manual Slider */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <CottageImageSlider images={valleyFacingCottageImages} />
              </div>

              {/* Specs Bar */}
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

            {/* Content & Amenities */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-warm-50/40 lg:border-l border-warm-200/80 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                    Included Cottage Amenities:
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

              {/* Direct Actions */}
              <div className="pt-4 border-t border-warm-200/80 space-y-3">
                <div className="flex flex-wrap gap-2.5">
                  <Link
                    href="/rooms/valley-view-cottage"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-forest-900 text-white font-semibold text-xs py-3.5 px-4 rounded-xl hover:bg-forest-800 transition-colors"
                  >
                    <span>View Cottage Details & Tariffs</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={cottageWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-3.5 bg-[#25D366] text-white rounded-xl hover:bg-[#20bd5a] transition-colors"
                    aria-label="Inquire about cottage on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center justify-between text-[11px] text-warm-600">
                  <span>Direct Host Contact:</span>
                  <a
                    href="tel:+918219515083"
                    className="font-semibold text-forest-900 hover:underline flex items-center gap-1"
                  >
                    <PhoneIcon className="w-3 h-3 text-forest-700" />
                    <span>+91 82195 15083</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. SECTION: VALLEY VIEW KITCHEN COTTAGE */}
        <div className="max-w-3xl my-8 space-y-4">
          <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
            Equipped Kitchenette & Extended Stays
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 leading-tight">
            Valley View Kitchen Cottage
          </h2>
          <p className="text-base sm:text-lg text-olive-800 leading-relaxed">
            Designed for guests who love the warmth and convenience of home cooking amidst mountain serenity. 
            Featuring a dedicated private kitchenette, warm wooden interiors, modern bathroom, and private balcony 
            overlooking the Giri Valley—ideal for families with kids, extended workations, and long peaceful stays.
          </p>
        </div>

        {/* Valley View Kitchen Cottage Feature Card */}
        <div className="bg-beige-50 rounded-3xl border border-warm-300/80 shadow-sm overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visuals with Auto + Manual Slider */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <CottageImageSlider images={kitchenCottageImages} />
              </div>

              {/* Specs Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6 pt-6 border-t border-warm-100 text-xs text-olive-800">
                <div className="p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60 flex items-center gap-1.5">
                  <UsersIcon className="w-4 h-4 text-forest-700 shrink-0" />
                  <span className="truncate">2–4 Guests / Family</span>
                </div>
                <div className="p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60 flex items-center gap-1.5">
                  <UtensilsIcon className="w-4 h-4 text-peach-700 shrink-0" />
                  <span className="truncate">Private Kitchenette</span>
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

            {/* Content & Amenities */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-warm-50/40 lg:border-l border-warm-200/80 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
                    Included Kitchenette & Amenities:
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5 text-xs text-olive-800">
                    <span className="flex items-center gap-1.5">
                      <CheckIcon className="w-3.5 h-3.5 text-forest-700" />
                      Equipped Kitchenette
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckIcon className="w-3.5 h-3.5 text-forest-700" />
                      Induction Cooktop
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckIcon className="w-3.5 h-3.5 text-forest-700" />
                      Electric Kettle & Tea Setup
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckIcon className="w-3.5 h-3.5 text-forest-700" />
                      Refrigerator & Utensils
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckIcon className="w-3.5 h-3.5 text-forest-700" />
                      Private Valley Balcony
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckIcon className="w-3.5 h-3.5 text-forest-700" />
                      Ensuite Modern Bathroom
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-forest-950 text-warm-100 text-xs space-y-1.5">
                  <strong className="text-white block font-semibold text-sm">
                    Ideal for Families & Long Stays
                  </strong>
                  <p className="text-xs text-warm-200 leading-relaxed">
                    Prepare light meals at your leisure, cook for children, or work remotely with all the comforts of home surrounded by pure orchard air.
                  </p>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-4 border-t border-warm-200/80 space-y-3">
                <div className="flex flex-wrap gap-2.5">
                  <Link
                    href="/rooms/valley-view-kitchen-cottage"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-forest-900 text-white font-semibold text-xs py-3.5 px-4 rounded-xl hover:bg-forest-800 transition-colors"
                  >
                    <span>View Cottage Details & Tariffs</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={kitchenWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-3.5 bg-[#25D366] text-white rounded-xl hover:bg-[#20bd5a] transition-colors"
                    aria-label="Inquire about Kitchen Cottage on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center justify-between text-[11px] text-warm-600">
                  <span>Direct Host Contact:</span>
                  <a
                    href="tel:+918219515083"
                    className="font-semibold text-forest-900 hover:underline flex items-center gap-1"
                  >
                    <PhoneIcon className="w-3 h-3 text-forest-700" />
                    <span>+91 82195 15083</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. SECTION: 6 STANDALONE HILLSIDE COTTAGES EXPLANATION */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
              What Sets Us Apart
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950">
              6 Standalone Hillside Cottages
            </h2>
            <p className="text-sm text-olive-800 leading-relaxed">
              We do not divide our guests into commercial tiers or categories. Every
              cottage is built to the same authentic high standard with equal access
              to the best views in Rajgarh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-beige-50 rounded-2xl p-6 border border-warm-300/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-900 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">
                Identical Panoramic Balconies
              </h3>
              <p className="text-xs text-olive-800 leading-relaxed">
                Every cottage is oriented toward the Giri River Basin and morning sunrise.
                Whether you stay in the first cottage or the sixth, your private view is
                unobstructed.
              </p>
            </div>

            <div className="bg-beige-50 rounded-2xl p-6 border border-warm-300/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-900 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">
                Peaceful Privacy & Quiet
              </h3>
              <p className="text-xs text-olive-800 leading-relaxed">
                As standalone cottages with separate entrances, you will never share a
                noisy hallway, elevator chime, or thin adjoining wall. Sleep to the
                gentle sound of mountain breezes.
              </p>
            </div>

            <div className="bg-beige-50 rounded-2xl p-6 border border-warm-300/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-900 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">
                Couples, Families & Full Bookings
              </h3>
              <p className="text-xs text-olive-800 leading-relaxed">
                Book a single cottage for an intimate romantic retreat, or reserve multiple
                cottages (or the entire property of 6 cottages) for large family reunions,
                friend trips, and group gatherings.
              </p>
            </div>
          </div>
        </div>

        {/* 4. SECTION: COTTAGE PHOTO GALLERY */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
                Real Photos
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                Cottage Photo Gallery
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-950 hover:text-peach-600 transition-colors"
            >
              <span>View Full Resort Gallery</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cottageGallery.map((item, idx) => (
              <div
                key={idx}
                className="group bg-beige-50 rounded-2xl overflow-hidden border border-warm-300/80 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-warm-200">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-beige-50">
                  <p className="text-xs font-medium text-forest-950">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <CtaBanner
          heading="Have Questions or Ready to Reserve a Cottage?"
          subheading="Contact us directly via phone or WhatsApp to check real-time availability, discuss seasonal meal packages, and receive direct rates."
        />
      </div>
    </div>
  );
}
