import React from "react";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata = constructMetadata({
  title: "Photo Gallery | Splendid View Rajgarh Himachal",
  description:
    "Explore photos of Splendid View Rajgarh: valley-facing rooms, balconies, Giri river basin, peach orchards, mountain sunsets & starlit skies.",
  path: "/gallery",
  keywords: [
    "Splendid View Rajgarh photos",
    "Rajgarh resort gallery",
    "Giri valley images",
    "Rajgarh peach orchard photos",
  ],
});

const galleryItems = [
  {
    title: "Panoramic Giri Valley Sunrise",
    category: "Valley Views",
    src: "/images/hero/resort-panoramic-view.svg",
    alt: "Morning sunrise over the Giri valley viewed from Splendid View Rajgarh",
  },
  {
    title: "Deluxe Valley View Room Interior",
    category: "Rooms & Balconies",
    src: "/images/rooms/deluxe-valley-view.svg",
    alt: "Deluxe room interior with comfortable bed and wide valley window",
  },
  {
    title: "Private Mountain Balcony Vista",
    category: "Rooms & Balconies",
    src: "/images/rooms/room-balcony-view.svg",
    alt: "Private balcony overlooking forested pine ridges in District Sirmour",
  },
  {
    title: "Peach Orchards in Blossom",
    category: "Orchards & Nature",
    src: "/images/gallery/peach-orchard.svg",
    alt: "Pink peach blossoms in the terraced orchards of Rajgarh Himachal Pradesh",
  },
  {
    title: "Giri River Pebble Basin",
    category: "Valley Views",
    src: "/images/gallery/giri-river.svg",
    alt: "Crystal clear water of Giri River flowing over smooth pebble banks near Giri Pul",
  },
  {
    title: "Premium Balcony Suite Layout",
    category: "Rooms & Balconies",
    src: "/images/rooms/premium-balcony-suite.svg",
    alt: "Premium suite with corner sun terrace and wooden accents",
  },
  {
    title: "Baru Sahib Gurdwara Valley",
    category: "Orchards & Nature",
    src: "/images/gallery/baru-sahib.svg",
    alt: "Baru Sahib spiritual sanctuary cradled in pine-forested valley",
  },
  {
    title: "Churdhar Mountain Sanctuary",
    category: "Valley Views",
    src: "/images/gallery/churdhar-mountain.svg",
    alt: "Majestic Churdhar peak and sanctuary trails in District Sirmour",
  },
  {
    title: "Village Tikkari Tali Pathway",
    category: "Orchards & Nature",
    src: "/images/gallery/village-walk.svg",
    alt: "Peaceful stone village walking trail in Village Tikkari Tali Rajgarh",
  },
  {
    title: "Starlight & Bonfire Evening",
    category: "Orchards & Nature",
    src: "/images/gallery/stargazing-night.svg",
    alt: "Dark starry skies and cozy evening bonfire at Splendid View Rajgarh",
  },
  {
    title: "Golden Twilight Sunset",
    category: "Valley Views",
    src: "/images/gallery/mountain-sunset.svg",
    alt: "Golden evening sun casting warm rays across the Sirmour hills",
  },
  {
    title: "Open Mountain Lawn Dining",
    category: "Property",
    src: "/images/gallery/dining-terrace.svg",
    alt: "Outdoor dining table on mountain lawn overlooking the valley",
  },
];

export default function GalleryPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Gallery", href: "/gallery" }]} />

        {/* Heading */}
        <div className="max-w-3xl my-8 space-y-4">
          <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
            Visual Tour
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 leading-tight">
            Photo Gallery of Splendid View Rajgarh
          </h1>
          <p className="text-base sm:text-lg text-warm-700 leading-relaxed">
            Catch a glimpse of the peaceful life waiting for you in Village
            Tikkari Tali: sun-drenched balconies, lush peach orchards, clear
            mountain waters, and dramatic valley skies.
          </p>
        </div>

        {/* Image Grid with Next/Image and descriptive alts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, idx) => (
            <figure
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-warm-200/90 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-warm-200">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-forest-950/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <figcaption className="p-4 bg-white border-t border-warm-100">
                <h2 className="font-serif text-base font-bold text-forest-950 group-hover:text-forest-700 transition-colors">
                  {item.title}
                </h2>
                <p className="text-xs text-warm-600 mt-1 line-clamp-1">
                  {item.alt}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <CtaBanner
          heading="Want to See These Views in Person?"
          subheading="Nothing matches the feeling of breathing crisp pine air from your private balcony. Reach out to reserve your room today."
        />
      </div>
    </div>
  );
}
