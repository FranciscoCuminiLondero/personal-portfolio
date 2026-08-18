/**
 * Información base del sitio: quién soy y cómo me presento.
 * La consumen features como Navbar, Hero, Contact y Footer.
 */
export type SiteConfig = {
  name: string
  role: string
  description: string
  email: string
  social: {
    github?: string
    linkedin?: string
  }
}
