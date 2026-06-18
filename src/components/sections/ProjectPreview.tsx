"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { CaseStudy } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectPreviewProps {
  project: CaseStudy;
  className?: string;
}

function BrowserFrame({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-900/80 px-3 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto max-w-[70%] truncate rounded-md bg-white/5 px-3 py-1 text-[10px] text-zinc-500 sm:text-xs">
          {url}
        </div>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">{children}</div>
    </div>
  );
}

function RepuestosMock() {
  return (
    <div className="flex h-full flex-col bg-zinc-950 p-3 sm:p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-2 w-16 rounded bg-white/10" />
        <div className="flex gap-2">
          <div className="h-6 w-20 rounded-md bg-white/5" />
          <div className="h-6 w-6 rounded-md bg-violet-500/30" />
        </div>
      </div>
      <div className="mb-3 h-8 rounded-lg bg-white/5" />
      <div className="grid flex-1 grid-cols-3 gap-2 sm:gap-3">
        {[
          { name: "Filtro aceite", price: "$4.200" },
          { name: "Pastillas freno", price: "$8.900" },
          { name: "Kit transmisión", price: "$15.500" },
          { name: "Bujía NGK", price: "$2.100" },
          { name: "Cadena 428", price: "$12.300" },
          { name: "Espejo retro", price: "$5.600" },
        ].map((item) => (
          <div
            key={item.name}
            className="flex flex-col rounded-lg border border-white/5 bg-white/[0.03] p-2"
          >
            <div className="mb-2 aspect-square rounded-md bg-gradient-to-br from-zinc-800 to-zinc-900" />
            <p className="truncate text-[8px] text-zinc-400 sm:text-[10px]">{item.name}</p>
            <p className="text-[9px] font-medium text-violet-300 sm:text-xs">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RemiseriaMock() {
  return (
    <div className="flex h-full flex-col bg-zinc-950 p-3 sm:p-4">
      <div className="mb-3 grid grid-cols-3 gap-2">
        {[
          { label: "Viajes hoy", value: "24" },
          { label: "Choferes", value: "8" },
          { label: "Facturación", value: "$186K" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-white/5 bg-white/[0.03] p-2"
          >
            <p className="text-[8px] text-zinc-500 sm:text-[10px]">{stat.label}</p>
            <p className="text-sm font-semibold text-white sm:text-base">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-2">
        <div className="mb-2 flex gap-2 border-b border-white/5 pb-2 text-[8px] text-zinc-500 sm:text-[10px]">
          <span className="flex-1">Cliente</span>
          <span className="w-12">Chofer</span>
          <span className="w-10">Estado</span>
        </div>
        {[
          { client: "Empresa Norte", driver: "J. Pérez", status: "Activo" },
          { client: "Hotel Central", driver: "M. López", status: "Finalizado" },
          { client: "Particular", driver: "R. Gómez", status: "En curso" },
          { client: "Clínica Sur", driver: "A. Ruiz", status: "Activo" },
        ].map((row) => (
          <div
            key={row.client}
            className="flex items-center gap-2 border-b border-white/5 py-1.5 text-[8px] sm:text-[10px]"
          >
            <span className="flex-1 truncate text-zinc-300">{row.client}</span>
            <span className="w-12 truncate text-zinc-400">{row.driver}</span>
            <span className="w-10 text-emerald-400">{row.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectMock({ id }: { id: string }) {
  if (id === "repuestos-motos") return <RepuestosMock />;
  if (id === "remiseria") return <RemiseriaMock />;
  return null;
}

export function ProjectPreview({ project, className }: ProjectPreviewProps) {
  const [imageError, setImageError] = useState(false);
  const previewUrl = project.previewUrl ?? `${project.id}.nexodigital.com`;
  const showImage = project.image && !imageError;

  return (
    <div className={cn("space-y-3", className)}>
      <BrowserFrame url={previewUrl}>
        {showImage ? (
          <Image
            src={project.image!}
            alt={project.imageAlt ?? `Vista previa de ${project.title}`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <ProjectMock id={project.id} />
        )}
      </BrowserFrame>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 transition-colors hover:text-white"
        >
          Ver proyecto en vivo
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}
