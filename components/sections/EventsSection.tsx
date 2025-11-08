"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Users, Music, Target, Gamepad2, Tag, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Event types
type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  category: "karaoke" | "darts" | "gaming" | "special";
  description: string;
  image?: string;
  price?: string;
  capacity?: string;
  featured?: boolean;
};

// Sample events - you can easily add/edit these
const upcomingEvents: Event[] = [
  {
    id: "karaoke-night-1",
    title: "Friday Karaoke Night",
    date: "Every Friday",
    time: "8:00 PM - 1:00 AM",
    category: "karaoke",
    description: "Join us for our weekly karaoke night! Sing your favorite songs with our Karafun system featuring 44,000+ tracks. Private room also available for booking.",
    price: "Free entry",
    capacity: "Walk-ins welcome",
    featured: true,
  },
  {
    id: "karaoke-night-2",
    title: "Saturday Karaoke Night",
    date: "Every Saturday",
    time: "8:00 PM - 1:00 AM",
    category: "karaoke",
    description: "Weekend karaoke extravaganza! Perfect for celebrations and parties. Book our private karaoke room for your group.",
    price: "Free entry",
    capacity: "Walk-ins welcome",
    featured: true,
  },
  {
    id: "italian-food-night",
    title: "Italian Food Festival",
    date: "Last Friday of Every Month",
    time: "6:00 PM - 11:00 PM",
    category: "special",
    description: "Special Italian menu featuring regional dishes, live entertainment, and complimentary wine tasting. A celebration of Italian cuisine and culture.",
    price: "Special menu prices",
    capacity: "Reservations recommended",
    featured: true,
  },
  {
    id: "gaming-tournament",
    title: "PS5 FIFA Tournament",
    date: "First Saturday of Month",
    time: "2:00 PM - 6:00 PM",
    category: "gaming",
    description: "Monthly FIFA tournament on PS5. Compete with other gamers, win prizes, and enjoy special gaming packages with food and drinks.",
    price: "£10 entry",
    capacity: "Limited spots",
  },
  {
    id: "family-sunday",
    title: "Family Sunday",
    date: "Every Sunday",
    time: "12:00 PM - 4:00 PM",
    category: "special",
    description: "Special family-friendly atmosphere with kids' activities, special menu, and entertainment. Perfect for family gatherings.",
    price: "Regular menu prices",
    capacity: "Walk-ins welcome",
  },
];

const categoryConfig = {
  karaoke: {
    icon: Music,
    color: "from-accent to-accent/70",
    bgColor: "bg-accent/10",
    label: "Karaoke"
  },
  darts: {
    icon: Target,
    color: "from-primary to-primary/70",
    bgColor: "bg-primary/10",
    label: "Darts"
  },
  gaming: {
    icon: Gamepad2,
    color: "from-primary to-primary/70",
    bgColor: "bg-primary/10",
    label: "Gaming"
  },
  special: {
    icon: Tag,
    color: "from-accent to-accent/70",
    bgColor: "bg-accent/10",
    label: "Special Event"
  }
};

export function EventsSection() {
  const featuredEvents = upcomingEvents.filter(e => e.featured);
  const regularEvents = upcomingEvents.filter(e => !e.featured);

  return (
    <section className="relative pb-20">
      {/* Enhanced Hero Section */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden mb-20">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }} />
          </div>
        </div>
        
        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur text-primary px-6 py-2 rounded-full mb-6 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-bold">What&apos;s On at Rialto</span>
            </motion.div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Events</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us for special nights, entertainment, and unforgettable experiences at Rialto Social
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Don&apos;t Miss Out
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Events</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEvents.map((event, index) => {
                const config = categoryConfig[event.category];
                const CategoryIcon = config.icon;
                
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-border/50 group-hover:border-primary/40 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      {/* Event Image or Gradient */}
                      <div className="relative h-56 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                        {event.image ? (
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className={`absolute inset-0 bg-gradient-to-br ${config.color} flex items-center justify-center`}>
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <CategoryIcon className="w-24 h-24 text-white/40" />
                            </motion.div>
                          </div>
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-2 bg-white backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                            <CategoryIcon className="w-4 h-4" />
                            {config.label}
                          </span>
                        </div>
                      </div>
                      
                      {/* Event Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground font-medium">Date</p>
                              <p className="font-semibold">{event.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                              <Clock className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground font-medium">Time</p>
                              <p className="font-semibold">{event.time}</p>
                            </div>
                          </div>
                          {event.price && (
                            <div className="flex items-center gap-3 bg-primary/5 rounded-lg p-3">
                              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                                <Tag className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground font-medium">Price</p>
                                <p className="font-bold text-primary">{event.price}</p>
                              </div>
                            </div>
                          )}
                          {event.capacity && (
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Users className="w-5 h-5 text-accent" />
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground font-medium">Availability</p>
                                <p className="font-semibold">{event.capacity}</p>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-base text-gray-700 leading-relaxed mb-8 flex-grow">
                          {event.description}
                        </p>
                        
                        <Button className="w-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 font-bold py-6 shadow-lg group-hover:shadow-xl transition-all">
                          <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
                            Book This Event
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Regular Events */}
        {regularEvents.length > 0 && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Weekly Schedule
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
                Regular <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Events</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {regularEvents.map((event, index) => {
                const config = categoryConfig[event.category];
                const CategoryIcon = config.icon;
                
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative bg-white rounded-2xl p-8 border-2 border-border/50 group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-xl h-full">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all`}>
                          <CategoryIcon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span className="font-medium">{event.date}</span>
                              <span className="text-muted-foreground/50 mx-1">•</span>
                              <Clock className="w-4 h-4 text-accent" />
                              <span className="font-medium">{event.time}</span>
                            </div>
                            {event.price && (
                              <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                                <Tag className="w-3 h-3 text-primary" />
                                <span className="font-bold text-primary text-sm">{event.price}</span>
                              </div>
                            )}
                          </div>
                          
                          <p className="text-base text-gray-600 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Event Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-3xl blur-2xl" />
          
          <div className="relative bg-white rounded-3xl p-10 md:p-16 border-2 border-border/50">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                What We Offer
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Categories</span>
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(categoryConfig).map(([key, config], index) => {
                const Icon = config.icon;
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative bg-gray-50 rounded-2xl p-6 text-center group-hover:bg-white transition-colors">
                      <motion.div
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 mx-auto mb-4"
                      >
                        <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>
                      <p className="font-bold text-lg group-hover:text-primary transition-colors">{config.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl overflow-hidden border-2 border-primary/20"
          >
            {/* Animated pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                animate={{
                  backgroundPosition: ['0px 0px', '100px 100px'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
                }} 
              />
            </div>
            
            <div className="relative p-12 md:p-20 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white">
                  Want to Host Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Own Event?</span>
                </h2>
                <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white/80 leading-relaxed">
                  We offer custom event packages for birthdays, corporate events, and special celebrations. 
                  Contact us to discuss your requirements.
                </p>
              </motion.div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold shadow-2xl px-8 py-6 text-lg">
                    <Link href="/contact" className="flex items-center gap-2">
                      Contact Events Team
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-primary/20 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-bold shadow-2xl px-8 py-6 text-lg transition-all">
                    <a href="tel:+441306742885" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call 01306 742885
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-32 h-32">
              <div className="absolute top-4 left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32">
              <div className="absolute bottom-4 right-4 w-24 h-24 border-b-2 border-r-2 border-accent/30 rounded-br-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

