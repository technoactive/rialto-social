import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutPageSection } from "@/components/sections/AboutPageSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Rialto Social's story, our passion for authentic Italian cuisine, and our commitment to bringing the taste of Italy to Dorking.",
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
