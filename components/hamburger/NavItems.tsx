import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { MobileLinkProps } from "@/types/allTypes";

export default function NavItem({ href, icon, label }: MobileLinkProps) {
  return (
    <DropdownMenuItem asChild>
      <a
        href={href}
        className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-5 text-xl font-medium text-(--text-secondary) transition-all duration-150 outline-none hover:bg-(--amber-bg) hover:text-(--amber) focus:bg-(--amber-bg) focus:text-(--amber)"
      >
        <span className="text-(--amber)">{icon}</span>
        {label}
      </a>
    </DropdownMenuItem>
  );
}
