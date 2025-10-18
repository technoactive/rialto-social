"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { hasUserConsented } from "@/lib/cookies";
import { CookieBanner } from "./cookie-banner";

export function CookieSettingsButton() {
  const [showButton, setShowButton] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has consented
    const checkConsent = () => {
      setShowButton(hasUserConsented());
    };

    checkConsent();

    // Listen for consent updates
    const handleConsentUpdate = () => {
      checkConsent();
    };

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate);
    return () => window.removeEventListener('cookieConsentUpdated', handleConsentUpdate);
  }, []);

  if (!showButton || showBanner) return null;

  return (
    <>
      <AnimatePresence>
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowBanner(true)}
          className={cn(
            "fixed bottom-6 left-6 z-40",
            "w-12 h-12 rounded-full",
            "bg-white dark:bg-gray-800 shadow-lg",
            "flex items-center justify-center",
            "hover:shadow-xl transition-shadow",
            "border border-gray-200 dark:border-gray-700"
          )}
          aria-label="Cookie Settings"
        >
          <Cookie className="w-5 h-5 text-primary" />
        </motion.button>
      </AnimatePresence>

      {showBanner && (
        <div className="fixed inset-0 z-50">
          <CookieBanner />
          <button
            className="absolute inset-0 -z-10"
            onClick={() => setShowBanner(false)}
            aria-label="Close cookie settings"
          />
        </div>
      )}
    </>
  );
}
