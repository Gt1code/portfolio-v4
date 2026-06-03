"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type ProjectCardProps } from "@/types/allTypes";

export default function ProjectCard({
  imageUrl,
  alt,
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <section className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-(--border-subtle) bg-(--card-bg) shadow-sm transition-all duration-300 hover:border-(--border-accent) hover:shadow-(--amber-shadow)">
      {/* Top amber hairline on hover */}
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-(--amber) to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50" />

      {/* Image */}
      <div className="relative h-52 w-full shrink-0 overflow-hidden">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-(--card-bg) via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex grow flex-col justify-between p-5">
        <div>
          <h3 className="mb-2 font-serif text-xl font-light text-(--text-primary)">
            {title}
          </h3>

          <p className="line-clamp-3 text-sm leading-relaxed font-light text-(--text-secondary)">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {/* bg-(--amber-bg) */}
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-md border border-(--tech-border) bg-gray-200/10 px-2 py-0.5 text-[0.65rem] tracking-wide text-(--amber) uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-2 pt-2">
          <Link
            aria-label="View live project"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-(--border-subtle) px-3 py-1.75 text-xs font-medium text-(--accent-color) transition-all duration-200 hover:border-(--border-accent) hover:text-(--amber)"
          >
            Live Demo <ExternalLink size={14} strokeWidth={2} />
          </Link>

          <Link
            aria-label="View source code"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.75 text-xs font-medium text-(--text-secondary) transition-all duration-200 hover:border-(--border-accent) hover:text-(--amber)"
          >
            <Github size={18} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
