import { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Contact & Reservations | Rialto Social Dorking",
  description: "Book a table at Rialto Social Italian restaurant in Dorking. Find our location at 45 Dene Street RH4 2DW, opening hours, and contact 01306 742885.",
  keywords: ["contact Rialto Social", "Italian restaurant Dorking location", "book table Dorking", "restaurant reservation Surrey", "45 Dene Street Dorking"],
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="pt-24">
        <Suspense fallback={<div className="min-h-screen" />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
