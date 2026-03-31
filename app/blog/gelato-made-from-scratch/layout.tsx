import { Metadata } from "next";

export const metadata: Metadata = {
  title: "We Spend 3 Days Making Something You'll Eat in 4 Minutes | Rialto Social",
  description: "Learn why Rialto takes three days to make gelato on-site. Made from scratch, with fresh ingredients, for an incredible experience.",
  keywords: ["gelato Dorking", "homemade gelato Surrey", "authentic Italian gelato", "best gelato Dorking", "Venetian gelato", "Rialto Social gelato", "gelato vs ice cream"],
  alternates: {
    canonical: "https://www.rialtosocial.co.uk/blog/gelato-made-from-scratch",
  },
  openGraph: {
    title: "We Spend 3 Days Making Something You'll Eat in 4 Minutes | Rialto Social",
    description: "Learn why Rialto takes three days to make gelato on-site. Made from scratch, with fresh ingredients, for an incredible experience.",
    type: "article",
    publishedTime: "2026-03-31T00:00:00.000Z",
    authors: ["Rialto Social"],
    images: [
      {
        url: "/og-gelato.jpg",
        width: 1200,
        height: 630,
        alt: "Rialto Social Handmade Gelato Dorking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Spend 3 Days Making Something You'll Eat in 4 Minutes",
    description: "Learn why Rialto takes three days to make gelato on-site. Made from scratch, with fresh ingredients.",
  },
};

export default function GelatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
