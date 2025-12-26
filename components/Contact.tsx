export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-6 flex w-full flex-col items-center justify-center px-4 py-20 text-(--text-primary) md:min-h-screen dark:text-(--text-primary)"
    >
      <div className="w-full max-w-2xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-(--text-primary)">
          Contact Me
        </h2>

        <div className="border-default mt-7 flex shrink items-center justify-around gap-8 rounded-3xl border p-4 shadow-md">
          <a
            className="relative flex items-center gap-1 transition-colors duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            href="mailto:sundaygodstimegt1@gmail.com"
            target="_blank"
          >
            <span className="text-[0.9rem]">Sundaygodstimegt1@gmail.com</span>
          </a>
        </div>

        <div className="border-default mt-4 flex shrink items-center justify-around gap-8 rounded-3xl border p-4 shadow-md">
          <a
            className="relative flex items-center gap-1 transition-colors duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            href="https://www.linkedin.com/in/godstime-sunday/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-[0.9rem]">Linkedin</span>
          </a>
        </div>
      </div>
    </section>
  );
}
