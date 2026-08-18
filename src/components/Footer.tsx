import { GithubIcon, LinkedinIcon } from './icons'
import { siteConfig } from '../lib/site'

export function Footer() {
  const { github, linkedin } = siteConfig.social
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-medium text-foreground">{siteConfig.name}</p>
          <p>{siteConfig.role}</p>
        </div>

        <p>
          © {currentYear} {siteConfig.name}
        </p>

        <div className="flex items-center gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
