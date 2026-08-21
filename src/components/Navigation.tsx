"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { smoothScrollToId } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const EMOJI_MAP = ["✨", "🚀", "💡", "📬"] as const;

// Animation variants extracted for clarity and reuse
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
      mass: 0.8,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
      mass: 0.8,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.2,
    },
  }),
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const root = document.documentElement;
    if (isMobileMenuOpen) {
      // Save current scroll position to prevent layout shift
      const scrollY = window.scrollY;
      root.style.setProperty("--scroll-y", `${scrollY}px`);
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      root.style.removeProperty("--scroll-y");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      root.style.removeProperty("--scroll-y");
    };
  }, [isMobileMenuOpen]);

  // Close menu on Escape key — accessibility best practice
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const scrollToSection = useCallback(
    (href: string) => {
      smoothScrollToId(href, { offset: 86, duration: 650 });
      closeMobileMenu();
    },
    [closeMobileMenu],
  );

  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((prev) => !prev),
    [],
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform ${
          isScrolled ? "glass-nav" : "bg-transparent"
        }`}
        style={{ transform: "translateZ(0)" }}
      >
        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToId("#hero-top", { offset: 0, duration: 550 });
              }}
              className="cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <motion.div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass-badge flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--primary) / 0.85) 0%, hsl(var(--primary) / 0.65) 100%)",
                      boxShadow:
                        "0 4px 20px hsl(var(--primary) / 0.35), inset 0 1px 0 rgba(255,255,255,0.35)",
                    }}
                    whileHover={{
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    <span className="text-lg sm:text-xl font-bold text-white">
                      SN
                    </span>
                  </motion.div>
                  <div className="absolute inset-0 rounded-xl bg-primary/25 blur-md -z-10 group-hover:bg-primary/40 transition-colors" />
                </div>

                <div className="hidden sm:block">
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    Sulav Neupane
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Full-Stack Developer
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm lg:text-base font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer relative group"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute -top-1 -right-2 text-xs hidden lg:block"
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {EMOJI_MAP[index]}
                  </motion.span>
                </motion.a>
              ))}
              {mounted && <ThemeToggle />}
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 md:hidden">
              {mounted && <ThemeToggle />}
              <Button
                variant="ghost"
                size="icon"
                className="relative z-50 active:scale-95 touch-manipulation"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <LuX className="h-6 w-6" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <LuMenu className="h-6 w-6" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="mobile-backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              aria-hidden="true"
              className={[
                "fixed inset-0 z-30",
                "bg-background/60 backdrop-blur-sm",
                "md:hidden",
              ].join(" ")}
              style={{ WebkitTapHighlightColor: "transparent" }}
            />
            <motion.div
              key="mobile-drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={[
                "fixed top-0 right-0 z-40",
                "w-4/5 max-w-xs h-dvh",
                "md:hidden",
                "flex flex-col",
                "bg-background/95 backdrop-blur-xl",
                "border-l border-border/50",
                "shadow-2xl",
                "will-change-transform",
              ].join(" ")}
              style={{ touchAction: "pan-y" }}
            >
              {/* Top padding accounts for the fixed nav bar height */}
              <nav
                className="flex flex-col flex-1 gap-3 overflow-y-auto px-6 pt-20 pb-8"
                aria-label="Mobile navigation"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    custom={index}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={[
                      "flex items-center gap-4 p-4 rounded-2xl",
                      "text-xl font-semibold",
                      "text-foreground hover:text-primary active:text-primary",
                      "glass glass-interactive",
                      "hover:border-primary/40",
                      "shadow-sm",
                      "transition-all",
                      "active:scale-[0.98] touch-manipulation",
                    ].join(" ")}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <span className="text-xl" aria-hidden="true">
                      {EMOJI_MAP[index]}
                    </span>
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
