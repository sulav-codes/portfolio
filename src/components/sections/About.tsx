"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Music,
  Plane,
  Film,
  Rocket,
  Brain,
  BrainCircuit,
} from "lucide-react";

const interests = [
  {
    icon: Music,
    label: "Music",
    color: "text-pink-500",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Camera,
    label: "Photography",
    color: "text-green-500",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Film,
    label: "Movies",
    color: "text-purple-500",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    label: "Space",
    color: "text-blue-500",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BrainCircuit,
    label: "Wondering",
    color: "text-orange-500",
    gradient: "from-orange-500 to-amber-500",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Django",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "RESTful APIs",
    ],
  },
  { category: "Tools", items: ["Git", "Postman", "VS Code", "Figma", "Linux"] },
];

export function About() {
  const spotifyPlaylistUrl =
    "https://open.spotify.com/playlist/2QIJzGympUS3x9xJwLNrj8?si=afa93f40b0fd43ce";
  const musicClickCountRef = useRef(0);
  const musicClickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (musicClickTimerRef.current) {
        clearTimeout(musicClickTimerRef.current);
      }
    };
  }, []);

  const handleInterestClick = (label: string) => {
    if (label !== "Music") return;

    musicClickCountRef.current += 1;

    if (musicClickTimerRef.current) {
      clearTimeout(musicClickTimerRef.current);
    }

    if (musicClickCountRef.current === 3) {
      window.open(spotifyPlaylistUrl, "_blank", "noopener,noreferrer");
      musicClickCountRef.current = 0;
      musicClickTimerRef.current = null;
      return;
    }

    musicClickTimerRef.current = setTimeout(() => {
      musicClickCountRef.current = 0;
      musicClickTimerRef.current = null;
    }, 550);
  };

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
            I'm just a guy who loves building, fixing and exploring stuffs. I
            like to keep things simple and organized. I'm excited to continue
            learning and growing as a developer, and to contribute to projects
            that make a positive impact.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center">
            Outside of coding, I'm usually lost in music, films, photography, or
            random deep dives into ideas that don't have immediate answers. I
            don't like staying on the surface of anything for too long. I'm
            still figuring things out, building, experimenting, and improving as
            I go. <br /> That's kind of the whole point!!!
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
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-secondary/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <motion.h4
                  className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill.category}
                </motion.h4>
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
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.05 * index,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div
                  onClick={() => handleInterestClick(interest.label)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <interest.icon
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${interest.color}`}
                    />
                  </motion.div>
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
