"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type IconListProps = {
  icons: React.ReactNode;
  ariaLabel: string;
  href: string;
};

const IconList: IconListProps[] = [
  {
    icons: <FaLinkedinIn size={22} />,
    ariaLabel: "Open LinkedIn Profile in new tab",
    href: "https://www.linkedin.com/in/godstime-sunday/",
  },
  {
    icons: <FaGithub size={22} />,
    ariaLabel: "Open GitHub in new tab",
    href: "https://github.com/Gt1code",
  },
  {
    icons: <FaXTwitter size={22} />,
    ariaLabel: "Open Twitter in new tab",
    href: "https://x.com/1Gtee",
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex min-h-[calc(100vh-44px)] scroll-mt-12 items-center justify-center px-6 py-20"
    >
      <div className="flex w-full max-w-4xl flex-col items-center gap-8 md:flex-row md:gap-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:flex-1"
        >
          <Image
            loading="eager"
            src="/profile-pic.png"
            alt="profile picture"
            width={300}
            height={250}
            className="mx-auto w-[15em] rounded-3xl sm:w-[18em] md:mx-0"
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:flex-1 md:text-left"
        >
          <h2 className="mb-4 text-3xl font-bold text-(--text-primary)">
            About Me
          </h2>

          <p className="leading-relaxed text-(--text-secondary)">
            I’m a frontend developer passionate about crafting clean,
            responsive, and user-friendly interfaces. I enjoy building modern
            applications using React, Next.js, Typescript and Tailwind CSS while
            constantly improving my skills.
          </p>

          {/* Social Icons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
            className="mt-6 flex justify-center gap-8 md:justify-start"
          >
            {IconList.map((icon) => (
              <motion.a
                key={icon.href}
                href={icon.href}
                target="_blank"
                aria-label={icon.ariaLabel}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="rounded-full bg-(--text-secondary)/20 p-2 transition"
              >
                {icon.icons}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
