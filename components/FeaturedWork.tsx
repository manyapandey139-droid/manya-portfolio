import { featuredWork } from "@/lib/featured-work";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import FeaturedProjectCard from "./FeaturedProjectCard";

/**
 * Hand-picked client & portfolio work.
 * Add projects in lib/featured-work.ts — this component needs no changes.
 */
export default function FeaturedWork() {
  if (featuredWork.length === 0) return null;

  const highlightIndex = featuredWork.findIndex((p) => p.highlight);
  const heroIndex = highlightIndex === -1 ? 0 : highlightIndex;

  const hero = featuredWork[heroIndex];
  const rest = featuredWork.filter((_, i) => i !== heroIndex);

  return (
    <section
      id="work"
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32"
    >
      <div
        aria-hidden="true"
        className="aura -left-28 top-32 h-80 w-80 bg-lavender/30"
      />

      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected projects."
          description="A closer look at the work I've built — client websites and projects I'm proud to put my name on."
        />

        <div className="space-y-6">
          <Reveal>
            <FeaturedProjectCard project={hero} large />
          </Reveal>

          {rest.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {rest.map((project, i) => (
                <Reveal key={project.id} delay={i * 0.08} className="h-full">
                  <FeaturedProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
