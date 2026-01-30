"use client";

import { motion } from "framer-motion";
import { Mic2, Target, Music, Users, Calendar, Clock, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const entertainmentFeatures = [
  {
    icon: Mic2,
    title: "Karaoke with Karafun",
    description: "Experience Europe's #1 karaoke system",
    details: [
      "44,000+ songs in 23 languages",
      "Private karaoke room available",
      "Available all week, all day",
      "VIP dinner & karaoke packages",
    ],
    schedule: "Monday - Sunday: All Day",
    image: "/pictures/entertainment/karaoke.jpg",
  },
  {
    icon: Target,
    title: "Interactive Darts",
    description: "Surrey's premier darts venue",
    details: [
      "4 professional-standard boards",
      "Perfect for casual play",
      "Group bookings available",
      "Fun atmosphere for all skill levels",
    ],
    schedule: "Daily from 12 PM",
    image: "/pictures/entertainment/darts.jpg",
  },
  {
    icon: Gamepad2,
    title: "PS5 Gaming Room",
    description: "Latest gaming experience",
    details: [
      "FIFA, Mortal Kombat, NBA 2K25 & more",
      "Local hot seat gaming",
      "Perfect for groups and parties",
      "Private room available",
    ],
    schedule: "Daily",
    image: "/pictures/rialto-ps5-gaming-room.jpg",
  },
];

export function Entertainment() {
  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Entertainment & <span className="text-primary">Fun</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just great food - enjoy karaoke, darts, and PS5 gaming
            with friends while savoring authentic Italian cuisine
          </p>
        </motion.div>

        {/* Entertainment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {entertainmentFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="aspect-video bg-muted relative group">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 w-fit mb-3">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold drop-shadow-lg">
                    {feature.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-lg mb-4">{feature.description}</p>
                
                <div className="space-y-3 mb-6">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm bg-secondary/50 rounded-lg px-4 py-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-medium">{feature.schedule}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-accent rounded-2xl p-8 text-center text-white"
        >
          <div className="max-w-3xl mx-auto">
            <Music className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-4">
              Book Your Entertainment Night
            </h3>
            <p className="text-white/80 mb-6">
              Perfect for birthday parties, corporate events, or just a fun night
              out with friends. We offer special packages that include dining and
              entertainment.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-white">Group Packages</h4>
                <p className="text-sm text-white/70">
                  Special rates for groups of 10+
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-white">Private Events</h4>
                <p className="text-sm text-white/70">
                  Book our venue for exclusive use
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Mic2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-white">Karaoke & PS5</h4>
                <p className="text-sm text-white/70">
                  Private rooms available
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Enquire About Events</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/events">View Upcoming Events</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
