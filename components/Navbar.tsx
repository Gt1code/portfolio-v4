"use client";

import dynamic from "next/dynamic";

const Hamburger = dynamic(() => import("@/components/Hamburger"), {
  ssr: false,
});

export default function Navbar() {
  return (
    <nav className="border-default fixed top-0 z-2 w-full bg-[rgba(204,213,210,0.05)] shadow-white/20 backdrop-blur-[6.4px]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:py-3 md:py-4">
        <a href="#">
          <h1 className="text-lg font-bold text-(--text-primary)">
            Godstime.dev
          </h1>
        </a>

        <nav role="navigation" aria-label="Primary" className="hidden sm:flex">
          <ul className="flex list-none items-center gap-6">
            {[
              { href: "#about", label: "about", text: "About" },
              { href: "#projects", label: "project", text: "Projects" },
              { href: "#contact", label: "contact", text: "Contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative transition-colors duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#96B7C8] after:transition-all after:duration-300 hover:opacity-90 hover:after:w-full"
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
