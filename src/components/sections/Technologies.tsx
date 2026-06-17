"use client";

import { technologies } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid, StaggerItem } from "@/components/ui/AnimatedContainer";

const techIcons: Record<string, string> = {
  "Next.js": "▲",
  React: "⚛",
  TypeScript: "TS",
  "Node.js": "⬢",
  PostgreSQL: "🐘",
  Supabase: "⚡",
  "Tailwind CSS": "🎨",
};

export function Technologies() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tecnologías"
          title="Stack moderno y probado"
          description="Utilizo las herramientas más actuales del ecosistema web para construir soluciones rápidas, seguras y escalables."
        />

        <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech) => (
            <StaggerItem key={tech.name}>
              <div
                className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br ${tech.color} p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-lg font-bold text-white ring-1 ring-white/10">
                  {techIcons[tech.name] ?? tech.name.slice(0, 2)}
                </div>
                <h3 className="font-medium text-white">{tech.name}</h3>
                <p className="mt-1.5 text-sm text-zinc-400">{tech.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
