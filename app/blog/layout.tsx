import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Rialto Social - News & Updates from Dorking's Italian Restaurant",
  description: "Read the latest news, special menus, events and updates from Rialto Social - the best Italian restaurant in Dorking. Discover our seasonal offerings and culinary inspirations.",
  keywords: ["Rialto Social blog", "Dorking restaurant news", "Italian food blog", "restaurant updates Dorking", "special menus Surrey"],
  alternates: {
    canonical: "https://www.rialtosocial.co.uk/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
