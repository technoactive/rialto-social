"use client";

import { motion } from "framer-motion";
import { ChefHat, Heart, MapPin, Music, Target, Users, Building2, ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

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
    <section className="relative">
      {/* Hero Section with Background */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden mb-12 md:mb-20">
        {/* Background gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
              backgroundSize: '32px 32px'
            }} />
          </div>
        </div>
        
        {/* Animated shapes - hidden on mobile for performance */}
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
          className="hidden md:block absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl"
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
          className="hidden md:block absolute bottom-20 right-10 w-48 md:w-96 h-48 md:h-96 bg-accent/10 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 md:mb-6"
            >
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-xs md:text-sm">
                Est. 2001 • Reimagined 2024
              </span>
            </motion.div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 px-2">
              Our Story: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block sm:inline">The Next Chapter</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
              From a Venetian dream to 25 years in Dorking, and now... our new home as Rialto Social
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4">
        <div className="relative mb-16 md:mb-32">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              {/* Decorative number - smaller on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="hidden sm:block absolute -top-10 md:-top-20 -left-5 md:-left-10 text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-bold text-primary/5 font-display"
              >
                25
              </motion.div>
              
              <div className="relative z-10 space-y-4 md:space-y-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                >
                  A Dorking Favourite, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block sm:inline">Reimagined</span>
                </motion.h2>
                
                <div className="space-y-4">
                  {[
                    "To our cherished regulars and new friends, welcome! Our story didn't start in Dorking, but it was always about bringing a piece of Italy right here.",
                    "Many years ago, our founder took a life-changing trip to Italy. It was there they fell deeply in love with two things: the vibrant, soulful nature of true Italian cuisine, and the breathtaking beauty of the Rialto Bridge in Venice. That trip sparked a passion that led to years of training, working as a chef in bustling Italian kitchens to master those authentic flavours.",
                    "Twenty-five years ago, that dream became Rialto—a cornerstone of the Dorking dining scene. For over a quarter of a century, we had the privilege of serving your families, celebrating your milestones, and sharing our passion for authentic Italian food.",
                    "Today, we're thrilled to introduce you to Rialto Social. We've moved just down the road to a brand new home where we've combined the classic Italian restaurant you know and love with the vibrant energy of a modern social venue.",
                    "While our name and home are new, our heart remains the same. You'll still find your favourite classic dishes, cherished family recipes, and the warm, welcoming service that made Rialto an institution. We've even brought a piece of our soul with us—our iconic mural of the Rialto Bridge, the very bridge that inspired our name all those years ago, has been lovingly recreated in our new dining room."
                  ].map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`text-sm sm:text-base md:text-lg leading-relaxed ${index === 0 ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] sm:h-[500px] lg:h-[700px] order-1 lg:order-2"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl" />
                <div className="relative h-full w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl bg-card">
                  <div className="relative w-full h-full">
                    <Image
                      src="/pictures/about/rialto.jpg"
                      alt="Rialto Social Restaurant - Our Journey from Venice to Dorking"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority
                      quality={90}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-xs md:text-sm font-medium mb-1 md:mb-2 text-white/80">Our Heritage</p>
                      <p className="text-lg md:text-2xl font-display font-bold">Venice to Dorking</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating accent elements - hidden on mobile */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="hidden md:block absolute -top-10 -right-10 w-24 md:w-32 h-24 md:h-32 bg-primary/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="hidden md:block absolute -bottom-10 -left-10 w-32 md:w-40 h-32 md:h-40 bg-accent/20 rounded-full blur-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* What is Rialto Social Section */}
        <div className="relative mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-2xl md:rounded-[3rem]" />
          </motion.div>
          
          <div className="bg-gradient-to-br from-card/50 to-card backdrop-blur-sm rounded-2xl md:rounded-[3rem] overflow-hidden border border-border/50">
            <div className="p-6 sm:p-8 md:p-12 lg:p-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16"
              >
                What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Rialto Social?</span>
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="hidden md:block absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                        <Building2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left">
                        The &apos;Rialto&apos; You Love...
                      </h3>
                    </div>
                    <div className="space-y-3 md:space-y-4 sm:pl-16 md:pl-20">
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/80">
                        Our kitchen is still the soul of our operation. The classic pasta dishes, the perfectly cooked pizzas, and the family recipes passed down through generations are all here.
                      </p>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
                        The same team and the same commitment to quality are at the heart of everything we do. It&apos;s the rich, comforting flavours of our traditional kitchen that have made us a Dorking institution for 25 years.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="hidden md:block absolute -top-8 -right-8 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4 md:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
                        <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-left">
                        ...And the &apos;Social&apos; You&apos;ll Discover
                      </h3>
                    </div>
                    <div className="sm:pl-16 md:pl-20">
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/80 mb-4 md:mb-6">
                        We&apos;ve added exciting new ingredients to our recipe:
                      </p>
                      <div className="space-y-3 md:space-y-4">
                        <motion.div 
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3 md:gap-4 group"
                        >
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                            <Target className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                          </div>
                          <div>
                            <p className="font-semibold text-base md:text-lg">Social Darts</p>
                            <p className="text-sm md:text-base text-muted-foreground">Interactive, high-tech lanes perfect for friendly competition.</p>
                          </div>
                        </motion.div>
                        <motion.div 
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3 md:gap-4 group"
                        >
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                            <Music className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                          </div>
                          <div>
                            <p className="font-semibold text-base md:text-lg">Karaoke Booths</p>
                            <p className="text-sm md:text-base text-muted-foreground">Private karaoke room with state-of-the-art Karafun system.</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative text-center mt-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl -z-10" />
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed px-4">
                  Come for the food, stay for the fun. We were honoured to be your go-to Italian for 25 years. 
                  <br className="hidden sm:block" />
                  We can&apos;t wait to be your favourite social spot for the next 25.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="relative mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 lg:mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-xs md:text-sm mb-4 md:mb-6"
            >
              Our Foundation
            </motion.span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Values</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full bg-card/50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border/50 group-hover:border-primary/30 transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                      <value.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-accent transition-colors" />
                    </div>
                  </motion.div>
                  <h3 className="font-display font-bold text-lg md:text-xl mb-2 md:mb-3 text-center group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-center text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Decorative element - hidden on mobile */}
                  <div className="hidden md:block absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl md:blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-card via-card/80 to-card backdrop-blur-sm rounded-2xl md:rounded-[3rem] overflow-hidden border border-border/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            
            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Join Us?</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
                  Whether it&apos;s a family dinner, a date night, or a full-blown party with friends, 
                  we&apos;ve built the ultimate destination for you.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-8 md:mb-12"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/menu"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl md:rounded-2xl font-semibold text-base md:text-lg shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all"
                >
                  View Our Menu
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-accent to-accent/80 text-white rounded-xl md:rounded-2xl font-semibold text-base md:text-lg shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all"
                >
                  Book a Table
                  <Calendar className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl" />
                <p className="relative text-sm sm:text-base md:text-lg text-muted-foreground font-medium italic px-4">
                  Thank you, Dorking, for 25 wonderful years. We can&apos;t wait to welcome you to our new home.
                  <br />
                  <span className="text-lg sm:text-xl md:text-2xl font-display text-primary mt-2 inline-block">Ciao!</span>
                </p>
              </motion.div>
            </div>
            
            {/* Decorative corners - hidden on mobile */}
            <div className="hidden md:block absolute top-0 left-0 w-32 h-32">
              <div className="absolute top-4 left-4 w-24 h-24 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl" />
            </div>
            <div className="hidden md:block absolute bottom-0 right-0 w-32 h-32">
              <div className="absolute bottom-4 right-4 w-24 h-24 border-b-2 border-r-2 border-accent/20 rounded-br-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
