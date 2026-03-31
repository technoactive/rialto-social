"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ChevronRight,
  Star,
  IceCream,
  Leaf,
  Share2,
  Facebook,
  Twitter,
  Quote,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tableOfContents = [
  { id: "mistake", label: "Easy Mistake to Make" },
  { id: "why-3-days", label: "Why 3 Days?" },
  { id: "how-we-make", label: "How We Make It" },
  { id: "day-one", label: "Day One" },
  { id: "day-two", label: "Day Two" },
  { id: "day-three", label: "Day Three" },
  { id: "reviews", label: "What Customers Say" },
];

const reviews = [
  {
    text: "All of the fruit flavours are amazing and better than any ice cream I have had in the UK. Kids can't get enough, will be back.",
    stars: 5,
  },
  {
    text: "We lived in Dorking for a year before we sampled their gelato, but once we'd tried it we have popped in several times for more.",
    stars: 5,
  },
  {
    text: "Delicious fresh food and very welcoming staff. Gelato was amazing! Good value Sunday lunch. Will definitely be back again.",
    stars: 5,
  },
  {
    text: "The gelato was wonderful!",
    stars: 5,
  },
];

const days = [
  {
    day: "Day One",
    id: "day-one",
    color: "from-amber-50 to-yellow-50",
    iconColor: "bg-amber-500",
    title: "The Base",
    description:
      "We make the base from scratch using whole milk and fresh cream. The mixture is heated to 85°C to properly bind the fats, sugars and proteins. Then we let it cool and leave it to rest overnight. This resting period, called maturation, is where the texture is decided. Skip it and you get ice crystals. Do it properly and you get silk.",
  },
  {
    day: "Day Two",
    id: "day-two",
    color: "from-green-50 to-emerald-50",
    iconColor: "bg-emerald-500",
    title: "The Flavouring",
    description:
      "We add the flavouring to the mature product using real produce, not fruit concentrate. We carefully select the ripest, freshest strawberries and pistachios to deliver a rich, enchanting flavour that tastes natural and wholesome.",
  },
  {
    day: "Day Three",
    id: "day-three",
    color: "from-blue-50 to-indigo-50",
    iconColor: "bg-indigo-500",
    title: "The Churn",
    description:
      "We slowly churn the gelato to keep air out and let it set. It sounds simple, but has to be done carefully to reach the exact point of softness where it yields to the spoon without effort.",
  },
];

export default function GelatoBlogPost() {
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

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

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 origin-left z-[70]"
        style={{ scaleX }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100svh] flex items-center overflow-hidden py-24 md:py-32">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px"
            }} />
            {/* Decorative blobs */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl hidden sm:block" />
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-amber-600/30 rounded-full blur-3xl hidden sm:block" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* Breadcrumb */}
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="hidden sm:flex items-center justify-center gap-2 text-sm text-white/70 mb-6"
              >
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Gelato</span>
              </motion.nav>

              {/* Category badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
              >
                <IceCream className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">Behind the Scenes</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2"
              >
                We Spend 3 Days Making<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Something You&apos;ll Eat in 4 Minutes
              </motion.h1>

              {/* Meta */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-6 text-white/80 text-sm mb-8 sm:mb-12"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  31 March 2026
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  5 min read
                </span>
                <span className="flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  Made from scratch
                </span>
              </motion.div>

              {/* Key fact */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-flex items-center gap-3 sm:gap-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-5 sm:px-8 py-3 sm:py-4 border border-white/20"
              >
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold">34</p>
                  <p className="text-xs sm:text-sm text-white/70">Flavours</p>
                </div>
                <div className="w-px h-10 bg-white/30" />
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold">3</p>
                  <p className="text-xs sm:text-sm text-white/70">Days to make</p>
                </div>
                <div className="w-px h-10 bg-white/30" />
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold">85°C</p>
                  <p className="text-xs sm:text-sm text-white/70">Heated to</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
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
        <section className="py-12 md:py-16 bg-white text-gray-900">
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
                    <ul className="space-y-1">
                      {tableOfContents.map(({ id, label }) => (
                        <li key={id}>
                          <button
                            onClick={() => scrollToSection(id)}
                            className={cn(
                              "text-sm w-full text-left px-3 py-2 rounded-lg transition-all",
                              activeSection === id
                                ? "bg-amber-100 text-amber-700 font-medium"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            )}
                          >
                            {label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Share */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-4">
                      Share
                    </h3>
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center bg-[#1877f2] text-white py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                        <Facebook className="w-4 h-4" />
                      </button>
                      <button className="flex-1 flex items-center justify-center bg-[#1da1f2] text-white py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button className="flex-1 flex items-center justify-center bg-gray-800 text-white py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <article className="flex-1 max-w-3xl">

                {/* Intro */}
                <div className="mb-12">
                  <p className="text-xl text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-amber-500 first-letter:mr-3 first-letter:float-left">
                    Every day, someone orders our <Link href="/menu" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">gelato</Link> and says something like, &quot;This is the best ice cream I&apos;ve had.&quot; We smile, we say thank you, and we don&apos;t correct them. But between us, just for the record: it&apos;s not ice cream. Please don&apos;t call our gelato ice cream. This distinction is exactly why ours tastes exquisite.
                  </p>
                </div>

                {/* Section: Easy Mistake */}
                <motion.section
                  id="mistake"
                  className="mb-12 scroll-mt-24"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Easy Mistake to Make
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Gelato and ice cream look the same. Same freezer, same cone, same queue of people in August. But they&apos;re made completely differently, and the difference shows up the moment it hits your tongue.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ice cream is churned fast, which whips in a large amount of air (aeration), making it light and fluffy. Gelato is churned slowly, with much less air. The result is denser, silkier, and more intensely flavoured.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Because there&apos;s less fat in gelato, the flavours aren&apos;t muted. Pistachio tastes like pistachio. Strawberry tastes like a fresh strawberry you ate, not the artificial, &quot;bubble-gum&quot; strawberry flavour.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Gelato is also served slightly less frozen. You can taste everything without your tongue going numb.
                  </p>

                  {/* Comparison boxes */}
                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Ice Cream</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">—</span> Churned fast, lots of air</li>
                        <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">—</span> Higher fat content</li>
                        <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">—</span> Served frozen solid</li>
                        <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">—</span> Lighter, fluffier texture</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">Our Gelato</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span> Churned slowly, minimal air</li>
                        <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span> Denser, silkier texture</li>
                        <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span> Served slightly less frozen</li>
                        <li className="flex items-start gap-2"><span className="text-amber-400 mt-0.5">✓</span> Intensely, naturally flavoured</li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Section: Why 3 Days */}
                <motion.section
                  id="why-3-days"
                  className="mb-12 scroll-mt-24"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Why Our Gelato Takes 3 Days to Make
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We make our gelato in the authentic Venetian tradition, unlike many other places in the UK. We learned the recipe from chefs who travelled to Veneto every year, specifically to study gelato.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Venetian tradition relies on milk and cream, which makes the gelato less sweet than Sicilian gelato but much richer in texture. It also has a depth that sits somewhere between a dessert and an experience.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Carefully crafting a delicacy that is also a unique experience requires time, the right ingredients, and a bit of obsession.
                  </p>
                </motion.section>

                {/* Section: How We Make It - 3 Day Cards */}
                <motion.section
                  id="how-we-make"
                  className="mb-12 scroll-mt-24"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                    How We Make Our Gelato
                  </h2>

                  <div className="space-y-6">
                    {days.map((d) => (
                      <div
                        key={d.id}
                        id={d.id}
                        className={cn("rounded-2xl p-6 sm:p-8 bg-gradient-to-br scroll-mt-24", d.color)}
                      >
                        <div className="flex items-start gap-4">
                          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm font-bold", d.iconColor)}>
                            {d.day.split(" ")[1]}
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{d.day}</p>
                            <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{d.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{d.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-gray-900 rounded-2xl p-6 sm:p-8 text-white">
                    <p className="text-lg font-medium leading-relaxed">
                      We have <span className="text-amber-400 font-bold">34 flavours</span>. Each is made the same way, with the same patience. Some flavours are seasonal. Some are permanent.{" "}
                      <span className="text-amber-400">The pistachio is permanent.</span>
                    </p>
                  </div>
                </motion.section>

                {/* Section: Reviews */}
                <motion.section
                  id="reviews"
                  className="mb-12 scroll-mt-24"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                    What Our Customers Say
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {reviews.map((review, i) => (
                      <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                        <Quote className="w-6 h-6 text-amber-400 mb-3" />
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{review.text}</p>
                        <div className="flex gap-1">
                          {[...Array(review.stars)].map((_, s) => (
                            <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Booking CTA */}
                <motion.section
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl p-8 sm:p-10 text-center text-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-600/30 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <IceCream className="w-12 h-12 mx-auto mb-4 text-white/90" />
                    <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                      Come Try It for Yourself
                    </h2>
                    <p className="text-white/90 mb-8 max-w-md mx-auto">
                      Three days of craftsmanship. Four minutes of pure joy. Visit us in <Link href="/about" className="text-white underline underline-offset-2 hover:text-yellow-100">Dorking</Link> or browse our full <Link href="/menu" className="text-white underline underline-offset-2 hover:text-yellow-100">menu</Link> to see what else we make from scratch.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 hover:bg-amber-50 font-bold px-8 py-4 rounded-full shadow-lg transition-colors"
                      >
                        Book a Table
                      </Link>
                      <Link
                        href="/gallery"
                        className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold px-8 py-4 rounded-full transition-all"
                      >
                        See Our Gallery
                      </Link>
                    </div>
                  </div>
                </motion.section>

              </article>
            </div>
          </div>
        </section>

        {/* Back to Blog */}
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto py-8">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-amber-50 border border-gray-200 hover:border-amber-200 text-gray-600 hover:text-amber-600 transition-all duration-200 shadow-sm"
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
