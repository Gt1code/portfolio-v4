export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-61px)] flex-col items-center justify-center bg-[url('/bg-header-mobile.png')] bg-cover bg-no-repeat px-4 text-center text-xl">
      <h1 className="mb-4 text-4xl font-bold text-(--text-primary) md:text-5xl">
        Hi, I&apos;m Godstime Sunday 👋
      </h1>

      <p className="mb-6 max-w-xl text-(--text-secondary)">
        Frontend Developer building clean, modern, and scalable web
        applications.
      </p>

      <div className="flex gap-4">
        <a href="#projects" className="btn-primary">
          View Projects
        </a>

        <a
          href="#contact"
          className="hover:bg-border rounded border border-black px-6 py-3 text-(--text-primary) transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
