"use client";

import { motion } from "framer-motion";
import { Star, Quote, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Food Critic",
    content: "Rialto Social captures the essence of Italian dining perfectly. The authentic Italian cuisine is exceptional, and the atmosphere transports you straight to Italy.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Regular Customer",
    content: "My family's favorite restaurant in Dorking. The pizzas are authentic and delicious. The staff always makes us feel welcome.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Local Guide",
    content: "A hidden gem in Surrey. The truffle pasta is to die for, and their wine selection is impressive. Perfect for both romantic dinners and family gatherings.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6"
          >
            <Star className="w-4 h-4 fill-primary" />
            <span className="text-sm font-medium">Customer Reviews</span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Guests Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/20 overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quote Icon */}
                <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/10 fill-primary/10 group-hover:text-primary/20 group-hover:fill-primary/20 transition-colors duration-300" />

                {/* Rating */}
                <div className="relative z-10 flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 text-accent fill-accent" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="relative z-10 text-foreground/80 mb-8 text-lg leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-semibold text-lg text-white shadow-lg">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-lg opacity-50" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl" />
            
            <div className="relative inline-flex items-center gap-6 bg-card/80 backdrop-blur-sm rounded-2xl px-10 py-6 shadow-xl border border-border/50">
              <div className="flex flex-col items-center">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">4.8</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-left">
                <p className="font-semibold text-lg">Excellent Rating</p>
                <p className="text-sm text-muted-foreground">
                  Based on 127 reviews
                </p>
              </div>
            </div>
          </div>
          
          {/* Gallery CTA */}
          <Button asChild variant="outline" className="mt-6 group">
            <Link href="/gallery" className="inline-flex items-center gap-2">
              <Images className="w-4 h-4" />
              See Our Restaurant Gallery
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
