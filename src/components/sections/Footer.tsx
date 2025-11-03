"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-2"
          >
            © 2025 Sulav Neupane. Built with
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
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            </motion.span>
            and Next.js
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{
                y: -4,
                rotate: 360,
                transition: { duration: 0.6 },
              }}
              whileTap={{ scale: 0.9 }}
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
