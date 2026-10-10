import React from "react";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const metadata = constructMetadata({
  title: "Photo Gallery | Splendid View Eco Orchard Resort Rajgarh",
  description:
    "Explore photos of Splendid View Eco Orchard Resort: authentic hillside cottages, private balconies, panoramic Giri valley vistas, dining hall, evening bonfires & happy guest moments.",
  path: "/gallery",
  image: "/resort-images/home/resort-peach-orchards-drone-aerial-view.webp",
  keywords: [
    "Splendid View Eco Orchard Resort photos",
    "Rajgarh cottages gallery",
    "Eco resort Himachal photos",
    "Giri valley cottage images",
    "Rajgarh peach orchard photos",
  ],
});

const galleryItems = [
  // 1. Resort & Cottages
  {
    title: "Aerial View of Hillside Cottages & Peach Orchards",
    category: "Resort & Cottages",
    src: "/resort-images/home/resort-peach-orchards-drone-aerial-view.webp",
    alt: "Panoramic aerial drone shot of Splendid View hillside cottages surrounded by peach orchards and Giri valley pines",
  },
  {
    title: "All 6 Independent Cottages on the Ridge",
    category: "Resort & Cottages",
    src: "/resort-images/home/six-standalone-cottages-row.jpeg",
    alt: "Row of 6 standalone hillside cottages overlooking the dramatic Giri river valley",
  },
  {
    title: "Cottages with Green Gabled Roofs & Balconies",
    category: "Resort & Cottages",
    src: "/resort-images/home/six-cottages-hillside-drone-view.jpeg",
    alt: "Individual valley-facing cottages with solar water heaters and private viewing balconies",
  },
  {
    title: "Resort Complex, Dining Terrace & Orchard Slopes",
    category: "Resort & Cottages",
    src: "/resort-images/home/resort-cottages-and-dining-overview.jpeg",
    alt: "Wide elevated view of the full resort grounds including the dining terrace and row of cottages",
  },
  {
    title: "Private Balcony Porch & Stone Sit-Out Courtyard",
    category: "Resort & Cottages",
    src: "/resort-images/home/two-cottages-balconies-sitout.jpeg",
    alt: "Close-up frontal perspective of cottage balconies with stone-paved courtyard",
  },
  {
    title: "Stone Paved Walkway Along the Cottages",
    category: "Resort & Cottages",
    src: "/resort-images/home/cottages-stone-pathway-orchard-view.webp",
    alt: "Stone paved walkway with outdoor lamps leading past cottage balconies",
  },
  {
    title: "Resort Facade Illuminated at Dusk",
    category: "Resort & Cottages",
    src: "/resort-images/home/resort-dining-building-night-lighting.webp",
    alt: "Warm golden lighting illuminating the resort facade against the Himalayan evening sky",
  },

  // 2. Rooms & Balconies
  {
    title: "Cottage Bedroom with Wooden Headboard",
    category: "Rooms & Balconies",
    src: "/resort-images/rooms/cottage-bedroom-master-bed.webp",
    alt: "Comfortable double bed with wooden headboard, swan towel design, side table and seating in cottage room",
  },
  {
    title: "High Sloped Wooden Ceiling & Spacious Layout",
    category: "Rooms & Balconies",
    src: "/resort-images/rooms/cottage-bedroom-panoramic-view.webp",
    alt: "Wide interior view of the cottage showing alpine wooden ceiling, wall TV, study desk and balcony doorway",
  },
  {
    title: "Study Desk, Luggage Console & Wardrobe",
    category: "Rooms & Balconies",
    src: "/resort-images/rooms/cottage-work-desk-and-wardrobe.webp",
    alt: "Wooden study desk, TV console, wardrobe and storage inside the cottage",
  },
  {
    title: "Cozy Mountain Bed & Private Balcony Entrance",
    category: "Rooms & Balconies",
    src: "/resort-images/rooms/cottage-bedroom-sloped-ceiling.webp",
    alt: "Peaceful cottage bedroom interior framing the mountain balcony access",
  },
  {
    title: "Comfortable Plush Bedding & Room Corner",
    category: "Rooms & Balconies",
    src: "/resort-images/rooms/cottage-room-bed-closeup.webp",
    alt: "Neat, welcoming bed arrangement with warm mountain blanket and fresh linens",
  },

  // 3. Dining & Cuisine
  {
    title: "Homestyle Mountain Dining Hall",
    category: "Dining & Cuisine",
    src: "/resort-images/restarunt/dining-table-valley-view-setup.jpeg",
    alt: "Wooden dining table set for guests with valley view windows in the background",
  },
  {
    title: "Restaurant Service & Reception Counter",
    category: "Dining & Cuisine",
    src: "/resort-images/restarunt/restaurant-buffet-counter-wide.webp",
    alt: "Warm restaurant reception and buffet counter area at Splendid View Rajgarh",
  },
  {
    title: "Family Enjoying Fresh Homestyle Meal",
    category: "Dining & Cuisine",
    src: "/resort-images/gallery/guests-dining-restaurant-meal.webp",
    alt: "Happy family dining together and savoring fresh regional North Indian dishes",
  },
  {
    title: "Gathering Around the Table for Dinner",
    category: "Dining & Cuisine",
    src: "/resort-images/gallery/guests-traditional-himachali-feast.webp",
    alt: "Group of guests sharing a piping hot meal in the resort dining hall",
  },

  // 4. Bonfire & Evenings
  {
    title: "Evening Bonfire by the Mountain Fire Pit",
    category: "Bonfire & Evenings",
    src: "/resort-images/amenties/bonfire/evening-bonfire-pit-gathering.webp",
    alt: "Guests seated around a warm outdoor brick bonfire pit on a crisp Himalayan evening",
  },
  {
    title: "Warm Fire & Music Under Starlight",
    category: "Bonfire & Evenings",
    src: "/resort-images/gallery/terrace-bonfire-music-gathering.webp",
    alt: "Guests unwinding with singing and good company around the bonfire",
  },
  {
    title: "Cozy Outdoor Campfire Moments",
    category: "Bonfire & Evenings",
    src: "/resort-images/gallery/couple-campfire-evening-bonfire.webp",
    alt: "Crackling campfire with log seating overlooking the peaceful dark valley",
  },

  // 5. Guest Memories & Gatherings
  {
    title: "Family Vacation Moments by the Cottages",
    category: "Guest Moments",
    src: "/resort-images/gallery/family-guests-cottages-courtyard.webp",
    alt: "Smiling family posing together along the stone cottage patio on a bright morning",
  },
  {
    title: "Large Family Gathering in the Courtyard",
    category: "Guest Moments",
    src: "/resort-images/gallery/family-gathering-courtyard-pine-stools.webp",
    alt: "Multi-generation family group having fun together in front of the cottages",
  },
  {
    title: "Weekend Getaway with Close Friends",
    category: "Guest Moments",
    src: "/resort-images/gallery/friends-weekend-getaway-cottages.webp",
    alt: "Group of friends enjoying clean mountain air and laughter at the resort",
  },
  {
    title: "Vacation Smiles in the Himalayan Sun",
    category: "Guest Moments",
    src: "/resort-images/gallery/group-stay-friends-cottage-row.webp",
    alt: "Happy guests enjoying their mountain retreat at Splendid View Rajgarh",
  },
  {
    title: "Sunset Over the Ridge with Friends",
    category: "Guest Moments",
    src: "/resort-images/gallery/guests-sunset-valley-view-terrace.webp",
    alt: "Group watching the golden evening sky across the Giri valley ridges",
  },

  // 6. Nature & Surroundings
  {
    title: "Pine Forest Trek & Nature Walk",
    category: "Nature & Surroundings",
    src: "/resort-images/gallery/friends-pine-forest-nature-trek.webp",
    alt: "Visitors enjoying a pine-scented nature walk along the mountain trails of Rajgarh",
  },
  {
    title: "Planting Trees Amidst Himalayan Pines",
    category: "Nature & Surroundings",
    src: "/resort-images/gallery/guests-planting-trees-rajgarh.webp",
    alt: "Guests participating in tree plantation amidst the serene pine slopes",
  },
  {
    title: "Mountain Stream Excursion Along Forest Trail",
    category: "Nature & Surroundings",
    src: "/resort-images/gallery/guests-forest-hiking-trail.webp",
    alt: "Exploring fresh mountain waters and lush green foliage near Rajgarh",
  },
  {
    title: "Panoramic View of the Rajgarh Peach Valley",
    category: "Nature & Surroundings",
    src: "/resort-images/guide/rajgarh-pine-valley-hamlet.jpeg",
    alt: "Vast rolling green hills and traditional mountain hamlets across the Giri valley",
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
