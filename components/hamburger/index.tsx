"use client";

import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mobileLinks, socialLinks } from "@/data/navigation-data";
import NavItem from "./NavItems";
import SocialItem from "./SocialItems";
import Divider from "./Divider";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 sm:hidden">
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
          align="center"
          className="z-50 min-w-screen overflow-hidden rounded-xl border border-(--border-subtle) bg-(--card-bg) p-2 shadow-xl shadow-black/20 sm:hidden"
        >
          {/* Nav links */}
          <Divider />
          <div className="my-1.5 flex flex-col">
            {mobileLinks.map((link) => (
              <NavItem key={link.label} {...link} />
            ))}
          </div>

          {/* Social links */}
          <Divider />
          <div className="mt-1.5 px-1 pb-1">
            <p className="mb-2 px-2 text-[10px] font-medium tracking-widest text-(--text-secondary) uppercase opacity-50">
              Find me on
            </p>
            <div className="grid grid-cols-4 gap-1">
              {socialLinks.map((link) => (
                <SocialItem key={link.label} {...link} />
              ))}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
