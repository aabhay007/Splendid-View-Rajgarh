import React from "react";
import { businessDetails } from "@/content/business";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

export function StickyMobileBar() {
  const primaryPhone = businessDetails.phones[0];
  const whatsappUrl = businessDetails.whatsapp.url;

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-forest-900/10 px-3 py-2.5 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${primaryPhone}`}
          className="flex items-center justify-center gap-2 bg-forest-900 text-white font-medium text-sm py-3 px-4 rounded-xl shadow hover:bg-forest-800 active:scale-[0.98] transition-all min-h-[48px]"
          aria-label="Call Splendid View Rajgarh directly"
        >
          <PhoneIcon className="w-4 h-4 text-emerald-300" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium text-sm py-3 px-4 rounded-xl shadow hover:bg-[#20bd5a] active:scale-[0.98] transition-all min-h-[48px]"
          aria-label="Chat on WhatsApp with Splendid View Rajgarh"
        >
          <WhatsAppIcon className="w-4 h-4 text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
