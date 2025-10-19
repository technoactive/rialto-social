"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Script from "next/script";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export function Breadcrumb() {
  const pathname = usePathname();

  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [{ name: "Home", href: "/" }];
    
    if (pathname === "/") return [];

    const segments = pathname.split("/").filter(Boolean);
    let currentPath = "";

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;
      
      // Capitalize and format segment name
      const name = segment
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      items.push({
        name,
        href: isLast ? undefined : currentPath,
      });
    });

    return items;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on homepage
  if (breadcrumbs.length === 0) return null;

  // Generate JSON-LD for breadcrumbs
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.href ? `https://rialtosocial.co.uk${item.href}` : undefined,
    })),
  };

  return (
    <>
      <Script
        id={`breadcrumb-jsonld-${pathname}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdBreadcrumb),
        }}
        strategy="afterInteractive"
      />
      <nav aria-label="Breadcrumb" className="w-full bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 py-3 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
