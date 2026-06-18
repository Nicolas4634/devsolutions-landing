"use client";

import { CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { ProjectPreview } from "@/components/sections/ProjectPreview";

export function CaseStudies() {
  return (
    <section id="proyectos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Casos de éxito"
          title="Proyectos reales, resultados concretos"
          description="Cada proyecto nace de un problema de negocio identificado y se resuelve con tecnología pensada para durar."
        />

        <div className="space-y-8">
          {caseStudies.map((project, index) => (
            <AnimatedContainer key={project.id} delay={index * 0.1}>
              <article className="group overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/30 transition-all duration-300 hover:border-white/10">
                <div className="grid lg:grid-cols-2">
                  <div
                    className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} p-6 sm:p-8 lg:p-10`}
                  >
                    <div className="absolute inset-0 grid-pattern opacity-50" />
                    <div className="relative">
                      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
                        {project.category}
                      </span>
                      <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                        {project.title}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6">
                        <ProjectPreview project={project} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 p-6 sm:p-8 lg:p-10">
                    <div>
                      <h4 className="text-xs font-medium tracking-wider text-violet-400 uppercase">
                        Problema
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium tracking-wider text-blue-400 uppercase">
                        Solución implementada
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium tracking-wider text-cyan-400 uppercase">
                        Beneficios obtenidos
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {project.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2.5 text-sm text-zinc-300"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
