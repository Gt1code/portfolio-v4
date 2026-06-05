import type { Skill } from "@/data/skills-data";

export default function SkillPill({ skill }: { skill: Skill }) {
  return (
    <span className={`skill-pill ${skill.cls}`}>
      {skill.icon}
      {skill.name}
    </span>
  );
}
