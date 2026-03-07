import ProjectCardsMotion from "./motion/ProjectCardsMotion";

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
