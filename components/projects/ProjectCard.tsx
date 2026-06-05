import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Badge from "@/components/ui/Badge";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border-border dark:border-border bg-bg dark:bg-bg hover:border-accent-muted dark:hover:border-accent-muted flex flex-col gap-5 rounded-sm border p-4 transition-colors duration-200 md:max-h-48 md:flex-row">
      <div className="bg-bg-card dark:bg-bg-card border-border h-36 w-full shrink-0 overflow-hidden rounded-sm border md:h-auto md:w-54 dark:border-none">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={176}
          height={120}
          className="h-full w-full overflow-y-hidden object-cover object-top"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2.5">
        <h3 className="text-text-primary dark:text-text-primary text-base font-bold">
          {project.title}
        </h3>
        <p className="text-text-secondary dark:text-text-secondary text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-4 md:pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent inline-flex items-center gap-1 text-sm font-semibold hover:underline"
          >
            Live Demo <ArrowUpRight size={14} />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repo`}
            className="text-text-secondary hover:text-accent transition-colors duration-150"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
