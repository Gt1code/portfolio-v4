"use client";

import dynamic from "next/dynamic";

const Hamburger = dynamic(() => import("@/components/Hamburger"), {
  ssr: false,
});

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-100 w-full border-b border-(--border-subtle) bg-(--bg)/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#">
          <h1 className="font-serif text-lg font-light tracking-wide text-(--text-primary)">
            Godstime<span className="text-(--amber)">.dev</span>
          </h1>
        </a>

        {/* Desktop nav */}
        <nav role="navigation" aria-label="Primary" className="hidden sm:flex">
          <ul className="flex list-none items-center gap-8">
            {[
              { href: "#about", label: "about", text: "About" },
              { href: "#projects", label: "project", text: "Projects" },
              { href: "#contact", label: "contact", text: "Contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative text-sm font-light text-(--text-secondary) transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-(--amber) after:transition-all after:duration-300 hover:text-(--text-primary) hover:after:w-full"
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
