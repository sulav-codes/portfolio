"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projectsData from "@/data/projects.json";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-secondary/20"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-linear-to-r from-primary to-primary/50 mx-auto rounded-full mb-4 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            A collection of projects that showcase my passion for building
            efficient, creative, and practical solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="h-full"
            >
              <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 group border border-border hover:border-primary/50 bg-background/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="group-hover:text-primary transition-colors flex items-center gap-2 text-lg sm:text-xl">
                    {project.title}
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 0 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-base sm:text-xl"
                    >
                      ✨
                    </motion.span>
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-xs sm:text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grow pb-3">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-[10px] sm:text-xs cursor-default hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 pt-3">
                  {project.liveUrl && (
                    <motion.div
                      className="flex-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        variant="default"
                        asChild
                        className="w-full text-xs sm:text-sm"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                  )}
                  <motion.div
                    className={project.liveUrl ? "flex-1" : "w-full"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="w-full text-xs sm:text-sm"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        GitHub
                      </a>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
