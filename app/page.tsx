import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { QuickBooking } from "@/components/sections/QuickBooking";
import { About } from "@/components/sections/About";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { Entertainment } from "@/components/sections/Entertainment";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { ReservationCTA } from "@/components/sections/ReservationCTA";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rialto Social - Best Italian Restaurant in Dorking | Pizza, Pasta, Gelato & Karaoke",
  description: "Looking for the best restaurants in Dorking? Rialto Social serves authentic Italian pizza, fresh pasta & artisan gelato. Plus karaoke nights, darts & takeaway. One of the best places to eat in Dorking town centre!",
  alternates: {
    canonical: "https://www.rialtosocial.co.uk",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <QuickBooking />
        <About />
        <MenuPreview />
        <Entertainment />
        <Testimonials />
        <FAQSection />
        <ReservationCTA />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}