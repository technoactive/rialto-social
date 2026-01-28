import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Rialto Social Italian Restaurant in Dorking.",
  alternates: {
    canonical: "https://www.rialtosocial.co.uk/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Terms of Service
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="font-display text-2xl font-bold mt-8 mb-4">
                Reservations
              </h2>
              <p className="text-muted-foreground mb-4">
                Reservations are subject to availability. We request that you arrive on time for 
                your booking. Tables may be released if you are more than 15 minutes late without 
                prior notice.
              </p>

              <h2 className="font-display text-2xl font-bold mt-8 mb-4">
                Cancellations
              </h2>
              <p className="text-muted-foreground mb-4">
                Please provide at least 2 hours notice for cancellations. For large groups (8+ people), 
                we require 24 hours notice. Repeated no-shows may result in future bookings being declined.
              </p>

              <h2 className="font-display text-2xl font-bold mt-8 mb-4">
                Dietary Requirements
              </h2>
              <p className="text-muted-foreground mb-4">
                While we strive to accommodate all dietary requirements, please inform us of any 
                allergies or restrictions when making your reservation. We cannot guarantee that 
                our dishes are completely free from allergens.
              </p>

              <h2 className="font-display text-2xl font-bold mt-8 mb-4">
                Service Charge
              </h2>
              <p className="text-muted-foreground mb-4">
                A discretionary 12.5% service charge is added to bills for groups of 6 or more. 
                This charge is distributed among our service staff.
              </p>

              <h2 className="font-display text-2xl font-bold mt-8 mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground">
                For any questions regarding our terms of service, please contact us at:{" "}
                <a href="mailto:dorking@rialtolounge.co.uk" className="text-primary hover:underline">
                  dorking@rialtolounge.co.uk
                </a>{" "}
                or{" "}
                <a href="mailto:info@rialtosocial.co.uk" className="text-primary hover:underline">
                  info@rialtosocial.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
