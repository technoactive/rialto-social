"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const menuData = {
  antipasti: {
    title: "Antipasti",
    description: "Begin your Italian journey with our selection of appetizers",
    items: [
      {
        name: "Bruschetta Classica",
        description: "Toasted ciabatta with fresh tomatoes, basil, garlic, and extra virgin olive oil",
        price: "£8.50",
        vegetarian: true,
      },
      {
        name: "Carpaccio di Manzo",
        description: "Thinly sliced raw beef tenderloin with rocket, parmesan shavings, and truffle oil",
        price: "£14.00",
      },
      {
        name: "Burrata Pugliese",
        description: "Creamy burrata with heritage tomatoes, basil, and aged balsamic",
        price: "£12.50",
        vegetarian: true,
      },
      {
        name: "Antipasto Misto",
        description: "Selection of Italian cured meats, cheeses, olives, and grilled vegetables",
        price: "£18.00 (for 2)",
      },
      {
        name: "Calamari Fritti",
        description: "Crispy fried squid rings with lemon aioli and fresh herbs",
        price: "£11.00",
      },
    ],
  },
  pasta: {
    title: "Pasta",
    description: "Handmade fresh pasta, crafted daily in our kitchen",
    items: [
      {
        name: "Spaghetti Carbonara",
        description: "Classic Roman dish with egg yolk, guanciale, pecorino romano, and black pepper",
        price: "£13.50",
      },
      {
        name: "Tagliatelle al Tartufo",
        description: "Fresh tagliatelle with black truffle, cream, and parmigiano reggiano",
        price: "£18.00",
        vegetarian: true,
      },
      {
        name: "Linguine alle Vongole",
        description: "Linguine with fresh clams, white wine, garlic, parsley, and chili",
        price: "£16.50",
      },
      {
        name: "Penne all'Arrabbiata",
        description: "Penne in spicy tomato sauce with garlic, chili, and fresh basil",
        price: "£11.50",
        vegetarian: true,
        vegan: true,
      },
      {
        name: "Ravioli di Ricotta e Spinaci",
        description: "Homemade ravioli filled with ricotta and spinach in sage butter",
        price: "£14.50",
        vegetarian: true,
      },
      {
        name: "Paccheri all'Amatriciana",
        description: "Large tube pasta with guanciale, tomatoes, pecorino, and chili",
        price: "£13.00",
      },
    ],
  },
  pizza: {
    title: "Pizza",
    description: "Authentic Neapolitan pizzas from our wood-fired oven",
    items: [
      {
        name: "Margherita",
        description: "San Marzano tomatoes, fior di latte mozzarella, fresh basil, extra virgin olive oil",
        price: "£11.00",
        vegetarian: true,
      },
      {
        name: "Quattro Formaggi",
        description: "Mozzarella, gorgonzola, parmesan, taleggio with honey drizzle",
        price: "£14.50",
        vegetarian: true,
      },
      {
        name: "Diavola",
        description: "Tomato sauce, mozzarella, spicy Calabrian salami, chili oil",
        price: "£13.50",
      },
      {
        name: "Prosciutto e Funghi",
        description: "Tomato sauce, mozzarella, prosciutto cotto, mushrooms",
        price: "£14.00",
      },
      {
        name: "Capricciosa",
        description: "Tomato sauce, mozzarella, ham, mushrooms, artichokes, olives",
        price: "£15.00",
      },
      {
        name: "Vegetariana",
        description: "Tomato sauce, mozzarella, grilled vegetables, rocket",
        price: "£12.50",
        vegetarian: true,
      },
    ],
  },
  secondi: {
    title: "Secondi Piatti",
    description: "Main courses from land and sea",
    items: [
      {
        name: "Osso Buco alla Milanese",
        description: "Slow-braised veal shank with saffron risotto and gremolata",
        price: "£28.00",
      },
      {
        name: "Branzino al Sale",
        description: "Whole sea bass baked in sea salt, served with lemon and herbs",
        price: "£26.00",
      },
      {
        name: "Pollo alla Cacciatora",
        description: "Hunter's chicken with tomatoes, olives, capers, and rosemary",
        price: "£18.50",
      },
      {
        name: "Melanzane alla Parmigiana",
        description: "Layers of aubergine, tomato sauce, mozzarella, and parmesan",
        price: "£16.00",
        vegetarian: true,
      },
      {
        name: "Tagliata di Manzo",
        description: "Sliced beef sirloin with rocket, cherry tomatoes, and aged balsamic",
        price: "£32.00",
      },
    ],
  },
  dolci: {
    title: "Dolci",
    description: "Traditional Italian desserts to complete your meal",
    items: [
      {
        name: "Tiramisu",
        description: "Classic coffee-soaked savoiardi with mascarpone cream",
        price: "£7.50",
        vegetarian: true,
      },
      {
        name: "Panna Cotta",
        description: "Vanilla bean panna cotta with berry compote",
        price: "£6.50",
        vegetarian: true,
      },
      {
        name: "Cannoli Siciliani",
        description: "Crispy shells filled with sweet ricotta and pistachios",
        price: "£8.00",
        vegetarian: true,
      },
      {
        name: "Affogato",
        description: "Vanilla gelato 'drowned' in hot espresso",
        price: "£5.50",
        vegetarian: true,
      },
      {
        name: "Torta della Nonna",
        description: "Grandmother's lemon tart with pine nuts",
        price: "£7.00",
        vegetarian: true,
      },
    ],
  },
};

const categories = [
  { id: "antipasti", label: "Antipasti" },
  { id: "pasta", label: "Pasta" },
  { id: "pizza", label: "Pizza" },
  { id: "secondi", label: "Secondi" },
  { id: "dolci", label: "Dolci" },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("antipasti");

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

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-200",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              {menuData[activeCategory as keyof typeof menuData].title}
            </h2>
            <p className="text-muted-foreground">
              {menuData[activeCategory as keyof typeof menuData].description}
            </p>
          </div>

          <div className="space-y-6">
            {menuData[activeCategory as keyof typeof menuData].items.map(
              (item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-card rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                        {item.name}
                        {item.vegetarian && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            V
                          </span>
                        )}
                        {item.vegan && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            VG
                          </span>
                        )}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="text-lg font-semibold text-primary">
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              )
            )}
          </div>
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
                VG
              </span>
              Vegan
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
