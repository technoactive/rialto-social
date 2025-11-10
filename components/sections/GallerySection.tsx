"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryImages = [
  // Food Dishes
  {
    id: 1,
    category: "food",
    title: "Margherita Pizza",
    src: "/pictures/rialto-margherita-pizza.jpg",
  },
  {
    id: 2,
    category: "food",
    title: "Pasta Carbonara",
    src: "/pictures/rialto-pasta-carbonara.jpg",
  },
  {
    id: 3,
    category: "food",
    title: "Seafood Linguine",
    src: "/pictures/rialto-seafood-linguine.jpg",
  },
  {
    id: 4,
    category: "food",
    title: "Classic Bruschetta",
    src: "/pictures/rialto-bruschetta-appetizer.jpg",
  },
  {
    id: 5,
    category: "food",
    title: "Seafood Risotto",
    src: "/pictures/rialto-risotto-seafood.jpg",
  },
  {
    id: 6,
    category: "food",
    title: "Grilled Steak",
    src: "/pictures/rialto-grilled-steak.jpg",
  },
  {
    id: 7,
    category: "food",
    title: "Antipasti Platter",
    src: "/pictures/rialto-antipasti-platter.jpg",
  },
  {
    id: 8,
    category: "food",
    title: "Fresh Pasta",
    src: "/pictures/rialto-fresh-pasta.jpg",
  },
  // Desserts
  {
    id: 9,
    category: "desserts",
    title: "Classic Tiramisu",
    src: "/pictures/rialto-tiramisu-dessert.jpg",
  },
  {
    id: 10,
    category: "desserts",
    title: "Artisanal Gelato",
    src: "/pictures/rialto-gelato-display.jpg",
  },
  // Drinks
  {
    id: 11,
    category: "drinks",
    title: "Wine Selection",
    src: "/pictures/rialto-wine-selection.jpg",
  },
  {
    id: 12,
    category: "drinks",
    title: "Cocktail Bar",
    src: "/pictures/rialto-cocktail-bar.jpg",
  },
  {
    id: 13,
    category: "drinks",
    title: "Italian Espresso",
    src: "/pictures/rialto-espresso-coffee.jpg",
  },
  // Interior & Atmosphere
  {
    id: 14,
    category: "interior",
    title: "Restaurant Interior",
    src: "/pictures/rialto-restaurant-interior.jpg",
  },
  {
    id: 15,
    category: "interior",
    title: "Bar Area",
    src: "/pictures/rialto-bar-area.jpg",
  },
  {
    id: 16,
    category: "interior",
    title: "Private Dining Room",
    src: "/pictures/rialto-private-dining-room.jpg",
  },
  {
    id: 17,
    category: "interior",
    title: "Outdoor Terrace",
    src: "/pictures/rialto-outdoor-terrace.jpg",
  },
  // Entertainment
  {
    id: 18,
    category: "entertainment",
    title: "Karaoke Room",
    src: "/pictures/rialto-karaoke-room.jpg",
  },
  {
    id: 19,
    category: "entertainment",
    title: "Interactive Darts",
    src: "/pictures/rialto-darts-area.jpg",
  },
  {
    id: 20,
    category: "entertainment",
    title: "PS5 Gaming Room",
    src: "/pictures/rialto-ps5-gaming-room.jpg",
  },
  // Team & Service
  {
    id: 21,
    category: "team",
    title: "Our Friendly Team",
    src: "/pictures/rialto-team-staff.jpg",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

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
            Take a visual journey through Rialto Social - from our authentic
            dishes to our warm, inviting atmosphere
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
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
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:brightness-110 transition-all duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Previous button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className={cn(
                  "absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors",
                  currentIndex === 0 && "opacity-50 cursor-not-allowed"
                )}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              {/* Next button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className={cn(
                  "absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors",
                  currentIndex === galleryImages.length - 1 && "opacity-50 cursor-not-allowed"
                )}
                disabled={currentIndex === galleryImages.length - 1}
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-5xl h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
                
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}