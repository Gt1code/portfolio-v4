import type { SocialLinkProps } from "@/types/allTypes";

export default function SocialItem({
  href,
  icon,
  label,
  ariaLabel,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="flex flex-col items-center gap-1.5 rounded-lg px-3 py-2.5 text-(--text-secondary) transition-all duration-150 outline-none hover:bg-(--amber-bg) hover:text-(--amber) focus:bg-(--amber-bg) focus:text-(--amber)"
    >
      <span className="text-(--amber)">{icon}</span>
      <span className="text-[10px] font-medium tracking-wide">{label}</span>
    </a>
  );
}
