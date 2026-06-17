"use client";

import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid, StaggerItem } from "@/components/ui/AnimatedContainer";

export function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Servicios"
          title="Soluciones tecnológicas para cada necesidad"
          description="Desde sistemas internos hasta aplicaciones web públicas, diseño e implemento software que resuelve problemas reales de tu negocio."
        />

        <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <div className="group glass-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 ring-1 ring-white/10 transition-all group-hover:from-violet-500/30 group-hover:to-blue-500/30">
                    <Icon className="h-5 w-5 text-violet-300" />
                  </div>
                  <h3 className="text-lg font-medium text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
