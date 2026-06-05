import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Godstime Sunday | Frontend Developer",
  description:
    "Frontend developer building modern, fast, and accessible web experiences with React, Next.js, and Tailwind CSS.",
  keywords: [
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "Nigeria",
    "web developer",
  ],
  authors: [{ name: "Godstime Sunday", url: "https://sgodstime.vercel.app" }],

  openGraph: {
    title: "Godstime Sunday | Frontend Developer",
    description:
      "Explore my portfolio showcasing modern frontend projects built with React, Next.js, and Tailwind CSS.",
    url: "https://sgodstime.vercel.app/",
    siteName: "Godstime Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Godstime Sunday Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Godstime Sunday | Frontend Developer",
    description:
      "Frontend developer building modern web experiences using Next.js and Tailwind CSS.",
    images: ["/og-image.png"],
  },

  metadataBase: new URL("https://sgodstime.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
