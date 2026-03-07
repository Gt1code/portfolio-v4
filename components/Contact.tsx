import EmailForm from "@/components/EmailForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-6 flex w-full flex-col items-center justify-center px-8 py-20 text-(--text-primary) md:min-h-screen dark:text-(--text-primary)"
    >
      <div className="flex w-full max-w-5xl flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-12">
        <section className="grow">
          <p className="mb-2 text-center text-(--text-secondary)">
            Let&apos;s work together
          </p>
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
        </section>

        <section className="grow">
          <h2 className="my-8 text-center text-xl font-semibold">
            Send Me A Message
          </h2>

          <EmailForm />
        </section>
      </div>
    </section>
  );
}
