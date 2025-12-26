import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type IconListProps = {
  icons: React.ReactNode;
  ariaLabel: string;
  href: string;
};

const IconList: IconListProps[] = [
  {
    icons: <FaLinkedinIn size={22} />,
    ariaLabel: "Open LinkedIn Profile in new tab",
    href: "https://www.linkedin.com/in/godstime-sunday/",
  },
  {
    icons: <FaGithub size={22} />,
    ariaLabel: "Open GitHub in new tab",
    href: "https://github.com/Gt1code",
  },
  {
    icons: <FaXTwitter size={22} />,
    ariaLabel: "Open Twitter in new tab",
    href: "https://x.com/1Gtee",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="flex p-6 justify-center items-center min-h-[calc(100vh-44px)] scroll-mt-12 py-20"
    >
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 md:gap-2 items-center">
        <div className="md:flex-1">
          <Image
            loading="eager"
            src="/profile-pic.png"
            alt="profile picture"
            width={300}
            height={250}
            className="rounded-3xl w-[15em] sm:w-[18em] md:w-auto mx-auto md:mx-0"
          />
        </div>
        <div className="md:flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-(--text-primary)">
            About Me
          </h2>

          <p className="text-(--text-secondary) leading-relaxed">
            I’m a frontend developer passionate about crafting clean,
            responsive, and user-friendly interfaces. I enjoy building modern
            applications using React, Next.js, Typescript and Tailwind CSS while
            constantly improving my skills.
          </p>
          <div className="mt-6 flex gap-8 text-center justify-center md:justify-start">
            {IconList.map((icon) => (
              <a
                key={icon.href}
                href={icon.href}
                target="_blank"
                aria-label={icon.ariaLabel}
                className="hover:-translate-y-1 rounded-full p-2 hover:scale-105 bg-(--text-secondary)/20 transition-transform duration-100"
              >
                {icon.icons}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
