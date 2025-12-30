import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/Footer";

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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
