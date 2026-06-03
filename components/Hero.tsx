import Image from "next/image";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const socials = [
  { icon: Github, href: "https://github.com/godstime-sunday", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/godstime-sunday",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://x.com/godstime_sunday",
    label: "X / Twitter",
  },
  { icon: Mail, href: "mailto:sundaygodstimegt1@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section className="hero-root">
      <Navbar />

      {/* Ambient glow — blue tint on light, amber on dark */}
      <span className="hero-glow" aria-hidden="true" />

      <div className="hero-grid">
        {/* Left: copy */}
        <div className="hero-copy">
          <p className="hero-eyebrow">Frontend Developer</p>

          <h1 className="hero-heading">
            Hi, I&apos;m <em className="hero-heading-em">Godstime</em>
            <br />
            Sunday
          </h1>

          <p className="hero-sub">
            Building clean, modern, and scalable web applications with a focus
            on performance and great user experience.
          </p>

          <div className="hero-cta-row">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={15} strokeWidth={2.2} />
            </a>
            <a href="/resume.pdf" download className="btn-secondary">
              Download CV <Download size={15} strokeWidth={2.2} />
            </a>
          </div>

          <ul className="hero-socials" role="list">
            {socials.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hero-social-icon"
                >
                  <Icon size={20} strokeWidth={1.8} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: photo */}
        <div className="hero-photo-wrapper">
          <div className="hero-photo-frame">
            <Image
              src="/profile-pic.webp"
              alt="Godstime Sunday — Frontend Developer"
              fill
              priority
              className="hero-photo-img"
              sizes="(max-width: 768px) 260px, 340px"
            />
          </div>
          <span className="hero-corner hero-corner-tl" aria-hidden="true" />
          <span className="hero-corner hero-corner-br" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
