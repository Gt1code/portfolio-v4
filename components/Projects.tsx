// import ProjectCard from "./ProjectCard";

import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-8">
      <h2 className="text-3xl font-bold mb-8 text-(--text-primary)">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <ProjectCard
          imageUrl="/sort.jpg"
          alt="Note-taking App Screenshot"
          title="Note-taking App"
          description="A lightweight note-taking application that allows users to create, delete, edit, and organize notes with a clean and intuitive interface."
          tech={["React.js", "CSS"]}
          liveUrl="https://notepad-v1.onrender.com"
          githubUrl="https://github.com/Gt1code/notepad"
        />
        <ProjectCard
          imageUrl="/brand-d-shot.png"
          alt="landing page screenshot"
          title="Corporate BrandUp Landing Page"
          description="A sleek and modern landing page for BrandUp, a corporate branding agency, showcasing their services, portfolio, and client testimonials."
          tech={["React.js", "TailwindCSS", "framer-motion"]}
          liveUrl="https://thecorporatebrandup.netlify.app/"
          githubUrl="https://github.com/Gt1code/brandup"
        />
      </div>
    </section>
  );
}
