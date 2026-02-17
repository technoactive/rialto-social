import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Sparkles, Heart, ChevronRight, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Rialto Social - News & Updates from Dorking's Italian Restaurant",
  description: "Read the latest news, special menus, events and updates from Rialto Social - the best Italian restaurant in Dorking. Discover our seasonal offerings and culinary inspirations.",
  keywords: ["Rialto Social blog", "Dorking restaurant news", "Italian food blog", "restaurant updates Dorking", "special menus Surrey"],
  alternates: {
    canonical: "https://www.rialtosocial.co.uk/blog",
  },
};

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

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-gray-50 dark:bg-gray-950 min-h-screen">
        
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
              <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 dark:text-white font-medium">Blog</span>
            </nav>

            <div className="max-w-2xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                News & Updates
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Seasonal menus, special events, and stories from Rialto Social.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <article 
                  key={post.slug}
                  className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:-translate-y-1"
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
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </>
                      ) : post.theme === "valentines" ? (
                        /* Valentine's Day themed visual */
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-red-400 to-pink-500">
                          {/* Decorative hearts */}
                          <Heart className="absolute top-6 left-6 w-10 h-10 text-white/20 fill-white/20" />
                          <Heart className="absolute top-10 right-8 w-7 h-7 text-white/15 fill-white/15" />
                          <Heart className="absolute bottom-16 left-10 w-5 h-5 text-white/15 fill-white/15" />
                          <Heart className="absolute bottom-8 right-6 w-8 h-8 text-white/20 fill-white/20" />
                          
                          {/* Center content */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                              <Heart className="w-14 h-14 mx-auto mb-3 fill-white/90 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                              <p className="font-display text-3xl font-bold drop-shadow-lg">Amore</p>
                              <p className="text-sm text-white/80 mt-1">Valentine&apos;s Menu</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center">
                          <Utensils className="w-12 h-12 text-amber-400" />
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-pink-600 dark:text-pink-400 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <span className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 font-semibold text-sm">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {blogPosts.length === 0 && (
              <div className="text-center py-20 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Coming Soon</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We&apos;re working on exciting content. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Want to experience our dishes firsthand?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/menu" 
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                View Menu
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold px-6 py-3 rounded-full transition-colors border border-gray-200 dark:border-gray-700"
              >
                Book a Table
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
