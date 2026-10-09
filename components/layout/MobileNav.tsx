"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { businessDetails } from "@/content/business";
import {
  MenuIcon,
  XIcon,
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
} from "@/components/ui/icons";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Rooms & Suites", href: "/rooms" },
  { label: "Amenities", href: "/amenities" },
  { label: "Experiences", href: "/experiences" },
  { label: "How to Reach", href: "/how-to-reach" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog & Guides", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on ESC key
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

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-forest-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label={isOpen ? "Close menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-forest-950/60 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-warm-50 z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="p-4 flex items-center justify-between border-b border-warm-200">
          <div>
            <span className="font-serif font-bold text-lg text-forest-900 block">
              Splendid View
            </span>
            <span className="text-xs tracking-wider text-peach-600 uppercase font-semibold">
              Rajgarh • Himachal
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-forest-800 rounded-lg hover:bg-warm-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-forest-900 hover:bg-forest-100/60 hover:text-forest-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom Drawer Actions */}
        <div className="p-4 border-t border-warm-200 bg-white/60 space-y-3">
          <div className="flex items-center gap-2 text-xs text-warm-700">
            <MapPinIcon className="w-4 h-4 text-forest-700 shrink-0" />
            <span>Village Tikkari Tali, Rajgarh, HP</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={`tel:${businessDetails.phones[0]}`}
              className="flex items-center justify-center gap-1.5 bg-forest-900 text-white text-xs font-semibold py-2.5 px-3 rounded-lg shadow"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-emerald-300" />
              <span>Call</span>
            </a>
            <a
              href={businessDetails.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold py-2.5 px-3 rounded-lg shadow"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
