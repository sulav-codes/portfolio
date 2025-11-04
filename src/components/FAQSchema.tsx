// Server component for FAQ structured data
// This ensures FAQ JSON-LD appears exactly once on the home page

export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Sulav Neupane offer as a Full Stack Developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sulav Neupane offers comprehensive full-stack web development services including frontend development with React, Next.js, and TypeScript, backend development with Node.js and Django, database design with MongoDB, PostgreSQL, and MySQL, API development, and complete web application development. He specializes in building modern, responsive, and scalable web applications.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies and frameworks does Sulav Neupane specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sulav Neupane specializes in modern web technologies including React, Next.js, TypeScript, JavaScript, Node.js, Django, Python, MongoDB, PostgreSQL, MySQL, Tailwind CSS, and RESTful API development. He focuses on creating full-stack solutions with cutting-edge technologies.",
        },
      },
      {
        "@type": "Question",
        name: "Is Sulav Neupane available for freelance projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Sulav Neupane is available for freelance web development projects. He offers services worldwide remotely and can be contacted through his portfolio website or email at sulavneupane1905@gmail.com for project inquiries and collaborations.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Sulav Neupane based and does he work remotely?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sulav Neupane is based in Nepal and works remotely with clients worldwide. He provides full-stack web development services to international clients across different time zones, ensuring flexible collaboration and communication throughout the project lifecycle.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Sulav Neupane's portfolio unique?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sulav Neupane's portfolio showcases a diverse range of projects demonstrating expertise in both frontend and backend development. His work includes modern web applications built with cutting-edge technologies, creative problem-solving approaches, and a strong focus on user experience, performance optimization, and code quality. He also brings creative interests in photography and music to his technical work.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
