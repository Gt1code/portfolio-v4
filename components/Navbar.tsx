"use client";

import dynamic from "next/dynamic";

const Hamburger = dynamic(() => import("@/components/Hamburger"), {
  ssr: false,
});
import { desktopLinks } from "@/utils/mapElements";

export default function Navbar() {
  return (
    <nav className="fixed top-5 z-100 w-full p-4 sm:p-8">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border-2 border-(--border-subtle) bg-(--bg)/80 px-6 backdrop-blur-md sm:py-6">
        {/* Logo */}
        <a href="#">
          <h1 className="font-serif text-lg font-light tracking-wide text-(--text-primary)">
            Godstime<span className="text-(--amber)">.dev</span>
          </h1>
        </a>

        {/* Desktop nav */}
        <nav role="navigation" aria-label="Primary" className="hidden sm:flex">
          <ul className="flex list-none items-center gap-8">
            {desktopLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative font-normal text-(--text-secondary) transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-(--amber) after:transition-all after:duration-300 hover:text-(--text-primary) hover:after:w-full"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Hamburger />
      </div>
    </nav>
  );
}
