"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Entertainment", href: "/entertainment" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
              className="flex flex-col"
            >
              <span className="text-2xl font-display font-bold text-primary">
                Rialto Social
              </span>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">
                Italian Cuisine
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </motion.div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center gap-2 md:gap-4">
            <motion.a
              href="tel:+44-xxx-xxx-xxxx"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-3 md:px-4 py-2 rounded-full hover:bg-primary/90 transition-colors duration-200 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Reserve</span>
            </motion.a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-10 p-2"
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
          <>
            {/* Mobile Menu Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              style={{ top: headerRef.current ? `${headerRef.current.offsetHeight}px` : "64px" }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu Content */}
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
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-medium text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="pt-4 border-t border-border"
                >
                  <a
                    href="tel:+44-xxx-xxx-xxxx"
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors duration-200 w-full justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">Reserve Table</span>
                  </a>
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
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
