# Francisco Cumini Londero — Portfolio

Portfolio profesional de **Francisco Cumini Londero**, Frontend Developer.

Sitio de una sola página con Navbar, Hero, About, What I Do, Projects, Skills,
Experience y Contact — navegación por anclas, sin rutas ni backend.

## Stack

- React 19 + TypeScript (`strict`)
- Vite
- Tailwind CSS
- lucide-react (íconos)

Sin librerías de estado, UI, animación, backend ni CMS.

## Arquitectura

Feature-based pragmática: cada sección del portfolio vive en `src/features/`
como su propio componente (con `data/` local si tiene contenido estructurado
propio, como `features/projects/`). Lo genuinamente compartido entre features
vive en:

- `src/components/` — componentes reutilizables reales (`CtaButton`,
  `Footer`, íconos de marca).
- `src/lib/` — datos e integraciones comunes (`siteConfig`).
- `src/types/` — tipos compartidos entre features (`SiteConfig`).

Detalle completo de decisiones de arquitectura en [`ARCHITECTURE.md`](./ARCHITECTURE.md).

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Comandos disponibles

| Comando           | Qué hace                                |
| ------------------ | ---------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con hot reload    |
| `npm run build`   | Type-check (`tsc -b`) + build de producción en `dist/` |
| `npm run lint`    | ESLint sobre todo el proyecto            |
| `npm run preview` | Sirve `dist/` localmente para verificar el build |

## Deploy

Se despliega como **GitHub Pages Project Page** en:

```
https://FranciscoCuminiLondero.github.io/personal-portfolio/
```

El deploy es automático vía GitHub Actions (`.github/workflows/deploy.yml`):
cada push a `main` instala dependencias, corre `lint` y `build`, y publica
`dist/` en GitHub Pages. `vite.config.ts` tiene `base: '/personal-portfolio/'`
configurado para que assets, CSS, JS e imágenes resuelvan correctamente bajo
esa ruta.
