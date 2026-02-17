"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Heart, ChevronRight, Utensils, Sparkles, Mail, Instagram, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Blog posts data - add new posts here
const blogPosts = [
  {
    slug: "valentines-day-amore-menu",
    title: "Valentine's Day \"Amore\" Menu",
    excerpt: "Celebrate romance with our limited-edition menu featuring heart-shaped ravioli, romantic desserts, and Italian-inspired flavours. 2 courses £23.50 / 3 courses £27.50.",
    date: "2026-02-14",
    readTime: "4 min read",
    image: null,
    category: "Special Menus",
    theme: "valentines",
  },
];

const categories = ["All", "Special Menus", "Events", "Recipes"];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white dark:bg-gray-950">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-gray-100 dark:border-gray-800">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-white to-pink-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
          
          <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24 relative">
            <div className="max-w-4xl">
              {/* Breadcrumb - hidden on very small mobile */}
              <nav className="hidden sm:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
                <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900 dark:text-white font-medium">Blog</span>
              </nav>

              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">The Rialto Journal</span>
              </motion.div>

              {/* Heading */}
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
              >
                Stories, Menus &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">Culinary Moments</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
              >
                Discover seasonal specials, behind-the-scenes stories, and the latest updates 
                from Dorking&apos;s favourite Italian restaurant.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Category Filter Bar */}
        <section className="sticky top-[64px] sm:top-[72px] z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 sm:gap-3 py-3 sm:py-4 overflow-x-auto scrollbar-hide -mx-4 px-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 min-h-[40px]",
                    activeCategory === category
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 sm:py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            {filteredPosts.length > 0 && (
              <div className="flex items-center justify-between mb-6 sm:mb-10 max-w-6xl mx-auto">
                <div className="flex items-center gap-2 sm:gap-3">
                  {activeCategory === "All" && (
                    <>
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <h2 className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                        Latest Articles
                      </h2>
                    </>
                  )}
                  {activeCategory !== "All" && (
                    <h2 className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                      {activeCategory}
                    </h2>
                  )}
                </div>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                </span>
              </div>
            )}

            {/* Blog Posts Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {filteredPosts.map((post, index) => (
                <motion.article 
                  key={post.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 sm:hover:-translate-y-1"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    {/* Image / Visual */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {post.image ? (
                        <>
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </>
                      ) : post.theme === "valentines" ? (
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-red-400 to-pink-500">
                          {/* Decorative hearts */}
                          <Heart className="absolute top-4 sm:top-6 left-4 sm:left-6 w-8 sm:w-10 h-8 sm:h-10 text-white/20 fill-white/20" />
                          <Heart className="absolute top-10 sm:top-12 right-6 sm:right-8 w-5 sm:w-6 h-5 sm:h-6 text-white/15 fill-white/15" />
                          <Heart className="absolute bottom-14 sm:bottom-16 left-8 sm:left-10 w-4 sm:w-5 h-4 sm:h-5 text-white/10 fill-white/10" />
                          <Heart className="absolute bottom-6 sm:bottom-8 right-4 sm:right-6 w-6 sm:w-8 h-6 sm:h-8 text-white/20 fill-white/20" />
                          
                          {/* Center content */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                              <Heart className="w-12 sm:w-14 h-12 sm:h-14 mx-auto mb-2 sm:mb-3 fill-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                              <p className="font-display text-2xl sm:text-3xl font-bold drop-shadow-lg">Amore</p>
                              <p className="text-xs sm:text-sm text-white/80 mt-1">Valentine&apos;s Menu</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 flex items-center justify-center">
                          <Utensils className="w-10 sm:w-12 h-10 sm:h-12 text-amber-500 dark:text-amber-400" />
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                        <span className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-pink-600 dark:text-pink-400 text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">
                        <span className="flex items-center gap-1 sm:gap-1.5">
                          <Calendar className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1 sm:gap-1.5">
                          <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-3 sm:mb-4">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <span className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 font-semibold text-sm">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16 sm:py-20 max-w-md mx-auto">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-sm border border-gray-100 dark:border-gray-700">
                  <Utensils className="w-7 sm:w-8 h-7 sm:h-8 text-gray-400 dark:text-gray-500" />
                </div>
                <h2 className="font-display text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">No articles yet</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-5 sm:mb-6 text-sm sm:text-base">
                  No posts in this category yet. Check back soon!
                </p>
                <button 
                  onClick={() => setActiveCategory("All")}
                  className="text-pink-600 dark:text-pink-400 font-semibold text-sm hover:underline min-h-[44px] px-4"
                >
                  View all articles
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-amber-500/20 to-pink-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-tr from-pink-500/20 to-amber-500/20 rounded-full blur-3xl" />
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
                    <Mail className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-amber-400" />
                    <span className="text-xs sm:text-sm font-medium text-white/90">Stay Connected</span>
                  </div>
                  
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                    Never Miss a Moment
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
                    Follow us on social media for the latest updates, exclusive offers, 
                    and a peek behind the scenes at Rialto Social.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-11 sm:w-12 h-11 sm:h-12 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-11 sm:w-12 h-11 sm:h-12 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors shadow-lg text-sm sm:text-base"
                    >
                      Book a Table
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link 
                      href="/menu" 
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-colors border border-white/20 text-sm sm:text-base"
                    >
                      View Our Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-10 sm:py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <Link href="/events" className="group p-5 sm:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-amber-700 active:border-amber-300 transition-colors">
                <Sparkles className="w-7 sm:w-8 h-7 sm:h-8 text-amber-500 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Upcoming Events</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">See what&apos;s happening at Rialto Social</p>
              </Link>
              <Link href="/menu" className="group p-5 sm:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-pink-700 active:border-pink-300 transition-colors">
                <Utensils className="w-7 sm:w-8 h-7 sm:h-8 text-pink-500 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">Our Menu</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Explore our Italian-inspired dishes</p>
              </Link>
              <Link href="/gallery" className="group p-5 sm:p-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700 active:border-purple-300 transition-colors">
                <Heart className="w-7 sm:w-8 h-7 sm:h-8 text-purple-500 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Gallery</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Take a visual tour of our restaurant</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
