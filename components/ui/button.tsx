import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  rel?: string;
  target?: string;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  download?: boolean;
}

export default function Button({
  target,
  rel,
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  download,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-semibold transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] active:scale-[0.98]",
    outline:
      "border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] dark:border-[var(--color-border)] dark:text-[var(--color-text-primary)] active:scale-[0.98]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return download ? (
      <a
        href={href}
        target={target}
        role="button"
        rel={rel}
        download
        className={classes}
      >
        {children}
      </a>
    ) : (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a onClick={onClick} className={classes}>
      {children}
    </a>
  );
}
