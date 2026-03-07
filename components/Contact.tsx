"use client";
import EmailForm from "@/components/EmailForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-(--bg) px-6 py-24 text-(--text-primary)"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-(--amber)/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-(--amber)/5 blur-3xl" />

      <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:items-start md:gap-16">
        {/* LEFT — Info */}
        <div>
          <p className="text-[0.7rem tracking-[0.25em mb-4 font-medium text-(--amber) uppercase">
            Available for work
          </p>

          <h2 className="mb-6 font-serif text-5xl leading-tight font-light tracking-tight text-(--text-primary) lg:text-6xl">
            Let&apos;s build
            <br />
            something <em className="text-(--amber-light) italic">great</em>
          </h2>

          <div className="mb-8 h-px w-10 bg-linear-to-r from-(--amber) to-transparent" />

          <p className="mb-8 max-w-xs text-sm leading-relaxed font-light text-(--text-secondary)">
            Have a project in mind or just want to connect? I&apos;m open to new
            opportunities, collaborations, and conversations.
          </p>

          {/* Email card */}
          <a
            href="mailto:sundaygodstimegt1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mb-3 flex items-center gap-4 overflow-hidden rounded-xl border border-(--border-subtle) bg-(--card-bg) px-5 py-4 transition-all duration-300 hover:translate-x-1 hover:border-(--border-accent)"
          >
            <div className="absolute inset-0 bg-linear-to-r from-(--amber-bg-hover) to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-(--amber-border) bg-(--amber-bg)">
              <svg
                className="h-4 w-4 stroke-(--amber)"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="relative flex flex-col gap-0.5">
              <span className="text-[0.65rem tracking-[0.15em font-medium text-(--text-muted) uppercase">
                Email
              </span>
              <span className="text-sm text-(--text-primary)">
                sundaygodstimegt1@gmail.com
              </span>
            </div>
          </a>

          {/* LinkedIn card */}
          <a
            href="https://www.linkedin.com/in/godstime-sunday/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-(--border-subtle) bg-(--card-bg) px-5 py-4 transition-all duration-300 hover:translate-x-1 hover:border-(--border-accent)"
          >
            <div className="absolute inset-0 bg-linear-to-r from-(--amber-bg-hover) to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-(--amber-border) bg-(--amber-bg)">
              <svg
                className="h-4 w-4 stroke-(--amber)"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div className="relative flex flex-col gap-0.5">
              <span className="text-[0.65rem tracking-[0.15em font-medium text-(--text-muted) uppercase">
                LinkedIn
              </span>
              <span className="text-sm text-(--text-primary)">
                godstime-sunday
              </span>
            </div>
          </a>
        </div>

        {/* RIGHT — Form panel */}
        <div className="relative overflow-hidden rounded-2xl border border-(--border-subtle) bg-(--card-bg) p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-(--amber) before:to-transparent before:opacity-50">
          <h3 className="mb-1 font-serif text-2xl font-light text-(--text-primary)">
            Send a message
          </h3>
          <p className="mb-7 text-xs font-light text-(--text-muted)">
            I typically respond within 24 hours.
          </p>

          <EmailForm />
        </div>
      </div>
    </section>
  );
}
