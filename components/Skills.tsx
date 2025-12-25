const skills = ["React", "Next.js", "Typescript", "Tailwind CSS", "Git"];

export default function Skills() {
  return (
    <section className="bg-surface py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-(--text-primary)">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 border border-default rounded-md text-sm text-(--text-primary) hover:bg-(--primary)] hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
