# Arquitectura del proyecto

Portfolio profesional. Etapa actual: **fundaciones** (sin secciones implementadas todavía).

## Stack

React + TypeScript + Vite + Tailwind CSS. Sin librerías de estado, UI, animación,
backend ni CMS. `lucide-react` se agregará recién cuando haya un ícono real que
mostrar.

## Estructura de `src/`

```
src/
  assets/        imágenes y archivos estáticos importados desde código (ej: foto personal)
  lib/           utilidades e integraciones comunes (ej: site.ts)
  types/         tipos compartidos entre features (ej: SiteConfig)
  index.css      tokens de diseño + estilos base globales
  App.tsx        composición raíz de la app
  main.tsx       entry point
```

`components/` y `features/` **no existen todavía**. No hay ningún componente
genuinamente reutilizable ni ninguna feature real hasta que se implemente Navbar
y Hero (próxima etapa) — crearlas vacías sería estructura teórica sin contenido,
y ni siquiera se trackean en git. Se crean recién cuando aparece el primer caso
concreto:

- `features/navbar/`, `features/hero/`, etc. — cada sección del portfolio como
  su propia feature (componente + tipos locales si los necesita).
- `components/` — solo si surge un componente genuinamente compartido entre
  features (ej. un `Container` de layout, un `Button`). No antes.

## Decisiones tomadas en esta etapa

- **`strict: true`** agregado en `tsconfig.app.json` y `tsconfig.node.json`.
  Faltaba en el proyecto inicial (`noImplicitAny` y compañía estaban apagados),
  lo cual contradice el objetivo de evitar `any` y tipar correctamente.
- **Limpieza de archivos sin uso**, remanentes de un template/scaffold ajeno al
  proyecto: `src/output.css` (CSS de Tailwind generado a mano, nunca importado,
  con tokens de otro diseño), `src/assets/react.svg`, `src/assets/vite.svg`,
  `src/assets/hero.png` (placeholder genérico, no es la foto personal) y
  `public/icons.svg` (sprite de íconos sociales de otro proyecto). Estos imports
  rotos eran, de hecho, la causa de que `npm run build` fallara.
  `public/favicon.svg` se dejó intacto por ahora — no rompe nada, se reemplaza
  cuando haya branding/foto definitivos.
- **Dark mode único**, sin toggle ni variante `dark:` de Tailwind: la paleta
  oscura está hardcodeada como único tema en `:root` (`src/index.css`). Evita
  la complejidad de un sistema de theming que no se necesita.
- **Tokens de diseño** como variables CSS en `:root`, mapeadas en
  `tailwind.config.js` a utilidades (`bg-background`, `text-foreground`,
  `text-muted`, `border-border`, `text-accent` / `bg-accent`). Así ningún
  componente futuro hardcodea hex — todo pasa por estos nombres semánticos.

  | Token | Valor | Uso |
  |---|---|---|
  | `background` | `#0a0a0b` | fondo base |
  | `surface` | `#131316` | fondo de tarjetas/secciones elevadas |
  | `border` | `#26262b` | bordes sutiles |
  | `foreground` | `#e4e4e7` | texto principal |
  | `muted` | `#9a9aa2` | texto secundario |
  | `accent` | `#34d399` (verde esmeralda) | acento: color de marca, CTAs, links activos |
  | `accent-foreground` | `#0a0a0b` | texto sobre fondo `accent` |

  El acento (verde esmeralda) es una elección de partida, fácil de cambiar
  editando una sola variable en `src/index.css` — no queda hardcodeado en
  ningún componente.

- **Tipografía: Inter**, cargada vía `<link>` a Google Fonts en `index.html`
  (no es dependencia de npm) con fallback a `system-ui` si no carga. Se eligió
  por ser sans-serif moderna, muy legible y estándar en portfolios de dev
  actuales. Fácil de sacar/reemplazar por system-ui puro si se prefiere evitar
  la dependencia de red externa.
- **`src/lib/site.ts` + `src/types/site.ts`**: datos de identidad (nombre, rol,
  descripción) tipados con `SiteConfig`, para que Navbar/Hero los consuman sin
  duplicar texto. El nombre se tomó de la identidad de git del proyecto —
  revisar/ajustar en `src/lib/site.ts` si hace falta.
- **Sin alias de import** (`@/...`): se mantienen imports relativos. A esta
  escala no aportan claridad suficiente para justificar tocar `tsconfig` +
  `vite.config.ts`; se reconsidera si la profundidad de carpetas lo justifica.

## Sin agregar dependencias

`package.json` no cambió: no se agregó ninguna librería nueva en esta etapa.

## Preparado para la próxima etapa (Navbar + Hero)

- Tokens de color y tipografía listos para usar vía clases de Tailwind.
- `siteConfig` tipado y disponible para poblar el contenido real.
- `App.tsx` es un placeholder mínimo — se reemplaza por la composición real de
  secciones (`features/navbar`, `features/hero`, ...).
- `src/assets/` está vacía y lista para recibir la foto personal.
