"use client";

import { motion } from "framer-motion";
import { LuGithub, LuLinkedin, LuInstagram, LuSend } from "react-icons/lu";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: LuGithub,
    url: "https://github.com/sulav-codes",
    color: "hover:text-[#333] dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: LuLinkedin,
    url: "https://linkedin.com/in/sulav-neupane",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "Instagram",
    icon: LuInstagram,
    url: "https://instagram.com/alright_.y._then",
    color: "hover:text-[#E4405F]",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="ambient-orb" style={{ width: '450px', height: '450px', background: 'var(--orb-2)', top: '-50px', right: '5%', animation: 'orb-drift-1 20s ease-in-out infinite' }} />
        <div className="ambient-orb" style={{ width: '300px', height: '300px', background: 'var(--orb-3)', bottom: '0', left: '10%', animation: 'orb-drift-3 16s ease-in-out infinite' }} />
      </div>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Let&#39;s Connect
          </h2>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-linear-to-r from-primary to-primary/50 mx-auto rounded-full mb-4 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            Have a project in mind or just want to chat about tech, movies, or
            photography? I&#39;d love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6 sm:gap-8"
        >
          {/* Email Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              asChild
              className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 group relative overflow-hidden w-full sm:w-auto"
            >
              <a
                href="mailto:sulavneupane1905@gmail.com"
                className="flex items-center justify-center"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <LuSend className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-45 transition-transform duration-300" />
                <span className="truncate">sulavneupane1905@gmail.com</span>
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{
                  scale: 1.2,
                  y: -8,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                className={`text-muted-foreground transition-colors ${social.color} relative p-3 sm:p-4 rounded-full glass-badge hover:scale-110`}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    delay: index * 0.3,
                  }}
                  className="absolute inset-0 rounded-full bg-current opacity-0 hover:opacity-10"
                />
                <social.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Location info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
            whileHover={{ scale: 1.02 }}
            className="text-center mt-4 sm:mt-8 glass rounded-2xl p-4 sm:p-6 glass-shimmer"
          >
            <motion.p
              className="text-xs sm:text-sm text-muted-foreground mb-2"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              📍 Currently based in{" "}
              <span className="text-foreground font-semibold">Nepal</span>
            </motion.p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Open to{" "}
              <motion.span
                className="text-primary font-semibold inline-block"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                remote opportunities
              </motion.span>{" "}
              worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
