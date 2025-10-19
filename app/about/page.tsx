import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutPageSection } from "@/components/sections/AboutPageSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "About Us | Rialto Social Italian Restaurant",
  description: "Learn about Rialto Social's story, our passion for authentic Italian cuisine, and our commitment to bringing the taste of Italy to Dorking. Family-owned since establishment.",
  keywords: ["about Rialto Social", "Italian restaurant story", "Dorking restaurant history", "authentic Italian Dorking", "family restaurant Surrey"],
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="pt-24">
        <AboutPageSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
