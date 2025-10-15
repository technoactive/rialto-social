"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export function ReservationCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Reserve Your <span className="text-primary">Table</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join us for an unforgettable Italian dining experience. 
            Book your table now and let us take care of the rest.
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 text-center"
            >
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Call Us</h3>
              <p className="text-sm text-muted-foreground">
                01306 742885
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 text-center"
            >
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Opening Hours</h3>
              <p className="text-sm text-muted-foreground">
                Mon-Thu: 12-10pm<br />
                Fri-Sat: 12-11pm<br />
                Sun: 12-9pm
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 text-center"
            >
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Book Online</h3>
              <p className="text-sm text-muted-foreground">
                Quick & easy online reservations
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg">
              <Link href="/contact">Book Online</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+441306742885">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
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
