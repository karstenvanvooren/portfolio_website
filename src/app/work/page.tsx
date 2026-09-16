import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import SplitSection from "@/components/SplitSection";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-20 sm:px-10">
      <SplitSection label="Work">
        <Reveal>
          <p className="max-w-xl text-lg text-muted">
            {/* Replace with your real framing line */}
            A collection of product design and development work, from early
            concepts to shipped apps.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </SplitSection>
    </div>
  );
}
