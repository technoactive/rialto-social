"use client";

import { motion } from "framer-motion";
import { ChefHat, Heart, MapPin, Award } from "lucide-react";

const values = [
  {
    icon: ChefHat,
    title: "Authentic Recipes",
    description: "Our chefs bring generations of Italian culinary tradition to every dish, using time-honored recipes passed down through families.",
  },
  {
    icon: Heart,
    title: "Passion for Quality",
    description: "We source the finest ingredients, many imported directly from Italy, to ensure an authentic taste in every bite.",
  },
  {
    icon: MapPin,
    title: "Local Community",
    description: "Proud to be part of Dorking's vibrant dining scene, we've built lasting relationships with local suppliers and our wonderful guests.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Our commitment to excellence has earned us recognition and, more importantly, the loyalty of our valued customers.",
  },
];

export function AboutPageSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey from the heart of Italy to the heart of Dorking
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              From Italy with Love
            </h2>
            <p className="text-muted-foreground">
              Founded in 2020, Rialto Social was born from a dream to bring the
              authentic flavors and warm hospitality of Italy to Surrey. Our
              founders, inspired by their travels through Italy and the
              unforgettable meals shared with locals, wanted to recreate that
              same magical experience here in Dorking.
            </p>
            <p className="text-muted-foreground">
              The name &ldquo;Rialto Social&rdquo; pays homage to Venice&apos;s famous Rialto
              Bridge, a historic gathering place where people have come together
              for centuries. Just like its namesake, our restaurant serves as a
              bridge between cultures and a social hub where friends and
              families create lasting memories over exceptional food.
            </p>
            <p className="text-muted-foreground">
              Every dish on our menu tells a story - from our grandmother&apos;s
              secret pasta recipes to the wood-fired pizza techniques learned
              from master pizzaiolos in Naples. We&apos;ve carefully curated each
              element of our restaurant to transport you to Italy, from the
              warm, rustic décor to the carefully selected Italian wines.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="flex items-center justify-center h-full text-muted-foreground text-center p-8">
                <p className="text-lg">Restaurant Interior Photo</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Behind every great meal is a passionate team dedicated to making
            your dining experience unforgettable
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6"
            >
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Chef Photo</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Marco Rossi</h3>
              <p className="text-sm text-primary mb-2">Head Chef</p>
              <p className="text-sm text-muted-foreground">
                20 years of experience in Italian kitchens from Rome to Milan
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6"
            >
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Manager Photo</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Sofia Bianchi</h3>
              <p className="text-sm text-primary mb-2">Restaurant Manager</p>
              <p className="text-sm text-muted-foreground">
                Ensuring every guest feels like family since day one
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6"
            >
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Sommelier Photo</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">Giuseppe Verdi</h3>
              <p className="text-sm text-primary mb-2">Sommelier</p>
              <p className="text-sm text-muted-foreground">
                Curating the perfect wine pairings for your meal
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
