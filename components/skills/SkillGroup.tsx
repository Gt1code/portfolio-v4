import { motion } from "framer-motion";
import { containerVariants } from "./SkillVariants";
import type { SkillGroup as TSkillGroup } from "@/types/allTypes";
import SkillPill from "./SkillPill";

type Props = { group: TSkillGroup };

export default function SkillGroup({ group }: Props) {
  return (
    <div>
      <p className="group-label border-(--border-accent) text-(--text-secondary)">
        {group.label}
      </p>
      <motion.div
        className="flex flex-wrap gap-2.5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {group.skills.map((skill) => (
          <SkillPill key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}
