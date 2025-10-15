"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  "Fresh ingredients sourced daily",
  "Traditional recipes from Italy",
  "Wood-fired pizza oven",
  "Handmade pasta made in-house",
  "Karaoke nights Friday & Saturday",
  "Professional darts lounge",
  "Extensive wine selection",
  "Warm, welcoming atmosphere",
];

export function About() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                A Taste of Italy in{" "}
                <span className="text-primary">Dorking</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Nestled in the heart of Dorking, Rialto Social brings the
                authentic flavors and warm hospitality of Italy to Surrey. Our
                passion for traditional Italian cuisine drives everything we do.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                From our wood-fired pizzas to our handmade pasta, every dish is
                crafted with love and respect for Italian culinary traditions.
                We source the finest ingredients, many imported directly from
                Italy, to ensure an authentic dining experience.
              </p>
              <p className="text-muted-foreground">
                Our chefs bring decades of experience from kitchens across
                Italy, creating dishes that transport you to the sun-drenched
                piazzas of Rome, the bustling markets of Naples, and the cozy
                trattorias of Tuscany.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  {/* Placeholder for image */}
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Wood-fired Pizza
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                  {/* Placeholder for image */}
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Fresh Pasta
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  {/* Placeholder for image */}
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Restaurant Interior
                  </div>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                  {/* Placeholder for image */}
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Chef at Work
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
