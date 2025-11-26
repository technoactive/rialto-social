import { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export const metadata: Metadata = {
  title: "Book a Table - Italian Restaurant Dorking Town Centre | Rialto Social",
  description: "Book a table at Rialto Social, one of the best restaurants in Dorking town centre. Located at 45 Dene Street RH4 2DW. Call 01306 742885 or book online. Karaoke & darts reservations too!",
  keywords: [
    "book table dorking", "restaurant reservation dorking", "dorking town centre restaurants",
    "restaurants dorking high street", "italian restaurant dorking", "rialto social dorking",
    "45 dene street dorking", "karaoke booking dorking", "darts booking dorking"
  ],
  alternates: {
    canonical: "https://rialtosocial.co.uk/contact",
  },
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
