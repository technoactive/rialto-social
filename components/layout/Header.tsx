"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clock, Sparkles, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";

// Gloria Food configuration
const GLORIA_FOOD_CONFIG = {
  cuid: "282c52e6-d4a9-4a64-96ea-8dbd56e40dd1",
  ruid: "15f3c4e8-239f-4391-86d5-0685b3c97e04",
};

const navItems = [
  { name: "Home", href: "/", highlight: false },
  { name: "Menu", href: "/menu", highlight: false },
  { name: "About", href: "/about", highlight: false },
  { name: "Entertainment", href: "/entertainment", highlight: false },
  { name: "Events", href: "/events", highlight: true },
  { name: "Gallery", href: "/gallery", highlight: false },
  { name: "Contact", href: "/contact", highlight: false },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] transition-all duration-300",
        scrolled || isOpen
          ? "bg-white dark:bg-gray-950 py-4"
          : isHomePage && !scrolled
          ? "bg-black/40 backdrop-blur-md py-6"
          : "bg-transparent py-6",
        scrolled && !isOpen && "shadow-sm"
      )}
      style={isOpen ? { boxShadow: "none", borderBottom: "none" } : {}}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Image 
                src="/logo/Rialto.png" 
                alt="Rialto Social - Italian Restaurant"
                width={180}
                height={56}
                priority
                className={cn(
                  "h-12 md:h-14 w-auto object-contain",
                  // Only invert to white when on transparent header over hero
                  isHomePage && !scrolled && !isOpen ? "brightness-0 invert" : ""
                )}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center space-x-8"
          >
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              
              // Special highlighted item (Events)
              if (item.highlight) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative group"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Animated glow background */}
                      <motion.div
                        className={cn(
                          "absolute -inset-x-3 -inset-y-1.5 rounded-full",
                          isHomePage && !scrolled && !isOpen
                            ? "bg-gradient-to-r from-amber-400/20 via-orange-400/30 to-red-400/20"
                            : "bg-gradient-to-r from-amber-500/15 via-orange-500/25 to-red-500/15"
                        )}
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute -inset-x-3 -inset-y-1.5 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className={cn(
                            "absolute inset-0 w-[200%]",
                            isHomePage && !scrolled && !isOpen
                              ? "bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              : "bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
                          )}
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 2,
                          }}
                        />
                      </motion.div>
                      
                      {/* Text with icon */}
                      <span className={cn(
                        "relative flex items-center gap-1.5 font-semibold transition-colors duration-200 px-3 py-1.5",
                        isActive
                          ? "text-accent"
                          : isHomePage && !scrolled && !isOpen 
                            ? "text-white group-hover:text-amber-200" 
                            : "text-foreground group-hover:text-amber-600"
                      )}>
                        <Sparkles className="w-3.5 h-3.5" />
                        {item.name}
                        
                        {/* Pulsing dot indicator */}
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className={cn(
                            "relative inline-flex rounded-full h-2 w-2",
                            isHomePage && !scrolled && !isOpen
                              ? "bg-amber-300"
                              : "bg-amber-500"
                          )}></span>
                        </span>
                      </span>
                    </motion.div>
                  </Link>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative transition-colors duration-200 font-medium",
                    isActive
                      ? "text-accent"
                      : isHomePage && !scrolled && !isOpen 
                        ? "text-white/90 hover:text-white" 
                        : "text-foreground/80 hover:text-primary"
                  )}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              );
            })}
          </motion.div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center gap-2 md:gap-4">
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glf-button reservation flex items-center gap-2 bg-accent text-accent-foreground px-3 md:px-4 py-2 rounded-full hover:bg-accent/90 transition-all duration-200 text-sm cursor-pointer hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              data-glf-cuid={GLORIA_FOOD_CONFIG.cuid}
              data-glf-ruid={GLORIA_FOOD_CONFIG.ruid}
              data-glf-reservation="true"
            >
              <CalendarCheck className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Reserve</span>
            </motion.span>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden relative z-10 p-2",
                isHomePage && !scrolled && !isOpen ? "text-white" : "text-foreground"
              )}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-950 -mt-px"
              style={{ 
                boxShadow: "none", 
                border: "none", 
                outline: "none"
              }}
            >
              {/* Visual overlap to hide any gap */}
              <div className="absolute -top-1 left-0 right-0 h-2 bg-white dark:bg-gray-950" />
              <div className="px-4 pt-8 pb-4 space-y-4 relative">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  
                  // Special highlighted item (Events) for mobile
                  if (item.highlight) {
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="relative"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="relative block py-2"
                        >
                          {/* Animated glow background for mobile */}
                          <motion.div
                            className="absolute -inset-x-2 -inset-y-1 rounded-lg bg-gradient-to-r from-amber-500/10 via-orange-500/20 to-red-500/10"
                            animate={{
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          
                          <span className={cn(
                            "relative flex items-center gap-2 text-lg font-semibold",
                            isActive 
                              ? "text-accent" 
                              : "text-amber-600 dark:text-amber-400"
                          )}>
                            <Sparkles className="w-4 h-4" />
                            {item.name}
                            
                            {/* Pulsing dot for mobile */}
                            <span className="relative flex h-2 w-2 ml-1">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                          </span>
                        </Link>
                      </motion.div>
                    );
                  }
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block text-lg font-medium transition-colors duration-200 py-2",
                          isActive 
                            ? "text-accent" 
                            : "text-foreground/80 hover:text-primary"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="pt-4 border-t border-border"
                >
                  <span
                    className="glf-button reservation flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-200 w-full justify-center cursor-pointer active:scale-95"
                    data-glf-cuid={GLORIA_FOOD_CONFIG.cuid}
                    data-glf-ruid={GLORIA_FOOD_CONFIG.ruid}
                    data-glf-reservation="true"
                    onClick={() => setIsOpen(false)}
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span className="font-medium">Reserve Table</span>
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground pt-2"
                >
                  <Clock className="w-4 h-4" />
                  <span>Mon-Thu: 12-10pm | Fri-Sat: 12-11pm | Sun: 12-9pm</span>
                </motion.div>
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
