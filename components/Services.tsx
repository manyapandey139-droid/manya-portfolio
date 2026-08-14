import { services } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ServiceCard from "./ServiceCard";
import ButtonLink from "./ui/Button";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32"
    >
      <div
        aria-hidden="true"
        className="aura -right-32 top-20 h-80 w-80 bg-blush/25"
      />

      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Services"
          title="Three ways I can help."
          description="Whether you need something built, something written, or someone to keep it all consistent — here's what working together looks like."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 0.08} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <ButtonLink href="#contact" variant="secondary">
            Start a project
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
