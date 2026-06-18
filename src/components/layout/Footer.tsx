import { Mail, MessageCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { Logo } from "@/components/ui/Logo";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#">
              <Logo size="md" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Desarrollo de software a medida para empresas que buscan optimizar procesos,
              automatizar operaciones y escalar con tecnología confiable.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white">Navegación</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white">Contacto</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="text-sm text-zinc-500">
            Hecho con Next.js y mucho café ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
