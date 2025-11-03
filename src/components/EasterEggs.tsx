"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const emojis = ["✨", "💫", "⭐", "🌟", "🎊", "🎈", "🎵", "🎉", "🚀"];

export function EasterEggs() {
  const [emoji, setEmoji] = useState<{
    x: number;
    y: number;
    emoji: string;
    id: number;
  } | null>(null);
  const emojiIdRef = useRef(0);
  const clickCountRef = useRef(0);
  const lastClickTimeRef = useRef(0);
  const [showTripleClick, setShowTripleClick] = useState(false);

  const handleClick = useCallback((e: MouseEvent) => {
    const now = Date.now();

    // Triple click detection
    if (now - lastClickTimeRef.current < 400) {
      clickCountRef.current += 1;
      if (clickCountRef.current >= 2) {
        setShowTripleClick(true);
        setTimeout(() => setShowTripleClick(false), 2000);
        clickCountRef.current = 0;
      }
    } else {
      clickCountRef.current = 0;
    }
    lastClickTimeRef.current = now;

    // Regular click emoji effect
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    emojiIdRef.current += 1;
    setEmoji({
      x: e.clientX,
      y: e.clientY,
      emoji: randomEmoji,
      id: emojiIdRef.current,
    });

    setTimeout(() => setEmoji(null), 1000);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClick, { passive: true });
    return () => window.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <>
      {/* Click emoji effect */}
      {emoji && (
        <motion.div
          key={emoji.id}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.5, 1],
            y: [0, -50],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed pointer-events-none z-50 text-2xl"
          style={{
            left: emoji.x,
            top: emoji.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {emoji.emoji}
        </motion.div>
      )}

      {/* Triple click celebration - Ripple effect */}
      <AnimatePresence>
        {showTripleClick && (
          <motion.div
            className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Multiple expanding rings */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border-2 border-primary"
                initial={{ width: 0, height: 0, opacity: 0.8 }}
                animate={{
                  width: 800,
                  height: 800,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Center pulse */}
            <motion.div
              className="w-4 h-4 rounded-full bg-primary"
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 2, 1.5, 0],
                opacity: [1, 0.8, 0.6, 0],
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Rotating particles */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 rounded-full bg-primary"
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x: Math.cos((i * 30 * Math.PI) / 180) * 150,
                  y: Math.sin((i * 30 * Math.PI) / 180) * 150,
                  scale: [0, 1, 0],
                  opacity: [1, 0.8, 0],
                }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
