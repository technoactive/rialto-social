"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { aLaCarteData } from "@/lib/data/menu";

// Helper function to format price
function formatPrice(price: number | string): string {
  if (typeof price === "number") {
    return `£${price.toFixed(2)}`;
  }
  return price;
}

// Select featured items from actual menu data
const menuCategories = [
  {
    name: "Antipasti",
    description: "Start your journey with our selection of appetizers",
    items: aLaCarteData.find(s => s.id === "antipasti")?.items.slice(0, 3).map(item => ({
      name: item.name,
      price: formatPrice(item.price),
      description: item.description || ""
    })) || []
  },
  {
    name: "Pasta & Risotti",
    description: "Handmade fresh pasta, crafted daily",
    items: aLaCarteData.find(s => s.id === "pasta-risotti")?.items.slice(0, 3).map(item => ({
      name: item.name,
      price: formatPrice(item.price),
      description: item.description || ""
    })) || []
  },
  {
    name: "Pizza",
    description: "Authentic traditional Italian pizzas",
    items: aLaCarteData.find(s => s.id === "pizze")?.items.slice(0, 3).map(item => ({
      name: item.name,
      price: formatPrice(item.price),
      description: item.description || ""
    })) || []
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
