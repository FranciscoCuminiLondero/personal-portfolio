import { Navbar } from './features/navbar/Navbar'
import { Hero } from './features/hero/Hero'
import { About } from './features/about/About'
import { WhatIDo } from './features/what-i-do/WhatIDo'
import { Projects } from './features/projects/Projects'
import { Skills } from './features/skills/Skills'
import { Experience } from './features/experience/Experience'
import { Contact } from './features/contact/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
