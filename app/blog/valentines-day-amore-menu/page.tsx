import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Heart, Phone, Utensils, Wine, Cake } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Valentine's Day Special at Rialto | Restaurants in Dorking",
  description: "Enjoy heart-shaped ravioli on Valentine's Day with Rialto's special Amore menu—one of the most unique offered at restaurants in Dorking.",
  keywords: ["Valentine's Day Dorking", "romantic restaurant Dorking", "Valentine's dinner Surrey", "Amore menu", "Italian Valentine's Day", "restaurants in Dorking"],
  alternates: {
    canonical: "https://www.rialtosocial.co.uk/blog/valentines-day-amore-menu",
  },
  openGraph: {
    title: "Valentine's Day Special at Rialto | Restaurants in Dorking",
    description: "Enjoy heart-shaped ravioli on Valentine's Day with Rialto's special Amore menu—one of the most unique offered at restaurants in Dorking.",
    type: "article",
    publishedTime: "2026-02-14T00:00:00.000Z",
    authors: ["Rialto Social"],
  },
};

export default function ValentinesDayBlogPost() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-red-50/30 to-background" />
          
          {/* Decorative Hearts */}
          <div className="absolute top-20 left-10 text-pink-200/30">
            <Heart className="w-24 h-24 fill-current" />
          </div>
          <div className="absolute bottom-10 right-10 text-red-200/30">
            <Heart className="w-32 h-32 fill-current" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Back Link */}
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                  Special Menus
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  14 February 2026
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  4 min read
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Introducing Rialto&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">&quot;Amore&quot;</span> Menu: The Best Valentine&apos;s Day Culinary Experience at Restaurants in Dorking
              </h1>

              {/* Intro */}
              <p className="text-xl text-muted-foreground leading-relaxed">
                It&apos;s February already, and love is in the air—and in our dishes. This Valentine&apos;s Day, 
                our restaurants in Dorking are celebrating romance the best way we know how: with delectable, 
                Italian-inspired flavours specially curated for the occasion.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-200 to-red-200 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-20 h-20 text-white/80 mx-auto mb-4 fill-current" />
                    <p className="text-white/90 font-display text-2xl font-bold">Amore Menu</p>
                    <p className="text-white/70">Valentine&apos;s Day 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              
              {/* How the Menu Works */}
              <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-8 mb-12 not-prose">
                <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
                  <Utensils className="w-6 h-6 text-pink-500" />
                  How the Menu Works
                </h2>
                <p className="text-muted-foreground mb-6">
                  You can order &quot;Amore&quot; a la carte as either a 2-course or a 3-course menu. 
                  Our menu is uncomplicated and is designed to give you and your partner or friends 
                  a memorable evening without anything excessively elaborate.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-pink-100">
                    <p className="text-3xl font-bold text-pink-500 mb-1">£23.50</p>
                    <p className="text-sm text-muted-foreground">2 Courses</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-red-100">
                    <p className="text-3xl font-bold text-red-500 mb-1">£27.50</p>
                    <p className="text-sm text-muted-foreground">3 Courses</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  One of the best deals you can receive at restaurants in Dorking this season!
                </p>
              </div>

              {/* Appetisers */}
              <div className="mb-12">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                  Appetisers as Memorable as a First Kiss
                </h2>
                <p className="text-muted-foreground mb-6">
                  We have a variety of appetisers to help you begin your &quot;Amore&quot; experience. 
                  Options are carefully chosen to awaken the palate without overwhelming it—and also 
                  to help propel conversation with your date!
                </p>
                
                <div className="space-y-4">
                  <div className="bg-card rounded-xl p-5 border border-border/50 hover:border-pink-200 transition-colors">
                    <h3 className="font-semibold mb-2">Smoked Salmon Carpaccio</h3>
                    <p className="text-sm text-muted-foreground">With avocado and a light citrus dressing — rich and creamy</p>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-border/50 hover:border-pink-200 transition-colors">
                    <h3 className="font-semibold mb-2">Mozzarella in Carrozza</h3>
                    <p className="text-sm text-muted-foreground">Crisp and golden with irresistibly molten centres</p>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-border/50 hover:border-pink-200 transition-colors">
                    <h3 className="font-semibold mb-2">Arancini al Ragù</h3>
                    <p className="text-sm text-muted-foreground">Slow-cooked ragù and molten mozzarella within a crunchy shell</p>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-border/50 hover:border-pink-200 transition-colors">
                    <h3 className="font-semibold mb-2">Beetroot Carpaccio</h3>
                    <p className="text-sm text-muted-foreground">Paired with soft goat&apos;s cheese and toasted hazelnuts — vegetarian</p>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-border/50 hover:border-pink-200 transition-colors">
                    <h3 className="font-semibold mb-2">Butter-Chilli-Garlic Prawns</h3>
                    <p className="text-sm text-muted-foreground">A rich and savoury treat that leaves room for courses ahead</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Our choice of appetisers is suited for the palates of vegans, vegetarians and pescatarians.
                </p>
              </div>

              {/* Mains */}
              <div className="mb-12">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                  Mains to Fall in Love With
                </h2>
                <p className="text-muted-foreground mb-6">
                  Valentine&apos;s Day deserves dishes that feel as special as the company you&apos;re keeping. 
                  The &quot;Amore&quot; mains are carefully selected to be hearty and elegant, indulgent yet easy 
                  to enjoy in front of someone you like without the worry of embarrassment.
                </p>
                
                <div className="grid gap-4">
                  <div className="bg-gradient-to-r from-pink-50 to-white rounded-xl p-6 border-2 border-pink-200">
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-pink-500 fill-pink-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Heart-Shaped Ravioli</h3>
                        <p className="text-muted-foreground">Filled with ricotta and spinach, served in a silky pink sauce</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-border/50 hover:border-red-200 transition-colors">
                    <h3 className="font-semibold mb-2">&quot;Marry Me&quot; Pasta</h3>
                    <p className="text-sm text-muted-foreground">Tender ribbons of pasta with charred chicken</p>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-border/50 hover:border-red-200 transition-colors">
                    <h3 className="font-semibold mb-2">Gamberi e Zucchine Risotto</h3>
                    <p className="text-sm text-muted-foreground">With prawns, monk fish, and soft courgette</p>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-border/50 hover:border-red-200 transition-colors">
                    <h3 className="font-semibold mb-2">Gnocchi with Ribeye</h3>
                    <p className="text-sm text-muted-foreground">In a rich tomato sauce topped with sliced ribeye and fresh rocket</p>
                  </div>
                  <div className="bg-card rounded-xl p-5 border border-border/50 hover:border-red-200 transition-colors">
                    <h3 className="font-semibold mb-2">Green Beans & Pesto Spaghetti</h3>
                    <p className="text-sm text-muted-foreground">Hearty vegetarian option with soft potatoes</p>
                  </div>
                </div>
              </div>

              {/* Desserts */}
              <div className="mb-12">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Cake className="w-6 h-6 text-pink-500" />
                  Sweet and Memorable Desserts
                </h2>
                <p className="text-muted-foreground mb-6">
                  It&apos;s not a Valentine&apos;s celebration without the sweets. The final course will be as 
                  a kiss goodbye, intended to be savoured slowly. Our desserts are crafted to be heartwarming, 
                  leaving a delightful taste that will linger long after the meal ends.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-2">Rosa d&apos;Amore</h3>
                    <p className="text-muted-foreground">A blushing panna cotta that trembles like a shy heartbeat, served gorgeously</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-2">Tiramisù d&apos;Amore</h3>
                    <p className="text-muted-foreground">Devilishly delightful espresso-soaked savoiardi and velvety mascarpone</p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-50 to-cream-50 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-2">Millefoglie d&apos;Amore</h3>
                    <p className="text-muted-foreground">The classic Italian wedding cake — melt-in-your-mouth pastry and delicate cream</p>
                  </div>
                </div>
              </div>

              {/* Wine Selection */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-12 not-prose">
                <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
                  <Wine className="w-6 h-6 text-purple-500" />
                  Wine Selection (Optional)
                </h2>
                <p className="text-muted-foreground mb-4">
                  Complement your meal with a bottle from our wine selection—one of the most extensive 
                  at restaurants in Dorking. We have crisp Italian whites, bold Greek reds, delicate rosés 
                  and sparkling Prosecco, among others.
                </p>
                <p className="text-muted-foreground mb-4">
                  Glasses of lively Trebbiano or silky Montepulciano would surely spark interesting conversation.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Please note the wines are sold separately.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl p-8 md:p-12 text-center text-white not-prose">
                <Heart className="w-12 h-12 mx-auto mb-4 fill-white/30" />
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Reserve Your Table Early
                </h2>
                <p className="text-white/90 mb-6 max-w-lg mx-auto">
                  Don&apos;t wait to book. Call now to claim a spot before other lovebirds do. 
                  We can accommodate special requests and dietary requirements upon request.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 font-bold">
                    <Link href="/contact" className="flex items-center gap-2">
                      Book Online
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold">
                    <a href="tel:+441306742885" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      01306 742885
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </article>

        {/* Related Links */}
        <section className="py-12 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl font-bold mb-6">Explore More</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/menu">View Full Menu</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/gallery">See Our Gallery</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/about">Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
