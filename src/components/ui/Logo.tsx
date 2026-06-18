import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showName?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { image: 32, text: "text-sm" },
  md: { image: 40, text: "text-base" },
  lg: { image: 48, text: "text-lg" },
};

export function Logo({ className, showName = true, size = "sm" }: LogoProps) {
  const { image, text } = sizes[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow-sm ring-1 ring-white/10"
        style={{ width: image, height: image }}
      >
        <Image
          src="/logo.png"
          alt={`${siteConfig.name} logo`}
          width={image - 4}
          height={image - 4}
          className="object-contain"
          priority
        />
      </div>
      {showName && (
        <span className={cn("font-semibold tracking-tight text-white", text)}>
          {siteConfig.name}
        </span>
      )}
    </div>
  );
}
