"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  description: string;
}

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  description: "",
};

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setForm(initialForm);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contacto"
          title="Hablemos de tu proyecto"
          description="Contame qué necesitás y te preparo una propuesta personalizada sin compromiso."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <AnimatedContainer className="lg:col-span-2" direction="left">
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-medium text-white">Información de contacto</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Respondemos en menos de 24 horas hábiles.
                </p>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 text-sm text-zinc-300 transition-colors hover:text-white"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                        <Mail className="h-4 w-4 text-violet-400" />
                      </div>
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-zinc-300 transition-colors hover:text-white"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                        <MessageCircle className="h-4 w-4 text-emerald-400" />
                      </div>
                      WhatsApp directo
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                      <Phone className="h-4 w-4 text-blue-400" />
                    </div>
                    {siteConfig.phone}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                    </div>
                    {siteConfig.location}
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedContainer>

          <AnimatedContainer className="lg:col-span-3" direction="right" delay={0.1}>
            <div className="shimmer-border rounded-2xl">
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center py-12 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                        <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-white">
                        ¡Mensaje enviado!
                      </h3>
                      <p className="mt-2 max-w-sm text-sm text-zinc-400">
                        Gracias por contactarnos. Te responderemos a la brevedad con una
                        propuesta personalizada.
                      </p>
                      <Button
                        variant="secondary"
                        className="mt-6"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Enviar otro mensaje
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-1.5 block text-sm text-zinc-300">
                            Nombre *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
                            placeholder="Tu nombre"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="mb-1.5 block text-sm text-zinc-300">
                            Empresa
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
                            placeholder="Nombre de tu empresa"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="mb-1.5 block text-sm text-zinc-300">
                            Email *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
                            placeholder="tu@email.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="mb-1.5 block text-sm text-zinc-300">
                            Teléfono
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
                            placeholder="+54 263 455-1089"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="description" className="mb-1.5 block text-sm text-zinc-300">
                          Descripción del proyecto *
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          required
                          rows={5}
                          value={form.description}
                          onChange={handleChange}
                          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
                          placeholder="Contame sobre tu negocio y qué problema querés resolver..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Enviando..."
                        ) : (
                          <>
                            Solicitar propuesta
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
