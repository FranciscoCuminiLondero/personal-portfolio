type Capability = {
  title: string
  description: string
}

// Capacidades, no un listado de servicios: sin tecnologías, sin precios,
// sin iconos de agencia. Solo qué puedo aportar.
const capabilities: Capability[] = [
  {
    title: 'Frontend Development',
    description: 'Interfaces modernas, responsive y orientadas a producto.',
  },
  {
    title: 'Product Development',
    description:
      'Transformar necesidades en aplicaciones funcionales y mantenibles.',
  },
  {
    title: 'AI Integration',
    description:
      'Integración de herramientas y servicios de IA en aplicaciones web.',
  },
]

export function WhatIDo() {
  return (
    <section
      id="que-hago"
      className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:py-28"
    >
      <div className="mb-12 flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Qué hago
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Cómo trabajo
        </h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-3">
        {capabilities.map((capability, index) => (
          <div key={capability.title} className="flex flex-col gap-2">
            <span className="font-mono text-sm text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-lg font-medium text-foreground">
              {capability.title}
            </h3>
            <p className="text-muted">{capability.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
