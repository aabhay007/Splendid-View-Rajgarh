import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { rooms } from "@/content/rooms";
import { businessDetails } from "@/content/business";
import {
  CheckIcon,
  UsersIcon,
  BedIcon,
  WifiIcon,
  DropletIcon,
  PhoneIcon,
  WhatsAppIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";

export const metadata = constructMetadata({
  title: "Private Valley-Facing Cottages in Rajgarh | Splendid View Eco Orchard Resort",
  description:
    "Discover our private valley-facing hillside cottages in Rajgarh, Himachal Pradesh. Standalone cottages with private balconies, 180° Giri valley panoramas, 24/7 hot water & fast Wi-Fi.",
  path: "/rooms",
  image: "/resort-images/rooms/cottage-bedroom-master-bed.webp",
  keywords: [
    "Cottages in Rajgarh Himachal",
    "Rooms in Rajgarh resort",
    "Splendid View Eco Orchard Resort cottages",
    "Valley view cottages Rajgarh",
    "Private cottages Himachal",
    "Himalayan cottage stay",
    "Rajgarh hillside cottages",
  ],
});

export default function RoomsPage() {
  const primaryCottage = rooms[0];
  const cottageWhatsAppUrl = `https://wa.me/${businessDetails.whatsapp.number}?text=${encodeURIComponent(
    "Hello Splendid View! I am interested in inquiring about cottage availability and tariffs."
  )}`;

  const cottageGallery = [
    { src: "/resort-images/rooms/cottage-bedroom-master-bed.webp", title: "Cottage Bedroom & Wooden Headboard" },
    { src: "/resort-images/rooms/cottage-bedroom-panoramic-view.webp", title: "High Wooden Sloped Ceiling & Room Layout" },
    { src: "/resort-images/rooms/cottage-work-desk-and-wardrobe.webp", title: "Study Desk, Luggage Console & Wardrobe" },
    { src: "/resort-images/home/two-cottages-balconies-sitout.jpeg", title: "Private Balcony & Stone Sit-Out Courtyard" },
    { src: "/resort-images/home/six-standalone-cottages-row.jpeg", title: "Row of 6 Hillside Cottages on the Ridge" },
    { src: "/resort-images/rooms/cottage-bedroom-sloped-ceiling.webp", title: "Cottage Bedroom View & Balcony Door" },
  ];

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Cottages & Rooms", href: "/rooms" }]} />

        {/* Page Heading */}
        <div className="max-w-3xl my-8 space-y-4">
          <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
            Tranquil Hillside Accommodation
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 leading-tight">
            Private Valley-Facing Cottages at Splendid View
          </h1>
          <p className="text-base sm:text-lg text-warm-700 leading-relaxed">
            Perched along a quiet mountain ridge in Village Tikkari Tali, our 6
            independent hillside cottages are designed to frame the majestic Giri
            river valley. Every cottage features its own private sit-out balcony,
            warm wooden interior, ensuite modern bathroom, and peaceful Himalayan seclusion.
          </p>
        </div>

        {/* Direct Booking Advantage Callout */}
        <div className="bg-warm-100/70 border border-warm-200/90 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-serif text-lg font-bold text-forest-950">
              Why Book Directly With Us?
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-warm-700">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-forest-700" />
                Guaranteed Best Available Rates
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-forest-700" />
                Zero Booking Engine Commission
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-forest-700" />
                Direct Host Hospitality & Support
              </span>
            </div>
          </div>
          <a
            href="tel:+918219515083"
            className="inline-flex items-center justify-center bg-forest-900 text-white text-xs font-semibold py-3 px-5 rounded-xl hover:bg-forest-800 transition-colors whitespace-nowrap"
          >
            Call Directly for Rates
          </a>
        </div>

        {/* Main Featured Cottage Showcase */}
        {primaryCottage && (
          <div className="bg-white rounded-3xl border border-warm-200/90 shadow-sm overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Photo Showcase (Left 7 Cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-warm-100 shadow-sm mb-4">
                    <Image
                      src={primaryCottage.image}
                      alt="Private Valley View Cottage interior at Splendid View Rajgarh"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-4 gap-3">
                    {primaryCottage.gallery.slice(1, 5).map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden bg-warm-200 shadow-xs"
                      >
                        <Image
                          src={img}
                          alt={`Cottage detail photo ${idx + 1}`}
                          fill
                          sizes="15vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-warm-100 text-xs text-warm-800">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60">
                    <UsersIcon className="w-4 h-4 text-forest-700 shrink-0" />
                    <span className="font-medium truncate">{primaryCottage.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60">
                    <BedIcon className="w-4 h-4 text-forest-700 shrink-0" />
                    <span className="font-medium truncate">King / Queen Bed</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60">
                    <DropletIcon className="w-4 h-4 text-sky-600 shrink-0" />
                    <span className="font-medium truncate">24/7 Hot Water</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-warm-50/70 border border-warm-200/60">
                    <WifiIcon className="w-4 h-4 text-forest-700 shrink-0" />
                    <span className="font-medium truncate">High-Speed Wi-Fi</span>
                  </div>
                </div>
              </div>

              {/* Cottage Narrative & Inclusions (Right 5 Cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-warm-50/40 lg:border-l border-warm-200/80 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
                      Independent Hillside Stay
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mt-1">
                      {primaryCottage.name}
                    </h2>
                    <p className="text-xs text-peach-700 font-medium mt-1">
                      {primaryCottage.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-warm-700 leading-relaxed">
                    {primaryCottage.shortDescription}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h3 className="font-serif text-sm font-bold text-forest-950 uppercase tracking-wider">
                      Cottage Highlights:
                    </h3>
                    <ul className="space-y-2 text-xs text-warm-800">
                      {primaryCottage.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckIcon className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="font-serif text-sm font-bold text-forest-950 uppercase tracking-wider">
                      Included Amenities:
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-xs text-warm-700">
                      {primaryCottage.amenities.slice(0, 6).map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-forest-600 shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Area */}
                <div className="pt-4 border-t border-warm-200/80 space-y-3">
                  <div className="flex flex-wrap gap-2.5">
                    <Link
                      href={`/rooms/${primaryCottage.slug}`}
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
        )}

        {/* Section: 6 Independent Hillside Cottages Explanation */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
              What Sets Us Apart
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-forest-950">
              6 Standalone Hillside Cottages
            </h2>
            <p className="text-sm text-warm-700 leading-relaxed">
              We do not divide our guests into commercial tiers or categories. Every
              cottage is built to the same authentic high standard with equal access
              to the best views in Rajgarh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-warm-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-900 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">
                Identical Panoramic Balconies
              </h3>
              <p className="text-xs text-warm-700 leading-relaxed">
                Every cottage is oriented toward the Giri River Basin and morning sunrise.
                Whether you stay in the first cottage or the sixth, your private view is
                unobstructed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-warm-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-900 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">
                Peaceful Privacy & Quiet
              </h3>
              <p className="text-xs text-warm-700 leading-relaxed">
                As standalone cottages with separate entrances, you will never share a
                noisy hallway, elevator chime, or thin adjoining wall. Sleep to the
                gentle sound of mountain breezes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-warm-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-900 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-950">
                Couples, Families & Full Bookings
              </h3>
              <p className="text-xs text-warm-700 leading-relaxed">
                Book a single cottage for an intimate romantic retreat, or reserve multiple
                cottages (or the entire property of 6 cottages) for large family reunions,
                friend trips, and group gatherings.
              </p>
            </div>
          </div>
        </div>

        {/* Cottage Photo Showcase Grid */}
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
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-900 hover:text-peach-600 transition-colors"
            >
              <span>View Full Resort Gallery</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cottageGallery.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-warm-200/90 shadow-sm hover:shadow-md transition-all duration-300"
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
                <div className="p-4 bg-white">
                  <p className="text-xs font-medium text-forest-950">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CtaBanner
          heading="Have Questions or Ready to Reserve a Cottage?"
          subheading="Contact us directly via phone or WhatsApp to check real-time availability, discuss seasonal meal packages, and receive direct rates."
        />
      </div>
    </div>
  );
}
