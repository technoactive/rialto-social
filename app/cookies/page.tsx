import { Metadata } from "next";
import { Cookie, Shield, Settings, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | Rialto Social",
  description: "Learn about how Rialto Social uses cookies to improve your experience",
  alternates: {
    canonical: "https://www.rialtosocial.co.uk/cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <Cookie className="w-10 h-10 text-primary" />
            Cookie Policy
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-3">
              <Info className="w-5 h-5 text-accent" />
              What are cookies?
            </h2>
            <p className="text-sm">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">How we use cookies</h2>
          <p>
            Rialto Social uses cookies and similar tracking technologies to improve your{" "}
            <Link href="/" className="text-primary hover:underline">
              Italian dining experience
            </Link>{" "}
            and provide personalized content. This policy explains what cookies we use, 
            why we use them, and how you can manage your preferences.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Types of cookies we use</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Essential Cookies
              </h3>
              <p className="mb-3">
                These cookies are necessary for the website to function properly. They enable basic 
                functions like page navigation and access to secure areas of the website.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Session management</li>
                <li>Security and authentication</li>
                <li>Cookie consent preferences</li>
                <li>Load balancing</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                Analytics & Performance Cookies
              </h3>
              <p className="mb-3">
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Google Analytics - tracks page views and user behavior</li>
                <li>Performance monitoring - helps us identify and fix issues</li>
                <li>A/B testing - allows us to test new features</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-600" />
                Marketing & Advertising Cookies
              </h3>
              <p className="mb-3">
                These cookies are used to deliver advertisements more relevant to you and your interests. 
                They also help limit the number of times you see an advertisement.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Facebook Pixel - for targeted advertising</li>
                <li>Google Ads - for remarketing campaigns</li>
                <li>Social media plugins - for sharing content</li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-orange-600" />
                Functional Cookies
              </h3>
              <p className="mb-3">
                These cookies enable enhanced functionality and personalization, such as videos and 
                live chats. They may be set by us or by third-party providers.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Language preferences</li>
                <li>Location-based features</li>
                <li>Personalized content</li>
                <li>Embedded content from social platforms</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Managing your cookie preferences</h2>
          <p className="mb-4">
            You have the right to decide whether to accept or reject cookies. You can exercise 
            your cookie rights by setting your preferences in our Cookie Consent Manager. You can 
            also set or amend your web browser controls to accept or refuse cookies.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Browser cookie controls</h3>
            <p className="text-sm mb-3">
              Most web browsers allow you to control cookies through their settings. However, if you 
              limit the ability of websites to set cookies, you may impact your overall user experience.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Internet Explorer</a></li>
              <li><a href="https://help.opera.com/en/latest/web-preferences/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Opera</a></li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Third-party cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies to report 
            usage statistics of the Service, deliver advertisements on and through the Service, and 
            so on. These third parties have their own privacy policies addressing how they use such 
            information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Updates to this policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect changes to the 
            cookies we use or for other operational, legal, or regulatory reasons. Please therefore 
            revisit this Cookie Policy regularly to stay informed about our use of cookies and 
            related technologies.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact us</h2>
          <p className="mb-6">
            If you have any questions about our use of cookies or other technologies, please{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>{" "}
            or email us at{" "}
            <a href="mailto:privacy@rialtosocial.co.uk" className="text-primary hover:underline">
              privacy@rialtosocial.co.uk
            </a>. You can also reach us at:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <p className="font-semibold">Rialto Social</p>
            <p>45 Dene Street</p>
            <p>Dorking, Surrey</p>
            <p>RH4 2DW</p>
            <p>United Kingdom</p>
            <p className="mt-3">
              Phone: <a href="tel:+441306742885" className="text-primary hover:underline">01306 742885</a>
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <Button asChild>
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/terms">Terms of Service</Link>
            </Button>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
