import { skills } from "@/utils/mapElements";

export default function Skills() {
  return (
    <section className="bg-[url('/bg-header-desktop.webp')] bg-cover bg-no-repeat px-4 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-6 text-center text-3xl font-bold text-(--text-primary)">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
          {skills.map((skill) => (
            <span
              key={skill}
              className="hover:bg-(--primary)] rounded-md border border-(--outline-bg) px-4 py-2 text-sm text-(--text-primary)"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
