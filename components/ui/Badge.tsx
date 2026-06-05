import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="border-border bg-bg text-text-secondary dark:border-border dark:bg-bg-secondary dark:text-text-secondary inline-flex items-center rounded-md border px-3 py-1 text-sm font-medium">
      {children}
    </span>
  );
}
