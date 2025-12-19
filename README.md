# 🚀 Portfolio v2

A modern, interactive portfolio website built with Next.js 16, featuring stunning 3D animations, dark mode support, and a seamless user experience.

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎨 Modern UI/UX**: Clean and responsive design with Tailwind CSS v4
- **🌓 Dark Mode**: Seamless theme switching with next-themes
- **🎭 3D Animations**: Interactive Three.js photo sphere using React Three Fiber
- **⚡ Performance Optimized**: Built with Next.js 16 App Router for optimal performance
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🎯 SEO Optimized**: Built-in SEO components and metadata management
- **🎪 Easter Eggs**: Hidden interactive elements for engaging user experience
- **🔄 Smooth Animations**: Powered by Framer Motion for fluid transitions
- **📊 Analytics**: Integrated Vercel Speed Insights
- **♿ Accessible**: Built with Radix UI primitives for accessibility

## 🛠️ Tech Stack

### Core

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Lightning CSS
- **React**: React 19.2

### UI & Animation

- **Component Library**: Radix UI (Accordion, Dialog, Tabs, etc.)
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Icons**: Lucide React

### Development Tools

- **Linting**: ESLint with Next.js config
- **Compiler**: Babel React Compiler
- **Type Checking**: TypeScript 5
- **Package Manager**: npm

## 📁 Project Structure

```
portfolio-v2/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css        # Global styles
│   │   ├── HomeClient.tsx     # Client-side home component
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── not-found.tsx      # 404 page
│   │   ├── robots.ts          # Robots.txt generator
│   │   └── sitemap.ts         # Sitemap generator
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.tsx       # Hero section with 3D photo
│   │   │   ├── About.tsx      # About section
│   │   │   ├── Projects.tsx   # Projects showcase
│   │   │   ├── Gallery.tsx    # Image gallery
│   │   │   ├── Contact.tsx    # Contact form
│   │   │   └── Footer.tsx     # Footer
│   │   ├── ui/                # Reusable UI components
│   │   ├── EasterEggs.tsx     # Interactive easter eggs
│   │   ├── FloatingActionButton.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── Navigation.tsx
│   │   ├── SEO.tsx
│   │   ├── SocialShare.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThreeJSPhoto.tsx   # 3D photo sphere
│   ├── data/
│   │   ├── projects.json      # Projects data
│   │   └── gallery.json       # Gallery images data
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                     # Static assets
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies

```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio-v2
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Customization

### Updating Projects

Edit `src/data/projects.json` to add or modify your projects:

```json
{
  "id": 1,
  "title": "Your Project",
  "description": "Project description",
  "techStack": ["Next.js", "TypeScript"],
  "liveUrl": "https://example.com",
  "githubUrl": "https://github.com/username/repo"
}
```

### Updating Gallery

Edit `src/data/gallery.json` to manage your gallery images.

### Theme Customization

Modify `src/app/globals.css` and Tailwind configuration to customize colors and styles.

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

### Other Platforms

This Next.js app can also be deployed to:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with code splitting and dynamic imports

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For any inquiries or collaboration opportunities, feel free to reach out through the contact form on the website.

---

Built with ❤️ using Next.js and React
