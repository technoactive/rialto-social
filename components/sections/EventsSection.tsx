"use client";

import { motion } from "framer-motion";
import { Calendar, Sparkles, PartyPopper, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EventsSection() {
  return (
    <section className="relative pb-20">
      {/* Hero Section */}
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
              <span className="text-sm font-bold">Events at Rialto</span>
            </motion.div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Events</span>
            </h1>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 md:p-16 border-2 border-primary/20 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32">
              <div className="absolute top-4 left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32">
              <div className="absolute bottom-4 right-4 w-24 h-24 border-b-2 border-r-2 border-accent/30 rounded-br-3xl" />
            </div>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent mb-8"
            >
              <PartyPopper className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Exciting Events Coming in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">2026!</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              We&apos;re busy planning exciting new events for the year ahead. Stay tuned for live music, themed nights, and special celebrations!
            </p>
            
            <div className="flex items-center justify-center gap-2 text-accent mb-8">
              <Sparkles className="w-5 h-5" />
              <span className="text-lg font-medium">Stay tuned for new events in the New Year</span>
              <Sparkles className="w-5 h-5" />
            </div>
            
            <p className="text-white/60 mb-10">
              Follow us on social media or contact us to be the first to know about upcoming live music, themed nights, and special celebrations!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 font-bold shadow-xl px-8 py-6 text-lg">
                <a href="tel:+441306742885" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}