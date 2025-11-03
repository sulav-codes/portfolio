"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { LoadingScreen } from "@/components/LoadingScreen";
import { EasterEggs } from "@/components/EasterEggs";
import { SocialShare } from "@/components/SocialShare";
import SEO from "@/components/SEO";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Structured Data for SEO (JSON-LD)
  // Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.sulav-neupane.com.np/#person",
    name: "Sulav Neupane",
    url: "https://www.sulav-neupane.com.np",
    image: "https://www.sulav-neupane.com.np/profile.jpeg",
    jobTitle: "Full Stack Web Developer",
    description:
      "Full Stack Web Developer from Nepal specializing in React, Next.js, TypeScript, Node.js, and Django",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "BCA Program",
    },
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Django",
      "JavaScript",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "RESTful APIs",
      "Frontend Development",
      "Backend Development",
      "Responsive Design",
      "Software Engineering",
    ],
    sameAs: [
      "https://github.com/sulav-codes",
      "https://linkedin.com/in/sulav-neupane",
      "https://instagram.com/alright_.y._then",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Nepal",
    },
    email: "sulavneupane1905@gmail.com",
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.sulav-neupane.com.np/#website",
    url: "https://www.sulav-neupane.com.np",
    name: "Sulav Neupane Portfolio",
    description:
      "Professional portfolio of Sulav Neupane - Full Stack Web Developer from Nepal",
    publisher: {
      "@id": "https://www.sulav-neupane.com.np/#person",
    },
    inLanguage: "en-US",
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.sulav-neupane.com.np/#service",
    name: "Sulav Neupane - Web Development Services",
    description:
      "Professional web development services including full-stack development, React, Next.js, TypeScript, Node.js, and Django applications",
    provider: {
      "@id": "https://www.sulav-neupane.com.np/#person",
    },
    areaServed: "Worldwide",
    availableLanguage: ["English", "Nepali"],
    priceRange: "$$",
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Sulav Neupane offer as a web developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sulav Neupane offers full-stack web development services including custom website development, React and Next.js applications, TypeScript development, Node.js and Django backend development, API integration, database design (MySQL, MongoDB, PostgreSQL), responsive web design, and modern web application development.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Sulav Neupane specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sulav specializes in frontend technologies like React, Next.js, TypeScript, JavaScript, Tailwind CSS, and Three.js. For backend development, he works with Node.js, Express, Django, and Python. His database expertise includes MySQL, MongoDB, and PostgreSQL. He's also proficient in Git, RESTful APIs, and modern web development tools.",
        },
      },
      {
        "@type": "Question",
        name: "Is Sulav Neupane available for freelance projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Sulav Neupane is currently available for freelance projects, full-time opportunities, and collaborative ventures in web development and software engineering. You can contact him via email at sulavneupane1905@gmail.com or connect through LinkedIn, GitHub, or Instagram.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Sulav Neupane based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sulav Neupane is based in Nepal and offers web development services globally through remote collaboration. He works with clients worldwide, leveraging modern communication tools and project management practices.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Sulav Neupane stand out as a web developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sulav brings a unique combination of technical expertise in both frontend and backend development, creative problem-solving skills, and a passion for building efficient and user-friendly applications. He emphasizes clean code, scalable architecture, and continuous learning to stay updated with the latest web development trends.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of projects has Sulav Neupane worked on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sulav has worked on various projects showcasing full-stack development skills, including modern web applications, e-commerce platforms, creative projects using Three.js for 3D graphics, and applications integrating RESTful APIs. His portfolio demonstrates expertise in building scalable, efficient, and visually appealing solutions.",
        },
      },
    ],
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sulav-neupane.com.np",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.sulav-neupane.com.np/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://www.sulav-neupane.com.np/#projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://www.sulav-neupane.com.np/#contact",
      },
    ],
  };

  useEffect(() => {
    // Wait for loading screen to finish and content to be ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3300); // Sync with loading screen timing

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* JSON-LD Structured Data - Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* JSON-LD Structured Data - Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* JSON-LD Structured Data - Professional Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      {/* JSON-LD Structured Data - FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* JSON-LD Structured Data - Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SEO />
      <LoadingScreen />
      <EasterEggs />
      <AnimatePresence>
        {isLoaded && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="min-h-screen"
          >
            <Navigation />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Hero />
            </motion.div>
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
            {/* <Gallery /> */}
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
        )}
      </AnimatePresence>
    </>
  );
}
