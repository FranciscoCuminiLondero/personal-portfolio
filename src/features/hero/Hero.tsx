import { GithubIcon, LinkedinIcon } from '../../components/icons'
import { CtaButton } from '../../components/CtaButton'
import { siteConfig } from '../../lib/site'

export function Hero() {
  const { github, linkedin } = siteConfig.social
  const hasSocialLinks = Boolean(github ?? linkedin)

  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:justify-between md:py-32">
      <div className="animate-fade-in-up flex max-w-xl flex-col items-center gap-5 text-center md:items-start md:text-left">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {siteConfig.role}
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {siteConfig.name}
        </h1>

        <p className="text-lg text-muted">{siteConfig.description}</p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <CtaButton href="#proyectos">Ver proyectos</CtaButton>
          <CtaButton href="#contacto" variant="secondary">
            Contacto
          </CtaButton>
        </div>

        {hasSocialLinks && (
          <div className="mt-1 flex items-center gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="animate-fade-in-up relative shrink-0">
        <div className="absolute inset-0 -z-10 rounded-2xl bg-accent/20 blur-3xl" />
        {/* public/me.png ya viene recortada en círculo con transparencia en
            las esquinas; el fondo bg-surface + padding arma el marco cuadrado
            sin que se note el halo translúcido de esas esquinas. */}
        <div className="rounded-2xl bg-surface p-4 ring-1 ring-border">
          <img
            src="/me.png"
            alt={siteConfig.name}
            width={256}
            height={256}
            className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56"
          />
        </div>
      </div>
    </section>
  )
}
