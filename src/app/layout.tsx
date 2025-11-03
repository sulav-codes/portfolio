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
  // Organization/Personal Brand Schema for the entire site
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.sulav-neupane.com.np/#organization",
    name: "Sulav Neupane",
    alternateName: "Sulav Neupane Portfolio",
    url: "https://www.sulav-neupane.com.np",
    logo: "https://www.sulav-neupane.com.np/logo.png",
    description:
      "Full Stack Web Developer from Nepal specializing in React, Next.js, TypeScript, Node.js, and Django",
    founder: {
      "@type": "Person",
      name: "Sulav Neupane",
    },
    sameAs: [
      "https://github.com/sulav-codes",
      "https://linkedin.com/in/sulav-neupane",
      "https://instagram.com/alright_.y._then",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "sulavneupane1905@gmail.com",
      contactType: "Professional Services",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Nepali"],
    },
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

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
