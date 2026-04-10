import { type IconListProps, MobileLinkProps } from "@/types/allTypes";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BriefcaseBusiness, ContactIcon, UserIcon } from "lucide-react";

// About... Icons
export const IconList: IconListProps[] = [
  {
    icons: <FaLinkedinIn size={18} />,
    ariaLabel: "Open LinkedIn Profile in new tab",
    href: "https://www.linkedin.com/in/godstime-sunday/",
  },
  {
    icons: <FaGithub size={18} />,
    ariaLabel: "Open GitHub in new tab",
    href: "https://github.com/Gt1code",
  },
  {
    icons: <FaXTwitter size={18} />,
    ariaLabel: "Open Twitter in new tab",
    href: "https://x.com/1Gtee",
  },
];

// Skills...
export const skills: Array<string> = [
  "React",
  "Next.js",
  "Typescript",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "REST API",
  "prisma orm",
  "neon db",
  "supabase",
];

// mobile menu
export const mobileLinks: MobileLinkProps[] = [
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
];

// desktop menu
export const desktopLinks = [
  { href: "#about", label: "about", text: "About" },
  { href: "#projects", label: "project", text: "Projects" },
  { href: "#contact", label: "contact", text: "Contact" },
];
