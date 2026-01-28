import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutPageSection } from "@/components/sections/AboutPageSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export const metadata: Metadata = {
  title: "Our Story | Rialto Social - 25 Years of Italian Excellence in Dorking",
  description: "From a Venetian dream to 25 years as Dorking's beloved Italian restaurant, discover how Rialto has transformed into Rialto Social - combining authentic Italian dining with modern social entertainment.",
  keywords: ["Rialto Social story", "25 years Dorking Italian", "Italian restaurant history", "Rialto bridge mural", "social darts karaoke restaurant", "Dorking institution", "authentic Italian Surrey"],
  alternates: {
    canonical: "https://www.rialtosocial.co.uk/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <AboutPageSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
