import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { QuickBooking } from "@/components/sections/QuickBooking";
import { About } from "@/components/sections/About";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { Entertainment } from "@/components/sections/Entertainment";
import { Testimonials } from "@/components/sections/Testimonials";
import { ReservationCTA } from "@/components/sections/ReservationCTA";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

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
        <ReservationCTA />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}