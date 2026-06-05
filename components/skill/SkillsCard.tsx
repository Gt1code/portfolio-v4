import { Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { skills } from "@/lib/skills";

export default function SkillsCard() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeading icon={<Code2 size={18} />} title="Skills" />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  );
}
