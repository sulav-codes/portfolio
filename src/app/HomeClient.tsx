"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import SEO from "@/components/SEO";

const About = dynamic(
  () =>
    import("@/components/sections/About").then((mod) => ({
      default: mod.About,
    })),
  { ssr: false },
);

const Projects = dynamic(
  () =>
    import("@/components/sections/Projects").then((mod) => ({
      default: mod.Projects,
    })),
  { ssr: false },
);

const Contact = dynamic(
  () =>
    import("@/components/sections/Contact").then((mod) => ({
      default: mod.Contact,
    })),
  { ssr: false },
);

const Footer = dynamic(
  () =>
    import("@/components/sections/Footer").then((mod) => ({
      default: mod.Footer,
    })),
  { ssr: false },
);

const FloatingActionButton = dynamic(
  () =>
    import("@/components/FloatingActionButton").then((mod) => ({
      default: mod.FloatingActionButton,
    })),
  { ssr: false },
);

const EasterEggs = dynamic(
  () =>
    import("@/components/EasterEggs").then((mod) => ({
      default: mod.EasterEggs,
    })),
  { ssr: false },
);

const SocialShare = dynamic(
  () =>
    import("@/components/SocialShare").then((mod) => ({
      default: mod.SocialShare,
    })),
  { ssr: false },
);

export default function HomeClient() {
  return (
    <>
      <SEO />
      <EasterEggs />
      <motion.main
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="min-h-screen"
      >
        <Navigation />
        <div>
          <Hero />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <About />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Projects />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Footer />
        </motion.div>
        <FloatingActionButton />
        <SocialShare />
      </motion.main>
    </>
  );
}
