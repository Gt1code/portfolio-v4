export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-surface  border-b border-default">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="font-bold text-lg text-(--text-primary)">
          Godstime.dev
        </h1>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="#about"
            className="text-(--text-primary) hover:text-(--primary) transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-(--text-primary) hover:text-(--primary) transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-(--text-primary) hover:text-(--primary) transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
