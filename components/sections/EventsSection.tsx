"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function EventsSection() {
  const events = [
    {
      id: "christmas-eve",
      title: "Christmas Eve Live Music",
      image: "/pictures/events/christmas-eve-live-music-deleelah.jpg",
    },
  ];

  return (
    <section className="relative pb-20">
      {/* Simple Hero Section */}
      <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
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
              <span className="text-sm font-bold">Festive Season at Rialto</span>
            </motion.div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Christmas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Events</span>
            </h1>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Event Images */}
        <div className="flex justify-center mb-20">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative max-w-lg w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>

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
                  Reserve Your Table <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Today</span>
                </h2>
                <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white/80 leading-relaxed">
                  Limited availability for these special events. Book now to secure your spot!
                </p>
              </motion.div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div>
                  <Button size="lg" className="bg-white text-gray-900 font-bold shadow-2xl px-8 py-6 text-lg">
                    <Link href="/contact" className="flex items-center gap-2">
                      Book Now
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                <div>
                  <Button size="lg" className="bg-primary/20 backdrop-blur-md border-2 border-white/30 text-white font-bold shadow-2xl px-8 py-6 text-lg">
                    <a href="tel:+441306742885" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call 01306 742885
                    </a>
                  </Button>
                </div>
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