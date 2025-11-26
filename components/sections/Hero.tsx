"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Gloria Food configuration
const GLORIA_FOOD_CONFIG = {
  cuid: "282c52e6-d4a9-4a64-96ea-8dbd56e40dd1",
  ruid: "15f3c4e8-239f-4391-86d5-0685b3c97e04",
};

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/pictures/mask.jpg"
          alt="Rialto Social Restaurant"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        
        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>
      
      {/* Animated accent shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-3xl"
      />

      <div className="container mx-auto px-4 pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-full mb-8 shadow-lg"
          >
            <Star className="w-4 h-4 text-white fill-white" />
            <span className="text-sm font-medium">Authentic Italian Since 2001</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl"
          >
            Welcome to
            <span className="block text-primary mt-2">Rialto Social</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg"
          >
            A taste of Italy in Dorking. Traditional stone baked Neapolitan style 
            pizzas, plus karaoke and darts for unforgettable nights out.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-white shadow-lg">
              <Link href="/menu">
                View Our Menu
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            {/* Book a Table - with Gloria Food overlay */}
            <div className="relative">
              <span
                className="glf-button reservation absolute inset-0 z-10 opacity-0 cursor-pointer"
                data-glf-cuid={GLORIA_FOOD_CONFIG.cuid}
                data-glf-ruid={GLORIA_FOOD_CONFIG.ruid}
                data-glf-reservation="true"
                style={{ fontSize: 0 }}
              />
              <Button size="lg" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm cursor-pointer">
                Book a Table
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full flex flex-col items-center justify-center min-h-[140px]">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < 5 ? 'fill-accent text-accent' : 'text-white/30'}`} />
                  ))}
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white">4.8</p>
                <p className="text-sm text-white/70 mt-1">Rating</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full flex flex-col items-center justify-center min-h-[140px]">
                <div className="h-5 mb-2" /> {/* Spacer to match stars height */}
                <p className="text-3xl md:text-4xl font-bold text-white">127</p>
                <p className="text-sm text-white/70 mt-1">Happy Reviews</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full flex flex-col items-center justify-center min-h-[140px]">
                <div className="h-5 mb-2" /> {/* Spacer to match stars height */}
                <p className="text-3xl md:text-4xl font-bold text-white">23+</p>
                <p className="text-sm text-white/70 mt-1">Years of Excellence</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
