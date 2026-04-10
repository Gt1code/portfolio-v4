export type IconListProps = {
  icons: React.ReactNode;
  ariaLabel: string;
  href: string;
};

export type MobileLinkProps = {
  href: string;
  icon: React.ReactNode;
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
  icon: React.ReactNode;
  label: string;
};
