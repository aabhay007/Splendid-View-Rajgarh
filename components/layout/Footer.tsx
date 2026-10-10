import React from "react";
import Link from "next/link";
import Image from "next/image";
import { businessDetails } from "@/content/business";
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/ui/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-warm-100 border-t border-forest-900 pb-24 md:pb-0">
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-forest-700 via-peach-500 to-forest-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden ring-2 ring-emerald-500/30 bg-white shadow-md">
                <Image
                  src="/images/logo.jpg"
                  alt="Splendid View Eco Orchard Resort Emblem"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-warm-50 block leading-tight">
                  Splendid View
                </span>
                <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase block mt-0.5">
                  Eco Orchard Resort
                </span>
              </div>
            </div>
            <p className="text-sm text-warm-300 leading-relaxed">
              {businessDetails.tagline}. Perched in Village Tikkari Tali,
              offering panoramic Giri valley views, fresh pine air, and
              authentic Himachali hospitality.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessDetails.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors border border-[#25D366]/40"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-bold text-warm-50 mb-4 tracking-wide">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-warm-300">
              <li>
                <Link href="/" className="hover:text-peach-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="hover:text-peach-400 transition-colors"
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="hover:text-peach-400 transition-colors"
                >
                  Property Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className="hover:text-peach-400 transition-colors"
                >
                  Things to Do in Rajgarh
                </Link>
              </li>
              <li>
                <Link
                  href="/how-to-reach"
                  className="hover:text-peach-400 transition-colors"
                >
                  How to Reach (Road & Transit)
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-peach-400 transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-peach-400 transition-colors"
                >
                  Guest FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-peach-400 transition-colors"
                >
                  Travel Guides & Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Curated Guides (Contextual Internal Links) */}
          <div>
            <h3 className="font-serif text-base font-bold text-warm-50 mb-4 tracking-wide">
              Explore & Getaways
            </h3>
            <ul className="space-y-2.5 text-sm text-warm-300">
              <li>
                <Link
                  href="/resort-in-rajgarh"
                  className="hover:text-peach-400 transition-colors"
                >
                  Resort in Rajgarh
                </Link>
              </li>
              <li>
                <Link
                  href="/rajgarh-peach-valley"
                  className="hover:text-peach-400 transition-colors"
                >
                  Rajgarh Peach Valley Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/weekend-getaway-from-delhi"
                  className="hover:text-peach-400 transition-colors"
                >
                  Weekend Getaway from Delhi
                </Link>
              </li>
              <li>
                <Link
                  href="/weekend-getaway-from-chandigarh"
                  className="hover:text-peach-400 transition-colors"
                >
                  Weekend Getaway from Chandigarh
                </Link>
              </li>
              <li>
                <Link
                  href="/romantic-getaway-himachal"
                  className="hover:text-peach-400 transition-colors"
                >
                  Romantic Couple Getaway
                </Link>
              </li>
              <li>
                <Link
                  href="/offbeat-places-himachal"
                  className="hover:text-peach-400 transition-colors"
                >
                  Offbeat Places in Himachal
                </Link>
              </li>
              <li>
                <Link
                  href="/stay-near-shimla"
                  className="hover:text-peach-400 transition-colors"
                >
                  Stay Near Shimla (Rajgarh)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official NAP (Strictly identical to Google Business Profile) */}
          <div className="space-y-3">
            <h3 className="font-serif text-base font-bold text-warm-50 mb-4 tracking-wide">
              Official Property Details
            </h3>
            <address className="not-italic text-sm text-warm-300 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="w-5 h-5 text-peach-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong className="text-white block font-medium">
                    {businessDetails.name}
                  </strong>
                  {businessDetails.address.village},{" "}
                  {businessDetails.address.po},{" "}
                  {businessDetails.address.tehsil},{" "}
                  {businessDetails.address.district},{" "}
                  {businessDetails.address.state} –{" "}
                  {businessDetails.address.postalCode}, India
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <PhoneIcon className="w-5 h-5 text-peach-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="block text-xs text-warm-400">Direct Reservations:</span>
                  {businessDetails.phones.map((phone, idx) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-warm-100 hover:text-white font-medium hover:underline"
                    >
                      {businessDetails.displayPhones[idx]}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-xs text-warm-400">
                <ClockIcon className="w-4 h-4 text-forest-400" />
                <span>
                  Check-in: {businessDetails.hours.checkIn} • Check-out:{" "}
                  {businessDetails.hours.checkOut}
                </span>
              </div>
            </address>

            <div className="pt-2">
              <a
                href={businessDetails.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-peach-400 hover:text-peach-300 font-medium underline"
              >
                <span>Get Driving Directions on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-forest-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-400">
          <p>
            © {currentYear} {businessDetails.name}. All rights reserved. Village
            Tikkari Tali, Rajgarh, Himachal Pradesh.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-warm-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-warm-200 transition-colors"
            >
              Terms of Stay
            </Link>
            <Link
              href="/contact"
              className="hover:text-warm-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
