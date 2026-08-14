import { skills } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Tag from "./ui/Tag";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with."
          description="The tools and skills I actually use day to day — across development, content and design."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal
              key={category}
              delay={i * 0.07}
              className="h-full rounded-3xl border border-border bg-surface p-7 shadow-soft transition-colors duration-300 hover:border-border-strong md:p-8"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                {category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <Tag key={skill} className="px-3.5 py-1.5 text-[13px]">
                    {skill}
                  </Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
