import type { SVGProps } from 'react'
import { CtaButton } from '../../components/CtaButton'
import { siteConfig } from '../../lib/site'

// lucide-react no incluye íconos de marca (licencia). Como son solo dos y
// específicos del Hero, se resuelven con SVG inline en vez de sumar otra
// librería de íconos.
function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

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
