export default function Navbar() {
  return (
    <nav className="border-default sticky top-0 z-50 border-b bg-[rgba(218,237,232,0.13)] shadow-white/20 backdrop-blur-[6.4px]">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <a href="#">
          <h1 className="text-lg font-bold text-(--text-primary)">
            Godstime.dev
          </h1>
        </a>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="#about"
            className="text-(--text-primary) transition hover:opacity-60"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-(--text-primary) transition hover:opacity-60"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-(--text-primary) transition hover:opacity-60"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
