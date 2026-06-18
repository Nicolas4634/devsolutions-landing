import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexo Digital | Software a medida para tu negocio",
    template: "%s | Nexo Digital",
  },
  description:
    "Desarrollo sistemas de gestión, aplicaciones web y soluciones personalizadas que automatizan procesos, reducen errores y aumentan la productividad.",
  keywords: [
    "Nexo Digital",
    "desarrollo de software",
    "software a medida",
    "sistemas de gestión",
    "aplicaciones web",
    "automatización de procesos",
    "desarrollo web Argentina",
  ],
  authors: [{ name: "Nexo Digital" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Nexo Digital | Software a medida para tu negocio",
    description:
      "Desarrollo sistemas de gestión, aplicaciones web y soluciones personalizadas que automatizan procesos, reducen errores y aumentan la productividad.",
    siteName: "Nexo Digital",
    images: [{ url: "/logo.png", alt: "Nexo Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexo Digital | Software a medida para tu negocio",
    description:
      "Desarrollo sistemas de gestión, aplicaciones web y soluciones personalizadas que automatizan procesos.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-zinc-950 font-sans text-zinc-50">{children}</body>
    </html>
  );
}
