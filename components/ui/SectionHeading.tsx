import { ReactNode } from "react";

interface SectionHeadingProps {
  icon: ReactNode;
  title: string;
  action?: ReactNode;
}

export default function SectionHeading({
  icon,
  title,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-accent">{icon}</span>
        <h2 className="text-text-primary text-xl font-bold">{title}</h2>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
