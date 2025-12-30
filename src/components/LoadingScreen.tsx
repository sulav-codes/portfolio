"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, Brackets, Braces } from "lucide-react";

const codeSnippets = [
  "import { Portfolio } from '@sulav/awesome'",
  "const developer = new FullStack()",
  "git commit -m 'Made it better'",
  "npm run build:future",
  "console.log('Hello, World! 👋')",
];

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    // Typing animation
    const snippet = codeSnippets[currentSnippet];
    let index = 0;
    let typingInterval: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    typingInterval = setInterval(() => {
      if (index <= snippet.length) {
        setTypedText(snippet.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        timeoutId = setTimeout(() => {
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
          setTypedText("");
        }, 800);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentSnippet]);

  useEffect(() => {
    // Minimum loading time to allow page to fully load
    const minLoadTime = 3000;
    const startTime = Date.now();

    // Progress simulation with realistic feel
    let currentProgress = 0;
    const targetProgress = 100;
    const duration = 2500; // Complete progress in 2.5 seconds
    const steps = 100;
    const increment = targetProgress / steps;
    const intervalTime = duration / steps;

    const progressInterval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= targetProgress) {
        currentProgress = 100;
        clearInterval(progressInterval);

        // Ensure minimum load time before hiding
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, minLoadTime - elapsed);

        setTimeout(() => {
          setIsLoading(false);
        }, remaining + 300);
      }
      setProgress(Math.round(currentProgress));
    }, intervalTime);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-9999 bg-background flex items-center justify-center overflow-hidden"
          style={{ pointerEvents: isLoading ? "auto" : "none" }}
        >
          {/* Solid background to prevent flickering */}
          <div className="absolute inset-0 bg-background" />

          {/* Animated background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size[4rem_4rem] opacity-20" />

          {/* Floating icons */}
          <motion.div
            className="absolute top-20 left-20"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Code2 className="w-12 h-12 text-primary/30" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-20"
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <Brackets className="w-12 h-12 text-primary/30" />
          </motion.div>
          <motion.div
            className="absolute top-40 right-40"
            animate={{ x: [0, 20, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            <Braces className="w-10 h-10 text-primary/20" />
          </motion.div>

          <div className="max-w-2xl w-full px-4 md:px-8 relative z-10">
            {/* Terminal-style header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="bg-secondary/50 backdrop-blur-xl rounded-t-xl border border-border p-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted-foreground ml-4 font-mono">
                  portfolio.tsx
                </span>
              </div>

              {/* Terminal content */}
              <div className="bg-secondary/30 backdrop-blur-xl rounded-b-xl border-x border-b border-border p-6 min-h-[120px] font-mono">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Terminal className="w-4 h-4 text-green-500" />
                  <span className="text-green-500">sulav@portfolio</span>
                  <span className="text-muted-foreground">~</span>
                  <span className="text-primary">$</span>
                </div>
                <motion.div
                  className="text-sm md:text-base text-foreground"
                  key={currentSnippet}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-5 bg-primary ml-1"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Progress section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {/* Progress bar */}
              <div className="relative">
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-linear-to-r from-primary via-primary/80 to-primary"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="h-full w-full"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 0%"],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                        backgroundSize: "50% 100%",
                      }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Status text */}
              <div className="flex items-center justify-between text-sm">
                <motion.span
                  className="text-muted-foreground font-mono"
                  key={progress}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {progress < 30 && "Initializing..."}
                  {progress >= 30 && progress < 60 && "Loading components..."}
                  {progress >= 60 && progress < 85 && "Compiling magic..."}
                  {progress >= 85 && progress < 100 && "Almost there..."}
                  {progress === 100 && "Ready! 🚀"}
                </motion.span>
                <motion.span
                  className="text-primary font-mono font-bold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  {progress}%
                </motion.span>
              </div>

              {/* Loading dots */}
              <div className="flex items-center gap-2 justify-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
