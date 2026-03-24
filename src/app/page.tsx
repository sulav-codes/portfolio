import Script from "next/script";
import HomeClient from "./HomeClient";

export default function Home() {
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

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
        strategy="afterInteractive"
      />
      <HomeClient />
    </>
  );
}
