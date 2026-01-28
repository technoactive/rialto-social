import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GallerySection } from "@/components/sections/GallerySection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export const metadata: Metadata = {
  title: "Gallery - Photos of Best Italian Restaurant in Dorking | Rialto Social",
  description: "See our delicious Italian pizza, pasta, gelato & ice cream. View photos of our cozy restaurant, karaoke rooms & entertainment at Rialto Social Dorking.",
  keywords: [
    "italian restaurant dorking photos", "pizza dorking", "gelato dorking", "ice cream dorking",
    "rialto social gallery", "dorking restaurant photos", "karaoke room dorking",
    "best restaurants dorking", "italian food photos"
  ],
  alternates: {
    canonical: "https://www.rialtosocial.co.uk/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <GallerySection />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
