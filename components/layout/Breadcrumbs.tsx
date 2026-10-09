import React from "react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

export interface BreadcrumbCrumb {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbCrumb[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  // Always include Home at the front if not present
  const fullItems: BreadcrumbCrumb[] = [
    { name: "Home", href: "/" },
    ...items,
  ];

  const schemaData = getBreadcrumbSchema(
    fullItems.map((item) => ({
      name: item.name,
      item: item.href || "",
    }))
  );

  return (
    <>
      <JsonLd data={schemaData} />
      <nav
        aria-label="Breadcrumb"
        className={`py-3 text-xs text-warm-600 ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-1.5">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && <span className="text-warm-400">/</span>}
                {isLast || !item.href ? (
                  <span
                    aria-current="page"
                    className="font-medium text-forest-900 truncate max-w-[200px] sm:max-w-none"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-peach-600 transition-colors underline-offset-2 hover:underline"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
