import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

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
  icons: {
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Sulav Neupane - Full Stack Web Developer Portfolio",
    "twitter:image:alt": "Sulav Neupane - Full Stack Web Developer Portfolio",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Sulav Neupane",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Local Business Schema
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
      streetAddress: "Remote",
      addressLocality: "Bharatpur",
      addressRegion: "Bagmati",
      postalCode: "44200",
      addressCountry: "NP",
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
      streetAddress: "Remote",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      postalCode: "44600",
      addressCountry: "NP",
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Sulav Neupane" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Structured Data Schemas */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          id="webpage-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
