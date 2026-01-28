import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EntertainmentPageSection } from "@/components/sections/EntertainmentPageSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export const metadata: Metadata = {
  title: "Karaoke Dorking & Darts - Best Entertainment Venue | Rialto Social",
  description: "Looking for karaoke in Dorking? Rialto Social offers private karaoke rooms with 44,000+ songs, professional darts, PS5 gaming & live music. Best entertainment venue in Dorking!",
  keywords: [
    "karaoke dorking", "dorking karaoke", "darts dorking", "entertainment dorking",
    "karaoke bar dorking", "karaoke nights surrey", "darts venue dorking",
    "ps5 gaming dorking", "live music dorking", "nightlife dorking",
    "bars dorking", "pubs dorking", "things to do dorking", "fun activities dorking"
  ],
  alternates: {
    canonical: "https://www.rialtosocial.co.uk/entertainment",
  },
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
