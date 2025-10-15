import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GallerySection } from "@/components/sections/GallerySection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our photo gallery showcasing the authentic Italian dishes, cozy atmosphere, and memorable moments at Rialto Social in Dorking.",
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
