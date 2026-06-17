"use client";

import { benefits } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid, StaggerItem } from "@/components/ui/AnimatedContainer";

export function Benefits() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Beneficios"
          title="Resultados que impactan tu operación"
          description="No se trata solo de tecnología. Se trata de transformar la forma en que tu negocio opera día a día."
        />

        <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={benefit.title}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-white/10">
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-violet-500/5 blur-2xl transition-all group-hover:bg-violet-500/10" />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                        <Icon className="h-5 w-5 text-violet-400" />
                      </div>
                      {benefit.metric && (
                        <span className="rounded-full bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-300">
                          {benefit.metric}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 text-base font-medium text-white">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
