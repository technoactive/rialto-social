"use client";

import { motion } from "framer-motion";
import { Mic2, Target, Music, Trophy, Users, Clock, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const karaokeDetails = {
  title: "Karaoke Nights",
  description: "Turn your dinner into an unforgettable night of entertainment",
  features: [
    {
      icon: Mic2,
      title: "State-of-the-Art System",
      description: "Professional karaoke setup with crystal clear sound and HD screens",
    },
    {
      icon: Music,
      title: "10,000+ Songs",
      description: "From classic hits to current chart-toppers in multiple languages",
    },
    {
      icon: Users,
      title: "Private Rooms",
      description: "3 private karaoke rooms for groups of 6-20 people",
    },
    {
      icon: Star,
      title: "VIP Packages",
      description: "Special dining and karaoke packages for celebrations",
    },
  ],
  schedule: {
    regular: "Every Friday & Saturday: 8 PM - 1 AM",
    private: "Private rooms available all week with reservation",
  },
  pricing: [
    { type: "Main Stage", price: "Free with dining" },
    { type: "Private Room (Small)", price: "£30/hour (6-10 people)" },
    { type: "Private Room (Large)", price: "£50/hour (10-20 people)" },
    { type: "VIP Package", price: "From £35 per person (includes meal)" },
  ],
};

const dartsDetails = {
  title: "Darts Lounge",
  description: "Challenge friends or join our leagues in our dedicated darts area",
  features: [
    {
      icon: Target,
      title: "4 Professional Boards",
      description: "Tournament-standard bristle dartboards with proper lighting",
    },
    {
      icon: Trophy,
      title: "Weekly Leagues",
      description: "Join our Wednesday night leagues for all skill levels",
    },
    {
      icon: Clock,
      title: "Happy Hour Special",
      description: "Free darts play during happy hour (3-6 PM daily)",
    },
    {
      icon: Calendar,
      title: "Monthly Tournaments",
      description: "Cash prizes and restaurant vouchers for winners",
    },
  ],
  schedule: {
    regular: "Daily from opening to close",
    leagues: "Wednesday nights: 7 PM - 10 PM",
    tournaments: "Last Saturday of each month",
  },
  pricing: [
    { type: "Casual Play", price: "£3 per hour" },
    { type: "Happy Hour", price: "Free (3-6 PM)" },
    { type: "League Entry", price: "£5 per person" },
    { type: "Tournament Entry", price: "£10 per person" },
  ],
};

export function EntertainmentPageSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Entertainment at <span className="text-primary">Rialto Social</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just great Italian food - we're Dorking's premier destination
            for dining and entertainment under one roof
          </p>
        </motion.div>

        {/* Karaoke Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Mic2 className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {karaokeDetails.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {karaokeDetails.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {karaokeDetails.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center"
              >
                <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-secondary/20 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-4">Schedule</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Regular Karaoke</p>
                    <p className="text-sm text-muted-foreground">
                      {karaokeDetails.schedule.regular}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Private Rooms</p>
                    <p className="text-sm text-muted-foreground">
                      {karaokeDetails.schedule.private}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-4">Pricing</h3>
              <div className="space-y-3">
                {karaokeDetails.pricing.map((item) => (
                  <div key={item.type} className="flex justify-between items-center">
                    <span className="font-medium">{item.type}</span>
                    <span className="text-primary font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Darts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {dartsDetails.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {dartsDetails.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dartsDetails.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 text-center"
              >
                <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-secondary/20 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-4">Schedule</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">General Play</p>
                    <p className="text-sm text-muted-foreground">
                      {dartsDetails.schedule.regular}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">League Nights</p>
                    <p className="text-sm text-muted-foreground">
                      {dartsDetails.schedule.leagues}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Tournaments</p>
                    <p className="text-sm text-muted-foreground">
                      {dartsDetails.schedule.tournaments}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-4">Pricing</h3>
              <div className="space-y-3">
                {dartsDetails.pricing.map((item) => (
                  <div key={item.type} className="flex justify-between items-center">
                    <span className="font-medium">{item.type}</span>
                    <span className="text-primary font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary/10 rounded-2xl p-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold mb-4">
            Book Your Entertainment Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether it's a birthday party, corporate event, or just a fun night out,
            we have packages to suit every occasion. Combine great Italian food with
            unforgettable entertainment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Book Entertainment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+44-xxx-xxx-xxxx">Call Us</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
