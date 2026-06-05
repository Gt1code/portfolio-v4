import { FaWhatsapp } from "react-icons/fa";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Gt1code", icon: FaGithub },
  { label: "WhatsApp", href: "https://wa.link/4lgrco", icon: FaWhatsapp },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/godstime-sunday/",
    icon: FaLinkedinIn,
  },
  { label: "X", href: "https://x.com/1Gtee", icon: FaXTwitter },
  {
    label: "Email",
    href: "mailto:sundaygodstimegt1@gmail.com",
    icon: MdOutlineEmail,
  },
];

// Skills...
export const skills: Array<string> = [
  "Typescript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "REST API",
  "Prisma",
  "Clerk Auth",
  "Supabase",
];
