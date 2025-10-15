"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, ChefHat, Mic2, Target, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const bookingOptions = [
  {
    id: "restaurant",
    icon: ChefHat,
    title: "Book a Table",
    description: "Reserve your dining experience",
    availability: "Daily 12 PM - 10 PM",
    color: "bg-red-500/10 hover:bg-red-500/20",
    link: "/contact?service=dining",
  },
  {
    id: "karaoke",
    icon: Mic2,
    title: "Book Karaoke",
    description: "Reserve main stage or private room",
    availability: "Fri-Sat 8 PM - 1 AM",
    color: "bg-purple-500/10 hover:bg-purple-500/20",
    link: "/contact?service=karaoke",
  },
  {
    id: "darts",
    icon: Target,
    title: "Book Darts",
    description: "Reserve your dartboard",
    availability: "Daily from 12 PM",
    color: "bg-green-500/10 hover:bg-green-500/20",
    link: "/contact?service=darts",
  },
];

export function QuickBooking() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-16 bg-secondary/20">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {bookingOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <Link
                href={option.link}
                className={cn(
                  "block p-6 rounded-xl transition-all duration-200",
                  "bg-card hover:shadow-lg",
                  option.color,
                  "border border-border hover:border-primary/20"
                )}
                onClick={() => setSelectedService(option.id)}
              >
                <option.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-1">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {option.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
            <a href="tel:+44-xxx-xxx-xxxx">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span> +44 XXX XXX XXXX
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
