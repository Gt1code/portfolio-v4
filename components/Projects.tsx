// "use client";

// import ProjectCard from "@/components/ProjectCard";
// import dynamic from "next/dynamic";
import ProjectCardsMotion from "./motion/ProjectCardsMotion";

// const MotionDiv = dynamic(
//   () => import("framer-motion").then((mod) => mod.motion.div),
//   { ssr: false },
// );

export default function Projects() {
  return (
    <section
      id="projects"
      className="dark:bg-bg mx-auto flex items-center justify-center px-12 py-20"
    >
      <div className="flex w-full max-w-6xl flex-col items-center justify-center">
        <h2 className="mb-8 text-3xl font-bold text-(--text-primary)">
          Projects
        </h2>

        <ProjectCardsMotion />
      </div>
    </section>
  );
}
