"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  getCookieConsent,
  setCookieConsent,
  COOKIE_CATEGORIES,
  type CookieCategory,
  type CookieConsent,
} from "@/lib/cookies";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
    timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    // Check if user has already consented
    const existingConsent = getCookieConsent();
    if (existingConsent) {
      setConsent(existingConsent);
      setShowBanner(false);
    } else {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent: CookieConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString(),
    };
    setCookieConsent(fullConsent);
    setConsent(fullConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const minimalConsent: CookieConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString(),
    };
    setCookieConsent(minimalConsent);
    setConsent(minimalConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    const updatedConsent = {
      ...consent,
      timestamp: new Date().toISOString(),
    };
    setCookieConsent(updatedConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const toggleCategory = (category: CookieCategory) => {
    if (category === 'essential') return; // Essential cookies cannot be disabled
    
    setConsent(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  if (!showBanner && !showSettings) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[90] lg:hidden"
            onClick={() => setShowSettings(false)}
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:p-6"
          >
            <div className="mx-auto max-w-7xl">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                {showSettings ? (
                  /* Cookie Settings View */
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                          <Cookie className="w-6 h-6 text-primary" />
                          Cookie Preferences
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                          Manage your cookie preferences below
                        </p>
                      </div>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        aria-label="Close settings"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                      {(Object.entries(COOKIE_CATEGORIES) as [CookieCategory, typeof COOKIE_CATEGORIES[CookieCategory]][]).map(
                        ([category, info]) => (
                          <div
                            key={category}
                            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="font-semibold flex items-center gap-2">
                                  {info.name}
                                  {info.required && (
                                    <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                      Always Active
                                    </span>
                                  )}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {info.description}
                                </p>
                              </div>
                              <button
                                onClick={() => toggleCategory(category)}
                                disabled={info.required}
                                className={cn(
                                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                                  consent[category]
                                    ? "bg-primary"
                                    : "bg-gray-200 dark:bg-gray-700",
                                  info.required && "opacity-50 cursor-not-allowed"
                                )}
                                aria-label={`Toggle ${info.name} cookies`}
                              >
                                <span
                                  className={cn(
                                    "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                                    consent[category] ? "translate-x-6" : "translate-x-1"
                                  )}
                                />
                              </button>
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <Button
                        onClick={handleRejectAll}
                        variant="outline"
                        className="flex-1"
                      >
                        Reject All
                      </Button>
                      <Button
                        onClick={handleSavePreferences}
                        className="flex-1 bg-primary hover:bg-primary/90"
                      >
                        Save Preferences
                      </Button>
                      <Button
                        onClick={handleAcceptAll}
                        className="flex-1 bg-accent hover:bg-accent/90 text-white"
                      >
                        Accept All
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Main Banner View */
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
                          <Cookie className="w-5 h-5 text-primary" />
                          We value your privacy
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          We use cookies to enhance your browsing experience, serve personalized content, 
                          and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
                          You can manage your preferences by clicking &quot;Cookie Settings&quot;.
                          {" "}
                          <Link href="/cookies" className="underline hover:text-primary">
                            Read our Cookie Policy
                          </Link>
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          onClick={handleRejectAll}
                          variant="outline"
                          size="sm"
                        >
                          Reject All
                        </Button>
                        <Button
                          onClick={() => setShowSettings(!showSettings)}
                          variant="outline"
                          size="sm"
                          className="gap-2"
                        >
                          <Settings className="w-4 h-4" />
                          Cookie Settings
                        </Button>
                        <Button
                          onClick={handleAcceptAll}
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                        >
                          Accept All
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
