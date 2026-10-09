import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { rooms } from "@/content/rooms";
import { businessDetails } from "@/content/business";
import { constructMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHotelRoomSchema } from "@/lib/seo/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { RoomCard } from "@/components/ui/RoomCard";
import {
  UsersIcon,
  BedIcon,
  CheckIcon,
  PhoneIcon,
  WhatsAppIcon,
  MountainIcon,
} from "@/components/ui/icons";

interface RoomPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return {};

  return constructMetadata({
    title: `${room.name} | Splendid View Rajgarh`,
    description: `${room.name} at Splendid View Rajgarh. ${room.shortDescription} Valley-facing balcony, 24/7 hot water & fast Wi-Fi.`,
    path: `/rooms/${room.slug}`,
    image: room.image,
    keywords: [
      room.name,
      "Room in Rajgarh",
      "Splendid View Rajgarh rooms",
      "Valley view room Himachal",
    ],
  });
}

export default async function SingleRoomPage({ params }: RoomPageProps) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  const roomWhatsAppUrl = `https://wa.me/${businessDetails.whatsapp.number}?text=${encodeURIComponent(
    `Hello Splendid View! I would like to inquire about availability and seasonal tariffs for the "${room.name}".`
  )}`;

  const otherRooms = rooms.filter((r) => r.slug !== room.slug);

  return (
    <>
      <JsonLd data={getHotelRoomSchema(room)} />

      <div className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Rooms & Suites", href: "/rooms" },
              { name: room.name, href: `/rooms/${room.slug}` },
            ]}
          />

          {/* Heading */}
          <div className="my-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-semibold">
              <MountainIcon className="w-3.5 h-3.5" />
              <span>{room.view}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950">
              {room.name}
            </h1>
            <p className="text-base sm:text-lg text-warm-700 max-w-3xl">
              {room.tagline}
            </p>
          </div>

          {/* Visual Showcase (Featured Image + Gallery) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
            <div className="lg:col-span-2 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-md bg-warm-200">
              <Image
                src={room.image}
                alt={`${room.name} primary photo at Splendid View Rajgarh`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {room.gallery.slice(1, 3).map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[16/10] lg:aspect-auto lg:h-[calc(50%-0.5rem)] rounded-2xl overflow-hidden shadow-sm bg-warm-200"
                >
                  <Image
                    src={img}
                    alt={`${room.name} detail view ${idx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main Grid: Details vs Enquiry Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-7 space-y-10">
              {/* Quick Specs Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-white p-6 rounded-2xl border border-warm-200 shadow-sm text-xs">
                <div>
                  <span className="text-warm-500 block mb-1">Capacity:</span>
                  <strong className="text-forest-950 font-semibold flex items-center gap-1.5 text-sm">
                    <UsersIcon className="w-4 h-4 text-forest-700" />
                    {room.capacity}
                  </strong>
                </div>

                <div>
                  <span className="text-warm-500 block mb-1">Bed Configuration:</span>
                  <strong className="text-forest-950 font-semibold flex items-center gap-1.5 text-sm">
                    <BedIcon className="w-4 h-4 text-forest-700" />
                    {room.bed}
                  </strong>
                </div>

                <div>
                  <span className="text-warm-500 block mb-1">Approx. Size:</span>
                  <strong className="text-forest-950 font-semibold text-sm">
                    {room.size}
                  </strong>
                </div>
              </div>

              {/* Room Narrative */}
              <div className="space-y-4 text-warm-800 leading-relaxed text-base">
                <h2 className="font-serif text-2xl font-bold text-forest-950">
                  About This Room
                </h2>
                <p>{room.longDescription}</p>

                <div className="pt-2 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-forest-950">
                    Key Room Highlights:
                  </h3>
                  <ul className="space-y-2">
                    {room.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <CheckIcon className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Comprehensive Amenities in this room */}
              <div className="space-y-4 border-t border-warm-200 pt-8">
                <h2 className="font-serif text-2xl font-bold text-forest-950">
                  Included In-Room Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-warm-800">
                  {room.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-warm-100/60 border border-warm-200/80"
                    >
                      <CheckIcon className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking Callout */}
              <div className="bg-forest-950 text-white p-8 rounded-3xl space-y-4">
                <h3 className="font-serif text-xl font-bold text-warm-50">
                  Current Seasonal Tariff
                </h3>
                <p className="text-sm text-warm-200">
                  {room.startingPrice}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={`tel:${businessDetails.phones[0]}`}
                    className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white font-medium text-xs py-3 px-5 rounded-xl transition-all"
                  >
                    <PhoneIcon className="w-4 h-4 text-emerald-300" />
                    <span>Call for Best Rates</span>
                  </a>
                  <a
                    href={roomWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs py-3 px-5 rounded-xl transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky Enquiry Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <EnquiryForm defaultRoom={room.name} />
            </div>
          </div>

          {/* Related / Other Rooms */}
          <div className="border-t border-warm-200 pt-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-8">
              Explore Other Rooms & Suites
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherRooms.map((r) => (
                <RoomCard key={r.slug} room={r} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
