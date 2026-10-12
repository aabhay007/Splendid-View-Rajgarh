"use client";

import React, { useActionState } from "react";
import { submitEnquiryAction, EnquiryState } from "@/lib/actions/enquiry";
import { businessDetails } from "@/content/business";
import {
  PhoneIcon,
  WhatsAppIcon,
  CheckIcon,
} from "@/components/ui/icons";

const initialState: EnquiryState = {
  success: false,
  message: "",
};

export function EnquiryForm({ defaultRoom }: { defaultRoom?: string }) {
  const [state, formAction, isPending] = useActionState(
    submitEnquiryAction,
    initialState
  );

  return (
    <div className="bg-beige-50 rounded-2xl shadow-xl border border-warm-300/80 p-6 sm:p-8">
      {state.success ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
            <CheckIcon className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-forest-900">
            Enquiry Received!
          </h3>
          <p className="text-sm text-warm-700 max-w-md mx-auto leading-relaxed">
            {state.message}
          </p>
          <div className="pt-4 space-y-3">
            <p className="text-xs text-warm-600">
              Need an instant confirmation or driving directions right now?
            </p>
            <a
              href={businessDetails.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-medium text-sm px-6 py-3 rounded-xl shadow hover:bg-[#20bd5a] transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Continue on WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <form action={formAction} className="space-y-5" noValidate>
          {/* Honeypot field (hidden from screen, catches bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_url">Website URL (leave empty)</label>
            <input
              type="text"
              id="website_url"
              name="website_url"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="border-b border-warm-200 pb-4 mb-2">
            <h3 className="font-serif text-xl font-bold text-forest-900">
              Plan Your Mountain Stay
            </h3>
            <p className="text-xs text-warm-600 mt-1">
              Direct enquiries receive the best tariffs with zero agent markups.
            </p>
          </div>

          {state.message && !state.success && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs">
              {state.message}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-1.5"
            >
              Full Name <span className="text-peach-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20 text-sm text-forest-950 transition-all placeholder:text-warm-400 bg-warm-50/50"
            />
            {state.errors?.name && (
              <p className="text-xs text-red-600 mt-1">{state.errors.name[0]}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-1.5"
              >
                Mobile Phone <span className="text-peach-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="10-digit mobile number"
                className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20 text-sm text-forest-950 transition-all placeholder:text-warm-400 bg-warm-50/50"
              />
              {state.errors?.phone && (
                <p className="text-xs text-red-600 mt-1">
                  {state.errors.phone[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-1.5"
              >
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20 text-sm text-forest-950 transition-all placeholder:text-warm-400 bg-warm-50/50"
              />
              {state.errors?.email && (
                <p className="text-xs text-red-600 mt-1">
                  {state.errors.email[0]}
                </p>
              )}
            </div>
          </div>

          {/* Dates & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="dates"
                className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-1.5"
              >
                Preferred Dates <span className="text-peach-600">*</span>
              </label>
              <input
                type="text"
                id="dates"
                name="dates"
                required
                placeholder="e.g. 15-18 May (3 nights)"
                className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20 text-sm text-forest-950 transition-all placeholder:text-warm-400 bg-warm-50/50"
              />
              {state.errors?.dates && (
                <p className="text-xs text-red-600 mt-1">
                  {state.errors.dates[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="guests"
                className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-1.5"
              >
                Number of Guests <span className="text-peach-600">*</span>
              </label>
              <input
                type="text"
                id="guests"
                name="guests"
                required
                placeholder="e.g. 2 Adults, 1 Child"
                className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20 text-sm text-forest-950 transition-all placeholder:text-warm-400 bg-warm-50/50"
              />
              {state.errors?.guests && (
                <p className="text-xs text-red-600 mt-1">
                  {state.errors.guests[0]}
                </p>
              )}
            </div>
          </div>

          {/* Accommodation Selection */}
          <div>
            <label
              htmlFor="roomType"
              className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-1.5"
            >
              Accommodation Preference
            </label>
            <select
              id="roomType"
              name="roomType"
              defaultValue={defaultRoom || ""}
              className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20 text-sm text-forest-950 transition-all bg-warm-50/50"
            >
              <option value="">Any available cottage / Not decided</option>
              <option value="Private Valley View Cottage (1 Cottage)">
                Private Valley View Cottage (1 Cottage)
              </option>
              <option value="Multiple Cottages (Family / Group Stay)">
                Multiple Cottages (Family / Group Stay)
              </option>
              <option value="Full Resort Booking (All 6 Cottages)">
                Full Resort Booking (All 6 Cottages)
              </option>
            </select>
          </div>

          {/* Special Requests / Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-forest-900 mb-1.5"
            >
              Special Notes / Questions
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="e.g. Vegetarian meal requirements, bonfire request, or driving route queries..."
              className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20 text-sm text-forest-950 transition-all placeholder:text-warm-400 bg-warm-50/50"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-forest-900 text-white font-semibold text-sm py-3.5 px-6 rounded-xl hover:bg-forest-800 focus:ring-4 focus:ring-forest-700/30 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isPending ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <span>Submit Stay Enquiry</span>
            )}
          </button>

          {/* WhatsApp Direct Alternative */}
          <div className="pt-2 text-center">
            <span className="text-xs text-warm-500 block mb-2">or connect instantly via</span>
            <div className="flex items-center justify-center gap-3">
              <a
                href={businessDetails.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp ({businessDetails.whatsapp.displayNumber})</span>
              </a>
              <span className="text-warm-300">•</span>
              <a
                href={`tel:${businessDetails.phones[0]}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-800 hover:underline"
              >
                <PhoneIcon className="w-3.5 h-3.5" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
