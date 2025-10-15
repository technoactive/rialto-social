"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X, ChefHat, Mic2, Target, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const actions = [
  {
    icon: ChefHat,
    label: "Book Table",
    href: "/contact?service=dining",
    color: "bg-red-500 hover:bg-red-600",
  },
  {
    icon: Mic2,
    label: "Book Karaoke",
    href: "/contact?service=karaoke",
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    icon: Target,
    label: "Book Darts",
    href: "/contact?service=darts",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    icon: Phone,
    label: "Call Us",
    href: "tel:+44-xxx-xxx-xxxx",
    color: "bg-blue-500 hover:bg-blue-600",
  },
];

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling down 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* FAB Container */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Action Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 space-y-3"
            >
              {actions.map((action, index) => (
                <motion.div
                  key={action.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span className="bg-background text-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
                    {action.label}
                  </span>
                  <Link
                    href={action.href}
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-colors",
                      action.color
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <action.icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all",
            isOpen
              ? "bg-destructive hover:bg-destructive/90"
              : "bg-primary hover:bg-primary/90",
            "text-white"
          )}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="calendar"
                initial={{ rotate: 90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Calendar className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
