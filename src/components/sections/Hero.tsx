"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";

const stats = [
  { value: "2+", label: "Proyectos entregados" },
  { value: "100%", label: "Compromiso con calidad" },
  { value: "24/7", label: "Sistemas en producción" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-16">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-violet-400" />
              Desarrollo de software a medida
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.1]"
          >
            {siteConfig.tagline.split(" ").map((word, i, arr) => {
              const isHighlight = i >= arr.length - 3;
              return (
                <span key={i}>
                  {isHighlight ? (
                    <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : (
                    word
                  )}{" "}
                </span>
              );
            })}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="#contacto" size="lg">
              Solicitar presupuesto
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#proyectos" variant="secondary" size="lg">
              Ver proyectos
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 grid grid-cols-3 gap-8 border-t border-white/5 pt-10"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="shimmer-border overflow-hidden rounded-2xl">
            <div className="glass-card rounded-2xl p-1">
              <div className="overflow-hidden rounded-xl bg-zinc-900/80">
                <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-zinc-500">dashboard — producción</span>
                </div>
                <div className="grid gap-3 p-4 sm:grid-cols-3 sm:p-6">
                  {[
                    { label: "Ventas del mes", value: "$124.5K", change: "+18%" },
                    { label: "Pedidos activos", value: "47", change: "+12%" },
                    { label: "Eficiencia", value: "94%", change: "+8%" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-white/5 bg-white/[0.02] p-4"
                    >
                      <p className="text-xs text-zinc-500">{item.label}</p>
                      <p className="mt-1 text-xl font-semibold text-white">{item.value}</p>
                      <p className="mt-1 text-xs text-emerald-400">{item.change}</p>
                    </div>
                  ))}
                </div>
                <div className="mx-4 mb-4 h-24 rounded-lg border border-white/5 bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-cyan-500/10 sm:mx-6 sm:mb-6 sm:h-32" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
