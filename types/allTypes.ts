import type { ReactNode } from "react";

export type Skill = {
  name: string;
  cls: string;
  icon: ReactNode;
};

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export type IconListProps = {
  icons: ReactNode;
  ariaLabel: string;
  href: string;
};

export type MobileLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
};

export type ProjectCardProps = {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  labels: [string, string];
};

export type LinkType = {
  href: string;
  name: string;
  icon: ReactNode;
  label: string;
};

export type SocialLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
  ariaLabel: string;
};
