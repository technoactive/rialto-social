"use client";

import { motion } from "framer-motion";
import { ChefHat, Mic2, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "dining",
    icon: ChefHat,
    title: "Italian Dining",
    description: "Authentic Italian cuisine with fresh pasta and traditional pizzas",
    features: ["Lunch & Dinner", "Takeaway Available", "Private Dining"],
    link: "/menu",
    linkText: "View Menu",
    color: "from-primary/10 to-primary/5",
    borderColor: "border-primary/20",
    availability: "Daily 12 PM - 10 PM",
  },
  {
    id: "karaoke",
    icon: Mic2,
    title: "Karaoke Nights",
    description: "Sing your heart out with 10,000+ songs and private rooms",
    features: ["Fri & Sat 8 PM", "Private Rooms", "Party Packages"],
    link: "/entertainment#karaoke",
    linkText: "Book Karaoke",
    color: "from-accent/10 to-accent/5",
    borderColor: "border-accent/20",
    availability: "Fri-Sat 8 PM - 1 AM",
  },
  {
    id: "darts",
    icon: Target,
    title: "Darts Lounge",
    description: "Professional dartboards with leagues and tournaments",
    features: ["Daily Play", "Happy Hour Free", "Tournaments"],
    link: "/entertainment#darts",
    linkText: "Reserve Darts",
    color: "from-accent/10 to-primary/5",
    borderColor: "border-accent/20",
    availability: "Daily from 12 PM",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything Under <span className="text-primary">One Roof</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Dine, sing, play - experience it all at Rialto Social
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
                  "relative h-full bg-gradient-to-br rounded-2xl overflow-hidden",
                  service.color,
                  service.borderColor,
                  "border backdrop-blur-sm"
                )}
              >
                {/* Card Content */}
                <div className="p-6 md:p-8">
                  {/* Icon */}
                  <div className="mb-4">
                    <service.icon className="w-12 h-12 text-primary" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Availability */}
                  <div className="mb-6 text-sm text-muted-foreground bg-background/50 rounded-lg px-3 py-2 inline-block">
                    {service.availability}
                  </div>

                  {/* CTA */}
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                  >
                    {service.linkText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Decorative gradient */}
                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
