import { Navbar } from './features/navbar/Navbar'
import { Hero } from './features/hero/Hero'
import { About } from './features/about/About'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
