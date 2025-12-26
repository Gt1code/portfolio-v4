const skills = ["React", "Next.js", "Typescript", "Tailwind CSS", "Git"];

export default function Skills() {
  return (
    <section className="bg-[url('/bg-header-desktop.png')] bg-cover bg-no-repeat py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-6 text-3xl font-bold text-(--text-primary)">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border-default hover:bg-(--primary)] rounded-md border px-4 py-2 text-sm text-(--text-primary)"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
