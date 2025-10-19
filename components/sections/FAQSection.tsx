"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

const faqs = [
  {
    question: "What type of cuisine does Rialto Social serve?",
    answer: "Rialto Social specializes in authentic Italian cuisine, featuring fresh pasta, traditional pizzas, and classic Italian dishes. Our menu includes lunch specials, à la carte options, cocktails, and desserts."
  },
  {
    question: "Where is Rialto Social located?",
    answer: "We are located at 45 Dene Street, Dorking, Surrey, RH4 2DW. We're easily accessible from Dorking town center and have nearby parking available."
  },
  {
    question: "What are your opening hours?",
    answer: "Monday to Thursday: 5:00 PM - 11:00 PM, Friday & Saturday: 12:00 PM - 12:00 AM, Sunday: 12:00 PM - 10:00 PM. We're closed for lunch Monday through Thursday."
  },
  {
    question: "Do you offer takeaway services?",
    answer: "Yes, we offer takeaway services for our full menu. You can call us at 01306 742885 to place your order."
  },
  {
    question: "Do you have entertainment options?",
    answer: "Yes! We feature karaoke nights, professional dartboards, and live entertainment. Perfect for parties, celebrations, or a fun night out with friends."
  },
  {
    question: "Can I make a reservation?",
    answer: "Absolutely! You can make a reservation by calling us at 01306 742885 or visiting our contact page. We recommend booking in advance, especially for weekends."
  },
  {
    question: "Do you cater for dietary requirements?",
    answer: "Yes, we offer vegetarian, vegan, and gluten-free options. Our menu clearly marks dishes with dietary tags (V, VE, GF, F). Please inform us of any allergies when booking."
  },
  {
    question: "Is the restaurant wheelchair accessible?",
    answer: "Yes, Rialto Social is wheelchair accessible. We have level access and accessible facilities to ensure all guests can enjoy their dining experience."
  },
  {
    question: "Do you offer private dining or event hosting?",
    answer: "Yes, we can accommodate private parties and events. We offer special packages for birthdays, corporate events, and celebrations. Contact us for more details."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit cards, and debit cards. Payment is taken at the end of your meal for dine-in customers."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD for FAQs
  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-gray-50">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFAQ),
        }}
        strategy="afterInteractive"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Rialto Social Italian Restaurant
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Have more questions?{" "}
            <a
              href="/contact"
              className="text-accent hover:text-accent/80 font-medium"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
