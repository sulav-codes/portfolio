"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { LoadingScreen } from "@/components/LoadingScreen";
import { EasterEggs } from "@/components/EasterEggs";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for loading screen to finish and content to be ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3300); // Sync with loading screen timing

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen />
      <EasterEggs />
      <AnimatePresence>
        {isLoaded && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="min-h-screen"
          >
            <Navigation />
            <Hero />
            <About />
            <Projects />
            {/* <Gallery /> */}
            <Contact />
            <Footer />
            <FloatingActionButton />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
