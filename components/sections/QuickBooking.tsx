"use client";

import { motion } from "framer-motion";
import { Clock, ChefHat, Mic2, Target, Phone, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const bookingOptions = [
  {
    id: "restaurant",
    icon: ChefHat,
    title: "Book a Table",
    description: "Reserve your dining experience",
    availability: "Daily - See hours",
    color: "bg-primary/10 hover:bg-primary/20",
    link: "/contact?service=dining",
  },
  {
    id: "karaoke",
    icon: Mic2,
    title: "Book Karaoke",
    description: "Reserve private karaoke room",
    availability: "All Week - All Day",
    color: "bg-accent/10 hover:bg-accent/20",
    link: "/contact?service=karaoke",
  },
  {
    id: "darts",
    icon: Target,
    title: "Book Darts",
    description: "Reserve your dartboard",
    availability: "Daily from 12 PM",
    color: "bg-accent/10 hover:bg-accent/20",
    link: "/contact?service=darts",
  },
  {
    id: "ps5",
    icon: Gamepad2,
    title: "Book PS5 Room",
    description: "Reserve gaming session",
    availability: "Daily",
    color: "bg-primary/10 hover:bg-primary/20",
    link: "/contact?service=ps5",
  },
];

export function QuickBooking() {
  return (
    <section className="py-12 md:py-16 bg-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Quick <span className="text-primary">Booking</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Choose your experience and book in seconds
          </p>
        </motion.div>

        {/* Booking Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {bookingOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.98 }}
              className="relative h-full"
            >
              <Link
                href={option.link}
                className={cn(
                  "block p-6 rounded-xl transition-all duration-200 h-full",
                  "bg-card hover:shadow-lg",
                  option.color,
                  "border border-border hover:border-primary/20",
                  "flex flex-col"
                )}
              >
                <option.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-1">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 flex-grow">
                  {option.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
                  <Clock className="w-3 h-3" />
                  <span>{option.availability}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground mb-3">
            Prefer to book by phone?
          </p>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="tel:+441306742885">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span> 01306 742885
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
