"use client";

import { motion } from "framer-motion";
import { ChefHat, Mic2, Target, ArrowRight, Gamepad2, IceCream } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "dining",
    icon: ChefHat,
    title: "Italian Dining",
    description: "Traditional stone baked Neapolitan style pizzas and authentic Italian cuisine",
    features: ["Lunch & Dinner", "Takeaway Available", "Private Dining"],
    link: "/menu",
    linkText: "View Menu",
    color: "from-primary/10 to-primary/5",
    borderColor: "border-primary/20",
    availability: "Daily - See hours below",
    image: "/pictures/rialto-margherita-pizza.jpg",
  },
  {
    id: "gelato",
    icon: IceCream,
    title: "Artisanal Gelato",
    description: "Authentic Italian gelato made fresh daily by our artisanal gelato makers",
    features: ["Made Fresh Daily", "Traditional Flavors", "Vegan Options"],
    link: "/menu#desserts",
    linkText: "View Flavors",
    color: "from-primary/10 to-accent/5",
    borderColor: "border-primary/20",
    availability: "Daily",
    image: "/pictures/rialto-gelato-display.jpg",
  },
  {
    id: "karaoke",
    icon: Mic2,
    title: "Karaoke Nights",
    description: "Monday to Sunday - Private room available all day",
    features: ["44,000+ Songs", "Private Room", "Karafun System"],
    link: "/entertainment#karaoke",
    linkText: "Book Karaoke",
    color: "from-accent/10 to-accent/5",
    borderColor: "border-accent/20",
    availability: "All Week - All Day",
    image: "/pictures/rialto-karaoke-room.jpg",
  },
  {
    id: "darts",
    icon: Target,
    title: "Interactive Darts",
    description: "Professional dartboards for casual play and fun with friends",
    features: ["4 Boards", "Daily Play", "Group Bookings"],
    link: "/entertainment#darts",
    linkText: "Reserve Darts",
    color: "from-accent/10 to-primary/5",
    borderColor: "border-accent/20",
    availability: "Daily from 12 PM",
    image: "/pictures/rialto-darts-area.jpg",
  },
  {
    id: "ps5",
    icon: Gamepad2,
    title: "PS5 Gaming Room",
    description: "Local hot seat gaming - FIFA, Mortal Kombat, Rugby 25, NBA 2K25, Top Spin, F1 25, Gran Turismo, UFC 5",
    features: ["Latest Games", "Private Room", "Group Sessions"],
    link: "/entertainment#gaming",
    linkText: "Book PS5 Room",
    color: "from-primary/10 to-primary/5",
    borderColor: "border-primary/20",
    availability: "Daily",
    image: "/pictures/rialto-ps5-gaming-room.jpg",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full"
          >
            Our Services
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything Under <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">One Roof</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Dine, sing, play - experience it all at Rialto Social
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={cn(
                  "relative h-full rounded-3xl overflow-hidden transition-all duration-300",
                  "bg-white",
                  "border border-border/50",
                  "group-hover:shadow-2xl group-hover:scale-105 group-hover:border-primary/30"
                )}
              >
                {/* Image Section - No overlays or captions */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className={cn("relative p-6 md:p-8 h-full flex flex-col bg-gradient-to-br", service.color)}>
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-background to-background/50 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Availability Badge */}
                  <div className="mb-6">
                    <span className="text-xs font-medium text-muted-foreground bg-muted/50 rounded-full px-3 py-1.5 inline-flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      {service.availability}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={service.link}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all group-hover:gap-3"
                  >
                    {service.linkText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Decorative gradient orbs */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
