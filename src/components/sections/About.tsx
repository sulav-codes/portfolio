"use client";

import { motion } from "framer-motion";
import { Code2, Camera, Music, Plane, Film } from "lucide-react";

const interests = [
  {
    icon: Code2,
    label: "Programming",
    color: "text-blue-500",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Camera,
    label: "Photography",
    color: "text-green-500",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Music,
    label: "Music",
    color: "text-pink-500",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Plane,
    label: "Traveling",
    color: "text-orange-500",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Film,
    label: "Movies",
    color: "text-purple-500",
    gradient: "from-purple-500 to-pink-500",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma", "Linux"] },
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-linear-to-r from-primary to-primary/50 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-4 sm:mb-6">
            I'm a BCA student from Nepal with an insatiable curiosity for
            technology and creativity. My journey began with writing my first
            "Hello World" and has evolved into building efficient, practical,
            and creative projects using modern web technologies.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center">
            When I'm not coding, you'll find me with a camera pointed at the
            Himalayas, jamming on my guitar, or watching cinematic masterpieces.
            I believe the best innovations happen at the intersection of passion
            and purpose.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">
            Tech Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-secondary/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary group-hover:scale-105 transition-transform">
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-background rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">
            Beyond Code
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all cursor-default">
                  <interest.icon
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${interest.color}`}
                  />
                  <span className="text-sm sm:text-base font-medium">
                    {interest.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
