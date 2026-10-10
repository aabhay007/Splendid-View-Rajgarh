import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RoomType } from "@/content/rooms";
import { businessDetails } from "@/content/business";
import {
  UsersIcon,
  BedIcon,
  CheckIcon,
  WhatsAppIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";

interface RoomCardProps {
  room: RoomType;
  priority?: boolean;
}

export function RoomCard({ room, priority = false }: RoomCardProps) {
  const roomWhatsAppUrl = `https://wa.me/${businessDetails.whatsapp.number}?text=${encodeURIComponent(
    `Hello Splendid View! I am interested in inquiring about the "${room.name}". Is it available?`
  )}`;

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-warm-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Room Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-warm-100">
        <Image
          src={room.image}
          alt={`${room.name} with valley view at Splendid View Rajgarh`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-serif text-xl font-bold text-forest-950 group-hover:text-forest-700 transition-colors">
            <Link href={`/rooms/${room.slug}`}>{room.name}</Link>
          </h3>
          <p className="text-xs text-peach-700 font-medium">
            {room.tagline}
          </p>
          <p className="text-sm text-warm-700 leading-relaxed line-clamp-2">
            {room.shortDescription}
          </p>
        </div>

        {/* Room Specs */}
        <div className="grid grid-cols-2 gap-2 text-xs text-warm-800 py-3 border-y border-warm-100 bg-warm-50/60 rounded-xl px-3">
          <div className="flex items-center gap-1.5">
            <UsersIcon className="w-4 h-4 text-forest-700 shrink-0" />
            <span className="truncate">{room.capacity}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BedIcon className="w-4 h-4 text-forest-700 shrink-0" />
            <span className="truncate">{room.bed}</span>
          </div>
        </div>

        {/* Top 3 Amenities */}
        <ul className="space-y-1.5 text-xs text-warm-700">
          {room.amenities.slice(0, 3).map((amenity, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckIcon className="w-3.5 h-3.5 text-forest-600 shrink-0" />
              <span className="truncate">{amenity}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            href={`/rooms/${room.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-forest-900 text-white font-medium text-xs py-2.5 px-3 rounded-xl hover:bg-forest-800 transition-colors"
          >
            <span>View Details</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>

          <a
            href={roomWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#1e9e4d] rounded-xl border border-[#25D366]/30 transition-colors"
            aria-label={`Enquire about ${room.name} on WhatsApp`}
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
