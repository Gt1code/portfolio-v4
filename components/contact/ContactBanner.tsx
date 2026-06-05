import { Mail } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactBanner() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-(--container-max) px-(--container-px) pb-(--section-gap)"
    >
      <div className="border-border dark:border-border bg-bg-secondary dark:bg-bg-card flex flex-col items-center gap-5 rounded-2xl border p-6 sm:flex-row sm:gap-6">
        <div className="bg-accent-light dark:bg-accent-muted flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
          <Mail size={22} className="text-accent" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-text-primary dark:text-text-primary text-lg font-bold">
            Let&apos;s work together
          </h2>
          <p className="text-text-secondary dark:text-text-secondary mt-0.5 text-sm">
            I&apos;m currently available for freelance work or full-time
            opportunities.
          </p>
        </div>
        <Button
          href="mailto:sundaygodstimegt1@gmail.com"
          variant="primary"
          className="sm:shrink-0"
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
