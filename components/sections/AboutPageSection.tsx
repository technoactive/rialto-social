"use client";

import { motion } from "framer-motion";
import { ChefHat, Heart, MapPin, Award, Music, Target, Users, Building2 } from "lucide-react";

const values = [
  {
    icon: ChefHat,
    title: "Authentic Recipes",
    description: "Family recipes perfected over 25 years, using traditional techniques learned in the kitchens of Italy.",
  },
  {
    icon: Heart,
    title: "Passion for People",
    description: "Food brings people together. Now with darts and karaoke, we create even more ways to connect.",
  },
  {
    icon: MapPin,
    title: "Dorking's Heart",
    description: "A cornerstone of Dorking for 25 years, now in our exciting new home just down the road.",
  },
  {
    icon: Users,
    title: "Social Spirit",
    description: "From intimate dinners to lively parties, we've created the ultimate destination for every occasion.",
  },
];

export function AboutPageSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Our Story: <span className="text-primary">The Next Chapter</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From a Venetian dream to 25 years in Dorking, and now... our new home as Rialto Social
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              A Dorking Favourite, Reimagined
            </h2>
            <p className="text-muted-foreground">
              To our cherished regulars and new friends, welcome! Our story didn&apos;t start in Dorking, but it was always about bringing a piece of Italy right here.
            </p>
            <p className="text-muted-foreground">
              Many years ago, our founder took a life-changing trip to Italy. It was there they fell deeply in love with two things: the vibrant, soulful nature of true Italian cuisine, and the breathtaking beauty of the Rialto Bridge in Venice. That trip sparked a passion that led to years of training, working as a chef in bustling Italian kitchens to master those authentic flavours.
            </p>
            <p className="text-muted-foreground">
              Twenty-five years ago, that dream became Rialto—a cornerstone of the Dorking dining scene. For over a quarter of a century, we had the privilege of serving your families, celebrating your milestones, and sharing our passion for authentic Italian food.
            </p>
            <p className="text-muted-foreground">
              Today, we&apos;re thrilled to introduce you to Rialto Social. We&apos;ve moved just down the road to a brand new home where we&apos;ve combined the classic Italian restaurant you know and love with the vibrant energy of a modern social venue.
            </p>
            <p className="text-muted-foreground">
              While our name and home are new, our heart remains the same. You&apos;ll still find your favourite classic dishes, cherished family recipes, and the warm, welcoming service that made Rialto an institution. We&apos;ve even brought a piece of our soul with us—our iconic mural of the Rialto Bridge, the very bridge that inspired our name all those years ago, has been lovingly recreated in our new dining room.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="flex items-center justify-center h-full text-muted-foreground text-center p-8">
                <p className="text-lg">Restaurant Interior Photo</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </motion.div>
        </div>

        {/* What is Rialto Social Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 md:p-12 mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
            What is <span className="text-primary">Rialto Social?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold flex items-center gap-2">
                <Building2 className="w-6 h-6 text-primary" />
                The &apos;Rialto&apos; You Love...
              </h3>
              <p className="text-muted-foreground">
                Our kitchen is still the soul of our operation. The classic pasta dishes, the perfectly cooked pizzas, and the family recipes passed down through generations are all here. The same team and the same commitment to quality are at the heart of everything we do.
              </p>
              <p className="text-muted-foreground">
                It&apos;s the rich, comforting flavours of our traditional kitchen that have made us a Dorking institution for 25 years.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold flex items-center gap-2">
                <Users className="w-6 h-6 text-accent" />
                ...And the &apos;Social&apos; You&apos;ll Discover
              </h3>
              <p className="text-muted-foreground">
                We&apos;ve added exciting new ingredients to our recipe:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Social Darts</p>
                    <p className="text-sm text-muted-foreground">Interactive, high-tech lanes perfect for friendly competition.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Music className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Karaoke Booths</p>
                    <p className="text-sm text-muted-foreground">Private karaoke room with state-of-the-art Karafun system.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-lg mt-8 font-semibold">
            Come for the food, stay for the fun. We were honoured to be your go-to Italian for 25 years. 
            <br />
            We can&apos;t wait to be your favourite social spot for the next 25.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Visit Us Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether it&apos;s a family dinner, a date night, or a full-blown party with friends, 
            we&apos;ve built the ultimate destination for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View Our Menu
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Book a Table
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-8 font-semibold italic">
            Thank you, Dorking, for 25 wonderful years. We can&apos;t wait to welcome you to our new home.
            <br />
            <span className="text-lg">Ciao!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
