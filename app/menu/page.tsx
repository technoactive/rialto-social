import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MenuSection } from "@/components/sections/MenuSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export const metadata: Metadata = {
  title: "Menu - Pizza, Pasta & Gelato | Best Italian Food in Dorking",
  description: "View our menu: authentic Italian pizza, fresh pasta, risotto, tiramisu & artisan gelato. Best Italian food in Dorking with takeaway available. See prices & order online!",
  keywords: [
    "pizza dorking", "pasta dorking", "italian food dorking", "gelato dorking", "ice cream dorking",
    "italian menu dorking", "takeaway dorking", "dorking pizza restaurants", "best pizza dorking",
    "margherita pizza", "carbonara", "lasagne", "risotto", "tiramisu", "bruschetta",
    "italian restaurants dorking", "dorking takeaway", "food dorking"
  ],
  alternates: {
    canonical: "https://www.rialtosocial.co.uk/menu",
  },
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <MenuSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
