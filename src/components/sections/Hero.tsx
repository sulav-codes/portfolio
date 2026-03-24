"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { smoothScrollToId } from "@/lib/utils";
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
  },
);

type HeroProps = {
  allowAmbientEffects?: boolean;
};

export function Hero({ allowAmbientEffects = true }: HeroProps) {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; delay: number }>
  >([]);
  const [hasMounted, setHasMounted] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [ambientEffectsEnabled, setAmbientEffectsEnabled] = useState(false);
  const [showThreePhoto, setShowThreePhoto] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const shouldReduceEffects =
    hasMounted && (prefersReducedMotion || isLowEndDevice);
  const shouldAnimateAmbient =
    allowAmbientEffects && ambientEffectsEnabled && !shouldReduceEffects;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!allowAmbientEffects) {
      setAmbientEffectsEnabled(false);
      return;
    }

    const nav = navigator as Navigator & { deviceMemory?: number };
    const deviceMemory = nav.deviceMemory ?? 8;
    const cpuCores = navigator.hardwareConcurrency ?? 8;
    const lowEnd = cpuCores <= 4 || deviceMemory <= 4;
    setIsLowEndDevice(lowEnd);

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;

    const enableAmbient = () => setAmbientEffectsEnabled(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(enableAmbient, { timeout: 1200 });
    } else {
      timeoutId = setTimeout(enableAmbient, 500);
    }

    return () => {
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [allowAmbientEffects]);

  useEffect(() => {
    if (!allowAmbientEffects) {
      setShowThreePhoto(false);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;
    const enableThreePhoto = () => setShowThreePhoto(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(enableThreePhoto, { timeout: 1500 });
    } else {
      timeoutId = setTimeout(enableThreePhoto, 700);
    }

    return () => {
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [allowAmbientEffects]);

  useEffect(() => {
    if (!ambientEffectsEnabled) {
      setParticles([]);
      return;
    }

    // Generate floating particles (fewer on mobile for performance)
    const isMobile = window.innerWidth < 768;
    const particleCount = shouldReduceEffects
      ? isMobile
        ? 2
        : 4
      : isMobile
        ? 5
        : 10;
    const newParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [ambientEffectsEnabled, shouldReduceEffects]);

  const scrollToSection = (id: string) => {
    smoothScrollToId(id, { offset: 86, duration: 650 });
  };

  return (
    <section
      id="hero-top"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 sm:py-20 md:py-24 will-change-transform"
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
          animate={
            shouldAnimateAmbient
              ? {
                  y: [0, -30, 0],
                  opacity: [0.2, 0.5, 0.2],
                }
              : { y: 0, opacity: 0.2 }
          }
          transition={
            shouldAnimateAmbient
              ? {
                  duration: 5 + particle.delay,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut",
                }
              : { duration: 0.2 }
          }
        />
      ))}

      {/* Diagonal light beam effect */}
      <motion.div
        className="absolute inset-0 opacity-30 hidden md:block"
        style={{
          background:
            "linear-gradient(135deg, transparent 0%, hsl(var(--primary) / 0.1) 50%, transparent 100%)",
        }}
        animate={
          shouldAnimateAmbient
            ? {
                backgroundPosition: ["0% 0%", "100% 100%"],
              }
            : { backgroundPosition: "0% 0%" }
        }
        transition={
          shouldAnimateAmbient
            ? {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : { duration: 0.2 }
        }
      />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 will-change-transform"
        style={
          shouldReduceEffects
            ? { transform: "translateZ(0)" }
            : { y, opacity, transform: "translateZ(0)" }
        }
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 max-w-7xl mx-auto">
          {/* Left side - 3D Interactive Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
          >
            <div className="relative w-full aspect-square">
              {/* Three.js 3D Photo */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm">
                {showThreePhoto ? (
                  <ThreeJSPhoto />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-primary/10 via-background to-primary/5" />
                )}
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-background/90 backdrop-blur-md rounded-lg sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2 border border-primary/30 shadow-lg"
                animate={shouldAnimateAmbient ? { y: [0, -10, 0] } : { y: 0 }}
                transition={
                  shouldAnimateAmbient
                    ? {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : { duration: 0.2 }
                }
              >
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  React
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-background/90 backdrop-blur-md rounded-lg sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2 border border-primary/30 shadow-lg"
                animate={shouldAnimateAmbient ? { y: [0, 10, 0] } : { y: 0 }}
                transition={
                  shouldAnimateAmbient
                    ? {
                        duration: 3,
                        delay: 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : { duration: 0.2 }
                }
              >
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  Three.js
                </span>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -left-4 sm:-left-6 bg-background/90 backdrop-blur-md rounded-lg sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2 border border-primary/30 shadow-lg hidden md:block"
                animate={shouldAnimateAmbient ? { x: [0, -10, 0] } : { x: 0 }}
                transition={
                  shouldAnimateAmbient
                    ? {
                        duration: 3,
                        delay: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : { duration: 0.2 }
                }
              >
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  TypeScript
                </span>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-4 sm:-right-6 bg-background/90 backdrop-blur-md rounded-lg sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2 border border-primary/30 shadow-lg hidden md:block"
                animate={shouldAnimateAmbient ? { x: [0, 10, 0] } : { x: 0 }}
                transition={
                  shouldAnimateAmbient
                    ? {
                        duration: 3,
                        delay: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : { duration: 0.2 }
                }
              >
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  Next.js
                </span>
              </motion.div>

              {/* Orbital glow effect */}
              <motion.div
                className="absolute -inset-4 sm:-inset-8 bg-primary/10 blur-2xl sm:blur-3xl rounded-full -z-10"
                animate={
                  shouldAnimateAmbient
                    ? {
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }
                    : { scale: 1, opacity: 0.3 }
                }
                transition={
                  shouldAnimateAmbient
                    ? {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : { duration: 0.2 }
                }
              />
            </div>
          </motion.div>

          {/* Right side - Text content (reordered to come first) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left w-full lg:max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs md:text-sm font-medium">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Main heading with gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 sm:space-y-4 md:space-y-6"
            >
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium"
                >
                  Hi, I&apos;m
                </motion.p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none">
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
                className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center lg:justify-start"
              >
                <div className="h-0.5 sm:h-1 w-8 sm:w-10 md:w-12 bg-primary rounded-full" />
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-muted-foreground">
                  Full-Stack Developer
                </h2>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0.95 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 px-4 sm:px-0"
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
                ),
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start pt-2 sm:pt-3 md:pt-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group text-xs sm:text-sm md:text-base w-full sm:w-auto h-10 sm:h-11 md:h-12"
              >
                <Rocket className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                Explore My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group text-xs sm:text-sm md:text-base w-full sm:w-auto h-10 sm:h-11 md:h-12"
              >
                <Mail className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                Let&apos;s Connect
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start pt-1 sm:pt-2"
            >
              <motion.a
                href="https://github.com/sulav-codes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sulav Neupane's GitHub profile"
                className="p-2 sm:p-2.5 md:p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sulav-neupane"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sulav Neupane's LinkedIn profile"
                className="p-2 sm:p-2.5 md:p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={shouldAnimateAmbient ? { y: [0, 10, 0] } : { y: 0 }}
        transition={
          shouldAnimateAmbient
            ? { duration: 2, repeat: Infinity }
            : { duration: 0.2 }
        }
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
