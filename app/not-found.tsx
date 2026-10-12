import React from "react";
import Link from "next/link";
import { MountainIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { businessDetails } from "@/content/business";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-8 bg-beige-50 p-8 sm:p-12 rounded-3xl shadow-xl border border-warm-300/80">
        <div className="w-20 h-20 bg-forest-100 text-forest-800 rounded-3xl flex items-center justify-center mx-auto shadow-inner">
          <MountainIcon className="w-10 h-10 text-forest-700" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-peach-600">
            Error 404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
            You Seem Off the Mountain Trail
          </h1>
          <p className="text-sm text-warm-700 leading-relaxed max-w-md mx-auto">
            The page you are looking for may have been moved, renamed, or is
            temporarily unavailable. Let us help you find your way back to
            Splendid View Rajgarh.
          </p>
        </div>

        {/* Helpful Quick Links */}
        <div className="pt-2">
          <h2 className="text-xs font-semibold text-warm-500 uppercase tracking-wider mb-3">
            Popular Destinations
          </h2>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <Link
              href="/"
              className="bg-forest-900 text-white font-medium px-4 py-2 rounded-xl hover:bg-forest-800 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/rooms"
              className="bg-warm-100 text-forest-900 font-medium px-4 py-2 rounded-xl hover:bg-warm-200 transition-colors"
            >
              View Rooms
            </Link>
            <Link
              href="/how-to-reach"
              className="bg-warm-100 text-forest-900 font-medium px-4 py-2 rounded-xl hover:bg-warm-200 transition-colors"
            >
              Driving Routes
            </Link>
            <Link
              href="/contact"
              className="bg-warm-100 text-forest-900 font-medium px-4 py-2 rounded-xl hover:bg-warm-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Immediate Support */}
        <div className="border-t border-warm-200 pt-6 space-y-3">
          <p className="text-xs text-warm-600">
            Looking to check room availability or discuss travel routes?
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-medium">
            <a
              href={`tel:${businessDetails.phones[0]}`}
              className="inline-flex items-center gap-1.5 text-forest-800 hover:underline"
            >
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>Call Us Directly</span>
            </a>
            <span className="text-warm-300">•</span>
            <a
              href={businessDetails.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] hover:underline"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
