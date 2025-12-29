import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[url('/bg-header-mobile.webp')] bg-cover bg-no-repeat px-4 text-center text-xl">
      <Navbar />

      <h1 className="mb-4 text-4xl font-bold text-(--text-primary) md:text-5xl">
        Hi, I&apos;m Godstime Sunday 👋
      </h1>

      <p className="mb-6 max-w-xl text-(--text-secondary)">
        Frontend Developer building clean, modern, and scalable web
        applications.
      </p>

      <div className="flex gap-4">
        <a href="#projects" className="btn-primary px-4 py-2 sm:px-6 sm:py-3">
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded border border-(--outline-border) px-4 py-2 text-(--text-primary) transition hover:bg-(--outline-bg) active:scale-95 sm:px-6 sm:py-3"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
