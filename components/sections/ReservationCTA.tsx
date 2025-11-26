"use client";

import { motion } from "framer-motion";
import { Phone, CalendarCheck, Clock, UtensilsCrossed } from "lucide-react";

// Gloria Food configuration
const GLORIA_FOOD_CONFIG = {
  cuid: "282c52e6-d4a9-4a64-96ea-8dbd56e40dd1",
  ruid: "15f3c4e8-239f-4391-86d5-0685b3c97e04",
};

export function ReservationCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6"
          >
            <CalendarCheck className="w-4 h-4" />
            <span className="text-sm font-medium">Reserve Now</span>
          </motion.div>
          
          {/* Heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Experience</span> Rialto?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join us for an unforgettable Italian dining experience. 
            Book your table now and let us take care of the rest.
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-border/50 group-hover:border-accent/30 transition-colors h-full flex flex-col justify-center min-h-[200px]">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <p className="text-base font-medium text-foreground">
                    01306 742885
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-border/50 group-hover:border-primary/30 transition-colors h-full flex flex-col justify-center min-h-[200px]">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Mon-Thu: 12:00-23:00<br />
                    Fri-Sat: 12:00-24:00<br />
                    Sun: 12:00-23:00
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-border/50 group-hover:border-accent/30 transition-colors h-full flex flex-col justify-center min-h-[200px]">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CalendarCheck className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Book Online</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick & easy online reservations
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons - Gloria Food Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Book a Table Button - with Gloria Food overlay */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <span
                className="glf-button reservation absolute inset-0 z-10 opacity-0 cursor-pointer"
                data-glf-cuid={GLORIA_FOOD_CONFIG.cuid}
                data-glf-ruid={GLORIA_FOOD_CONFIG.ruid}
                data-glf-reservation="true"
                style={{ fontSize: 0 }}
              />
              <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all px-8 py-3 rounded-md cursor-pointer font-medium">
                <CalendarCheck className="w-4 h-4" />
                Book a Table
              </div>
            </motion.div>
            
            {/* Order Online Button - with Gloria Food overlay */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <span
                className="glf-button absolute inset-0 z-10 opacity-0 cursor-pointer"
                data-glf-cuid={GLORIA_FOOD_CONFIG.cuid}
                data-glf-ruid={GLORIA_FOOD_CONFIG.ruid}
                style={{ fontSize: 0 }}
              />
              <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-500/25 hover:shadow-xl transition-all px-8 py-3 rounded-md cursor-pointer font-medium">
                <UtensilsCrossed className="w-4 h-4" />
                Order Online
              </div>
            </motion.div>
            
            {/* Phone Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="tel:+441306742885"
                className="inline-flex items-center justify-center gap-2 border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent shadow-lg hover:shadow-xl transition-all px-8 py-3 rounded-md cursor-pointer font-medium"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </motion.div>
          </motion.div>

          {/* Special Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mt-6"
          >
            For groups larger than 8 people, please call us directly
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
