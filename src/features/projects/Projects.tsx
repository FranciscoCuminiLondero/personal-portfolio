import { ArrowUpRight } from 'lucide-react'
import { CtaButton } from '../../components/CtaButton'
import { projects, type Project } from './data/projects'

const pillClasses =
  'rounded-full border border-border px-3 py-1 text-xs text-muted'

function TechList({ technologies }: { technologies: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <li key={tech} className={pillClasses}>
          {tech}
        </li>
      ))}
    </ul>
  )
}

function ProjectCta({ cta }: { cta: NonNullable<Project['cta']> }) {
  return (
    <CtaButton href={cta.href} target="_blank" rel="noreferrer">
      {cta.label}
      <ArrowUpRight size={16} />
    </CtaButton>
  )
}

export function Projects() {
  const [featured, ...secondary] = projects

  return (
    <section
      id="proyectos"
      className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:py-28"
    >
      <div className="mb-12 flex flex-col gap-3">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Proyectos
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Qué construí
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <article className="rounded-2xl bg-surface p-8 ring-1 ring-border sm:p-10">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {featured.category}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            {featured.name}
          </h3>
          <p className="mt-4 max-w-2xl text-muted">{featured.description}</p>

          {featured.highlights && (
            <ul className="mt-6 flex flex-col gap-2">
              {featured.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2 text-sm text-foreground"
                >
                  <span className="text-accent">–</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6">
            <TechList technologies={featured.technologies} />
          </div>

          {featured.cta && (
            <div className="mt-8">
              <ProjectCta cta={featured.cta} />
            </div>
          )}
        </article>

        <div className="grid gap-6 sm:grid-cols-2">
          {secondary.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl bg-surface p-6 ring-1 ring-border"
            >
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                {project.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mt-3 text-sm text-muted">{project.description}</p>

              <div className="mt-4">
                <TechList technologies={project.technologies} />
              </div>

              {project.cta && (
                <div className="mt-6">
                  <ProjectCta cta={project.cta} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
