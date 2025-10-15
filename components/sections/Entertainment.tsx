"use client";

import { motion } from "framer-motion";
import { Mic2, Target, Music, Users, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const entertainmentFeatures = [
  {
    icon: Mic2,
    title: "Karaoke Nights",
    description: "Sing your heart out every Friday and Saturday",
    details: [
      "Professional karaoke system",
      "Over 10,000 songs",
      "Private karaoke rooms available",
      "Group packages for parties",
    ],
    schedule: "Fri & Sat: 8 PM - 1 AM",
    image: "/entertainment/karaoke.jpg",
  },
  {
    icon: Target,
    title: "Darts Lounge",
    description: "Challenge your friends to a game of darts",
    details: [
      "4 professional dartboards",
      "League nights on Wednesdays",
      "Tournaments every month",
      "Free play during happy hour",
    ],
    schedule: "Daily: 12 PM - Close",
    image: "/entertainment/darts.jpg",
  },
];

export function Entertainment() {
  return (
    <section className="py-20 bg-secondary/20">
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
            More than just great food - enjoy karaoke nights and darts with
            friends while savoring authentic Italian cuisine
          </p>
        </motion.div>

        {/* Entertainment Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {entertainmentFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <feature.icon className="w-12 h-12 mb-2" />
                  <h3 className="font-display text-2xl font-bold">
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
          className="bg-primary/10 rounded-2xl p-8 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <Music className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-4">
              Book Your Entertainment Night
            </h3>
            <p className="text-muted-foreground mb-6">
              Perfect for birthday parties, corporate events, or just a fun night
              out with friends. We offer special packages that include dining and
              entertainment.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-card rounded-xl p-4">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Group Packages</h4>
                <p className="text-sm text-muted-foreground">
                  Special rates for groups of 10+
                </p>
              </div>
              <div className="bg-card rounded-xl p-4">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Private Events</h4>
                <p className="text-sm text-muted-foreground">
                  Book our venue for exclusive use
                </p>
              </div>
              <div className="bg-card rounded-xl p-4">
                <Mic2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Karaoke Rooms</h4>
                <p className="text-sm text-muted-foreground">
                  Private rooms for 6-20 people
                </p>
              </div>
            </div>

            <Button asChild size="lg">
              <Link href="/contact">Enquire About Events</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
