import React from "react";
import Link from "next/link";
import Image from "next/image";
import { businessDetails } from "@/content/business";
import {
  PhoneIcon,
  WhatsAppIcon,
  BedIcon,
  CameraIcon,
  MapPinIcon,
  CompassIcon,
  UtensilsIcon,
} from "@/components/ui/icons";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Accommodation", href: "/rooms" },
  { label: "Amenities", href: "/amenities" },
  { label: "Experiences", href: "/experiences" },
  { label: "How to Reach", href: "/how-to-reach" },
  { label: "Gallery", href: "/gallery" },
  { label: "Guides", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const mobileQuickLinks = [
  { label: "Accommodation", href: "/rooms", icon: BedIcon },
  { label: "Photos", href: "/gallery", icon: CameraIcon },
  { label: "Amenities", href: "/amenities", icon: UtensilsIcon },
  { label: "Route", href: "/how-to-reach", icon: MapPinIcon },
  { label: "Things To Do", href: "/experiences", icon: CompassIcon },
  { label: "Contact", href: "/contact", icon: PhoneIcon },
];

export function Header() {
  const primaryPhone = businessDetails.phones[0];
  const displayPhone = businessDetails.displayPhones[0];

  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-warm-200/90 shadow-sm transition-shadow">
      {/* Top micro announcement bar (Desktop & Tablet) */}
      <div className="bg-forest-950 text-warm-100 text-xs py-1.5 px-4 hidden md:block border-b border-forest-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-warm-200">
              Village Tikkari Tali, Rajgarh, District Sirmour, Himachal Pradesh 173101
            </span>
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${primaryPhone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label={`Call ${displayPhone}`}
            >
              <PhoneIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>{displayPhone}</span>
            </a>
            <a
              href={businessDetails.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              aria-label="Direct WhatsApp Chat"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span className="font-medium">WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Official Emblem Logo & Typography */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-forest-700 rounded-lg py-1 px-0.5"
            aria-label="Splendid View Eco Orchard Resort Home"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 rounded-full overflow-hidden shadow-sm ring-1 ring-forest-900/15 group-hover:ring-forest-700/40 transition-all bg-white">
              <Image
                src="/images/logo.jpg"
                alt="Splendid View Eco Orchard Resort Emblem"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif font-bold text-base sm:text-lg md:text-xl text-forest-950 leading-tight tracking-tight group-hover:text-forest-700 transition-colors">
                Splendid View
              </span>
              <span className="text-[9px] sm:text-[11px] font-semibold text-forest-700 uppercase tracking-wider leading-tight">
                Eco Orchard Resort
              </span>
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
                className="hover:text-forest-700 text-stone-800 font-medium transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-forest-700 after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs (Desktop) */}
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

          {/* Mobile Right Controls: Quick Enquire + Mobile Menu Pill */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact#enquiry"
              className="sm:hidden text-[11px] font-bold text-forest-900 bg-sage-100 hover:bg-sage-200 border border-sage-300 px-2.5 py-1.5 rounded-full transition-colors active:scale-95"
            >
              Enquire
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>

      {/* Mobile Top Quick-Navigation Bar (Solves "in mobile its on the last") */}
      <div className="lg:hidden border-t border-warm-200/70 bg-warm-50/90 backdrop-blur-md px-3 py-1.5">
        <nav
          aria-label="Mobile Quick Navigation"
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-0.5 -mx-1 px-1"
        >
          {mobileQuickLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-forest-900 hover:bg-forest-100 hover:text-forest-800 border border-warm-200/90 shadow-2xs transition-all active:scale-95 shrink-0"
              >
                <IconComponent className="w-3.5 h-3.5 text-forest-700 shrink-0" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
