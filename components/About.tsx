"use client";

import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FileTextIcon } from "lucide-react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

type IconListProps = {
  icons: React.ReactNode;
  ariaLabel: string;
  href: string;
};

const IconList: IconListProps[] = [
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

export default function About() {
  return (
    <MotionDiv
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative flex min-h-screen scroll-mt-12 items-center justify-center overflow-hidden bg-(--bg) px-6 py-24"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 -left-24 h-80 w-80 -translate-y-1/2 rounded-full bg-(--amber)/5 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row md:items-start md:gap-6">
        {/* LEFT — Image + desktop icons */}
        <MotionDiv
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 md:flex-3"
        >
          {/* Profile image */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-(--amber)/30 to-transparent blur-sm" />
            <Image
              loading="eager"
              src="/profile-pic.webp"
              alt="profile picture"
              width={300}
              height={250}
              className="relative mx-auto w-[15em] rounded-3xl sm:w-[18em]"
            />
          </div>

          {/* Desktop social icons — horizontal below image */}
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
            className="hidden items-center gap-3 md:flex"
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
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  transition: { duration: 0.05 },
                }}
                className="border-(--border-subtle)] flex h-9 w-9 items-center justify-center rounded-lg border bg-(--card-bg) text-(--text-secondary) transition-colors duration-200 hover:border-(--border-accent) hover:text-(--amber)"
              >
                {icon.icons}
              </motion.a>
            ))}
          </MotionDiv>
        </MotionDiv>

        {/* RIGHT — Text content */}
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col text-center md:flex-3 md:text-left"
        >
          <p className="mb-4 text-[0.7rem] font-medium tracking-[0.25em] text-(--amber) uppercase">
            Who I am
          </p>

          <h2 className="mb-6 font-serif text-5xl leading-tight font-light tracking-tight text-(--text-primary) lg:text-6xl">
            About <em className="text-(--amber-light) italic">me</em>
          </h2>

          <div className="mb-6 h-px w-10 self-center bg-linear-to-r from-(--amber) to-transparent md:self-start" />

          <p className="mb-4 text-sm leading-relaxed font-light text-(--text-secondary)">
            I am a Frontend Developer with hands-on experience building
            responsive and user-focused web applications using React, Next.js,
            and Tailwind CSS. Skilled in transforming design concepts into
            clean, scalable, and high-performance interfaces. Passionate about
            writing maintainable code, improving user experience, and
            continuously learning modern frontend technologies.
          </p>

          {/* Mobile social icons */}
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
            className="mt-8 flex items-center justify-center gap-3 md:hidden"
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
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  transition: { duration: 0.05 },
                }}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--border-subtle) bg-(--card-bg) text-(--text-secondary) transition-colors duration-200 hover:border-(--border-accent) hover:text-(--amber)"
              >
                {icon.icons}
              </motion.a>
            ))}
          </MotionDiv>

          {/* Resume button */}
          <div className="mt-8 flex w-full items-center justify-center md:justify-start">
            <a
              role="button"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 rounded-lg border border-(--border-subtle) bg-(--card-bg) px-6 py-3 text-sm font-light text-(--text-primary) transition-all duration-200 hover:-translate-y-0.5 hover:border-(--border-accent) hover:shadow-(--amber-shadow) active:translate-y-0"
            >
              <FileTextIcon size={16} className="text-(--amber)" />
              Resume
            </a>
          </div>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
}
