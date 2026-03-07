"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BriefcaseBusiness,
  ContactIcon,
  MenuIcon,
  UserIcon,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={(e) => e.currentTarget.blur()}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-(--border-subtle) bg-(--card-bg) text-(--text-secondary) transition-all duration-200 outline-none hover:border-(--border-accent) hover:text-(--amber) focus:outline-none focus-visible:ring-0"
          >
            {isOpen ? (
              <X size={16} className="pointer-events-none" />
            ) : (
              <MenuIcon size={16} className="pointer-events-none" />
            )}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          className="z-50 min-w-48 overflow-hidden rounded-xl border border-(--border-subtle) bg-(--card-bg) p-1.5 shadow-xl shadow-black/20 sm:hidden"
        >
          {/* Top amber hairline */}
          <div className="mb-1.5 h-px w-full bg-linear-to-r from-transparent via-(--amber) to-transparent opacity-50" />

          {[
            { href: "#about", icon: <UserIcon size={15} />, label: "About" },
            {
              href: "#projects",
              icon: <BriefcaseBusiness size={15} />,
              label: "Projects",
            },
            {
              href: "#contact",
              icon: <ContactIcon size={15} />,
              label: "Contact",
            },
          ].map((item) => (
            <DropdownMenuItem key={item.label} asChild>
              <a
                href={item.href}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-sm font-light text-(--text-secondary) transition-all duration-150 outline-none hover:bg-(--amber-bg) hover:text-(--amber) focus:bg-(--amber-bg) focus:text-(--amber)"
              >
                <span className="text-(--amber)">{item.icon}</span>
                {item.label}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
