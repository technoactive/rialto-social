import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

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
    title: "Introducing Rialto's \"Amore\" Menu: The Best Valentine's Day Culinary Experience",
    excerpt: "This Valentine's Day, celebrate romance the best way we know how: with delectable, Italian-inspired flavours. Our limited-edition \"Amore\" menu features heart-shaped ravioli, romantic desserts, and more.",
    date: "2026-02-14",
    readTime: "4 min read",
    image: "/pictures/blog/valentines-day-menu.jpg",
    category: "Special Menus",
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.slug}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/30"
                >
                  <Link href={`/blog/${post.slug}`}>
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-primary/30" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        Read Article
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
