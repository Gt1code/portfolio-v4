"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills-data";
import { headingVariants } from "./SkillVariants";
import SkillGroup from "./SkillGroup";

export default function Skills() {
  return (
    <>
      <style>{`
        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 14px;
          border-radius: 9px;
          border: 1px solid;
          font-size: 13.5px;
          font-weight: 500;
          cursor: default;
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }
        .skill-pill:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
          box-shadow: 0 6px 20px -4px rgba(0,0,0,0.25);
        }
        .skill--ts       { background: #1a1a2e; color: #3b82f6; border-color: #2d4a7a; }
        .skill--react    { background: #0d1f2d; color: #61dafb; border-color: #1a4a5c; }
        .skill--next     { background: #111111; color: #e5e5e5; border-color: #333333; }
        .skill--tailwind { background: #0d2033; color: #38bdf8; border-color: #1a4060; }
        .skill--framer   { background: #1a0533; color: #bb86fc; border-color: #3d1a6e; }
        .skill--git      { background: #2b1000; color: #f05032; border-color: #5c2200; }
        .skill--rest     { background: #0a2200; color: #4caf50; border-color: #1a4a20; }
        .skill--prisma   { background: #0a1628; color: #5da4d9; border-color: #1a3a58; }
        .skill--clerk    { background: #120a2b; color: #7c5cfc; border-color: #2e1e7a; }
        .skill--supabase { background: #001a12; color: #3ecf8e; border-color: #006644; }

        @media (prefers-color-scheme: light) {
          .skill--ts       { background: #e8f0fd; color: #1a56db; border-color: #93b4f5; }
          .skill--react    { background: #e0f7fc; color: #087ea4; border-color: #80d7ed; }
          .skill--next     { background: #f0f0f0; color: #111111; border-color: #bbbbbb; }
          .skill--tailwind { background: #e0f2fe; color: #0369a1; border-color: #7dd3fc; }
          .skill--framer   { background: #f3e8ff; color: #7c3aed; border-color: #c4b5fd; }
          .skill--git      { background: #fff0ec; color: #bf2600; border-color: #ffb3a0; }
          .skill--rest     { background: #f0fff4; color: #166534; border-color: #86efac; }
          .skill--prisma   { background: #e8f2fa; color: #0d5c8a; border-color: #93c5dd; }
          .skill--clerk    { background: #ede9fe; color: #5b21b6; border-color: #c4b5fd; }
          .skill--supabase { background: #dcfce7; color: #15803d; border-color: #86efac; }
        }
        .group-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          border-left: 2px solid;
          padding-left: 8px;
        }
      `}</style>

      <section className="bg-[url('/bg-header-desktop.webp')] bg-cover bg-no-repeat px-4 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <motion.p
            className="mb-1 font-mono text-[11px] tracking-[0.18em] text-(--text-secondary) uppercase"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            What I work with
          </motion.p>

          <motion.h2
            className="mb-10 text-3xl font-semibold text-(--text-primary)"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.08 }}
          >
            Skills & Technologies
          </motion.h2>

          <div className="flex flex-col gap-8">
            {skillGroups.map((group) => (
              <SkillGroup key={group.label} group={group} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
