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
    excerpt: "Celebrate romance with our limited-edition menu featuring heart-shaped ravioli, romantic desserts, and Italian-inspired flavours. Available for a limited time only.",
    date: "2026-02-14",
    readTime: "4 min read",
    image: null,
    category: "Special Menus",
    theme: "valentines",
    featured: true,
    price: "From £23.50",
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
  const featuredPost = blogPosts.find(p => p.featured);
  const regularPosts = blogPosts.filter(p => !p.featured);

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 min-h-screen">
        
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
              <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 dark:text-white font-medium">Blog</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-4 py-1.5 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Stories & Updates</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                From Our Kitchen<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">To Your Table</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Discover seasonal menus, special events, and the stories behind our 
                Italian-inspired dishes at Dorking&apos;s favourite restaurant.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-8">
            <div className="container mx-auto px-4">
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <article className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px] overflow-hidden">
                      {featuredPost.theme === "valentines" ? (
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-red-400 to-pink-500">
                          {/* Decorative hearts */}
                          <Heart className="absolute top-8 left-8 w-12 h-12 text-white/20 fill-white/20" />
                          <Heart className="absolute top-16 right-12 w-8 h-8 text-white/15 fill-white/15" />
                          <Heart className="absolute bottom-20 left-16 w-6 h-6 text-white/15 fill-white/15" />
                          <Heart className="absolute bottom-12 right-8 w-10 h-10 text-white/20 fill-white/20" />
                          <Heart className="absolute top-1/2 left-1/3 w-4 h-4 text-white/10 fill-white/10" />
                          
                          {/* Center content */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                              <Heart className="w-20 h-20 mx-auto mb-4 fill-white/90 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
                              <p className="font-display text-4xl md:text-5xl font-bold drop-shadow-lg">Amore</p>
                              <p className="text-lg text-white/80 mt-2">A Menu for Lovers</p>
                            </div>
                          </div>
                        </div>
                      ) : featuredPost.image ? (
                        <>
                          <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                        </>
                      ) : null}
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-white text-pink-600 text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      {/* Category & Date */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-xs font-bold px-3 py-1.5 rounded-full">
                          {featuredPost.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {formatDate(featuredPost.date)}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                        {featuredPost.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>

                      {/* Meta Row */}
                      <div className="flex flex-wrap items-center gap-4 mb-8">
                        <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                        {featuredPost.price && (
                          <span className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 dark:text-amber-400">
                            <Utensils className="w-4 h-4" />
                            {featuredPost.price}
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-lg shadow-pink-600/25">
                          Read Article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </section>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8">
                More Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article 
                    key={post.slug}
                    className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-pink-200 dark:hover:border-pink-800"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {post.image ? (
                          <>
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          </>
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 flex items-center justify-center">
                            <Utensils className="w-12 h-12 text-amber-400" />
                          </div>
                        )}
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-white/95 dark:bg-gray-900/95 text-gray-900 dark:text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>

                        {/* Read More */}
                        <span className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 font-semibold text-sm group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter / CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-3xl p-8 md:p-12 text-center border border-amber-100 dark:border-amber-900/30">
              <Utensils className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Stay in the Loop
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                Don&apos;t miss our seasonal specials, exclusive events, and culinary stories. 
                Follow us on social media or book a table to experience it firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/events" 
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
                >
                  View Events
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold px-8 py-3 rounded-full transition-colors border border-gray-200 dark:border-gray-700"
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Empty State - shown when no posts */}
        {blogPosts.length === 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-md mx-auto">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Utensils className="w-10 h-10 text-gray-400 dark:text-gray-600" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">Coming Soon</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  We&apos;re cooking up some exciting content. Check back soon for stories, 
                  recipes, and updates from our kitchen.
                </p>
                <Link 
                  href="/menu" 
                  className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold hover:gap-3 transition-all"
                >
                  Explore Our Menu
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
