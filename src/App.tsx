import { Navbar } from './features/navbar/Navbar'
import { Hero } from './features/hero/Hero'
import { About } from './features/about/About'
import { WhatIDo } from './features/what-i-do/WhatIDo'
import { Skills } from './features/skills/Skills'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
    </div>
  )
}

export default App
