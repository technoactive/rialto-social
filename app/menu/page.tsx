import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MenuSection } from "@/components/sections/MenuSection";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our authentic Italian menu featuring fresh pasta, traditional pizzas, and Italian dishes at Rialto Social in Dorking.",
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
