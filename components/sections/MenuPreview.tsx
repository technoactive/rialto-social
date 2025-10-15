"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const menuCategories = [
  {
    name: "Antipasti",
    description: "Start your journey with our selection of appetizers",
    items: [
      { name: "Bruschetta Classica", price: "£8.50", description: "Toasted bread with tomatoes, basil, and garlic" },
      { name: "Carpaccio di Manzo", price: "£14.00", description: "Thinly sliced raw beef with rocket and parmesan" },
      { name: "Burrata Pugliese", price: "£12.50", description: "Creamy burrata with cherry tomatoes and basil" },
    ],
  },
  {
    name: "Pasta",
    description: "Handmade fresh pasta, crafted daily",
    items: [
      { name: "Spaghetti Carbonara", price: "£13.50", description: "Classic Roman dish with egg, guanciale, and pecorino" },
      { name: "Tagliatelle al Tartufo", price: "£18.00", description: "Fresh tagliatelle with truffle cream sauce" },
      { name: "Linguine alle Vongole", price: "£16.50", description: "Linguine with fresh clams, garlic, and white wine" },
    ],
  },
  {
    name: "Pizza",
    description: "Authentic Neapolitan style pizzas",
    items: [
      { name: "Margherita", price: "£11.00", description: "San Marzano tomatoes, mozzarella, basil" },
      { name: "Quattro Formaggi", price: "£14.50", description: "Four cheese blend with honey drizzle" },
      { name: "Diavola", price: "£13.50", description: "Spicy salami, mozzarella, chili oil" },
    ],
  },
];

export function MenuPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic Italian dishes,
            made with passion and the finest ingredients
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-display text-2xl font-bold mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {category.description}
              </p>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + itemIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <span className="text-primary font-semibold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="group">
            <Link href="/menu">
              View Full Menu
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
