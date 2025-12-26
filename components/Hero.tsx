export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-61px)] text-xl flex flex-col justify-center items-center text-center px-4 bg-[url('/bg-header-mobile.png')] bg-no-repeat bg-cover">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-(--text-primary)">
        Hi, I’m Godstime Sunday 👋
      </h1>

      <p className="max-w-xl text-(--text-secondary) mb-6">
        Frontend Developer building clean, modern, and scalable web
        applications.
      </p>

      <div className="flex gap-4">
        <a href="#projects" className="btn-primary">
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-white/40 px-6 py-3 rounded hover:bg-white/10 transition text-(--text-primary)"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
