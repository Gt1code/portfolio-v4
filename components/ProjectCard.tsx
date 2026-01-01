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
      icon: <ExternalLink size={16} />,
      label: labels[0],
    },
    {
      href: githubUrl,
      name: "Code",
      icon: <Github size={16} />,
      label: labels[1],
    },
  ];

  return (
    <section className="group border-border bg-surface flex min-h-120 max-w-90 min-w-56 flex-col rounded-2xl border shadow-sm transition hover:shadow-md">
      {/* Image Section  */}
      <div className="relative h-62.5 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Content Section  */}
      <div className="flex grow flex-col justify-between p-4">
        <div>
          <h3 className="text-xl font-semibold text-(--text-primary)">
            {title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm text-(--text-secondary)">
            {description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-md bg-(--text-secondary)/20 px-2 py-1 text-xs text-(--text-secondary)"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 flex grow items-end gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              aria-label={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary inline-flex items-center gap-1 text-xl font-medium hover:underline"
            >
              {link.name} {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
