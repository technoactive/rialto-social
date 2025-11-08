"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Music, Target, Gamepad2, Tag, ArrowRight } from "lucide-react";
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
    <section className="py-12 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
          >
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">What's On</span>
          </motion.div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Events</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for special nights, entertainment, and unforgettable experiences at Rialto Social
          </p>
        </motion.div>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl font-bold mb-8"
            >
              Featured Events
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEvents.map((event, index) => {
                const config = categoryConfig[event.category];
                const CategoryIcon = config.icon;
                
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/50 group-hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                      {/* Event Image or Gradient */}
                      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                        {event.image ? (
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className={`absolute inset-0 bg-gradient-to-br ${config.color} flex items-center justify-center`}>
                            <CategoryIcon className="w-20 h-20 text-white/30" />
                          </div>
                        )}
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`inline-flex items-center gap-2 ${config.bgColor} backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold`}>
                            <CategoryIcon className="w-3 h-3" />
                            {config.label}
                          </span>
                        </div>
                      </div>
                      
                      {/* Event Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 text-accent" />
                            <span>{event.time}</span>
                          </div>
                          {event.price && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Tag className="w-4 h-4 text-primary" />
                              <span>{event.price}</span>
                            </div>
                          )}
                          {event.capacity && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Users className="w-4 h-4 text-accent" />
                              <span>{event.capacity}</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                          {event.description}
                        </p>
                        
                        <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all group-hover:shadow-lg">
                          <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
                            Book Now
                            <ArrowRight className="w-4 h-4" />
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
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl font-bold mb-8"
            >
              Regular Events
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {regularEvents.map((event, index) => {
                const config = categoryConfig[event.category];
                const CategoryIcon = config.icon;
                
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-card rounded-2xl p-6 border border-border/50 group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg h-full">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <CategoryIcon className="w-7 h-7 text-white" />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                          
                          <div className="space-y-1 mb-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              <span>{event.date}</span>
                              <span className="text-muted-foreground/50">•</span>
                              <Clock className="w-3 h-3" />
                              <span>{event.time}</span>
                            </div>
                            {event.price && (
                              <div className="flex items-center gap-2 text-sm">
                                <Tag className="w-3 h-3 text-primary" />
                                <span className="font-semibold text-primary">{event.price}</span>
                              </div>
                            )}
                          </div>
                          
                          <p className="text-sm text-muted-foreground leading-relaxed">
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

        {/* Event Types Filter/Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-card via-card/80 to-card backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
            Event Categories
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(categoryConfig).map(([key, config], index) => {
              const Icon = config.icon;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold">{config.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-primary via-accent to-primary rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
            }} />
          </div>
          
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Want to Host Your Own Event?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
              We offer custom event packages for birthdays, corporate events, and special celebrations. 
              Contact us to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold shadow-xl">
                  <Link href="/contact">Contact Events Team</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold">
                  <a href="tel:+441306742885">Call 01306 742885</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

