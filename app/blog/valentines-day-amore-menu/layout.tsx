import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valentine's Day \"Amore\" Menu | Rialto Social Dorking",
  description: "Enjoy heart-shaped ravioli on Valentine's Day with Rialto's special Amore menu—one of the most unique offered at restaurants in Dorking. 2 courses £23.50 / 3 courses £27.50.",
  keywords: ["Valentine's Day Dorking", "romantic restaurant Dorking", "Valentine's dinner Surrey", "Amore menu", "Italian Valentine's Day", "restaurants in Dorking", "heart-shaped ravioli"],
  alternates: {
    canonical: "https://www.rialtosocial.co.uk/blog/valentines-day-amore-menu",
  },
  openGraph: {
    title: "Valentine's Day \"Amore\" Menu | Rialto Social",
    description: "Celebrate romance with heart-shaped ravioli, romantic desserts & Italian-inspired flavours. Limited edition Valentine's menu at Rialto Social Dorking.",
    type: "article",
    publishedTime: "2026-02-14T00:00:00.000Z",
    authors: ["Rialto Social"],
    images: [
      {
        url: "/og-valentines.jpg",
        width: 1200,
        height: 630,
        alt: "Rialto Social Valentine's Day Amore Menu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentine's Day \"Amore\" Menu | Rialto Social",
    description: "Heart-shaped ravioli, romantic desserts & Italian flavours. Book your Valentine's dinner now!",
  },
};

export default function ValentinesMenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
