"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    id: 1,
    category: "food",
    title: "Fresh Pasta Primavera",
    description: "Handmade pasta with shrimp and vegetables",
    src: "/pictures/rialto-social-pasta-primavera-shrimp-vegetables.jpg",
  },
  {
    id: 2,
    category: "food",
    title: "Margherita Pizza",
    description: "Authentic Neapolitan style",
    src: "/pictures/rialto-social-italian-pizza-margherita-dorking.jpg",
  },
  {
    id: 3,
    category: "interior",
    title: "Main Dining Area",
    description: "Warm and inviting atmosphere",
    src: "/pictures/rialto-social-restaurant-interior-dining-room.jpg",
  },
  {
    id: 4,
    category: "food",
    title: "Tiramisu",
    description: "Classic Italian dessert",
    src: "/pictures/rialto-social-tiramisu-dessert-authentic-italian.jpg",
  },
  {
    id: 5,
    category: "drinks",
    title: "Wine Selection",
    description: "Curated Italian wines",
    src: "/pictures/rialto-social-wine-selection-italian-restaurant.jpg",
  },
  {
    id: 6,
    category: "interior",
    title: "Private Dining Room",
    description: "Perfect for special occasions",
    src: "/pictures/rialto-social-private-dining-area-events.jpg",
  },
  {
    id: 7,
    category: "food",
    title: "Antipasti Platter",
    description: "Selection of Italian starters",
    src: "/pictures/rialto-social-italian-antipasti-platter-dorking.jpg",
  },
  {
    id: 8,
    category: "team",
    title: "Our Team",
    description: "Passionate about Italian cuisine",
    src: "/pictures/rialto-social-team-staff-italian-restaurant.jpg",
  },
  {
    id: 9,
    category: "food",
    title: "Caprese Salad",
    description: "Fresh mozzarella and tomatoes",
    src: "/pictures/rialto-social-caprese-salad-fresh-mozzarella.jpg",
  },
  {
    id: 10,
    category: "entertainment",
    title: "Karaoke Night",
    description: "Friday & Saturday fun",
    src: "/pictures/rialto-social-karaoke-room-entertainment-dorking.jpg",
  },
  {
    id: 11,
    category: "entertainment",
    title: "Darts Lounge",
    description: "Challenge your friends",
    src: "/pictures/rialto-social-darts-area-entertainment-venue.jpg",
  },
  {
    id: 12,
    category: "food",
    title: "Grilled Steak",
    description: "Premium cuts with sides",
    src: "/pictures/rialto-social-grilled-steak-fries-italian-restaurant-dorking.jpg",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "drinks", label: "Drinks" },
  { id: "interior", label: "Interior" },
  { id: "entertainment", label: "Entertainment" },
  { id: "team", label: "Team" },
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <p className="font-medium">{image.title}</p>
                    <p className="text-sm">{image.category}</p>
                  </div>
                </div>
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
              <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-2xl font-display font-bold mb-2">
                    {selectedImage.title}
                  </p>
                  <p className="text-lg opacity-90">{selectedImage.description}</p>
                  <p className="text-sm opacity-70 mt-4">
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
