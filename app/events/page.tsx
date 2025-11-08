import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EventsSection } from "@/components/sections/EventsSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export const metadata: Metadata = {
  title: "Upcoming Events | Rialto Social - Dorking Entertainment",
  description: "Discover upcoming events at Rialto Social Dorking. Special nights, themed parties, karaoke competitions, darts tournaments, gaming events and more. Book your spot today!",
  keywords: ["events Dorking", "Rialto Social events", "karaoke nights Dorking", "gaming events Surrey", "special events Italian restaurant", "party venue Dorking", "entertainment calendar"],
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <EventsSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}

