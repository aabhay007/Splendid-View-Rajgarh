import React from "react";
import Link from "next/link";
import Image from "next/image";
import { businessDetails } from "@/content/business";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Amenities", href: "/amenities" },
  { label: "Experiences", href: "/experiences" },
  { label: "How to Reach", href: "/how-to-reach" },
  { label: "Gallery", href: "/gallery" },
  { label: "Guides", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const primaryPhone = businessDetails.phones[0];
  const displayPhone = businessDetails.displayPhones[0];

  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-warm-200/80 transition-shadow">
      {/* Top micro announcement bar */}
      <div className="bg-forest-950 text-warm-100 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              Village Tikkari Tali, Rajgarh, District Sirmour, Himachal Pradesh 173101
            </span>
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${primaryPhone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>{displayPhone}</span>
            </a>
            <a
              href={businessDetails.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-forest-700 rounded-lg p-1"
            aria-label="Splendid View Rajgarh Home"
          >
            <div className="relative w-48 h-12">
              <Image
                src="/images/logo.svg"
                alt="Splendid View Rajgarh Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-forest-900"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-peach-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-peach-500 after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${primaryPhone}`}
              className="hidden xl:inline-flex items-center gap-2 text-forest-900 hover:text-forest-700 font-semibold text-sm px-3 py-2"
            >
              <PhoneIcon className="w-4 h-4 text-forest-700" />
              <span>{displayPhone}</span>
            </a>

            <Link
              href="/contact#enquiry"
              className="bg-forest-900 text-white font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-forest-800 transition-all shadow-sm active:scale-95"
            >
              Enquire Stay
            </Link>
          </div>

          {/* Mobile Navigation Trigger */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
