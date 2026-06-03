"use client";

import "@/app/globals.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hamburger = dynamic(() => import("@/components/hamburger/index"), {
  ssr: false,
});

import { desktopLinks } from "@/utils/mapElements";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav-root" aria-label="Site navigation">
      <div className={`nav-inner ${scrolled ? "nav-scrolled" : ""} `}>
        {/* Logo */}
        <Link href="/" className="nav-logo" aria-label="Home">
          <span className="nav-logo-accent">G</span>T
        </Link>

        {/* Desktop links */}
        <ul className="nav-links" role="list">
          {desktopLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="nav-link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="sm:hidden">
          <Hamburger />
        </div>
      </div>
    </nav>
  );
}
