import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import { socialLinks } from "@/utils/mapElements";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex w-full scroll-mt-20 items-center justify-center px-5 pt-16 pb-20 md:h-[calc(100vh-72px)] md:px-8 md:pt-20 md:pb-24"
    >
      {/* container */}
      <div className="flex w-full max-w-271 flex-col items-center gap-10 md:flex-row-reverse md:gap-16">
        {/* Image*/}
        <div className="bg-bg-card dark:bg-bg-card relative aspect-4/5 w-75 shrink-0 overflow-hidden rounded-lg md:w-85 lg:w-95">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <Image
              width={380}
              height={455}
              priority
              src="/profile-pic.webp"
              alt="Godstime Sunday"
              className="h-auto w-full object-cover"
              style={{ aspectRatio: "4/5", objectPosition: "top center" }}
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute right-0 bottom-0 left-0 h-28 bg-linear-to-t from-[#203959]/90 to-transparent" />

            <div className="absolute right-0 bottom-0 left-0 px-6 pb-5">
              <div className="flex w-full flex-col items-center justify-center">
                <p className="text-lg font-bold text-[#A6BCB5]">
                  Godstime Sunday
                </p>
                <p className="text-sm font-medium text-white/70">
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* body */}
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <span className="text-accent text-sm font-semibold tracking-wide">
            Frontend Developer
          </span>

          <h1 className="text-text-primary dark:text-text-primary text-4xl leading-tight font-semibold md:text-5xl lg:font-black">
            I build clean, fast &amp; responsive web apps.
          </h1>

          <p className="text-text-secondary dark:text-text-secondary max-w-md text-base leading-relaxed">
            I&apos;m a frontend developer who loves crafting elegant user
            interfaces with clean code and great user experiences.
          </p>

          <div className="mt-1 flex flex-wrap gap-3">
            <Button href="#projects" variant="primary">
              View My Work <ArrowRight size={16} />
            </Button>
            <Button
              href="/pdfs/Godstime-Sunday_frontend-developer.pdf"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <Download size={15} />
            </Button>
          </div>

          <div className="mt-1 flex items-center gap-5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-text-secondary hover:text-accent transition-colors duration-150"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
