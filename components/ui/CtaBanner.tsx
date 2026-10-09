import React from "react";
import Link from "next/link";
import { businessDetails } from "@/content/business";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

interface CtaBannerProps {
  heading?: string;
  subheading?: string;
}

export function CtaBanner({
  heading = "Escape to the Peaceful Peach Valley",
  subheading = "Experience authentic Himalayan tranquility, fresh pine air, and panoramic valley views at Splendid View Rajgarh. Reserve your stay directly for best seasonal tariffs.",
}: CtaBannerProps) {
  const primaryPhone = businessDetails.phones[0];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-forest-950 text-white p-8 sm:p-12 lg:p-16 my-12 shadow-2xl border border-forest-900">
      {/* Background Mountain Motif */}
      <div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-peach-500/20 text-peach-300 text-xs font-semibold uppercase tracking-widest border border-peach-500/30">
          Direct Booking • Best Rates Guaranteed
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-50 leading-tight">
          {heading}
        </h2>

        <p className="text-sm sm:text-base text-warm-200 leading-relaxed max-w-2xl mx-auto">
          {subheading}
        </p>

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${primaryPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-600 text-white font-medium text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all"
          >
            <PhoneIcon className="w-4 h-4 text-emerald-300" />
            <span>Call: {businessDetails.displayPhones[0]}</span>
          </a>

          <a
            href={businessDetails.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <Link
            href="/contact#enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-warm-100 font-medium text-sm py-3.5 px-6 rounded-xl transition-all border border-white/20"
          >
            <span>Send Enquiry Form</span>
          </Link>
        </div>

        <p className="text-xs text-warm-400 pt-2">
          Village Tikkari Tali, Rajgarh, District Sirmour, Himachal Pradesh
        </p>
      </div>
    </section>
  );
}
