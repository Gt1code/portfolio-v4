import Link from "next/link";
import { FolderOpen, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-(--container-max) scroll-mt-10 px-(--container-px) py-(--section-gap)"
    >
      <SectionHeading
        icon={<FolderOpen size={20} />}
        title="Featured Projects"
        action={
          projects.length > 3 && (
            <Link
              href="/projects"
              className="text-accent inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-2.5"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          )
        }
      />
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
