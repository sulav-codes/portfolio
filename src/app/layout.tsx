import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sulav Neupane | Full-Stack Web Developer",
  description:
    "Portfolio of Sulav Neupane - BCA Student, Programmer, and Creative Technologist from Nepal. Passionate about programming, photography, music, and movies.",
  keywords: [
    "Sulav Neupane",
    "Portfolio",
    "Web Developer",
    "Nepal",
    "BCA Student",
    "Programmer",
    "Coding",
    "Technology",
    "Photography",
    "Music",
    "Movies",
    "Modern Web Apps",
    "Full-Stack Development",
  ],
  authors: [{ name: "Sulav Neupane" }],
  openGraph: {
    title: "Sulav Neupane | Full-Stack Web Developer",
    description:
      "Portfolio of Sulav Neupane - BCA Student, Programmer, and Creative Technologist from Nepal. Passionate about programming, photography, music, and movies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
