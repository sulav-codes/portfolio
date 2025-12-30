"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 sm:py-12 px-4 border-t">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left"
          >
            <span className="whitespace-nowrap">
              © {new Date().getFullYear()} Sulav Neupane.
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap">
              Built with
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="inline-block"
              >
                <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-red-500 text-red-500" />
              </motion.span>
              and Next.js
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              variant="outline"
              className="rounded-full h-10 w-10 sm:h-11 sm:w-11 shadow-lg hover:shadow-xl transition-all touch-manipulation"
              aria-label="Scroll to top"
            >
              <motion.div
                whileHover={{
                  y: -4,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
