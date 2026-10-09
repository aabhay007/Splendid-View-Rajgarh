"use server";

import { z } from "zod";

const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(80, { message: "Name cannot exceed 80 characters." }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Please enter a valid 10-digit mobile number." })
    .regex(/^[0-9+\s\-()]{10,16}$/, {
      message: "Please enter a valid phone number (digits only).",
    }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .optional()
    .or(z.literal("")),
  dates: z
    .string()
    .trim()
    .min(3, { message: "Please specify preferred dates of travel." }),
  guests: z
    .string()
    .trim()
    .min(1, { message: "Please specify number of guests." }),
  roomType: z.string().optional(),
  message: z.string().trim().max(500).optional(),
  // Honeypot field (hidden from legitimate users)
  website_url: z.string().max(0, { message: "Spam bot detected." }).optional(),
});

export type EnquiryState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitEnquiryAction(
  prevState: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    dates: formData.get("dates"),
    guests: formData.get("guests"),
    roomType: formData.get("roomType"),
    message: formData.get("message"),
    website_url: formData.get("website_url"),
  };

  const validation = enquirySchema.safeParse(rawData);

  if (!validation.success) {
    const fieldErrors = validation.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please fix the errors indicated below.",
      errors: fieldErrors,
    };
  }

  const data = validation.data;

  // Honeypot trap: if bot filled this invisible field, return fake success
  if (data.website_url && data.website_url.length > 0) {
    return {
      success: true,
      message: "Thank you! Your enquiry has been received.",
    };
  }

  // Hook for Email Service (Resend / Formspree / Webhook)
  const resendApiKey = process.env.RESEND_API_KEY;
  const _receiverEmail =
    process.env.ENQUIRY_NOTIFICATION_EMAIL || "reservations@splendidviewrajgarh.com";

  if (resendApiKey && !resendApiKey.includes("TODO")) {
    try {
      // Future integration with Resend or SMTP provider:
      // await resend.emails.send({ from: '...', to: receiverEmail, ... })
    } catch {
      // Gracefully fall through without breaking the user experience
    }
  }

  return {
    success: true,
    message:
      "Thank you! Your booking enquiry has been received. Our team will contact you within 2 hours to confirm room availability and details.",
  };
}
