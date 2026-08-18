import { siteConfig } from '../../lib/site'

type AboutFact = {
  label: string
  value: string
}

const facts: AboutFact[] = [
  { label: 'Nombre', value: siteConfig.name },
  { label: 'Rol', value: siteConfig.role },
  {
    label: 'Formación',
    value: 'Técnico Universitario en Programación en formación',
  },
]

export function About() {
  return (
    <section
      id="sobre-mi"
      className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:py-28"
    >
      <div className="mb-12 flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Sobre mí
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Hola, soy Francisco
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:gap-16">
        <div className="flex flex-col gap-4 text-lg text-muted">
          <p>
            Soy Francisco Cumini Londero, Frontend Developer y Técnico
            Universitario en Programación en formación. Me especializo en
            construir interfaces web modernas, funcionales y mantenibles
            utilizando tecnologías como React, TypeScript y Tailwind CSS.
          </p>
          <p>
            Actualmente estoy ampliando mi perfil hacia el desarrollo Full
            Stack, profundizando en backend, arquitectura de software y
            desarrollo de productos.
          </p>
        </div>

        <dl className="flex flex-col gap-4 rounded-2xl bg-surface p-6 ring-1 ring-border">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs font-medium uppercase tracking-widest text-muted">
                {fact.label}
              </dt>
              <dd className="mt-1 text-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
