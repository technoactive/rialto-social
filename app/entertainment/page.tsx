import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EntertainmentPageSection } from "@/components/sections/EntertainmentPageSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export const metadata: Metadata = {
  title: "Entertainment - Karaoke with Karafun & Darts | Rialto Social",
  description: "Experience Karafun karaoke with 44,000+ songs and professional darts at Rialto Social Dorking. Private karaoke rooms, 4 dartboards, weekly leagues, and special packages.",
  keywords: ["Karafun karaoke Dorking", "darts Dorking", "karaoke rooms Surrey", "entertainment venue Dorking", "darts league Surrey", "Rialto Social entertainment", "karaoke bar Dorking"],
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
