import React from "react";
import { ChevronDownIcon } from "@/components/ui/icons";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenFirst?: boolean;
}

export function FaqAccordion({
  items,
  defaultOpenFirst = false,
}: FaqAccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={index}
          open={index === 0 && defaultOpenFirst}
          className="group bg-beige-50 rounded-2xl border border-warm-300/80 shadow-sm overflow-hidden transition-all duration-200 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none font-serif text-base sm:text-lg font-bold text-forest-950 group-open:text-peach-700 transition-colors select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-700">
            <span className="pr-4">{item.question}</span>
            <span className="p-1.5 rounded-full bg-warm-100 group-open:bg-peach-100 group-open:rotate-180 transition-transform duration-200 shrink-0">
              <ChevronDownIcon className="w-4 h-4 text-forest-800 group-open:text-peach-700" />
            </span>
          </summary>
          <div className="px-5 sm:px-6 pb-6 text-sm text-olive-800 leading-relaxed border-t border-warm-100 pt-4">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
