"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const repos = [
  {
    name: "aircanvas",
    description:
      "Gesture-controlled digital canvas using OpenCV and MediaPipe.",
    language: "Python",
    link: "https://github.com/manyapandey139-droid/aircanvas",
  },
  {
    name: "manya-portfolio",
    description:
      "Personal portfolio website built with Next.js, TypeScript and Tailwind CSS.",
    language: "TypeScript",
    link: "https://github.com/manyapandey139-droid/manya-portfolio",
  },
  {
    name: "AirOS",
    description:
      "AI desktop assistant project combining automation and intelligent interaction.",
    language: "Python",
    link: "#",
  },
];

export default function GitHubSection() {
  return (
    <section id="github" className="relative px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-content mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="section-eyebrow mb-4">
              GitHub
            </p>

            <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)]">
              Building in public.
            </h2>
          </div>


          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition"
          >
            <Github size={16}/>
            View Profile
          </a>

        </motion.div>



        {/* REAL GITHUB CONTRIBUTION GRAPH */}

        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="bg-card border border-border rounded-2xl p-8 mb-8 overflow-hidden"
        >

          <img
            src="https://ghchart.rshah.org/manyapandey139-droid"
            alt="GitHub contribution graph"
            className="w-full"
          />

          <p className="text-secondary text-xs font-mono mt-4">
            GitHub contribution activity
          </p>

        </motion.div>



        {/* REAL PROJECT REPOS */}

        <div className="grid md:grid-cols-3 gap-6">

          {repos.map((repo,i)=>(

            <motion.a

              key={repo.name}

              href={repo.link}

              target="_blank"

              rel="noopener noreferrer"

              initial={{opacity:0,y:20}}

              whileInView={{opacity:1,y:0}}

              viewport={{once:true}}

              transition={{
                duration:0.5,
                delay:i*0.1
              }}

              className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition"

            >

              <div className="flex justify-between mb-3">

                <h3 className="font-mono text-sm">
                  {repo.name}
                </h3>


                <ArrowUpRight
                  size={16}
                  className="text-secondary group-hover:text-accent"
                />

              </div>


              <p className="text-secondary text-sm leading-relaxed mb-5">
                {repo.description}
              </p>


              <span className="text-xs font-mono text-secondary">
                {repo.language}
              </span>


            </motion.a>

          ))}

        </div>


      </div>
    </section>
  );
}