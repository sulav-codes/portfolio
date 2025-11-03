"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/sulav-codes",
    color: "hover:text-[#333] dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/sulav-neupane",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/alright_.y._then",
    color: "hover:text-[#E4405F]",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-secondary/20"
    >
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Let's Connect
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
            photography? I'd love to hear from you!
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
                <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-45 transition-transform duration-300" />
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
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                className={`text-muted-foreground transition-colors ${social.color} relative p-3 sm:p-4 rounded-full bg-secondary/50 hover:bg-secondary`}
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-4 sm:mt-8 bg-secondary/30 rounded-xl p-4 sm:p-6 border border-border"
          >
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">
              📍 Currently based in{" "}
              <span className="text-foreground font-semibold">Nepal</span>
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Open to{" "}
              <span className="text-primary font-semibold">
                remote opportunities
              </span>{" "}
              worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
