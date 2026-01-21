import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  verification: {
    google: "tZ-2qF9afyVQSmHMY79tfOLLd5Dtk12Vmuc2kkeiRew",
  },
  title: {
    default: "Rialto Social - Best Italian Restaurant in Dorking | Pizza, Pasta & Gelato",
    template: "%s | Rialto Social Dorking"
  },
  description: "Best Italian restaurant in Dorking serving authentic pizza, fresh pasta & artisan gelato. Karaoke nights, darts & takeaway available. Located on Dene Street, Dorking town centre. Book your table today!",
  keywords: [
    // High volume keywords from Google Business
    "restaurants dorking", "dorking restaurants", "italian restaurant dorking", "pizza dorking",
    "best restaurants dorking", "places to eat dorking", "italian dorking", "takeaway dorking",
    // Brand keywords
    "rialto social", "rialto dorking", "rialto lounge dorking", "cafe rialto",
    // Food specific
    "gelato dorking", "ice cream dorking", "pasta dorking", "italian food dorking",
    // Meal times
    "lunch dorking", "dinner dorking", "brunch dorking", "breakfast dorking",
    // Entertainment
    "karaoke dorking", "darts dorking", "entertainment dorking",
    // Location variants
    "restaurants dorking town centre", "best italian restaurant surrey", "dorking high street restaurants"
  ],
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
    title: "Rialto Social - Best Italian Restaurant in Dorking | Pizza, Pasta & Gelato",
    description: "Dorking's favourite Italian restaurant! Authentic pizza, fresh pasta, artisan gelato & ice cream. Plus karaoke nights & darts. Dine-in or takeaway. Book now!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rialto Social - Best Italian Restaurant in Dorking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rialto Social - Best Italian Restaurant in Dorking",
    description: "Dorking's favourite Italian! Authentic pizza, pasta & gelato. Karaoke nights & darts. Dine-in or takeaway available. Book your table today!",
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
  "alternateName": ["Rialto Social Italian Restaurant", "Rialto Dorking", "Cafe Rialto Dorking", "Rialto Lounge Dorking"],
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
  "description": "Best Italian restaurant in Dorking town centre serving authentic pizza, fresh pasta, artisan gelato and ice cream. Features karaoke nights, darts, and PS5 gaming. Dine-in and takeaway available. One of the best places to eat in Dorking.",
  "servesCuisine": ["Italian", "Pizza", "Pasta", "Mediterranean", "Gelato", "Ice Cream"],
  "keywords": "restaurants dorking, italian restaurant dorking, pizza dorking, best restaurants dorking, places to eat dorking, karaoke dorking, gelato dorking, takeaway dorking",
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
      "name": "PS5 Gaming",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Live Entertainment",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Artisan Gelato",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Ice Cream",
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
      "name": "Delivery",
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
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Cocktails",
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
        {/* Google Tag Manager - Must be as high in head as possible */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NT4HDF3X');`,
          }}
        />
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
        {/* Google Tag Manager (noscript) - Must be immediately after opening body tag */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NT4HDF3X"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Analytics />
        <SpeedInsights />
        <CookieBanner />
        <CookieSettingsButton />
      </body>
    </html>
  );
}
