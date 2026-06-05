import SkillPill from "./SkillPill";
import type { SkillGroup, Skill } from "@/data/skills-data";

export default function SkillGroup({ group }: { group: SkillGroup }) {
  return (
    <div>
      <p className="group-label border-(--border-accent) text-(--text-secondary)">
        {group.label}
      </p>
      <div className="flex flex-wrap gap-2.5">
        {group.skills.map((skill: Skill) => (
          <SkillPill key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
