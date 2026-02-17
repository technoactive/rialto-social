"use client";

import { useState, useEffect } from "react";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Heart, 
  Phone, 
  Utensils, 
  Wine, 
  Cake,
  Share2,
  Facebook,
  Twitter,
  ChevronRight,
  Star,
  Users,
  Sparkles,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Table of contents items
const tableOfContents = [
  { id: "pricing", label: "Pricing" },
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Main Courses" },
  { id: "desserts", label: "Desserts" },
  { id: "wine", label: "Wine Selection" },
  { id: "booking", label: "Book Now" },
];

// Menu data
const starters = [
  { name: "Smoked Salmon Carpaccio", desc: "With avocado and a light citrus dressing", tag: "Pescatarian" },
  { name: "Mozzarella in Carrozza", desc: "Crisp and golden with irresistibly molten centres", tag: "Vegetarian" },
  { name: "Arancini al Ragù", desc: "Slow-cooked ragù and molten mozzarella in a crunchy shell", tag: "Chef's Pick" },
  { name: "Beetroot Carpaccio", desc: "Soft goat's cheese and toasted hazelnuts", tag: "Vegan" },
  { name: "Butter-Chilli-Garlic Prawns", desc: "Rich and savoury, leaves room for courses ahead", tag: "Pescatarian" },
];

const mains = [
  { name: "Heart-Shaped Ravioli", desc: "Ricotta and spinach in a silky pink sauce", tag: "Signature", featured: true },
  { name: '"Marry Me" Pasta', desc: "Tender ribbons with charred chicken", tag: "Popular" },
  { name: "Gamberi e Zucchine Risotto", desc: "Prawns, monk fish, and soft courgette", tag: "Seafood" },
  { name: "Gnocchi with Ribeye", desc: "Rich tomato sauce, sliced ribeye, fresh rocket", tag: "Meat" },
  { name: "Green Beans & Pesto Spaghetti", desc: "Hearty option with soft potatoes", tag: "Vegan" },
];

const desserts = [
  { name: "Rosa d'Amore", desc: "Blushing panna cotta that trembles like a shy heartbeat", color: "from-pink-100 to-rose-100" },
  { name: "Tiramisù d'Amore", desc: "Espresso-soaked savoiardi and velvety mascarpone", color: "from-amber-100 to-orange-100" },
  { name: "Millefoglie d'Amore", desc: "Classic Italian wedding cake with delicate cream", color: "from-yellow-50 to-amber-50" },
];

export default function ValentinesDayBlogPost() {
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Track active section for TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    tableOfContents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header />
      
      {/* Reading Progress Bar - Below header */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-red-500 origin-left z-[70]"
        style={{ scaleX }}
      />
      
      <main>
        {/* Hero Section - Full bleed behind header */}
        <section className="relative min-h-[100svh] flex items-center overflow-hidden py-24 md:py-32">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-pink-600">
            {/* Floating Hearts - CSS Animation (hidden on mobile for performance) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
              <Heart className="absolute w-16 h-16 text-white/10 fill-white/10 animate-float-1" style={{ left: '5%' }} />
              <Heart className="absolute w-10 h-10 text-white/10 fill-white/10 animate-float-2" style={{ left: '15%' }} />
              <Heart className="absolute w-8 h-8 text-white/10 fill-white/10 animate-float-3" style={{ left: '25%' }} />
              <Heart className="absolute w-12 h-12 text-white/10 fill-white/10 animate-float-4" style={{ left: '40%' }} />
              <Heart className="absolute w-16 h-16 text-white/10 fill-white/10 animate-float-5" style={{ left: '55%' }} />
              <Heart className="absolute w-8 h-8 text-white/10 fill-white/10 animate-float-6" style={{ left: '70%' }} />
              <Heart className="absolute w-10 h-10 text-white/10 fill-white/10 animate-float-7" style={{ left: '80%' }} />
              <Heart className="absolute w-14 h-14 text-white/10 fill-white/10 animate-float-8" style={{ left: '92%' }} />
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* Breadcrumb - Hidden on very small screens */}
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hidden sm:flex items-center justify-center gap-2 text-sm text-white/70 mb-6 md:mb-8"
              >
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Valentine&apos;s Menu</span>
              </motion.nav>

              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">Limited Edition Menu</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2"
              >
                The &quot;Amore&quot; Menu
                <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal mt-2 sm:mt-4 text-white/90">
                  A Valentine&apos;s Day Culinary Experience
                </span>
              </motion.h1>

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 text-white/80 text-sm sm:text-base mb-6 sm:mb-10"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  14 February 2026
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  4 min read
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  Perfect for couples
                </span>
              </motion.div>

              {/* Quick Price Preview */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                className="inline-flex items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-8 py-3 sm:py-4 border border-white/20"
              >
                <div className="text-center px-2 sm:px-4">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold">£23.50</p>
                  <p className="text-xs sm:text-sm text-white/70">2 Courses</p>
                </div>
                <div className="w-px h-10 sm:h-12 bg-white/30" />
                <div className="text-center px-2 sm:px-4">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold">£27.50</p>
                  <p className="text-xs sm:text-sm text-white/70">3 Courses</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1"
            >
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex gap-12 max-w-6xl mx-auto">
              
              {/* Sticky Sidebar - Desktop Only */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  {/* Table of Contents */}
                  <nav className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-6">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-4">
                      In This Article
                    </h3>
                    <ul className="space-y-2">
                      {tableOfContents.map(({ id, label }) => (
                        <li key={id}>
                          <button
                            onClick={() => scrollToSection(id)}
                            className={cn(
                              "text-sm w-full text-left px-3 py-2 rounded-lg transition-all",
                              activeSection === id
                                ? "bg-pink-100 text-pink-700 font-medium"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            )}
                          >
                            {label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Share Buttons */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-4">
                      Share
                    </h3>
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-2 bg-[#1877f2] text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
                        <Facebook className="w-4 h-4" />
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 bg-[#1da1f2] text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Article Content */}
              <article className="flex-1 max-w-3xl">
                
                {/* Introduction */}
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-xl text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-pink-500 first-letter:mr-3 first-letter:float-left">
                    It&apos;s February already, and love is in the air—and in our dishes. This Valentine&apos;s Day, 
                    our <Link href="/about" className="text-pink-600 hover:text-pink-700 underline underline-offset-2">restaurant in Dorking</Link> is celebrating romance the best way we know how: with delectable, 
                    Italian-inspired flavours from our <Link href="/menu" className="text-pink-600 hover:text-pink-700 underline underline-offset-2">seasonal menu</Link>, specially curated for the occasion.
                  </p>
                </div>

                {/* Pricing Section */}
                <section id="pricing" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-8 md:p-10"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Utensils className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold text-gray-900">How It Works</h2>
                        <p className="text-gray-600">Simple, memorable, delicious</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-8">
                      Order &quot;Amore&quot; a la carte as either a 2-course or 3-course experience. 
                      Our menu brings together rich, tender flavours with something for everyone.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-white rounded-2xl p-6 text-center shadow-sm border-2 border-transparent hover:border-pink-300 transition-colors">
                        <p className="text-4xl font-bold text-pink-600 mb-1">£23.50</p>
                        <p className="font-medium text-gray-900 mb-2">2 Courses</p>
                        <p className="text-sm text-gray-600">Starter + Main or Main + Dessert</p>
                      </div>
                      <div className="bg-white rounded-2xl p-6 text-center shadow-sm border-2 border-pink-300 relative overflow-hidden">
                        <div className="absolute top-2 right-2">
                          <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">Best Value</span>
                        </div>
                        <p className="text-4xl font-bold text-pink-600 mb-1">£27.50</p>
                        <p className="font-medium text-gray-900 mb-2">3 Courses</p>
                        <p className="text-sm text-gray-600">Full romantic experience</p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Starters Section */}
                <section id="starters" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
                      <h2 className="font-display text-2xl md:text-3xl font-bold">
                        Starters as Memorable as a First Kiss
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 mb-8">
                      Options carefully chosen to awaken the palate without overwhelming it—perfect for sparking conversation 
                      in our <Link href="/gallery" className="text-pink-600 hover:text-pink-700 underline underline-offset-2">intimate dining space</Link>.
                    </p>

                    <div className="grid gap-4">
                      {starters.map((item) => (
                        <div
                          key={item.name}
                          className="group bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:border-pink-200 hover:shadow-md transition-all flex items-start justify-between gap-4"
                        >
                          <div>
                            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-pink-600 transition-colors">{item.name}</h3>
                            <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                          </div>
                          <span className={cn(
                            "text-xs font-medium px-3 py-1 rounded-full flex-shrink-0",
                            item.tag === "Chef's Pick" ? "bg-amber-100 text-amber-700" :
                            item.tag === "Vegan" ? "bg-green-100 text-green-700" :
                            item.tag === "Vegetarian" ? "bg-emerald-100 text-emerald-700" :
                            "bg-blue-100 text-blue-700"
                          )}>
                            {item.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                {/* Mains Section */}
                <section id="mains" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <Heart className="w-8 h-8 text-red-500 fill-red-500" />
                      <h2 className="font-display text-2xl md:text-3xl font-bold">
                        Mains to Fall in Love With
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 mb-8">
                      Dishes that feel as special as the company you&apos;re keeping—hearty and elegant, 
                      indulgent yet easy to enjoy. Check our <Link href="/events" className="text-pink-600 hover:text-pink-700 underline underline-offset-2">upcoming events</Link> for 
                      more special dining experiences.
                    </p>

                    <div className="space-y-4">
                      {mains.map((item) => (
                        <div
                          key={item.name}
                          className={cn(
                            "group rounded-xl p-6 transition-all flex items-start justify-between gap-4",
                            item.featured 
                              ? "bg-gradient-to-r from-pink-100 to-red-100 border-2 border-pink-300 shadow-md" 
                              : "bg-white shadow-sm border border-gray-200 hover:border-pink-200 hover:shadow-md"
                          )}
                        >
                          <div className="flex items-start gap-4">
                            {item.featured && (
                              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <Heart className="w-5 h-5 text-white fill-white" />
                              </div>
                            )}
                            <div>
                              <h3 className={cn(
                                "font-semibold text-lg transition-colors",
                                item.featured ? "text-pink-700" : "text-gray-900 group-hover:text-pink-600"
                              )}>
                                {item.name}
                              </h3>
                              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                              {item.featured && (
                                <p className="text-pink-600 text-sm font-medium mt-2 flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-current" /> Our Signature Dish
                                </p>
                              )}
                            </div>
                          </div>
                          <span className={cn(
                            "text-xs font-medium px-3 py-1 rounded-full flex-shrink-0",
                            item.featured ? "bg-white text-pink-600" :
                            item.tag === "Popular" ? "bg-amber-100 text-amber-700" :
                            item.tag === "Vegan" ? "bg-green-100 text-green-700" :
                            item.tag === "Seafood" ? "bg-blue-100 text-blue-700" :
                            "bg-red-100 text-red-700"
                          )}>
                            {item.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                {/* Desserts Section */}
                <section id="desserts" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <Cake className="w-8 h-8 text-pink-500" />
                      <h2 className="font-display text-2xl md:text-3xl font-bold">
                        Sweet & Memorable Desserts
                      </h2>
                    </div>
                    
                    <p className="text-muted-foreground mb-8">
                      The final course, like a kiss goodbye—intended to be savoured slowly, 
                      leaving a delightful taste that lingers.
                    </p>

                    <div className="grid gap-4">
                      {desserts.map((item) => (
                        <div
                          key={item.name}
                          className={cn(
                            "rounded-2xl p-6 bg-gradient-to-r",
                            item.color
                          )}
                        >
                          <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                {/* Wine Section */}
                <section id="wine" className="mb-16 scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Wine className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold text-gray-900">Wine Selection</h2>
                        <p className="text-gray-600">One of the most extensive in Dorking</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      Complement your meal with crisp Italian whites, bold Greek reds, delicate rosés 
                      or sparkling Prosecco. Browse our <Link href="/menu" className="text-purple-700 hover:text-purple-800 underline underline-offset-2">full drinks menu</Link> for 
                      the complete selection—glasses of lively Trebbiano or silky Montepulciano 
                      will surely spark interesting conversation.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {["Italian Whites", "Greek Reds", "Rosé", "Prosecco"].map((wine) => (
                        <span key={wine} className="bg-white/80 px-4 py-2 rounded-full text-sm font-medium text-purple-700">
                          {wine}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-6 italic">
                      * Wines sold separately
                    </p>
                  </motion.div>
                </section>

                {/* Booking CTA */}
                <section id="booking" className="scroll-mt-24">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
                  >
                    {/* Background Hearts */}
                    <Heart className="absolute top-4 left-4 w-16 h-16 text-white/10 fill-white/10" />
                    <Heart className="absolute bottom-4 right-4 w-20 h-20 text-white/10 fill-white/10" />
                    
                    <div className="relative z-10">
                      <Heart className="w-12 h-12 mx-auto mb-4 fill-white/30" />
                      <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                        Reserve Your Table Early
                      </h2>
                      <p className="text-white/90 mb-8 max-w-lg mx-auto">
                        Don&apos;t wait to book. Call now to claim a spot before other lovebirds do. 
                        We accommodate special requests and dietary requirements. After dinner, 
                        explore our <Link href="/entertainment" className="text-white underline underline-offset-2 hover:text-pink-100">entertainment options</Link> for 
                        the perfect ending to your evening.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 font-bold shadow-lg">
                          <Link href="/contact" className="flex items-center gap-2">
                            <Check className="w-4 h-4" />
                            Book Online
                          </Link>
                        </Button>
                        <Button size="lg" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-pink-600 font-bold transition-all">
                          <a href="tel:+441306742885" className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            01306 742885
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </section>

              </article>
            </div>
          </div>
        </section>

        {/* Article Footer Navigation */}
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto py-8">
              <Link 
                href="/blog" 
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-pink-50 border border-gray-200 hover:border-pink-200 text-gray-600 hover:text-pink-600 transition-all duration-200 shadow-sm"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span className="text-sm font-medium">All Articles</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <FloatingActionButton />
    </>
  );
}
