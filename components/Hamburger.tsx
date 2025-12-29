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
            className="focus-visible:ring-primary cursor-pointer rounded-md p-2 transition focus-visible:ring-2 focus-visible:outline-none"
          >
            {isOpen ? <X /> : <MenuIcon />}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          className="bg-surface z-50 mr-2 min-w-40 py-2 text-(--text-secondary)"
        >
          <DropdownMenuItem asChild>
            <a href="#about" className="flex items-center gap-2">
              <UserIcon size={16} />
              About
            </a>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <a href="#projects" className="flex items-center gap-2">
              <BriefcaseBusiness size={16} />
              Projects
            </a>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <a href="#contact" className="flex items-center gap-2">
              <ContactIcon size={16} />
              Contact
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
