export default function Contact() {
  return (
    <section
      id="contact"
      className="relative text-(--text-primary) dark:text-(--text-primary) mt-6 flex w-full flex-col items-center justify-center  px-4 py-6  md:min-h-screen md:w-full "
    >
      <h2 className="text-3xl font-bold mb-4 text-(--text-primary)">
        Contact Me
      </h2>

      <div className="mt-7 flex shrink items-center justify-around gap-8 rounded-3xl border border-black p-4 shadow-md dark:border-white">
        <a
          className="relative flex items-center gap-1 transition-colors duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full "
          href="mailto:sundaygodstimegt1@gmail.com"
          target="_blank"
        >
          {/* <MdMailOutline className="size-7" /> */}
          <span className="hidden text-[0.9rem] sm:block">
            Sundaygodstimegt1@gmail.com
          </span>
          <span className="text-[0.9rem] sm:hidden">Email me</span>
        </a>
      </div>

      <div className="mt-7 flex shrink items-center justify-around gap-8 rounded-3xl border border-black p-4 shadow-md dark:border-white">
        <a
          className="relative flex items-center gap-1 transition-colors duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300  hover:after:w-full "
          href="https://www.linkedin.com/in/godstime-sunday/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <CiLinkedin className="size-7 cursor-pointer" /> */}
          <span className="text-[0.9rem]">Linkedin</span>
        </a>
      </div>
    </section>
  );
}
