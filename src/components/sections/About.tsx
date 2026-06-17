"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Target, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";

const values = [
  {
    icon: Brain,
    title: "Análisis primero",
    description: "Estudio tu negocio, procesos y objetivos antes de proponer cualquier solución técnica.",
  },
  {
    icon: Target,
    title: "Enfoque en resultados",
    description: "Cada línea de código tiene un propósito: resolver un problema real y medible.",
  },
  {
    icon: Code2,
    title: "Código de calidad",
    description: "Desarrollo limpio, documentado y escalable que facilita el mantenimiento a largo plazo.",
  },
  {
    icon: Users,
    title: "Comunicación clara",
    description: "Te mantengo informado en cada etapa, sin jerga técnica innecesaria.",
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedContainer direction="left">
            <SectionHeading
              badge="Sobre mí"
              title="Entender negocios antes de escribir código"
              align="left"
              className="mb-8"
            />
            <div className="space-y-4 text-base leading-relaxed text-zinc-400">
              <p>
                Soy desarrollador de software especializado en crear soluciones a medida para
                empresas y negocios que necesitan digitalizar, automatizar y optimizar sus
                operaciones.
              </p>
              <p>
                Mi enfoque no empieza con la tecnología, sino con la comprensión profunda de
                cómo funciona tu negocio: qué procesos consumen más tiempo, dónde se generan
                errores y qué información necesitás para tomar mejores decisiones.
              </p>
              <p>
                He desarrollado desde tiendas online hasta sistemas de gestión completos,
                siempre con el mismo principio: software que se adapta a tu forma de trabajar,
                no al revés.
              </p>
            </div>
          </AnimatedContainer>

          <AnimatedContainer direction="right" delay={0.2}>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-2xl p-5"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10">
                      <Icon className="h-4 w-4 text-violet-400" />
                    </div>
                    <h3 className="text-sm font-medium text-white">{value.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
