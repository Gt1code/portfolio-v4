import Link from "next/link";
import { User, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutCard() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading icon={<User size={18} />} title="About Me" />
      <p className="text-text-secondary dark:text-text-secondary text-sm leading-relaxed md:text-base">
        I am a Frontend Developer with hands-on experience building responsive
        and user-focused web applications using Next.js, and Tailwind CSS.
        Skilled in transforming design concepts into clean, scalable, and
        high-performance interfaces. Passionate about writing maintainable code,
        improving user experience, and continuously learning modern frontend
        technologies.
      </p>
      <Link
        href="#contact"
        className="text-accent inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-2.5"
      >
        Know more about me <ArrowRight size={15} />
      </Link>
    </div>
  );
}
