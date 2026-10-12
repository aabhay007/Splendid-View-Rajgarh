import React from "react";
import { businessDetails } from "@/content/business";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

export function StickyMobileBar() {
  const primaryPhone = businessDetails.phones[0];
  const displayPhone = businessDetails.displayPhones[0];
  const whatsappUrl = businessDetails.whatsapp.url;

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 w-full max-w-full bg-beige-100/95 backdrop-blur-md border-t border-warm-300/80 px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] md:hidden shadow-[0_-4px_25px_rgba(0,0,0,0.12)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${primaryPhone}`}
          className="flex items-center justify-center gap-2 bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-sm active:scale-[0.98] transition-all min-h-[48px]"
          aria-label={`Call Splendid View Rajgarh directly at ${displayPhone}`}
        >
          <PhoneIcon className="w-4 h-4 text-emerald-300 shrink-0" />
          <span className="truncate">Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-sm active:scale-[0.98] transition-all min-h-[48px]"
          aria-label="Chat on WhatsApp with Splendid View Rajgarh"
        >
          <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
