"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram,
  ChevronRight,
  ArrowUp,
  Utensils,
  Wine,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-accent to-accent/95">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-500 to-primary"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Restaurant Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="mb-4">
              <Image 
                src="/logo/Rialto.png" 
                alt="Rialto Social"
                width={140}
                height={50}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              Where authentic Italian cuisine meets modern social dining. 
              Experience the warmth of Italian hospitality in the heart of Dorking.
            </p>
            
            {/* Social Media */}
            <div className="pt-4">
              <p className="text-white/60 text-sm mb-3">Follow us for updates</p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/rialtosocial", label: "Facebook" },
                  { icon: Instagram, href: "https://www.instagram.com/rialtosocial", label: "Instagram" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all duration-300 group"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Utensils className="w-5 h-5 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/menu", label: "Our Menu" },
                { href: "/about", label: "About Us" },
                { href: "/entertainment", label: "Entertainment" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Reservations" }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-white/80 group-hover:text-white transition-colors">
                    45 Dene Street<br />
                    Dorking, Surrey<br />
                    RH4 2DW
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=45+Dene+Street+Dorking+RH4+2DW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline mt-1 inline-block"
                  >
                    Get directions →
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+441306742885"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  01306 742885
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:info@rialtosocial.co.uk"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  info@rialtosocial.co.uk
                </a>
              </li>
            </ul>
            
            {/* Quick Reservation Button */}
            <Link href="/contact?service=dining">
              <Button className="mt-4 bg-white/10 hover:bg-primary border border-white/20 text-white group">
                <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Book a Table
              </Button>
            </Link>
          </motion.div>

          {/* Opening Hours */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Opening Hours
            </h4>
            <div className="space-y-3">
              {[
                { days: "Monday - Thursday", hours: "12:00 - 23:00" },
                { days: "Friday - Saturday", hours: "12:00 - 24:00" },
                { days: "Sunday", hours: "12:00 - 23:00" }
              ].map((schedule, index) => (
                <motion.div 
                  key={schedule.days}
                  className="bg-white/5 rounded-lg p-3 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="font-medium text-white">{schedule.days}</p>
                  <p className="text-white/70 text-sm">{schedule.hours}</p>
                </motion.div>
              ))}
              <div className="mt-4 p-3 bg-primary/20 rounded-lg border border-primary/30">
                <p className="text-sm text-white/90 flex items-center gap-2">
                  <Wine className="w-4 h-4 text-primary" />
                  Kitchen closes at 22:00 (Sun 21:30)
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/60">
              <p>&copy; {new Date().getFullYear()} Rialto Social. All rights reserved.</p>
              <span className="hidden md:inline text-white/30">•</span>
              <p className="text-center">Authentic Italian Dining & Entertainment</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                { href: "/privacy", label: "Privacy" },
                { href: "/cookies", label: "Cookies" },
                { href: "/terms", label: "Terms" },
                { href: "/sitemap.xml", label: "Sitemap" }
              ].map((link, index) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-white/60 hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  {index < 3 && (
                    <span className="ml-4 text-white/30 group-last:hidden">|</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-12 h-12 bg-white/10 hover:bg-primary backdrop-blur-sm border border-white/20 text-white rounded-full shadow-lg flex items-center justify-center group transition-all duration-300 z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </footer>
  );
}