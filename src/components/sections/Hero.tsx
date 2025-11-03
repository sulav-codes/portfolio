"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Dynamically import Three.js component (client-side only)
const ThreeJSPhoto = dynamic(
  () =>
    import("@/components/ThreeJSPhoto").then((mod) => ({
      default: mod.ThreeJSPhoto,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    ),
  }
);

export function Hero() {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; delay: number }>
  >([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  useEffect(() => {
    // Generate floating particles (fewer on mobile for performance)
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 5 : 10;
    const newParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 md:py-0 will-change-transform"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-primary/5" />

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20 hidden md:block"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + particle.delay,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Diagonal light beam effect */}
      <motion.div
        className="absolute inset-0 opacity-30 hidden md:block"
        style={{
          background:
            "linear-gradient(135deg, transparent 0%, hsl(var(--primary) / 0.1) 50%, transparent 100%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 will-change-transform"
        style={{ y, opacity, transform: "translateZ(0)" }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20 max-w-7xl mx-auto">
          {/* Left side - Text content (reordered to come first) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left w-full lg:max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Main heading with gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="space-y-3 sm:space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm sm:text-base text-muted-foreground font-medium"
                >
                  Hi, I&apos;m
                </motion.p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="relative inline-block"
                  >
                    <span className="relative z-10 text-foreground">
                      Sulav Neupane
                    </span>
                    {/* Creative underline with dots */}
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full h-3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                      viewBox="0 0 300 12"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d="M 5 6 Q 75 2, 150 6 T 295 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-primary"
                        strokeLinecap="round"
                      />
                      <motion.circle
                        cx="5"
                        cy="6"
                        r="2.5"
                        fill="currentColor"
                        className="text-primary"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.8 }}
                      />
                      <motion.circle
                        cx="295"
                        cy="6"
                        r="2.5"
                        fill="currentColor"
                        className="text-primary"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2 }}
                      />
                    </motion.svg>
                  </motion.span>
                </h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-3 flex-wrap"
              >
                <div className="h-1 w-10 sm:w-12 bg-primary rounded-full" />
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  Full-Stack Developer
                </h2>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Building innovative web applications with modern technologies.
              Passionate about creating seamless user experiences and writing
              clean, efficient code.
            </motion.p>

            {/* Tech stack highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start max-w-xl mx-auto lg:mx-0"
            >
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-medium text-foreground"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group text-sm sm:text-base w-full sm:w-auto"
              >
                <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                Explore My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group text-sm sm:text-base w-full sm:w-auto"
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                Let&apos;s Connect
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-2"
            >
              <motion.a
                href="https://github.com/sulav-codes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sulav-neupane"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Interactive Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            style={{ margin: 0, padding: 0 }}
          >
            <div
              className="relative w-full m-0 p-0"
              style={{ aspectRatio: "1", height: "100%" }}
            >
              {/* Three.js 3D Photo */}
              <div
                className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm"
                style={{ margin: 0, padding: 0 }}
              >
                <ThreeJSPhoto />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-background/90 backdrop-blur-md rounded-lg sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2 border border-primary/30 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  React
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-background/90 backdrop-blur-md rounded-lg sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2 border border-primary/30 shadow-lg"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  Three.js
                </span>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -left-4 sm:-left-6 bg-background/90 backdrop-blur-md rounded-lg sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2 border border-primary/30 shadow-lg hidden md:block"
                animate={{
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  TypeScript
                </span>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-4 sm:-right-6 bg-background/90 backdrop-blur-md rounded-lg sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2 border border-primary/30 shadow-lg hidden md:block"
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  Next.js
                </span>
              </motion.div>

              {/* Orbital glow effect */}
              <motion.div
                className="absolute -inset-4 sm:-inset-8 bg-primary/10 blur-2xl sm:blur-3xl rounded-full -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
