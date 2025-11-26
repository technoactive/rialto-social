import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { CookieSettingsButton } from "@/components/ui/cookie-settings-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport = {
  width: 'device-width' as const,
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover' as const,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rialtosocial.co.uk"),
  title: {
    default: "Rialto Social - Authentic Italian Restaurant in Dorking",
    template: "%s | Rialto Social"
  },
  description: "Experience authentic Italian cuisine at Rialto Social in Dorking. Fresh pasta, authentic pizzas, karaoke nights, and darts. Located at 45 Dene Street, Dorking RH4 2DW.",
  keywords: ["Italian restaurant Dorking", "Rialto Social", "Italian food Surrey", "restaurant Dorking", "pasta Dorking", "pizza Dorking", "Italian dining", "karaoke Dorking", "darts Dorking", "entertainment venue Dorking"],
  authors: [{ name: "Rialto Social" }],
  creator: "Rialto Social",
  publisher: "Rialto Social",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo/Rialto.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/logo/Rialto.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://rialtosocial.co.uk",
    siteName: "Rialto Social",
    title: "Rialto Social - Italian Restaurant & Entertainment in Dorking",
    description: "Experience authentic Italian cuisine at Rialto Social in Dorking. Fresh pasta, authentic pizzas, plus karaoke nights and darts for entertainment.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rialto Social Italian Restaurant & Entertainment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rialto Social - Italian Restaurant & Entertainment in Dorking",
    description: "Experience authentic Italian cuisine at Rialto Social in Dorking. Fresh pasta, authentic pizzas, plus karaoke nights and darts for entertainment.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "pending-verification",
    yandex: "pending-verification",
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Rialto Social",
  "url": "https://rialtosocial.co.uk",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://rialtosocial.co.uk/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const jsonLdRestaurant = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://rialtosocial.co.uk/#restaurant",
  "name": "Rialto Social",
  "alternateName": "Rialto Social Italian Restaurant & Bar",
  "image": [
    "https://rialtosocial.co.uk/pictures/rialto-social-restaurant-exterior.jpg",
    "https://rialtosocial.co.uk/pictures/rialto-social-dining-area.jpg",
    "https://rialtosocial.co.uk/pictures/rialto-social-pizza-making.jpg"
  ],
  "logo": "https://rialtosocial.co.uk/logo/Rialto.png",
  "url": "https://rialtosocial.co.uk",
  "telephone": "+441306742885",
  "email": "dorking@rialtolounge.co.uk",
  "priceRange": "££",
  "description": "Authentic Italian restaurant in Dorking serving fresh pasta, traditional pizzas, and classic Italian dishes. Features karaoke nights and darts for entertainment.",
  "servesCuisine": ["Italian", "Pizza", "Pasta", "Mediterranean"],
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Karaoke",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Darts",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Live Entertainment",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Dine-in",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Takeaway",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Wheelchair accessible",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free WiFi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Family friendly",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Bar",
      "value": true
    }
  ],
  "hasMenu": {
    "@type": "Menu",
    "name": "Rialto Social Menu",
    "url": "https://rialtosocial.co.uk/menu",
    "description": "Our menu features authentic Italian dishes including fresh pasta, traditional pizzas, and classic Italian mains."
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "45 Dene Street",
    "addressLocality": "Dorking",
    "addressRegion": "Surrey",
    "postalCode": "RH4 2DW",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.2327,
    "longitude": -0.3302
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "17:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "12:00",
      "closes": "00:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "12:00",
      "closes": "22:00"
    }
  ],
  "menu": "https://rialtosocial.co.uk/menu",
  "acceptsReservations": "True",
  "reservationUrl": "https://rialtosocial.co.uk/contact",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "currenciesAccepted": "GBP",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://rialtosocial.co.uk/contact",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Table Reservation"
    }
  },
  "sameAs": [
    "https://www.facebook.com/caferialto.dorking",
    "https://www.instagram.com/rialtolounge_dorking/"
  ]
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://rialtosocial.co.uk/#organization",
  "name": "Rialto Social",
  "url": "https://rialtosocial.co.uk",
  "logo": {
    "@type": "ImageObject",
    "url": "https://rialtosocial.co.uk/logo/Rialto.png",
    "width": 200,
    "height": 200
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44-1306-742885",
    "contactType": "customer service",
    "areaServed": "GB",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "45 Dene Street",
    "addressLocality": "Dorking",
    "addressRegion": "Surrey",
    "postalCode": "RH4 2DW",
    "addressCountry": "GB"
  },
  "sameAs": [
    "https://www.facebook.com/caferialto.dorking",
    "https://www.instagram.com/rialtolounge_dorking/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebsite),
          }}
          strategy="afterInteractive"
        />
        <Script
          id="json-ld-restaurant"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdRestaurant),
          }}
          strategy="afterInteractive"
        />
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
          strategy="afterInteractive"
        />
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
        {/* Gloria Food Online Ordering & Reservation System */}
        <Script
          id="gloria-food"
          src="https://www.fbgcdn.com/embedder/js/ewm2.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
        <CookieSettingsButton />
      </body>
    </html>
  );
}
