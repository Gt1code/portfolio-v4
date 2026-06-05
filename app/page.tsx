import Skills from "@/components/skills/index";
import Hero from "@/components/home/Hero";
import AboutCard from "@/components/about/AboutCard";
import SkillsCard from "@/components/skill/SkillsCard";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactBanner from "@/components/contact/ContactBanner";

export default function Home() {
  return (
    <>
      <Hero />

      <section
        id="about"
        className="mx-auto mt-10 max-w-(--container-max) scroll-mt-20 px-(--container-px) pb-(--section-gap)"
      >
        <div className="border-border dark:border-border grid grid-cols-1 gap-px overflow-hidden rounded-sm border md:grid-cols-2">
          <div className="bg-bg dark:bg-bg p-6 md:p-8">
            <AboutCard />
          </div>
          <div className="border-border bg-bg dark:border-border dark:bg-bg border-t p-6 md:border-t-0 md:border-l md:p-8">
            <SkillsCard />
          </div>
        </div>
      </section>

      <Skills />

      <ProjectsSection />

      <ContactBanner />
    </>
  );
}
