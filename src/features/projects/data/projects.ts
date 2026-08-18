export type Project = {
  name: string
  category: string
  description: string
  /** Stack real: nombres de tecnología concretos. */
  technologies: string[]
  /**
   * Bullets breves de capacidad/arquitectura. Opcional: solo el proyecto
   * destacado los muestra, para no convertir la sección en un catálogo de
   * tecnologías.
   */
  highlights?: string[]
  /** Ninguno de los 3 tiene repositorio público: no existe campo `github`. */
  cta?: {
    label: string
    href: string
  }
}

// El orden define la jerarquía visual: el primer proyecto es el destacado
// de la sección (ver Projects.tsx). No se agrega un campo `featured`.
export const projects: Project[] = [
  {
    name: 'Sistema Contable',
    category: 'Full Stack · Business Management',
    description:
      'Aplicación web de gestión contable y administrativa orientada a empresas, con módulos para clientes, productos, ventas, compras, cobros, proveedores, informes y gestión documental.',
    technologies: [
      'React 19',
      'TypeScript 5.9',
      'Vite',
      'React Router DOM',
      'Tailwind CSS',
      'shadcn/ui',
      'Supabase',
      'PostgreSQL',
    ],
    highlights: [
      'Autenticación y Row Level Security',
      'Arquitectura modular con separación de dominio e infraestructura',
      'Generación de documentos PDF e informes fiscales',
      'Flujo público de confirmación de remitos',
    ],
    cta: {
      label: 'Ver demo',
      href: 'https://sistema-contable-ecru.vercel.app/login',
    },
  },
  {
    name: 'MIKA',
    category: 'AI · Document Intelligence',
    description:
      'Plataforma de IA generativa orientada a industrias reguladas, con capacidades de inteligencia documental, procesamiento de documentos y funcionalidades de análisis mediante IA. Mi participación estuvo enfocada en el desarrollo frontend.',
    technologies: ['React', 'TypeScript', 'Markdown', 'PDF.js'],
    // No es demo (sin acceso público) ni case study interno (no existe esa
    // vista todavía): apunta al sitio oficial del producto, donde se explica
    // en detalle.
    cta: {
      label: 'Sobre MIKA',
      href: 'https://gen-ia.io/es/mika',
    },
  },
  {
    name: 'Sistema de Stock',
    category: 'Inventory · E-commerce Operations',
    description:
      'Sistema de gestión de inventario y pedidos para una tienda, con control de stock por variantes, importación de órdenes desde PDF, gestión de pedidos personalizados y reportes de conciliación.',
    technologies: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'RLS',
      'pdfjs-dist',
      'Vercel',
    ],
    cta: {
      label: 'Ver demo',
      href: 'https://sistema-stock-6lr49nx5q-franciscocuminilonderos-projects.vercel.app/login',
    },
  },
]
