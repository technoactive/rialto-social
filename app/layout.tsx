import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  description: "Experience authentic Italian cuisine at Rialto Social in Dorking. Fresh pasta, wood-fired pizzas, karaoke nights, and darts. Located at 45 Dene Street, Dorking RH4 2DW.",
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://rialtosocial.co.uk",
    siteName: "Rialto Social",
    title: "Rialto Social - Italian Restaurant & Entertainment in Dorking",
    description: "Experience authentic Italian cuisine at Rialto Social in Dorking. Fresh pasta, wood-fired pizzas, plus karaoke nights and darts for entertainment.",
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
    description: "Experience authentic Italian cuisine at Rialto Social in Dorking. Fresh pasta, wood-fired pizzas, plus karaoke nights and darts for entertainment.",
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
    google: "your-google-verification-code",
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
  "@id": "https://rialtosocial.co.uk",
  "name": "Rialto Social",
  "image": "https://rialtosocial.co.uk/og-image.jpg",
  "url": "https://rialtosocial.co.uk",
  "telephone": "+44-xxx-xxx-xxxx",
  "priceRange": "££",
  "servesCuisine": "Italian",
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
    }
  ],
  "hasMenu": [
    {
      "@type": "Menu",
      "name": "Food Menu",
      "url": "https://rialtosocial.co.uk/menu"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "45 Dene Street",
    "addressLocality": "Dorking",
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
      "opens": "12:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "12:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "12:00",
      "closes": "21:00"
    }
  ],
  "menu": "https://rialtosocial.co.uk/menu",
  "acceptsReservations": "True",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
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
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
