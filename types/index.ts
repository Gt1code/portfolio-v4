export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  imageUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
