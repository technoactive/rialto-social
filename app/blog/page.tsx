"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Heart, ArrowUpRight, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

// Blog posts data - add new posts here
const blogPosts = [
  {
    slug: "valentines-day-amore-menu",
    title: "Valentine's Day \"Amore\" Menu",
    excerpt: "Celebrate romance with our limited-edition menu featuring heart-shaped ravioli, romantic desserts, and Italian-inspired flavours. A curated dining experience for couples.",
    date: "2026-02-14",
    readTime: "4 min read",
    image: null,
    category: "Special Menus",
    theme: "valentines",
    author: "Rialto Social",
  },
];

const categories = ["All", "Special Menus", "Events", "Behind the Scenes", "Recipes"];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const latestPost = blogPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white dark:bg-gray-950">
        
        {/* Hero Header */}
        <section className="border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl">
              <p className="text-sm font-medium text-amber-600 dark:text-amber-400 tracking-wide uppercase mb-4">
                The Rialto Journal
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-6">
                Stories, menus &<br />culinary moments
              </h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
                Explore seasonal specials, behind-the-scenes stories, and the latest 
                from Dorking&apos;s favourite Italian restaurant.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-[72px] z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
              <Filter className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                    activeCategory === category
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured / Latest Post */}
        {latestPost && activeCategory === "All" && (
          <section className="py-12 md:py-16 border-b border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Latest</span>
              </div>
              
              <Link href={`/blog/${latestPost.slug}`} className="group block">
                <article className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Image */}
                  <div className="relative aspect-[4/3] lg:aspect-[3/2] rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {latestPost.theme === "valentines" ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-red-400 to-pink-500">
                        <Heart className="absolute top-8 left-8 w-12 h-12 text-white/20 fill-white/20" />
                        <Heart className="absolute top-16 right-12 w-8 h-8 text-white/15 fill-white/15" />
                        <Heart className="absolute bottom-20 left-16 w-6 h-6 text-white/10 fill-white/10" />
                        <Heart className="absolute bottom-12 right-8 w-10 h-10 text-white/20 fill-white/20" />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <Heart className="w-20 h-20 mx-auto mb-4 fill-white drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
                            <p className="font-display text-4xl md:text-5xl font-bold drop-shadow-lg">Amore</p>
                          </div>
                        </div>
                      </div>
                    ) : latestPost.image ? (
                      <Image
                        src={latestPost.image}
                        alt={latestPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : null}
                  </div>

                  {/* Content */}
                  <div className="lg:py-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-xs font-bold px-3 py-1.5 rounded-full">
                        {latestPost.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(latestPost.date)}
                      </span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      {latestPost.title}
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      {latestPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {latestPost.readTime}
                        </span>
                        <span>By {latestPost.author}</span>
                      </div>
                      
                      <span className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-semibold group-hover:gap-3 transition-all">
                        Read article
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        {(otherPosts.length > 0 || activeCategory !== "All") && (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              {activeCategory !== "All" && (
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  {activeCategory}
                </h2>
              )}
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {(activeCategory === "All" ? otherPosts : filteredPosts).map((post) => (
                  <article key={post.slug} className="group">
                    <Link href={`/blog/${post.slug}`} className="block">
                      {/* Image */}
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-5">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : post.theme === "valentines" ? (
                          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-red-400 to-pink-500">
                            <Heart className="absolute top-4 left-4 w-8 h-8 text-white/20 fill-white/20" />
                            <Heart className="absolute bottom-4 right-4 w-6 h-6 text-white/20 fill-white/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Heart className="w-12 h-12 fill-white/90 group-hover:scale-110 transition-transform" />
                            </div>
                          </div>
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-pink-600 dark:text-pink-400">
                          {post.category}
                        </span>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDate(post.date)}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>

                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white group-hover:gap-2.5 transition-all">
                        Read more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Empty state for filtered */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500 dark:text-gray-400">
                    No posts in this category yet. Check back soon!
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Never miss an update
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Follow us on social media or visit us to experience our latest 
                seasonal menus and special events firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  Book a Table
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/menu" 
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                >
                  View Our Menu
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* All Posts Empty State */}
        {blogPosts.length === 0 && (
          <section className="py-24">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-gray-400" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Coming Soon
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We&apos;re preparing exciting stories and updates. Check back soon!
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
