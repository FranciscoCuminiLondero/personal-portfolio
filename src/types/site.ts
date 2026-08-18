/**
 * Información base del sitio: quién soy y cómo me presento.
 * La consumen features como Navbar y Hero.
 */
export type SiteConfig = {
  name: string
  role: string
  description: string
  social: {
    github?: string
    linkedin?: string
  }
}
