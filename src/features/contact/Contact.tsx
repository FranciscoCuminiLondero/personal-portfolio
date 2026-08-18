import { GithubIcon, LinkedinIcon } from '../../components/icons'
import { CtaButton } from '../../components/CtaButton'
import { siteConfig } from '../../lib/site'

export function Contact() {
  const { github, linkedin } = siteConfig.social

  return (
    <section
      id="contacto"
      className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:py-28"
    >
      <div className="rounded-2xl bg-surface p-10 text-center ring-1 ring-border sm:p-16">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Contacto
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          ¿Trabajamos juntos?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          Si tenés un proyecto, una oportunidad profesional o simplemente
          querés hablar sobre desarrollo y tecnología, podés contactarme.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CtaButton href={`mailto:${siteConfig.email}`}>
            Enviar email
          </CtaButton>

          {linkedin && (
            <CtaButton
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </CtaButton>
          )}

          {github && (
            <CtaButton
              href={github}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </CtaButton>
          )}
        </div>
      </div>
    </section>
  )
}
