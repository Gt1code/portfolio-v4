"use client";

import dynamic from "next/dynamic";
import ProjectCard from "../ProjectCard";
import { motion, Transition } from "framer-motion";
import { Variants } from "framer-motion";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.45,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

export default function ProjectCardsMotion() {
  return (
    <MotionDiv
      className="grid justify-center justify-items-center gap-8 md:grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={itemVariants}>
        <ProjectCard
          imageUrl="/home.webp"
          alt="Note-taking App Screenshot"
          title="Note-taking App"
          description="A lightweight note-taking application that allows users to create, delete, edit, and organize notes with a clean and intuitive interface."
          tech={["React.js", "CSS"]}
          liveUrl="https://notepad-v1.onrender.com"
          githubUrl="https://github.com/Gt1code/notepad"
          labels={[
            "View Live Note-taking App",
            "View Code for Note-taking App",
          ]}
        />
      </motion.div>

      <MotionDiv variants={itemVariants}>
        <ProjectCard
          imageUrl="/brand-d-shot.webp"
          alt="landing page screenshot"
          title="Corporate BrandUp Landing Page"
          description="A modern landing page for a corporate branding agency, showcasing their services, and client testimonials."
          tech={["React.js", "TailwindCSS", "framer-motion"]}
          liveUrl="https://thecorporatebrandup.netlify.app/"
          githubUrl="https://github.com/Gt1code/brandup"
          labels={[
            "View Live Corporate BrandUp Landing Page",
            "View Code for Corporate BrandUp Landing Page",
          ]}
        />
      </MotionDiv>
    </MotionDiv>
  );
}
