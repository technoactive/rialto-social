import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MenuSection } from "@/components/sections/MenuSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Menu | Italian Restaurant Dorking",
  description: "Explore our authentic Italian menu featuring fresh pasta, traditional pizzas, and Italian dishes at Rialto Social in Dorking. View prices and dietary options.",
  keywords: ["Italian menu Dorking", "pizza menu Surrey", "pasta dishes Dorking", "Rialto Social menu", "Italian food prices"],
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="pt-24">
        <MenuSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
