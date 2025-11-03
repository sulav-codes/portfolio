"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, Film } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Floating particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 92, 246, 0.5)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* 404 Number with glitch effect */}
          <motion.div
            className="relative mb-8"
            animate={{
              textShadow: [
                "0 0 20px rgba(139, 92, 246, 0.5)",
                "0 0 40px rgba(139, 92, 246, 0.8)",
                "0 0 20px rgba(139, 92, 246, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h1 className="text-[12rem] sm:text-[16rem] md:text-[20rem] font-bold leading-none bg-linear-to-br from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Lost in the Digital Space?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Looks like this page took a detour to another dimension. 
              Don&apos;t worry, even the best navigators get lost sometimes.
            </p>
          </motion.div>

          {/* Floating icons */}
          <div className="relative h-32 mb-12">
            <motion.div
              className="absolute left-1/4 top-0"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="p-4 bg-primary/10 rounded-2xl backdrop-blur-sm border border-primary/20">
                <Search className="w-8 h-8 text-primary" />
              </div>
            </motion.div>

            <motion.div
              className="absolute right-1/4 top-0"
              animate={{
                y: [0, -30, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="p-4 bg-purple-500/10 rounded-2xl backdrop-blur-sm border border-purple-500/20">
                <Film className="w-8 h-8 text-purple-500" />
              </div>
            </motion.div>
          </div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-linear-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500 text-white px-8 py-6 text-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Back to Home
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </Link>

            <Link href="/#projects">
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-primary/30 hover:border-primary hover:bg-primary/5 px-8 py-6 text-lg"
              >
                <span className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  View Projects
                </span>
              </Button>
            </Link>
          </motion.div>

          {/* Fun fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 p-6 rounded-2xl bg-linear-to-br from-primary/5 to-purple-500/5 border border-primary/10 backdrop-blur-sm max-w-2xl mx-auto"
          >
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">Fun Fact:</span> The
              HTTP 404 error code was named after room 404 at CERN where the
              World Wide Web was born. But that&apos;s just a myth! 🎬
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-3xl" />
    </div>
  );
}
