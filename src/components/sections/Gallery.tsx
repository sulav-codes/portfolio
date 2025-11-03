"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Camera, Music, Palette } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import galleryData from "@/data/gallery.json";

type Category = "all" | "photography" | "music" | "artwork";

const categoryIcons = {
  photography: Camera,
  music: Music,
  artwork: Palette,
};

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Gallery
          </h2>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-linear-to-r from-primary to-primary/50 mx-auto rounded-full mb-4 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            A glimpse into my creative pursuits beyond code
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <Tabs
            defaultValue="all"
            onValueChange={(value) => setActiveCategory(value as Category)}
            className="w-full max-w-md"
          >
            <TabsList className="grid w-full grid-cols-4 h-auto p-1">
              <TabsTrigger value="all" className="text-xs sm:text-sm">
                All
              </TabsTrigger>
              <TabsTrigger value="photography" className="text-xs sm:text-sm">
                Photos
              </TabsTrigger>
              <TabsTrigger value="music" className="text-xs sm:text-sm">
                Music
              </TabsTrigger>
              <TabsTrigger value="artwork" className="text-xs sm:text-sm">
                Art
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {filteredItems.map((item, index) => {
            const Icon =
              categoryIcons[item.category as keyof typeof categoryIcons];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="relative group overflow-hidden rounded-lg sm:rounded-xl cursor-pointer aspect-square shadow-lg hover:shadow-2xl transition-shadow"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                    {Icon && (
                      <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    )}
                    <span className="text-[10px] sm:text-xs text-white/80 uppercase tracking-wider font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
