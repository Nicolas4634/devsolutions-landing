import {
  BarChart3,
  Clock,
  Code2,
  GitBranch,
  Globe,
  LayoutDashboard,
  Lightbulb,
  Link2,
  MessageSquare,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Nexo Digital",
  tagline: "Software a medida para optimizar y hacer crecer tu negocio",
  description:
    "Desarrollo sistemas de gestión, aplicaciones web y soluciones personalizadas que automatizan procesos, reducen errores y aumentan la productividad.",
  email: "nexxastore934@gmail.com",
  phone: "+54 263 455-1089",
  whatsapp: "https://wa.me/5492634551089",
  location: "San Martín, Mendoza",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
};

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: LayoutDashboard,
    title: "Sistemas de Gestión",
    description:
      "Plataformas centralizadas para administrar operaciones, inventario, clientes y equipos desde un solo lugar.",
  },
  {
    icon: Globe,
    title: "Aplicaciones Web",
    description:
      "Sitios y aplicaciones web modernas, rápidas y escalables diseñadas para convertir visitantes en clientes.",
  },
  {
    icon: Zap,
    title: "Automatización de Procesos",
    description:
      "Eliminación de tareas repetitivas mediante flujos automatizados que ahorran tiempo y reducen errores humanos.",
  },
  {
    icon: Link2,
    title: "Integraciones",
    description:
      "Conexión de herramientas existentes — ERPs, APIs, pagos y servicios — para un ecosistema unificado.",
  },
  {
    icon: BarChart3,
    title: "Dashboards y Reportes",
    description:
      "Paneles visuales con métricas en tiempo real para tomar decisiones basadas en datos concretos.",
  },
  {
    icon: Lightbulb,
    title: "Consultoría Tecnológica",
    description:
      "Análisis de procesos y estrategia digital para identificar oportunidades de mejora antes de desarrollar.",
  },
];

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  metric?: string;
}

export const benefits: Benefit[] = [
  {
    icon: Clock,
    title: "Ahorro de tiempo",
    description: "Automatización de tareas que antes consumían horas de trabajo manual cada semana.",
    metric: "Hasta 40h/mes",
  },
  {
    icon: ShieldCheck,
    title: "Menos errores operativos",
    description: "Validaciones y flujos estandarizados que minimizan fallos en procesos críticos.",
    metric: "-85% errores",
  },
  {
    icon: Settings,
    title: "Mayor control del negocio",
    description: "Visibilidad completa de operaciones, stock, finanzas y rendimiento del equipo.",
    metric: "360° visibilidad",
  },
  {
    icon: GitBranch,
    title: "Procesos automatizados",
    description: "Flujos de trabajo que se ejecutan solos, desde pedidos hasta notificaciones.",
    metric: "24/7 activo",
  },
  {
    icon: TrendingUp,
    title: "Información en tiempo real",
    description: "Datos actualizados al instante para reaccionar rápido ante cambios del mercado.",
    metric: "Datos live",
  },
  {
    icon: Users,
    title: "Escalabilidad",
    description: "Arquitectura preparada para crecer con tu negocio sin reescribir desde cero.",
    metric: "Sin límites",
  },
];

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  benefits: string[];
  tags: string[];
  gradient: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "repuestos-motos",
    title: "E-commerce de Repuestos para Motos",
    category: "Aplicación Web",
    problem:
      "El negocio dependía de consultas por WhatsApp y planillas Excel para gestionar stock y pedidos, generando demoras, errores de inventario y pérdida de ventas online.",
    solution:
      "Desarrollo de una tienda web completa con catálogo filtrable por marca y modelo, carrito de compras, gestión de stock en tiempo real y panel administrativo para pedidos y productos.",
    benefits: [
      "Ventas online disponibles 24/7 sin intervención manual",
      "Reducción del 70% en consultas repetitivas por WhatsApp",
      "Control de inventario centralizado y actualizado al instante",
      "Experiencia de compra profesional que genera confianza",
    ],
    tags: ["Next.js", "E-commerce", "Panel Admin"],
    gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
  },
  {
    id: "remiseria",
    title: "Sistema de Gestión para Remisería",
    category: "Sistema de Gestión",
    problem:
      "La empresa gestionaba viajes, choferes y facturación en cuadernos y mensajes dispersos, dificultando el seguimiento de servicios, liquidaciones y reportes mensuales.",
    solution:
      "Aplicación de gestión integral con módulos de viajes, asignación de choferes, registro de clientes corporativos, liquidaciones automáticas y reportes de rendimiento.",
    benefits: [
      "Registro digital de todos los viajes con historial completo",
      "Liquidaciones de choferes calculadas automáticamente",
      "Reportes mensuales generados en segundos",
      "Mayor organización y trazabilidad de cada servicio",
    ],
    tags: ["React", "PostgreSQL", "Dashboard"],
    gradient: "from-blue-600/20 via-cyan-600/10 to-transparent",
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Reunión y análisis",
    description:
      "Conozco tu negocio, identifico problemas reales y defino objetivos medibles antes de escribir una línea de código.",
    icon: Search,
  },
  {
    step: 2,
    title: "Diseño de la solución",
    description:
      "Arquitectura técnica, wireframes y plan de implementación alineados con tu presupuesto y plazos.",
    icon: Lightbulb,
  },
  {
    step: 3,
    title: "Desarrollo",
    description:
      "Construcción iterativa con entregas parciales, feedback continuo y código limpio, escalable y documentado.",
    icon: Code2,
  },
  {
    step: 4,
    title: "Implementación",
    description:
      "Despliegue en producción, migración de datos, capacitación del equipo y puesta en marcha supervisada.",
    icon: Smartphone,
  },
  {
    step: 5,
    title: "Soporte y mejoras",
    description:
      "Acompañamiento post-lanzamiento con correcciones, optimizaciones y nuevas funcionalidades según evolucione tu negocio.",
    icon: MessageSquare,
  },
];

export interface Technology {
  name: string;
  description: string;
  color: string;
}

export const technologies: Technology[] = [
  {
    name: "Next.js",
    description: "Framework React para aplicaciones web de alto rendimiento",
    color: "from-white/10 to-white/5",
  },
  {
    name: "React",
    description: "Biblioteca UI para interfaces interactivas y dinámicas",
    color: "from-cyan-500/10 to-blue-500/5",
  },
  {
    name: "TypeScript",
    description: "Tipado estático para código más seguro y mantenible",
    color: "from-blue-500/10 to-indigo-500/5",
  },
  {
    name: "Node.js",
    description: "Runtime para backends escalables y APIs robustas",
    color: "from-green-500/10 to-emerald-500/5",
  },
  {
    name: "PostgreSQL",
    description: "Base de datos relacional confiable para datos críticos",
    color: "from-indigo-500/10 to-violet-500/5",
  },
  {
    name: "Supabase",
    description: "Backend as a Service con auth, DB y storage integrados",
    color: "from-emerald-500/10 to-green-500/5",
  },
  {
    name: "Tailwind CSS",
    description: "Estilos utility-first para diseños modernos y consistentes",
    color: "from-sky-500/10 to-cyan-500/5",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Transformaron nuestro caos de planillas en un sistema que usamos todos los días. La inversión se recuperó en menos de tres meses.",
    author: "María González",
    role: "Directora Comercial",
    company: "Distribuidora Norte",
    avatar: "MG",
  },
  {
    quote:
      "Lo que más valoro es que entendieron nuestro negocio antes de proponer tecnología. El resultado encaja perfectamente con cómo trabajamos.",
    author: "Carlos Ruiz",
    role: "Gerente General",
    company: "Logística Express",
    avatar: "CR",
  },
  {
    quote:
      "Profesionalismo de principio a fin. Entregas a tiempo, comunicación clara y un producto que superó nuestras expectativas.",
    author: "Ana Martínez",
    role: "Fundadora",
    company: "StartupTech",
    avatar: "AM",
  },
];
