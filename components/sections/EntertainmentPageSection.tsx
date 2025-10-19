"use client";

import { motion } from "framer-motion";
import { Mic2, Target, Music, Trophy, Users, Clock, Calendar, Star, ChevronRight, Sparkles, PartyPopper, Award, Heart, Volume2, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
  },
  {
    icon: Volume2,
    title: "Studio Quality",
    description: "Professional audio system with vocal effects and pitch control"
  }
];

const entertainmentHighlights = [
  {
    stat: "3",
    label: "Private Karaoke Rooms",
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
    text: "Love the darts league here. Great atmosphere, well-maintained boards, and excellent Italian food!"
  },
  {
    name: "Emma L.",
    rating: 5,
    text: "Had my birthday here - dinner, karaoke, and darts all in one place. Couldn&apos;t ask for better!"
  }
];

export function EntertainmentPageSection() {
  const [activeTab, setActiveTab] = useState<"karaoke" | "darts">("karaoke");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <PartyPopper className="w-8 h-8 text-accent animate-bounce" />
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Entertainment Hub
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Dorking&apos;s Premier Venue for Karaoke & Darts
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {entertainmentHighlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                >
                  <item.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary">{item.stat}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-accent to-primary text-white font-semibold">
                <Link href="/contact" className="flex items-center gap-2">
                  Book Your Night <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <a href="tel:+441306742885" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call 01306 742885
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-muted rounded-full p-1">
              <button
                onClick={() => setActiveTab("karaoke")}
                className={cn(
                  "px-8 py-3 rounded-full font-medium transition-all duration-300",
                  activeTab === "karaoke"
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Mic2 className="w-5 h-5 inline-block mr-2" />
                Karaoke with Karafun
              </button>
              <button
                onClick={() => setActiveTab("darts")}
                className={cn(
                  "px-8 py-3 rounded-full font-medium transition-all duration-300",
                  activeTab === "darts"
                    ? "bg-primary text-white shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Target className="w-5 h-5 inline-block mr-2" />
                Darts Lounge
              </button>
            </div>
          </div>

          {/* Karaoke Content */}
          {activeTab === "karaoke" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Karafun Hero */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-gradient-to-r from-accent to-primary text-white px-6 py-2 rounded-lg">
                        <span className="font-bold text-2xl">KARAFUN</span>
                      </div>
                      <span className="text-sm bg-accent text-white px-3 py-1 rounded-full">
                        Official Partner
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
                        <span>Control everything from your smartphone</span>
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
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    <Image
                      src="/pictures/rialto-social-karaoke-room-entertainment-dorking.jpg"
                      alt="Karaoke at Rialto Social"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm opacity-90">Private Karaoke Rooms</p>
                      <p className="text-2xl font-bold">Sing Your Heart Out</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Karafun Features */}
              <div className="mb-16">
                <h3 className="font-display text-2xl font-bold text-center mb-8">
                  Why Karafun Makes Us Different
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {karafunFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-card rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Pricing and Schedule */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                <div className="bg-accent/5 rounded-3xl p-8">
                  <h3 className="font-display text-2xl font-bold mb-6 text-accent">
                    Karaoke Schedule
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">Open Mic Karaoke</p>
                          <p className="text-sm text-muted-foreground">Main dining area stage</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-accent">Free</p>
                          <p className="text-sm">Fri & Sat 8pm-1am</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">Private Rooms</p>
                          <p className="text-sm text-muted-foreground">3 rooms available</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-accent">From £30/hr</p>
                          <p className="text-sm">7 days a week</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">VIP Package</p>
                          <p className="text-sm text-muted-foreground">Dinner + 2hr karaoke</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">£35pp</p>
                          <p className="text-sm">Min 6 people</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-3xl p-8">
                  <h3 className="font-display text-2xl font-bold mb-6 text-primary">
                    Room Options
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-semibold mb-2">Harmony Room</h4>
                      <p className="text-sm text-muted-foreground mb-2">Perfect for small groups</p>
                      <div className="flex justify-between text-sm">
                        <span>6-8 people</span>
                        <span className="font-bold">£30/hour</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <h4 className="font-semibold mb-2">Melody Suite</h4>
                      <p className="text-sm text-muted-foreground mb-2">Our most popular room</p>
                      <div className="flex justify-between text-sm">
                        <span>10-15 people</span>
                        <span className="font-bold">£45/hour</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-2 border-primary">
                      <h4 className="font-semibold mb-2">Symphony Hall</h4>
                      <p className="text-sm text-muted-foreground mb-2">Perfect for large parties</p>
                      <div className="flex justify-between text-sm">
                        <span>15-25 people</span>
                        <span className="font-bold">£60/hour</span>
                      </div>
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
              {/* Darts Hero */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 mb-16">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden">
                    <Image
                      src="/pictures/rialto-social-darts-area-entertainment-venue.jpg"
                      alt="Darts at Rialto Social"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm opacity-90">Professional Setup</p>
                      <p className="text-2xl font-bold">Hit the Bullseye</p>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-6">
                      <Target className="w-12 h-12 text-accent" />
                      <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Professional Darts Lounge
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      Step into Surrey&apos;s finest darts venue. With 4 professional boards, 
                      perfect lighting, and a vibrant atmosphere, we&apos;re home to casual players 
                      and serious competitors alike.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white rounded-xl p-4 text-center">
                        <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="font-bold text-2xl">£500</p>
                        <p className="text-sm text-muted-foreground">Monthly Prize Pool</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center">
                        <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                        <p className="font-bold text-2xl">8</p>
                        <p className="text-sm text-muted-foreground">League Teams</p>
                      </div>
                    </div>
                    <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                      Join Our Darts League
                    </Button>
                  </div>
                </div>
              </div>

              {/* Darts Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 text-center"
                >
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Tournament Ready</h4>
                  <p className="text-sm text-muted-foreground">
                    Bristle boards, proper lighting, and regulation throwing distance
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 text-center"
                >
                  <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">Weekly Events</h4>
                  <p className="text-sm text-muted-foreground">
                    Leagues on Wednesday, tournaments monthly, casual play daily
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 text-center"
                >
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">All Welcome</h4>
                  <p className="text-sm text-muted-foreground">
                    From beginners to pros, everyone finds their place here
                  </p>
                </motion.div>
              </div>

              {/* Darts Schedule & Pricing */}
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-8 md:p-12">
                <h3 className="font-display text-2xl font-bold mb-8 text-center">
                  Darts Schedule & Pricing
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Happy Hour</h4>
                    <p className="text-2xl font-bold text-primary mb-1">FREE</p>
                    <p className="text-sm text-muted-foreground">3-6pm Daily</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Casual Play</h4>
                    <p className="text-2xl font-bold text-primary mb-1">£3/hr</p>
                    <p className="text-sm text-muted-foreground">Per person</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">League Night</h4>
                    <p className="text-2xl font-bold text-primary mb-1">£5</p>
                    <p className="text-sm text-muted-foreground">Wed 7-10pm</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center border-2 border-primary">
                    <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Tournament</h4>
                    <p className="text-2xl font-bold text-primary mb-1">£10</p>
                    <p className="text-sm text-muted-foreground">Last Sat/month</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Testimonials */}
          <div className="mt-20">
            <h3 className="font-display text-3xl font-bold text-center mb-12">
              What Our Guests Say
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-white"
          >
            <PartyPopper className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready for an Unforgettable Night?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Book your table, reserve a karaoke room, or join our darts league. 
              Great food, amazing entertainment, memorable nights!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-semibold">
                <Link href="/contact" className="flex items-center gap-2">
                  Book Entertainment <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                <a href="tel:+441306742885">Call 01306 742885</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Add missing imports
import { Check } from "lucide-react";
import { Phone } from "lucide-react";