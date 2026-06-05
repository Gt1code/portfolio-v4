"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Sun,
  Moon,
  Menu,
  X,
  Home,
  User,
  Code2,
  FolderOpen,
  Mail,
  FileText,
  ExternalLink,
  Check,
} from "lucide-react";
import { useState, useEffect } from "react";
import { socialLinks } from "@/utils/mapElements";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About ", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="bg-bg border-border dark:bg-bg dark:border-border sticky top-0 z-50 border-b">
      <nav className="mx-auto flex h-16 max-w-(--container-max) items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="text-text-primary flex items-center gap-2.5 text-lg font-bold"
        >
          <span className="bg-accent flex h-8 w-8 items-center justify-center rounded-md text-sm leading-none font-extrabold text-white">
            GT
          </span>
          Godstime Sunday
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`text-sm font-medium transition-colors duration-150 ${
                activeLink === link.label
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="text-text-secondary hover:text-text-primary hover:bg-bg-card flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-150"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          )}
        </div>

        {/* Mobile top-right controls */}
        <div className="flex items-center gap-1 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="text-text-secondary hover:bg-bg-card flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-150"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          )}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="text-text-primary flex h-9 w-9 cursor-pointer items-center justify-center"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Drawer panel */}
          <div
            className="bg-bg dark:bg-bg absolute top-0 left-0 h-full w-[78vw] max-w-xs overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="border-border flex items-start justify-between border-b px-5 py-5">
              <div className="flex items-center gap-3">
                <div className="bg-accent-light dark:bg-accent-muted flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="text-accent text-lg font-extrabold">GT</span>
                </div>
                <div>
                  <p className="text-text-primary text-base font-bold">
                    Godstime Sunday
                  </p>
                  <p className="text-text-secondary text-sm">
                    Frontend Developer
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-text-secondary hover:text-text-primary mt-0.5 cursor-pointer transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col px-3 pt-4 pb-2">
              {navLinks.map(({ label, href, icon: Icon }) => {
                const isActive = activeLink === label;
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={() => {
                      setActiveLink(label);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center gap-4 rounded-sm px-3 py-3.5 text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "bg-accent-light text-accent dark:bg-accent-muted border-accent border-l-[3px]"
                        : "text-text-primary hover:bg-bg-card border-l-[3px] border-transparent"
                    }`}
                  >
                    <Icon size={19} className="shrink-0" />
                    {label}
                  </a>
                );
              })}
            </div>

            <div className="border-border mx-5 border-t" />

            {/* Resume */}
            <div className="px-3 pt-5 pb-2">
              <p className="text-text-muted mb-2 px-3 text-xs font-semibold tracking-widest uppercase">
                Resume
              </p>
              <a
                href="/pdfs/Godstime-Sunday_frontend-developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                onClick={() => setMenuOpen(false)}
                className="text-text-primary hover:bg-bg-card flex items-center gap-4 rounded-sm px-3 py-3.5 text-sm font-medium transition-colors duration-150"
              >
                <FileText size={19} className="shrink-0" />
                Resume
              </a>
            </div>

            <div className="border-border mx-5 border-t" />

            {/* Connect */}
            <div className="px-3 pt-5 pb-2">
              <p className="text-text-muted mb-2 px-3 text-xs font-semibold tracking-widest uppercase">
                Connect
              </p>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:bg-bg-card flex items-center gap-4 rounded-sm px-3 py-3.5 text-sm font-medium transition-colors duration-150"
                >
                  <Icon size={19} className="shrink-0" />
                  <span className="flex-1">{label}</span>
                  <ExternalLink size={15} className="text-text-muted" />
                </a>
              ))}
            </div>

            <div className="border-border mx-5 border-t" />

            {/* Theme switcher */}
            {mounted && (
              <div className="px-3 pt-4 pb-6">
                <button
                  onClick={() => setTheme("light")}
                  className={`flex w-full items-center gap-4 rounded-sm px-3 py-3.5 text-sm font-medium transition-colors duration-150 ${
                    theme === "light"
                      ? "bg-accent-light text-accent dark:bg-accent-muted"
                      : "text-text-primary hover:bg-bg-card"
                  }`}
                >
                  <Sun size={19} className="shrink-0" />
                  <span className="flex-1">Light Mode</span>
                  {theme === "light" && (
                    <Check size={16} className="text-accent" />
                  )}
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`flex w-full items-center gap-4 rounded-sm px-3 py-3.5 text-sm font-medium transition-colors duration-150 ${
                    theme === "dark"
                      ? "bg-accent-light text-accent dark:bg-accent-muted"
                      : "text-text-primary hover:bg-bg-card"
                  }`}
                >
                  <Moon size={19} className="shrink-0" />
                  <span className="flex-1">Dark Mode</span>
                  {theme === "dark" && (
                    <Check size={16} className="text-accent" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
