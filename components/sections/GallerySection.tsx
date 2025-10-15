"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
  // Food Dishes
  {
    id: 1,
    category: "food",
    title: "Pasta Primavera",
    src: "/pictures/rialto-social-pasta-primavera-shrimp-vegetables.jpg",
  },
  {
    id: 2,
    category: "food",
    title: "Pizza Margherita",
    src: "/pictures/rialto-social-italian-pizza-margherita-dorking.jpg",
  },
  {
    id: 3,
    category: "food",
    title: "Grilled Ribeye Steak",
    src: "/pictures/rialto-social-grilled-steak-fries-italian-restaurant-dorking.jpg",
  },
  {
    id: 4,
    category: "food",
    title: "Pasta Carbonara",
    src: "/pictures/rialto-social-pasta-carbonara-authentic-italian-dorking.jpg",
  },
  {
    id: 5,
    category: "food",
    title: "Seafood Linguine",
    src: "/pictures/rialto-social-seafood-pasta-linguine-gamberi.jpg",
  },
  {
    id: 6,
    category: "food",
    title: "Traditional Lasagna",
    src: "/pictures/rialto-social-lasagna-traditional-italian-cuisine.jpg",
  },
  {
    id: 7,
    category: "food",
    title: "Antipasti Selection",
    src: "/pictures/rialto-social-italian-antipasti-platter-dorking.jpg",
  },
  {
    id: 8,
    category: "food",
    title: "Seafood Risotto",
    src: "/pictures/rialto-social-risotto-seafood-italian-restaurant.jpg",
  },
  {
    id: 9,
    category: "food",
    title: "Pizza Quattro Formaggi",
    src: "/pictures/rialto-social-pizza-quattro-formaggi-dorking.jpg",
  },
  {
    id: 10,
    category: "food",
    title: "Bruschetta Classica",
    src: "/pictures/rialto-social-bruschetta-appetizer-italian.jpg",
  },
  {
    id: 11,
    category: "food",
    title: "Spinach & Ricotta Ravioli",
    src: "/pictures/rialto-social-ravioli-spinach-ricotta.jpg",
  },
  {
    id: 12,
    category: "food",
    title: "Penne Arrabbiata",
    src: "/pictures/rialto-social-pasta-arrabbiata-spicy-italian.jpg",
  },
  {
    id: 13,
    category: "food",
    title: "Osso Buco",
    src: "/pictures/rialto-social-osso-buco-traditional-italian.jpg",
  },
  {
    id: 14,
    category: "food",
    title: "Caprese Salad",
    src: "/pictures/rialto-social-caprese-salad-fresh-mozzarella.jpg",
  },
  {
    id: 15,
    category: "food",
    title: "Fresh Seafood Platter",
    src: "/pictures/rialto-social-seafood-platter-italian-cuisine.jpg",
  },
  {
    id: 16,
    category: "desserts",
    title: "Classic Tiramisu",
    src: "/pictures/rialto-social-tiramisu-dessert-authentic-italian.jpg",
  },
  {
    id: 17,
    category: "desserts",
    title: "Artisan Gelato",
    src: "/pictures/rialto-social-gelato-dessert-authentic-italian.jpg",
  },
  // Drinks
  {
    id: 18,
    category: "drinks",
    title: "Wine Collection",
    src: "/pictures/rialto-social-wine-selection-italian-restaurant.jpg",
  },
  {
    id: 19,
    category: "drinks",
    title: "Cocktail Creations",
    src: "/pictures/rialto-social-cocktails-bar-drinks-menu.jpg",
  },
  {
    id: 20,
    category: "drinks",
    title: "Italian Espresso",
    src: "/pictures/rialto-social-espresso-coffee-italian.jpg",
  },
  // Interior & Atmosphere
  {
    id: 21,
    category: "interior",
    title: "Main Dining Room",
    src: "/pictures/rialto-social-restaurant-interior-dining-room.jpg",
  },
  {
    id: 22,
    category: "interior",
    title: "Bar & Lounge Area",
    src: "/pictures/rialto-social-bar-area-italian-restaurant-dorking.jpg",
  },
  {
    id: 23,
    category: "interior",
    title: "Private Events Space",
    src: "/pictures/rialto-social-private-dining-area-events.jpg",
  },
  {
    id: 24,
    category: "interior",
    title: "Restaurant Entrance",
    src: "/pictures/rialto-social-restaurant-exterior-dorking.jpg",
  },
  {
    id: 25,
    category: "interior",
    title: "Al Fresco Dining",
    src: "/pictures/rialto-social-outdoor-seating-terrace.jpg",
  },
  // Entertainment
  {
    id: 26,
    category: "entertainment",
    title: "Karaoke Lounge",
    src: "/pictures/rialto-social-karaoke-room-entertainment-dorking.jpg",
  },
  {
    id: 27,
    category: "entertainment",
    title: "Darts Area",
    src: "/pictures/rialto-social-darts-area-entertainment-venue.jpg",
  },
  {
    id: 28,
    category: "entertainment",
    title: "Live Music Nights",
    src: "/pictures/rialto-social-live-music-entertainment.jpg",
  },
  {
    id: 29,
    category: "atmosphere",
    title: "Celebration Venue",
    src: "/pictures/rialto-social-event-celebration-party-venue.jpg",
  },
  // Team & Service
  {
    id: 30,
    category: "team",
    title: "Our Friendly Staff",
    src: "/pictures/rialto-social-team-staff-italian-restaurant.jpg",
  },
  {
    id: 31,
    category: "team",
    title: "Expert Chefs at Work",
    src: "/pictures/rialto-social-kitchen-chefs-cooking.jpg",
  },
  {
    id: 32,
    category: "atmosphere",
    title: "Happy Diners",
    src: "/pictures/rialto-social-happy-customers-dining-dorking.jpg",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
  { id: "interior", label: "Interior" },
  { id: "entertainment", label: "Entertainment" },
  { id: "team", label: "Team" },
  { id: "atmosphere", label: "Atmosphere" },
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const currentIndex = selectedImage 
    ? galleryImages.findIndex(img => img.id === selectedImage.id)
    : -1;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(galleryImages[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < galleryImages.length - 1) {
      setSelectedImage(galleryImages[currentIndex + 1]);
    }
  };

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
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through Rialto Social - from our handcrafted
            dishes to our warm, inviting atmosphere
          </p>
        </motion.div>

        {/* Category Filter */}
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

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                {/* Actual image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              disabled={currentIndex === galleryImages.length - 1}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <p className="text-2xl font-display font-bold text-white mb-2">
                    {selectedImage.title}
                  </p>
                  <p className="text-sm text-white/70">
                    {currentIndex + 1} / {galleryImages.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
