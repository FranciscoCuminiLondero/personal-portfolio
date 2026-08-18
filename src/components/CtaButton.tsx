import type { AnchorHTMLAttributes, ReactNode } from 'react'

type CtaButtonVariant = 'primary' | 'secondary'

type CtaButtonProps = {
  href: string
  children: ReactNode
  variant?: CtaButtonVariant
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children' | 'className'>

const baseClasses =
  'inline-flex items-center justify-center gap-1.5 rounded-md px-5 py-2.5 text-sm font-medium transition-colors'

const variantClasses: Record<CtaButtonVariant, string> = {
  primary: 'bg-accent text-accent-foreground hover:bg-accent/90',
  secondary:
    'border border-border text-foreground hover:border-accent hover:text-accent',
}

// Siempre un <a>: su función es navegación (anclas internas o links
// externos), nunca una acción de formulario. Variantes fijas a
// primary/secondary — no se agregan más sin un caso real que lo pida.
export function CtaButton({
  href,
  children,
  variant = 'primary',
  ...anchorProps
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...anchorProps}
    >
      {children}
    </a>
  )
}
