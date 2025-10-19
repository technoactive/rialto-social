import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EntertainmentPageSection } from "@/components/sections/EntertainmentPageSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Entertainment - Karaoke & Darts | Rialto Social",
  description: "Enjoy karaoke nights and darts at Rialto Social in Dorking. Private karaoke rooms, professional dartboards, live entertainment, and special event packages available.",
  keywords: ["karaoke Dorking", "darts Dorking", "entertainment venue Surrey", "live music Dorking", "party venue Dorking", "Rialto Social entertainment"],
};

export default function EntertainmentPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main>
        <EntertainmentPageSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
