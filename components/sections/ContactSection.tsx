"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, Calendar, Users, ChefHat, Mic2, Target } from "lucide-react";
import { useSearchParams } from "next/navigation";

export function ContactSection() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    service: service || "dining",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Reservation request:", formData);
    // Show success message
    alert("Thank you for your reservation request! We'll contact you shortly to confirm.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reserve your table or get in touch with us. We&apos;re here to make your
            dining experience memorable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold mb-6">
                Make a Reservation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 pl-10 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                    >
                      <option value="dining">Restaurant Dining</option>
                      <option value="karaoke">Karaoke</option>
                      <option value="darts">Darts</option>
                      <option value="event">Private Event</option>
                    </select>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      {formData.service === "dining" && <ChefHat className="w-4 h-4 text-muted-foreground" />}
                      {formData.service === "karaoke" && <Mic2 className="w-4 h-4 text-muted-foreground" />}
                      {formData.service === "darts" && <Target className="w-4 h-4 text-muted-foreground" />}
                      {formData.service === "event" && <Users className="w-4 h-4 text-muted-foreground" />}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2">
                      Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium mb-2">
                      Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                      >
                        <option value="">Select time</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="12:30">12:30 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="13:30">1:30 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium mb-2">
                      Guests *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <select
                        id="guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                        <option value="9+">9+ Guests</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any dietary requirements or special occasions?"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Reservation Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  For groups larger than 8, please call us directly
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      45 Dene Street<br />
                      Dorking, Surrey<br />
                      RH4 2DW
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+44-xxx-xxx-xxxx"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +44 XXX XXX XXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:info@rialtosocial.co.uk"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@rialtosocial.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Opening Hours</p>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Thursday: 12:00 PM - 10:00 PM</p>
                      <p>Friday - Saturday: 12:00 PM - 11:00 PM</p>
                      <p>Sunday: 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-card rounded-2xl p-2 shadow-sm">
              <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map will be displayed here
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Google Maps integration required
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=45+Dene+Street+Dorking+RH4+2DW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
