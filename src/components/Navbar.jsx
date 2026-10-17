import { useState, useEffect } from 'react'

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between ${scrolled ? 'shadow-lg' : ''}`}>
          
          <a href="#" className="font-display font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Bibek.
          </a>

          <div className="hidden md:flex gap-8">
            {links.map(l => (
              <a key={l.name} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {l.name}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:block text-sm px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all font-medium text-white shadow-lg shadow-purple-500/20">
            Hire Me
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200 text-2xl">
            {open ? '✕' : '☰'}
          </button>
        </div>

        {open && (
          <div className="glass rounded-2xl mt-2 p-4 md:hidden flex flex-col gap-4 shadow-xl">
            {links.map(l => (
              <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="text-sm text-slate-300 hover:text-white px-2 py-1">
                {l.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}