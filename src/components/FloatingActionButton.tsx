"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 will-change-transform"
          style={{ transform: "translateZ(0)" }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              size="icon"
              onClick={scrollToTop}
              className="rounded-full h-12 w-12 md:h-14 md:w-14 shadow-lg bg-primary hover:bg-primary/90"
            >
              <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
