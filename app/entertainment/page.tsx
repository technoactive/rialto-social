import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EntertainmentPageSection } from "@/components/sections/EntertainmentPageSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export const metadata: Metadata = {
  title: "Entertainment - Karaoke & Darts",
  description: "Enjoy karaoke nights and darts at Rialto Social in Dorking. Private karaoke rooms, professional dartboards, and special event packages available.",
};

export default function EntertainmentPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <EntertainmentPageSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
