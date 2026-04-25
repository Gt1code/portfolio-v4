import { BriefcaseBusiness, ContactIcon, UserIcon } from "lucide-react";
import { SiWhatsapp, SiX, SiGithub } from "@icons-pack/react-simple-icons";
import type { MobileLinkProps, SocialLinkProps } from "@/types/allTypes";
import { FaLinkedinIn } from "react-icons/fa";

export const mobileLinks: MobileLinkProps[] = [
  { href: "#about", icon: <UserIcon size={15} />, label: "About" },
  {
    href: "#projects",
    icon: <BriefcaseBusiness size={15} />,
    label: "Projects",
  },
  { href: "#contact", icon: <ContactIcon size={15} />, label: "Contact" },
];

export const socialLinks: SocialLinkProps[] = [
  {
    href: "https://wa.link/4lgrco",
    icon: <SiWhatsapp size={15} />,
    label: "WhatsApp",
    ariaLabel: "Chat on WhatsApp",
  },
  {
    href: "https://twitter.com/1Gtee",
    icon: <SiX size={15} />,
    label: "X",
    ariaLabel: "Follow on X",
  },
  {
    href: "https://linkedin.com/in/godstime-sunday",
    icon: <FaLinkedinIn size={15} />,
    label: "LinkedIn",
    ariaLabel: "Connect on LinkedIn",
  },
  {
    href: "https://github.com/Gt1code",
    icon: <SiGithub size={15} />,
    label: "GitHub",
    ariaLabel: "View GitHub profile",
  },
];
