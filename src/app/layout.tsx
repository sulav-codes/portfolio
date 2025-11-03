import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sulav Neupane | Full Stack Developer",
  description:
    "Full Stack Developer from Nepal specializing in React, Next.js, TypeScript, Node.js & Django. Building modern web applications. Available for projects.",
  keywords: [
    "Sulav Neupane",
    "Full Stack Developer",
    "Web Developer Nepal",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Django Developer",
    "Portfolio",
    "BCA Student Nepal",
    "Programmer Nepal",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Modern Web Development",
    "RESTful API",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Tailwind CSS",
    "JavaScript",
    "Python",
    "Web Applications",
    "Responsive Design",
    "Nepal Developer",
    "Himalayan Tech Talent",
    "Freelance Developer",
    "Technology",
    "Programming",
    "Software Engineering",
    "Photography",
    "Music",
    "Creative Technologist",
  ],
  authors: [{ name: "Sulav Neupane", url: "https://www.sulav-neupane.com.np" }],
  creator: "Sulav Neupane",
  publisher: "Sulav Neupane",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sulav-neupane.com.np",
    title: "Sulav Neupane - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, Node.js & Django. Building modern web applications.",
    siteName: "Sulav Neupane Portfolio",
    images: [
      {
        url: "https://www.sulav-neupane.com.np/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sulav Neupane - Full Stack Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sulav Neupane - Full Stack Developer",
    description:
      "Full Stack Developer from Nepal | React, Next.js, TypeScript, Node.js, Django",
    creator: "@sulav_neupane",
    images: ["https://www.sulav-neupane.com.np/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.sulav-neupane.com.np",
  },
  category: "Technology",
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Sulav Neupane - Full Stack Web Developer Portfolio",
    "twitter:image:alt": "Sulav Neupane - Full Stack Web Developer Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Local Business Schema - Freelance Developer
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.sulav-neupane.com.np/#business",
    name: "Sulav Neupane - Web Development Services",
    alternateName: "Sulav Neupane Portfolio",
    url: "https://www.sulav-neupane.com.np",
    logo: "https://www.sulav-neupane.com.np/logo.png",
    image: "https://www.sulav-neupane.com.np/og-image.jpg",
    description:
      "Full Stack Web Developer from Nepal specializing in React, Next.js, TypeScript, Node.js, and Django",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressLocality: "Nepal",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.7172",
      longitude: "85.3240",
    },
    email: "sulavneupane1905@gmail.com",
    priceRange: "$$",
    telephone: "+977",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://github.com/sulav-codes",
      "https://linkedin.com/in/sulav-neupane",
      "https://instagram.com/alright_.y._then",
    ],
  };

  // WebPage Schema for SEO
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.sulav-neupane.com.np/#webpage",
    url: "https://www.sulav-neupane.com.np",
    name: "Sulav Neupane - Full Stack Web Developer Portfolio",
    description:
      "Professional portfolio of Sulav Neupane - Full Stack Web Developer from Nepal specializing in React, Next.js, TypeScript, Node.js, Django",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.sulav-neupane.com.np/#website",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "ReadAction",
      target: ["https://www.sulav-neupane.com.np"],
    },
  };

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

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.sulav-neupane.com.np/#faq",
    url: "https://www.sulav-neupane.com.np",
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

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
