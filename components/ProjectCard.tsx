export default function ProjectCard({ title }: { title: string }) {
  return (
    <div className="bg-surface border border-default rounded-lg p-5 hover:shadow-lg transition">
      <h3 className="font-semibold mb-2 text-(--text-primary)">{title}</h3>

      <p className="text-sm text-(--text-secondary) mb-4">
        A short description of the project goes here.
      </p>

      <div className="flex gap-4 text-sm">
        <a className="hover:text-(--primary) cursor-pointer">Live</a>
        <a className="hover:text-(--primary) cursor-pointer">GitHub</a>
      </div>
    </div>
  );
}
