"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { aLaCarteData, pizzaExtras, lunchSpecialData, cocktailsData, dessertsData, coffeeData, teaData, otherBeverages } from "@/lib/data/menu";
import type { DietaryTag } from "@/lib/types/menu";
import { Martini, Cookie, UtensilsCrossed, Clock } from "lucide-react";

const menuTypes = [
  { id: "lunch", label: "Lunch Special", icon: Clock },
  { id: "food", label: "À La Carte", icon: UtensilsCrossed },
  { id: "cocktails", label: "Cocktails", icon: Martini },
  { id: "desserts", label: "Desserts & Coffee", icon: Cookie },
];

const dietaryTags: Record<DietaryTag, { label: string; className: string }> = {
  V: { label: "V", className: "bg-green-100 text-green-800" },
  VE: { label: "VE", className: "bg-green-100 text-green-800" },
  GF: { label: "GF", className: "bg-blue-100 text-blue-800" },
  F: { label: "F", className: "bg-amber-100 text-amber-800" },
};

// Helper function to format price
function formatPrice(price: number | string): string {
  if (typeof price === "number") {
    return `£${price.toFixed(2)}`;
  }
  return price;
}

export function MenuSection() {
  const [activeMenuType, setActiveMenuType] = useState("food");
  const [activeCategory, setActiveCategory] = useState("antipasti");

  // Get categories based on menu type
  const getCategories = () => {
    if (activeMenuType === "food") {
      return aLaCarteData.map(section => ({
        id: section.id,
        label: section.title.replace(/[🥖🥗🍝🍕🍽🍔🍴🔥]/g, '').trim()
      }));
    }
    return [];
  };

  const categories = getCategories();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic Italian cuisine made with passion, using the finest
            ingredients imported from Italy and sourced locally
          </p>
        </motion.div>

        {/* Menu Type Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {menuTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => {
                  setActiveMenuType(type.id);
                  if (type.id === "food") setActiveCategory("antipasti");
                }}
                className={cn(
                  "px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2",
                  activeMenuType === type.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                )}
              >
                <Icon className="w-4 h-4" />
                {type.label}
              </button>
            );
          })}
        </motion.div>

        {/* Category Navigation for À La Carte */}
        {activeMenuType === "food" && categories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === category.id
                    ? "bg-primary/10 text-primary border border-primary"
                    : "bg-card hover:bg-card/80 text-foreground border border-border"
                )}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        )}

        {/* Menu Content */}
        <motion.div
          key={`${activeMenuType}-${activeCategory}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {activeMenuType === "lunch" && (
            <div>
              <div className="mb-8 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                  {lunchSpecialData.title}
                </h2>
                <p className="text-lg text-primary font-semibold mb-2">
                  {lunchSpecialData.price} • Served until {lunchSpecialData.servedUntil}
                </p>
              </div>
              
              {/* Primo */}
              <div className="mb-10">
                <h3 className="font-display text-2xl font-bold mb-4 text-center">Primo</h3>
                <div className="space-y-4">
                  {lunchSpecialData.sections.primo.map((item) => (
                    <div key={item.id} className="bg-card rounded-lg p-4">
                      <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Secondi */}
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-center">Secondi</h3>
                <div className="space-y-4">
                  {lunchSpecialData.sections.secondi.map((item) => (
                    <div key={item.id} className="bg-card rounded-lg p-4">
                      <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeMenuType === "food" && (
            <>
              {aLaCarteData
                .filter((section) => section.id === activeCategory)
                .map((section) => (
                  <div key={section.id}>
                    <div className="mb-8 text-center">
                      <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                        {section.title}
                      </h2>
                      {section.subtitle && (
                        <p className="text-muted-foreground">{section.subtitle}</p>
                      )}
                    </div>

                    <div className="space-y-6">
                      {section.items.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="bg-card rounded-lg p-6 hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                                {item.name}
                                {item.dietary?.map((tag) => (
                                  <span
                                    key={tag}
                                    className={cn(
                                      "text-xs px-2 py-1 rounded-full",
                                      dietaryTags[tag].className
                                    )}
                                  >
                                    {dietaryTags[tag].label}
                                  </span>
                                ))}
                              </h3>
                              {item.description && (
                                <p className="text-muted-foreground">{item.description}</p>
                              )}
                            </div>
                            <span className="text-lg font-semibold text-primary whitespace-nowrap">
                              {formatPrice(item.price)}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Pizza Extras */}
                    {section.id === "pizze" && (
                      <div className="mt-8 bg-secondary/50 rounded-lg p-6">
                        <h4 className="font-semibold mb-3">Customise Your Pizza</h4>
                        <div className="space-y-2 text-sm">
                          <p>
                            <span className="font-medium">Extra Toppings (£{pizzaExtras.extraToppingPrice} each):</span>{" "}
                            {pizzaExtras.toppings.join(", ")}
                          </p>
                          <p>
                            <span className="font-medium">Crust Dippers (£{pizzaExtras.dipperPrice} each):</span>{" "}
                            {pizzaExtras.crustDippers.join(", ")}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </>
          )}

          {activeMenuType === "cocktails" && (
            <div>
              <div className="mb-10">
                <h3 className="font-display text-2xl font-bold mb-4 text-center">
                  🍸 The Classic Collection · £11
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {cocktailsData
                    .filter((item) => item.category === "classic")
                    .map((item) => (
                      <div key={item.id} className="bg-card rounded-lg p-4">
                        <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-center">
                  🍹 Recklessly Refreshing · £11
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {cocktailsData
                    .filter((item) => item.category === "refreshing")
                    .map((item) => (
                      <div key={item.id} className="bg-card rounded-lg p-4">
                        <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {activeMenuType === "desserts" && (
            <div>
              {/* Desserts */}
              <div className="mb-10">
                <h3 className="font-display text-2xl font-bold mb-4 text-center">
                  🍮 Menù dei Dolci
                </h3>
                <div className="space-y-6">
                  {dessertsData.map((item) => (
                    <div key={item.id} className="bg-card rounded-lg p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">
                            {item.name}
                            {item.vegan && (
                              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                VE
                              </span>
                            )}
                          </h4>
                          <p className="text-muted-foreground italic">{item.description}</p>
                        </div>
                        <span className="text-lg font-semibold text-primary whitespace-nowrap">
                          £{item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coffee */}
              <div className="mb-10">
                <h3 className="font-display text-2xl font-bold mb-4 text-center">
                  ☕ Caffè & Tisane
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Caffè Classici</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {coffeeData
                      .filter((item) => !item.description || item.id === "affogato" || item.id === "caffe-frappe")
                      .map((item) => (
                        <div key={item.id} className="flex justify-between items-start bg-card rounded-lg p-3">
                          <div className="flex-1">
                            <span className="font-medium">{item.name}</span>
                            {item.description && (
                              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                            )}
                          </div>
                          <span className="text-primary font-semibold ml-4">
                            £{item.price.toFixed(2)}
                            {item.double && ` / £${item.double.toFixed(2)}`}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Caffè Speciali</h4>
                  <div className="space-y-3">
                    {coffeeData
                      .filter((item) => item.id.includes("coffee") && item.id !== "irish-coffee")
                      .map((item) => (
                        <div key={item.id} className="flex justify-between items-start bg-card rounded-lg p-3">
                          <div className="flex-1">
                            <span className="font-medium">{item.name}</span>
                            {item.description && (
                              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                            )}
                          </div>
                          <span className="text-primary font-semibold ml-4">
                            £{item.price.toFixed(2)}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Tisane & Infusi</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {teaData.map((item) => (
                      <div key={item.id} className="flex justify-between items-center bg-card rounded-lg p-3">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-primary font-semibold">£{item.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Altro</h4>
                  {otherBeverages.map((item) => (
                    <div key={item.id} className="flex justify-between items-start bg-card rounded-lg p-3">
                      <div className="flex-1">
                        <span className="font-medium">{item.name}</span>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        )}
                      </div>
                      <span className="text-primary font-semibold ml-4">
                        £{item.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Dietary Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-semibold">
                V
              </span>
              Vegetarian
            </span>
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-semibold">
                VE
              </span>
              Vegan
            </span>
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-semibold">
                GF
              </span>
              Gluten Free
            </span>
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-xs font-semibold">
                F
              </span>
              Contains Fish
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Please inform us of any allergies or dietary requirements
          </p>
        </motion.div>
      </div>
    </section>
  );
}
