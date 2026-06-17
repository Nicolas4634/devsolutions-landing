"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid, StaggerItem } from "@/components/ui/AnimatedContainer";

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonios"
          title="Lo que dicen nuestros clientes"
          description="Testimonios de ejemplo — reemplazá con feedback real de tus clientes cuando esté disponible."
        />

        <StaggerGrid className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <div className="relative flex h-full flex-col rounded-2xl border border-white/5 bg-zinc-900/30 p-6 transition-all duration-300 hover:border-white/10">
                <Quote className="h-8 w-8 text-violet-500/30" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xs font-semibold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{testimonial.author}</p>
                    <p className="text-xs text-zinc-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
