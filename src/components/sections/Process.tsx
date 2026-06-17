"use client";

import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";

export function Process() {
  return (
    <section id="proceso" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Proceso"
          title="Cómo trabajamos juntos"
          description="Un proceso claro y transparente, desde el primer contacto hasta el soporte continuo."
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-gradient-to-b from-violet-500/50 via-blue-500/30 to-transparent lg:left-1/2 lg:block lg:-translate-x-px" />

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <AnimatedContainer key={step.step} delay={index * 0.1}>
                  <div
                    className={`relative flex flex-col gap-8 lg:flex-row lg:items-center ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                      <div
                        className={`glass-card rounded-2xl p-6 sm:p-8 ${
                          isEven ? "lg:ml-auto" : ""
                        } max-w-lg`}
                      >
                        <span className="text-xs font-medium tracking-wider text-violet-400 uppercase">
                          Paso {step.step}
                        </span>
                        <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center gap-4 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex-col">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-900 shadow-lg shadow-violet-500/10">
                        <Icon className="h-5 w-5 text-violet-400" />
                      </div>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-bold text-white lg:hidden">
                        {step.step}
                      </span>
                    </div>

                    <div className="hidden flex-1 lg:block" />
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="my-8 flex justify-center lg:hidden">
                      <div className="h-8 w-px bg-gradient-to-b from-violet-500/50 to-transparent" />
                    </div>
                  )}
                </AnimatedContainer>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
