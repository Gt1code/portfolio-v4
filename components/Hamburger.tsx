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
            className="cursor-pointer rounded-md p-2 ring-0 transition outline-none focus:ring-0 focus:outline-none focus-visible:ring-0"
          >
            {isOpen ? (
              <X className="pointer-events-none" />
            ) : (
              <MenuIcon className="pointer-events-none" />
            )}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          className="bg-surface z-50 mr-2 min-w-40 py-2 text-(--text-menu) sm:hidden"
        >
          <DropdownMenuItem asChild>
            <a
              href="#about"
              className="group flex cursor-pointer items-center gap-2 text-xl"
            >
              <UserIcon size={20} className="group:hover:text-(--text-menu)" />
              About
            </a>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <a
              href="#projects"
              className="group flex cursor-pointer items-center gap-2 text-xl"
            >
              <BriefcaseBusiness
                size={20}
                className="group:hover:text-(--text-menu)"
              />
              Projects
            </a>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <a
              href="#contact"
              className="group flex cursor-pointer items-center gap-2 text-xl"
            >
              <ContactIcon
                size={20}
                className="group:hover:text-(--text-menu)"
              />
              Contact
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
