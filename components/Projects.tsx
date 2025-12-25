import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-(--text-primary)">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <ProjectCard title="Notepad App" />
        <ProjectCard title="Portfolio Website" />
        <ProjectCard title="Landing Page" />
      </div>
    </section>
  );
}
