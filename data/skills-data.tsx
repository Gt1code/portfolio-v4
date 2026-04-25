import type { SkillGroup } from "@/types/allTypes";

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <path
      style={{ fill: "var(--icon-bg, #1a1a2e)" }}
      d="M13.5 12.5h2v1.5a2.5 2.5 0 01-5 0v-4a2.5 2.5 0 015 0v.5h-2v-.5a.5.5 0 00-1 0v4a.5.5 0 001 0V14h2"
    />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <circle cx="12" cy="12" r="2.5" />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      transform="rotate(-60 12 12)"
    />
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M8 16.5V8l8 9.5" />
    <path d="M14.5 8v5" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.35 10.8 14.47 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.65 7.2 14.53 6 12 6zm-5 6C4.33 12 2.67 13.33 2 16c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.35 16.8 9.47 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.65 13.2 9.53 12 7 12z" />
  </svg>
);

const FramerIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M4 4h16v8H4zm0 8h8l8 8H4z" />
    <path d="M4 20h8v-8" />
  </svg>
);

const RestIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M2 12h4M18 12h4M12 2v4M12 18v4" />
    <path d="M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  </svg>
);

const PrismaIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M4.5 20.5L3 3l10 5.5L19 2 15.5 21.5l-5.5-5.5z" />
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M11.9 2L3 14.5h8.5v7.5L21 9.5h-8.5z" />
  </svg>
);

const ClerkIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22.2 11.2l-9.4-9.4a1.1 1.1 0 00-1.6 0L9.3 3.7l2 2a1.3 1.3 0 011.6 1.6l1.9 1.9a1.3 1.3 0 011.1 2.2 1.3 1.3 0 01-1.3.3l-1.8-1.8v4.7a1.3 1.3 0 01.3 2.4 1.3 1.3 0 01-1.6-1.6V8.8a1.3 1.3 0 01-.7-2.1L8.9 4.8 1.8 11.9a1.1 1.1 0 000 1.6l9.4 9.4a1.1 1.1 0 001.6 0l9.4-9.4a1.1 1.1 0 000-1.3z" />
  </svg>
);

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Runtime",
    skills: [
      { name: "TypeScript", cls: "skill--ts", icon: <TypeScriptIcon /> },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      { name: "React", cls: "skill--react", icon: <ReactIcon /> },
      { name: "Next.js", cls: "skill--next", icon: <NextIcon /> },
      { name: "Tailwind CSS", cls: "skill--tailwind", icon: <TailwindIcon /> },
      { name: "Framer Motion", cls: "skill--framer", icon: <FramerIcon /> },
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      { name: "REST API", cls: "skill--rest", icon: <RestIcon /> },
      { name: "Prisma ORM", cls: "skill--prisma", icon: <PrismaIcon /> },
      { name: "Supabase", cls: "skill--supabase", icon: <SupabaseIcon /> },
    ],
  },
  {
    label: "Auth & Tooling",
    skills: [
      { name: "Clerk Auth", cls: "skill--clerk", icon: <ClerkIcon /> },
      { name: "Git", cls: "skill--git", icon: <GitIcon /> },
    ],
  },
];
