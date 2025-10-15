import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Rialto Social Italian Restaurant in Dorking.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="font-display text-2xl font-bold mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                When you make a reservation or contact us, we collect information such as your name, 
                email address, phone number, and any special dietary requirements or preferences you share with us.
              </p>

              <h2 className="font-display text-2xl font-bold mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use your information to process reservations, contact you about your booking, 
                and provide you with the best possible dining experience at Rialto Social.
              </p>

              <h2 className="font-display text-2xl font-bold mt-8 mb-4">
                Data Protection
              </h2>
              <p className="text-muted-foreground mb-4">
                We are committed to protecting your personal data and comply with all applicable 
                data protection laws. Your information is stored securely and never shared with 
                third parties without your consent.
              </p>

              <h2 className="font-display text-2xl font-bold mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about our privacy policy, please contact us at:{" "}
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
