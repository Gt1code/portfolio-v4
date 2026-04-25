import { motion } from "framer-motion";
import { pillVariants } from "./SkillVariants";
import type { Skill } from "@/types/allTypes";

type Props = { skill: Skill };

export default function SkillPill({ skill }: Props) {
  return (
    <motion.span variants={pillVariants} className={`skill-pill ${skill.cls}`}>
      {skill.icon}
      {skill.name}
    </motion.span>
  );
}
