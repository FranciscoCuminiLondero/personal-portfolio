type ExperienceItem = {
  role: string
  company: string
  /** Solo se muestra si la fecha está confirmada. */
  date?: string
  description: string
  technologies: string[]
  contributions: string[]
}

const experience: ExperienceItem[] = [
  {
    role: 'Frontend Developer',
    company: 'Gen-AI Microsystems — MIKA',
    description:
      'Frontend Developer en MIKA, plataforma de IA generativa orientada a industrias reguladas. Desarrollo enfocado exclusivamente en el frontend y su integración con los servicios del producto.',
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'FastAPI / APIs',
      'PDF.js',
      'Markdown',
      'REST APIs',
    ],
    contributions: [
      'Desarrollo y mantenimiento de la interfaz frontend de MIKA con React y TypeScript, integrada con las APIs del framework MIKA (FastAPI).',
      'Implementación de interfaces para funcionalidades de IA: renderizado de contenido Markdown y visualización de documentos PDF (PDF.js) sobre resultados de procesamiento documental.',
      'Manejo de estados de carga y errores, y de session_id en flujos conversacionales, incluyendo limpieza y gestión de recursos en el frontend.',
      'Documentación de la integración frontend ("MIKA Framework — Frontend Integration Guide"): endpoints, operaciones, errores y ejemplos de integración.',
    ],
  },
]

export function Experience() {
  return (
    <section
      id="experiencia"
      className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:py-28"
    >
      <div className="mb-12 flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Experiencia
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Trayectoria
        </h2>
      </div>

      <ol className="flex flex-col">
        {experience.map((item, index) => (
          <li key={`${item.company}-${item.role}`} className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
              {index < experience.length - 1 && (
                <span className="w-px flex-1 bg-border" />
              )}
            </div>

            <div className="pb-12">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {item.role}
                  </h3>
                  <p className="text-sm text-accent">{item.company}</p>
                </div>
                {item.date && (
                  <span className="text-sm text-muted">{item.date}</span>
                )}
              </div>

              <p className="mt-3 text-muted">{item.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-col gap-2">
                {item.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="flex gap-2 text-sm text-foreground"
                  >
                    <span className="text-accent">–</span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
