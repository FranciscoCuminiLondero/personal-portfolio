import { Navbar } from './features/navbar/Navbar'
import { Hero } from './features/hero/Hero'
import { About } from './features/about/About'
import { WhatIDo } from './features/what-i-do/WhatIDo'
import { Projects } from './features/projects/Projects'
import { Skills } from './features/skills/Skills'
import { Experience } from './features/experience/Experience'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Projects />
      <Skills />
      <Experience />
    </div>
  )
}

export default App
