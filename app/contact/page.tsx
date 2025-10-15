import { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description: "Book a table at Rialto Social Italian restaurant in Dorking. Find our location, opening hours, and contact information.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
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
