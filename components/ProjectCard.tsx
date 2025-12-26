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
    // grid min-h-155 lg:min-h-120 grid-rows-[50%_50%]
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group border-border bg-surface flex min-h-120 flex-col justify-between rounded-2xl border shadow-sm transition hover:shadow-md"
    >
      {/* Image Section  */}
      <div className="relative h-full w-full flex-[0.6] overflow-hidden rounded-t-2xl">
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
      <div className="flex flex-[0.4] flex-col justify-between p-4">
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
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              className="text-primary inline-flex items-center gap-1 text-xl font-medium hover:underline"
            >
              Live <ExternalLink size={16} />
            </Link>
          )}

          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className="text-primary inline-flex items-center gap-1 text-xl font-medium hover:underline"
            >
              Code <Github size={16} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
