import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-primary">
              Rialto Social
            </h3>
            <p className="text-muted-foreground">
              Authentic Italian cuisine in the heart of Dorking. Experience the
              taste of Italy with our fresh ingredients and traditional recipes.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/menu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/entertainment"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact & Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  45 Dene Street<br />
                  Dorking, Surrey<br />
                  RH4 2DW
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+44-xxx-xxx-xxxx"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +44 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:info@rialtosocial.co.uk"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@rialtosocial.co.uk
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-muted-foreground">
                  <p className="font-medium">Monday - Thursday</p>
                  <p>12:00 PM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5" />
                <div className="text-muted-foreground">
                  <p className="font-medium">Friday - Saturday</p>
                  <p>12:00 PM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5" />
                <div className="text-muted-foreground">
                  <p className="font-medium">Sunday</p>
                  <p>12:00 PM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 Rialto Social. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
