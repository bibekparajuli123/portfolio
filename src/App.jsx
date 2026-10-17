import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] bg-blue-600/25 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '6s' }} />
      </div>

      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}