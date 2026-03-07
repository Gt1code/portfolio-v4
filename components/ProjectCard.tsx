"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  labels: [string, string];
};

type LinkType = {
  href: string;
  name: string;
  icon: React.ReactNode;
  label: string;
};

export default function ProjectCard({
  imageUrl,
  alt,
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
  labels,
}: ProjectCardProps) {
  const links: Array<LinkType> = [
    {
      href: liveUrl,
      name: "Live",
      icon: <ExternalLink size={14} />,
      label: labels[0],
    },
    {
      href: githubUrl,
      name: "Code",
      icon: <Github size={14} />,
      label: labels[1],
    },
  ];

  return (
    <section className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-(--border-subtle) bg-(--card-bg) shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--border-accent) hover:shadow-(--amber-shadow)">
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
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-md border border-(--amber-border) bg-(--amber-bg) px-2 py-0.5 text-[0.65rem] font-medium tracking-wide text-(--amber) uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 border-t border-(--border-subtle) pt-4">
          {links.map((link) => (
            <Link
              key={link.name}
              aria-label={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-(--border-subtle) bg-(--input-bg) px-3 py-1.5 text-xs font-medium text-(--text-secondary) transition-all duration-200 hover:border-(--border-accent) hover:text-(--amber)"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
