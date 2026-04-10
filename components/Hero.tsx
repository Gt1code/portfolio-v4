import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-(--bg) px-6 text-center">
      <Navbar />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--amber)/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-(--amber)/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <p className="mb-5 font-medium tracking-[0.25em] text-(--amber) uppercase">
          Frontend Developer
        </p>

        <h1 className="mb-6 font-serif text-5xl leading-tight font-light tracking-tight text-(--text-primary) md:text-7xl">
          Hi, I&apos;m{" "}
          <em className="text-(--amber-light)] italic">Godstime</em>
          <br />
          Sunday
        </h1>

        <div className="from-(--amber)] mb-8 h-px w-10 bg-linear-to-r to-transparent" />

        <p className="mb-10 max-w-md text-sm leading-relaxed font-light text-(--text-secondary)">
          Building clean, modern, and scalable web applications with a focus on
          performance and great user experience.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#projects"
            className="from-primary to-primary rounded-lg bg-linear-to-r px-6 py-3 text-sm font-medium tracking-wide text-(--bg) transition-all duration-200 hover:-translate-y-0.5 hover:shadow-(--amber-shadow) active:translate-y-0"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-(--contact-border) bg-(--card-bg) px-6 py-3 text-sm font-medium text-(--text-primary) transition-all duration-200 hover:-translate-y-0.5 hover:border-2 hover:border-(--border-accent) active:translate-y-0"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
