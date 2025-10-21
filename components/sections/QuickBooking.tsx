"use client";

import { motion } from "framer-motion";
import { Clock, ChefHat, Mic2, Target, Phone, Gamepad2, ArrowRight } from "lucide-react";
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
    <section className="py-16 md:py-24 relative bg-gradient-to-b from-accent/5 to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6"
          >
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Book Now</span>
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Booking</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
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
                  "relative block p-6 rounded-2xl transition-all duration-300 h-full",
                  "bg-card/50 backdrop-blur-sm",
                  "hover:shadow-2xl hover:scale-105 hover:-translate-y-1",
                  "border border-border/50 hover:border-primary/30",
                  "flex flex-col group overflow-hidden"
                )}
              >
                {/* Background gradient effect on hover */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  option.color
                )} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with background */}
                  <div className="mb-4">
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300",
                      option.color,
                      "group-hover:scale-110 group-hover:shadow-lg"
                    )}>
                      <option.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {option.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-muted-foreground">{option.availability}</span>
                    </div>
                    <motion.div
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </motion.div>
                  </div>
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
