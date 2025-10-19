import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GallerySection } from "@/components/sections/GallerySection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Gallery | Rialto Social Restaurant Photos",
  description: "View our photo gallery showcasing the authentic Italian dishes, cozy atmosphere, and memorable moments at Rialto Social in Dorking.",
  keywords: ["Rialto Social photos", "Italian restaurant gallery", "Dorking restaurant images", "Italian food photos", "restaurant interior Dorking"],
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main>
        <GallerySection />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
