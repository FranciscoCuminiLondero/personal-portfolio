import { siteConfig } from './lib/site'

// Placeholder de fundaciones: confirma que tokens de color, tipografía y
// dark mode funcionan. Se reemplaza por Navbar + Hero en la próxima etapa.
function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        {siteConfig.role}
      </p>
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-md text-muted">{siteConfig.description}</p>
    </main>
  )
}

export default App
