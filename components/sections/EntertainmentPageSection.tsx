"use client";

import { motion } from "framer-motion";
import { Mic2, Target, Music, Trophy, Users, Calendar, Star, ChevronRight, Award, Heart, Smartphone, Globe, Phone, Check, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const karafunFeatures = [
  {
    icon: Music,
    title: "44,000+ Songs",
    description: "The UK&apos;s largest karaoke catalog with songs in 23 languages"
  },
  {
    icon: Smartphone,
    title: "Mobile App Control",
    description: "Queue songs from your phone with the free Karafun app"
  },
  {
    icon: Globe,
    title: "Updated Weekly",
    description: "New releases added every week - sing the latest hits"
  }
];

const entertainmentHighlights = [
  {
    stat: "1",
    label: "Private Karaoke Room",
    icon: Mic2
  },
  {
    stat: "4",
    label: "Pro Dart Boards",
    icon: Target
  },
  {
    stat: "44K+",
    label: "Karaoke Songs",
    icon: Music
  },
  {
    stat: "50+",
    label: "Weekly Players",
    icon: Users
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Best karaoke setup in Surrey! The Karafun system is amazing and the private rooms are perfect for parties."
  },
  {
    name: "James K.",
    rating: 5,
    text: "Love playing darts here. Great atmosphere, well-maintained boards, and excellent Italian food!"
  },
  {
    name: "Emma L.",
    rating: 5,
    text: "Perfect venue for celebrations! The private karaoke room is amazing and the PS5 gaming adds extra fun. Highly recommend!"
  }
];

export function EntertainmentPageSection() {
  const [activeTab, setActiveTab] = useState<"karaoke" | "darts" | "ps5">("karaoke");
  const [heroSlide, setHeroSlide] = useState<"karaoke" | "darts">("karaoke");
  
  // Auto-slide every 3 seconds for hero only
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide(prev => prev === "karaoke" ? "darts" : "karaoke");
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Carousel Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Auto-sliding carousel background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              x: heroSlide === "karaoke" ? "0%" : "-50%"
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex w-[200%] h-full"
          >
            {/* Karaoke Slide */}
            <div className="relative w-1/2 h-full">
              <Image
                src="/pictures/entertainment/karaoke.jpg"
                alt="Karaoke at Rialto Social"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>
            
            {/* Darts Slide */}
            <div className="relative w-1/2 h-full">
              <Image
                src="/pictures/entertainment/darts.jpg"
                alt="Darts at Rialto Social"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>
          </motion.div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Dynamic content based on current slide */}
            <motion.div
              key={heroSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {heroSlide === "karaoke" ? (
                <>
                  <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 mb-8 shadow-2xl">
                    <Mic2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-gray-800">Karafun Premium Partner</span>
                  </div>
                  
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.5)'}}>
                    Karaoke Experience
                    <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                      Sing Your Heart Out
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-semibold" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'}}>
                    Europe&apos;s #1 karaoke system with 44,000+ songs in 23 languages. 
                    Private room available for your special celebrations.
                  </p>
                </>
              ) : (
                <>
                  <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 mb-8 shadow-2xl">
                    <Target className="w-4 h-4 text-accent" />
                    <span className="text-sm font-bold text-gray-800">Interactive Darts Venue</span>
                  </div>
                  
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.5)'}}>
                    Professional Darts
                    <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                      Hit The Bullseye
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-semibold" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'}}>
                    4 professional dartboards with proper lighting and regulation distance. 
                    Perfect for casual play and fun with friends.
                  </p>
                </>
              )}
            </motion.div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-3 mb-10">
              <button
                onClick={() => setHeroSlide("karaoke")}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  heroSlide === "karaoke" ? "bg-white w-8" : "bg-white/40"
                )}
                aria-label="Show karaoke slide"
              />
              <button
                onClick={() => setHeroSlide("darts")}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  heroSlide === "darts" ? "bg-white w-8" : "bg-white/40"
                )}
                aria-label="Show darts slide"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-2xl">
                  <Link href="/contact" className="flex items-center gap-2">
                    Book Entertainment <ChevronRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-black/20 backdrop-blur border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-6 text-lg shadow-2xl transition-all">
                  <a href="tel:+441306742885" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" /> 01306 742885
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Entertainment Stats */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {entertainmentHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300 text-center"
              >
                <item.icon className={cn(
                  "w-10 h-10 mx-auto mb-3",
                  index % 2 === 0 ? "text-primary" : "text-accent"
                )} />
                <div className={cn(
                  "text-3xl font-bold mb-1",
                  index % 2 === 0 ? "text-primary" : "text-accent"
                )}>{item.stat}</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider font-semibold">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vibrant Tab Navigation */}
      <section className="py-12 bg-gradient-to-b from-white via-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-4 p-2 bg-white rounded-2xl shadow-xl border border-gray-100"
            >
              <button
                onClick={() => setActiveTab("karaoke")}
                className={cn(
                  "relative py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300",
                  activeTab === "karaoke"
                    ? "text-white"
                    : "text-gray-700 hover:text-gray-900"
                )}
              >
                {activeTab === "karaoke" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-lg shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative flex items-center justify-center gap-2">
                  <Mic2 className="w-5 h-5" />
                  <span className="hidden sm:inline">Karaoke with Karafun</span>
                  <span className="sm:hidden">Karaoke</span>
                </span>
              </button>
              <button
                onClick={() => setActiveTab("darts")}
                className={cn(
                  "relative py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300",
                  activeTab === "darts"
                    ? "text-white"
                    : "text-gray-700 hover:text-gray-900"
                )}
              >
                {activeTab === "darts" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-lg shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative flex items-center justify-center gap-2">
                  <Target className="w-5 h-5" />
                  <span className="hidden sm:inline">Professional Darts</span>
                  <span className="sm:hidden">Darts</span>
                </span>
              </button>
              <button
                onClick={() => setActiveTab("ps5")}
                className={cn(
                  "relative py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300",
                  activeTab === "ps5"
                    ? "text-white"
                    : "text-gray-700 hover:text-gray-900"
                )}
              >
                {activeTab === "ps5" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-lg shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative flex items-center justify-center gap-2">
                  <Gamepad2 className="w-5 h-5" />
                  <span className="hidden sm:inline">PS5 Gaming</span>
                  <span className="sm:hidden">PS5</span>
                </span>
              </button>
            </motion.div>
          </div>

          {/* Karaoke Content */}
          {activeTab === "karaoke" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Vibrant Karafun Section */}
              <div className="bg-gradient-to-br from-primary/10 via-white to-accent/10 rounded-3xl p-8 md:p-12 mb-16 shadow-xl border border-primary/20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-gradient-to-r from-accent to-primary text-white px-6 py-2 rounded-lg shadow-lg">
                        <span className="font-bold text-2xl">KARAFUN</span>
                      </div>
                      <span className="text-sm bg-gradient-to-r from-primary/20 to-accent/20 text-accent px-4 py-1.5 rounded-full font-bold">
                        ⭐ Official Partner
                      </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      The Ultimate Karaoke Experience
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      We&apos;re proud to feature Karafun - Europe&apos;s #1 karaoke system. With the world&apos;s 
                      largest catalog of high-quality karaoke songs and cutting-edge technology, 
                      your performance will sound incredible!
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-accent" />
                        <span>Easy song selection with Karafun app</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-accent" />
                        <span>Studio-quality backing tracks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-accent" />
                        <span>Real-time pitch adjustment</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/pictures/entertainment/karaoke.jpg"
                      alt="Karaoke at Rialto Social"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm font-medium uppercase tracking-wider opacity-90">Private Room Available</p>
                      <p className="text-2xl font-bold">Premium Karaoke Experience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colorful Features Grid */}
              <div className="mb-16">
                <h3 className="font-display text-2xl font-bold text-center mb-10 text-accent">
                  Why Choose Our Karaoke Experience
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {karafunFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary group"
                    >
                      <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors",
                        index % 2 === 0 
                          ? "bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20" 
                          : "bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent/30 group-hover:to-accent/20"
                      )}>
                        <feature.icon className={cn(
                          "w-8 h-8",
                          index % 2 === 0 ? "text-primary" : "text-accent"
                        )} />
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Vibrant Pricing and Schedule */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 shadow-lg border border-accent/20">
                  <h3 className="font-display text-2xl font-bold mb-6 text-accent">
                    Karaoke Schedule
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">Private Karaoke Room</p>
                          <p className="text-sm text-muted-foreground">Available all day, every day</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-accent">£5 per person</p>
                          <p className="text-sm">Min 6 people (£30) / 1hr</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">Group Bookings</p>
                          <p className="text-sm text-muted-foreground">Perfect for parties</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-accent">Contact Us</p>
                          <p className="text-sm">For special rates</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">VIP Package</p>
                          <p className="text-sm text-muted-foreground">Please contact us for the menu</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">£35pp</p>
                          <p className="text-sm">Min 6 people</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 shadow-lg border border-primary/20">
                  <h3 className="font-display text-2xl font-bold mb-6 text-accent">
                    Private Room Details
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 border-2 border-primary">
                      <h4 className="font-semibold mb-2 text-lg">The Private Room</h4>
                      <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        An intimate setting for up to 20 guests, where Venetian artistry meets contemporary spirit. 
                        The walls are adorned with bespoke graffiti murals by our local maestro, Uncle Stubble—bold, 
                        expressive, and unmistakably Rialto. Overhead, hand-blown glass fixtures from a hidden workshop 
                        in Venice cast a warm, golden glow, inviting conversation and celebration. Ideal for private 
                        dinners, spirited gatherings, or moments that deserve a touch of magic.
                      </p>
                      <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                        <p className="text-center font-semibold text-gray-800">
                          Contact our events team for booking and menu options
                        </p>
                      </div>
                    </div>
                    <div className="bg-accent/10 rounded-xl p-4 text-center">
                      <p className="text-sm font-medium">
                        Book early for weekends!<br/>
                        Call 01306 742885 to reserve
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Darts Content */}
          {activeTab === "darts" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Vibrant Darts Section */}
              <div className="bg-gradient-to-br from-accent/10 via-white to-primary/10 rounded-3xl p-8 md:p-12 mb-16 shadow-xl border border-accent/20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/pictures/entertainment/darts.jpg"
                      alt="Darts at Rialto Social"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm font-bold uppercase tracking-wider">Interactive Entertainment</p>
                      <p className="text-2xl font-bold drop-shadow-lg">Professional Darts Venue</p>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-6">
                      <Target className="w-12 h-12 text-accent" />
                      <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Interactive Darts Lounge
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      Step into Surrey&apos;s finest interactive darts venue. With 4 professional boards, 
                      perfect lighting, and a vibrant atmosphere, we&apos;re the perfect place for 
                      fun and socializing with friends.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white rounded-xl p-4 text-center">
                        <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="font-bold text-2xl">4</p>
                        <p className="text-sm text-muted-foreground">Professional Boards</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center">
                        <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                        <p className="font-bold text-2xl">20+</p>
                        <p className="text-sm text-muted-foreground">Daily Players</p>
                      </div>
                    </div>
                    <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                      Book Your Darts Session
                    </Button>
                  </div>
                </div>
              </div>

              {/* Colorful Darts Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Professional Setup</h4>
                  <p className="text-sm text-gray-600">
                    Bristle boards, proper lighting, and regulation throwing distance
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-accent group">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                    <Calendar className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Daily Available</h4>
                  <p className="text-sm text-gray-600">
                    Open every day for casual play and group bookings
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">All Welcome</h4>
                  <p className="text-sm text-gray-600">
                    From beginners to pros, everyone finds their place here
                  </p>
                </div>
              </div>

              {/* Vibrant Darts Schedule & Pricing */}
              <div className="bg-gradient-to-br from-accent/10 via-white to-primary/10 rounded-3xl p-8 md:p-12 shadow-xl border border-accent/20">
                <h3 className="font-display text-2xl font-bold mb-8 text-center text-accent">
                  Interactive Darts Pricing
                </h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  <div className="bg-white rounded-xl p-6 border-2 border-primary/20">
                    <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-4 text-lg text-center">Off Peak (12-6pm)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">30 minutes</span>
                        <span className="text-xl font-bold text-primary">£10</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">1 hour</span>
                        <span className="text-xl font-bold text-primary">£20</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-accent/20">
                    <Target className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-4 text-lg text-center">Peak Time (6-11pm)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">30 minutes</span>
                        <span className="text-xl font-bold text-accent">£15</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">1 hour</span>
                        <span className="text-xl font-bold text-accent">£29.95</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* PS5 Gaming Content */}
          {activeTab === "ps5" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* PS5 Gaming Section */}
              <div className="bg-gradient-to-br from-primary/10 via-white to-accent/10 rounded-3xl p-8 md:p-12 mb-16 shadow-xl border border-primary/20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Gamepad2 className="w-12 h-12 text-primary" />
                      <h2 className="font-display text-3xl md:text-4xl font-bold">
                        PS5 Gaming Room
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      Experience the latest gaming on our PS5 console. Perfect for groups, 
                      parties, or just hanging out with friends. Local hot seat gaming at its finest!
                    </p>
                    <div className="space-y-4 mb-8">
                      <h3 className="font-semibold text-xl text-gray-800">Available Games:</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "FIFA", "Mortal Kombat", "Rugby 25", "NBA 2K25",
                          "Top Spin", "F1 25", "Gran Turismo", "UFC 5"
                        ].map((game) => (
                          <div key={game} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            <span className="text-gray-700">{game}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Book PS5 Room
                    </Button>
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Gamepad2 className="w-32 h-32 text-white/20" />
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm font-bold uppercase tracking-wider">Local Gaming</p>
                      <p className="text-2xl font-bold drop-shadow-lg">Latest Console Experience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PS5 Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                    <Gamepad2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Latest Games</h4>
                  <p className="text-sm text-gray-600">
                    Always updated with the newest releases
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-accent group">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Group Play</h4>
                  <p className="text-sm text-gray-600">
                    Perfect for parties and social gaming
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Competitions</h4>
                  <p className="text-sm text-gray-600">
                    Host your own tournaments with friends
                  </p>
                </div>
              </div>

              {/* PS5 Pricing */}
              <div className="bg-gradient-to-br from-primary/10 via-white to-accent/10 rounded-3xl p-8 md:p-12 shadow-xl border border-primary/20">
                <h3 className="font-display text-2xl font-bold mb-8 text-center text-accent">
                  PS5 Room Pricing
                </h3>
                <div className="bg-white rounded-xl p-8 max-w-md mx-auto">
                  <Gamepad2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-center">
                    <h4 className="font-semibold text-lg mb-3">Gaming Session</h4>
                    <p className="text-3xl font-bold text-primary mb-2">£5 per controller</p>
                    <p className="text-sm text-muted-foreground">For 1 hour</p>
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                      <p className="text-sm text-gray-600">
                        Up to 4 players can join with their own controllers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Colorful Testimonials */}
          <div className="mt-20">
            <h3 className="font-display text-3xl font-bold text-center mb-12 text-accent">
              Guest Reviews
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={cn(
                    "rounded-2xl p-6 shadow-lg",
                    index === 0 ? "bg-gradient-to-br from-primary/10 to-white border border-primary/20" :
                    index === 1 ? "bg-gradient-to-br from-accent/10 to-white border border-accent/20" :
                    "bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
                  )}
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic font-medium">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="font-bold text-gray-900">– {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vibrant CTA */}
          <div className="mt-20 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
              }} />
            </div>
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                Book Your Entertainment Experience
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90 font-medium">
                Reserve your table, book our private karaoke room, darts session, or PS5 gaming room. 
                Premium entertainment awaits at Rialto Social.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-3 shadow-xl">
                  <Link href="/contact" className="flex items-center gap-2">
                    Make a Booking <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold transition-all bg-white/20 backdrop-blur">
                  <a href="tel:+441306742885" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call 01306 742885
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
