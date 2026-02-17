import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, BookOpen, Heart } from "lucide-react";

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
    image: null, // Will use custom Valentine's visual
    category: "Special Menus",
    theme: "valentines", // Custom theme for visual
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
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">Our Blog</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Updates</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Stay updated with the latest news, special menus, events, and culinary inspirations 
                from Rialto Social - Dorking&apos;s favourite Italian restaurant.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {blogPosts.map((post) => (
                <article 
                  key={post.slug}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-pink-300"
                >
                  <Link href={`/blog/${post.slug}`}>
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
                      ) : (
                        /* Valentine's Day themed visual */
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-red-400 to-pink-500 flex items-center justify-center">
                          {/* Decorative hearts */}
                          <Heart className="absolute top-4 left-4 w-8 h-8 text-white/20 fill-white/20" />
                          <Heart className="absolute top-8 right-6 w-6 h-6 text-white/15 fill-white/15" />
                          <Heart className="absolute bottom-12 left-8 w-5 h-5 text-white/15 fill-white/15" />
                          <Heart className="absolute bottom-6 right-4 w-7 h-7 text-white/20 fill-white/20" />
                          
                          {/* Center content */}
                          <div className="text-center text-white z-10">
                            <Heart className="w-12 h-12 mx-auto mb-2 fill-white/90" />
                            <p className="font-display text-2xl font-bold drop-shadow-lg">Amore</p>
                            <p className="text-sm text-white/80">Valentine&apos;s Menu</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-white/90 text-pink-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-lg font-bold mb-2 group-hover:text-pink-600 transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <span className="inline-flex items-center gap-2 text-pink-600 font-semibold text-sm group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Empty State - shown when no posts */}
            {blogPosts.length === 0 && (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <h2 className="font-display text-2xl font-bold mb-2">Coming Soon</h2>
                <p className="text-muted-foreground">
                  We&apos;re working on exciting content. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
