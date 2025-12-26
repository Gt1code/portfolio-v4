"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
};

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group grid min-h-[80vh] grid-rows-[60%_40%] overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition hover:shadow-md"
    >
      {/* Image Section (60%) */}
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Content Section (40%) */}
      <div className="flex flex-col justify-between p-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>

          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 pb-8 flex gap-6">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              className="inline-flex items-center gap-1 text-xl font-medium text-primary hover:underline"
            >
              Live <ExternalLink size={16} />
            </Link>
          )}

          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className="inline-flex items-center gap-1 text-xl font-medium text-primary hover:underline"
            >
              Code <Github size={16} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
