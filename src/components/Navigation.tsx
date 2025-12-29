"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

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
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 will-change-transform ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-transparent"
        }`}
        style={{
          transform: "translateZ(0)",
          backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: isScrolled
            ? "blur(20px) saturate(180%)"
            : "none",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Clean modern logo */}
                <div className="relative">
                  <motion.div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-linear-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center shadow-lg"
                    whileHover={{
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    <span className="text-lg sm:text-xl font-bold text-primary-foreground">
                      SN
                    </span>
                  </motion.div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-primary/20 blur-md -z-10 group-hover:bg-primary/30 transition-colors" />
                </div>

                {/* Name - visible on larger screens */}
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
                    {["✨", "🚀", "💡", "📬"][index]}
                  </motion.span>
                </motion.a>
              ))}

              {/* Theme Toggle - Desktop */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="ml-2"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 transition-transform duration-200" />
                  ) : (
                    <Moon className="h-5 w-5 transition-transform duration-200" />
                  )}
                </Button>
              )}
            </div>

            <div className="flex items-center gap-2 md:hidden">
              {/* Theme Toggle - Mobile */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="active:scale-95 touch-manipulation"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 transition-transform duration-200" />
                  ) : (
                    <Moon className="h-5 w-5 transition-transform duration-200" />
                  )}
                </Button>
              )}

              <Button
                variant="ghost"
                size="icon"
                className="active:scale-95 touch-manipulation"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              style={{ WebkitTapHighlightColor: "transparent" }}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
                mass: 0.8,
              }}
              className="fixed inset-y-0 right-0 z-50 w-full md:hidden bg-background shadow-2xl will-change-transform"
              style={{ touchAction: "pan-y" }}
            >
              <div className="flex flex-col h-full bg-gradient-to-br from-background via-background to-accent/5">
                {/* Menu items */}
                <nav className="flex flex-col p-8 pt-24 gap-3 flex-1 overflow-y-auto">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.2,
                      }}
                      className="text-2xl font-semibold cursor-pointer text-foreground hover:text-primary active:text-primary transition-all flex items-center gap-4 p-5 rounded-xl bg-card/50 hover:bg-card active:bg-card border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-md active:scale-[0.98] touch-manipulation"
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      <span className="text-xl">
                        {["✨", "🚀", "💡", "📬"][index]}
                      </span>
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
