"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { businessDetails } from "@/content/business";
import {
  MenuIcon,
  XIcon,
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  HomeIcon,
  BedIcon,
  CameraIcon,
  CompassIcon,
  UtensilsIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";

interface NavItem {
  label: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Welcome to Splendid View Rajgarh",
    icon: HomeIcon,
  },
  {
    label: "Rooms & Cottages",
    href: "/rooms",
    description: "Private balconies & valley panoramas",
    icon: BedIcon,
    badge: "Valley View",
  },
  {
    label: "Property Amenities",
    href: "/amenities",
    description: "Dining, Wi-Fi, bonfires & parking",
    icon: UtensilsIcon,
  },
  {
    label: "Things to Do & Treks",
    href: "/experiences",
    description: "Peach orchards, river walks & trails",
    icon: CompassIcon,
  },
  {
    label: "Photo Gallery",
    href: "/gallery",
    description: "Real cottages, valley sunrises & vistas",
    icon: CameraIcon,
  },
  {
    label: "How to Reach",
    href: "/how-to-reach",
    description: "Driving route from Chandigarh & Delhi",
    icon: MapPinIcon,
  },
  {
    label: "Travel Guides & Blog",
    href: "/blog",
    description: "Local itineraries & offbeat guides",
    icon: CompassIcon,
  },
  {
    label: "FAQ & Property Info",
    href: "/faq",
    description: "Check-in times, food, weather & pet policy",
    icon: HomeIcon,
  },
  {
    label: "Contact & Enquiry",
    href: "/contact",
    description: "Direct bookings & tariff inquiries",
    icon: PhoneIcon,
  },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on ESC key and handle body lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Global toggle listener so bottom bar or quick chips can also open the drawer
  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("toggle-mobile-nav", handleToggle);
    window.addEventListener("open-mobile-nav", handleOpen);
    return () => {
      window.removeEventListener("toggle-mobile-nav", handleToggle);
      window.removeEventListener("open-mobile-nav", handleOpen);
    };
  }, []);

  return (
    <div className="lg:hidden flex items-center">
      {/* Prominent header trigger pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-forest-900 text-white hover:bg-forest-800 active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-forest-700 min-h-[38px]"
        aria-label={isOpen ? "Close menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <XIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
        <span className="text-xs font-bold tracking-wide">
          {isOpen ? "Close" : "Menu"}
        </span>
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-forest-950/70 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Slide-out Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[88%] max-w-sm bg-warm-50 z-50 shadow-2xl flex flex-col transform transition-all duration-300 ease-in-out border-l border-warm-200 ${
          isOpen
            ? "translate-x-0 opacity-100 visible pointer-events-auto"
            : "translate-x-full opacity-0 invisible pointer-events-none"
        }`}
        aria-label="Mobile Navigation"
        aria-hidden={!isOpen}
      >
        {/* Drawer Header */}
        <div className="p-4 bg-forest-950 text-white flex items-center justify-between border-b border-forest-800">
          <div className="flex items-center gap-2.5">
            <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden ring-1 ring-white/20 bg-white">
              <Image
                src="/images/logo.jpg"
                alt="Splendid View Eco Orchard Resort"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-serif font-bold text-base text-warm-50 block leading-tight">
                Splendid View
              </span>
              <span className="text-[10px] tracking-wider text-emerald-300 uppercase font-semibold block mt-0.5">
                Eco Orchard Resort • Rajgarh
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-warm-200 hover:text-white rounded-lg hover:bg-forest-900 min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors"
            aria-label="Close menu"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Links Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1 divide-y divide-warm-200/50">
          <div className="space-y-1 pb-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-forest-900 hover:bg-forest-100/70 hover:text-forest-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-warm-100 group-hover:bg-forest-200/60 flex items-center justify-center text-forest-800 shrink-0 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold leading-tight">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-peach-100 text-peach-800 border border-peach-200">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-warm-600 leading-tight mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRightIcon className="w-4 h-4 text-warm-400 group-hover:text-forest-700 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom Drawer Actions */}
        <div className="p-4 border-t border-warm-200 bg-white space-y-3 shrink-0">
          <Link
            href="/contact#enquiry"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-forest-900 hover:bg-forest-800 text-white text-sm font-bold py-3 px-4 rounded-xl shadow-md active:scale-95 transition-all"
          >
            <span>Book / Enquire Stay</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${businessDetails.phones[0]}`}
              className="flex items-center justify-center gap-1.5 bg-warm-100 hover:bg-warm-200 text-forest-950 text-xs font-bold py-2.5 px-3 rounded-lg border border-warm-300 transition-all"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-forest-700" />
              <span>Call Us</span>
            </a>
            <a
              href={businessDetails.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-3 rounded-lg shadow-sm transition-all"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-warm-600 pt-1">
            <MapPinIcon className="w-3.5 h-3.5 text-forest-700 shrink-0" />
            <span className="truncate">Village Tikkari Tali, Rajgarh, District Sirmour, HP</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
