export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-32 pb-20 relative">
      <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-slate-300 mb-8 shadow-lg shadow-black/20">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Available for opportunities
      </div>

      <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
        Hi, I'm <br className="md:hidden" />
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Bibek Parajuli
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-slate-300 mb-4 font-medium">
        Junior Java Full Stack Developer
      </p>

      <p className="max-w-2xl text-slate-400 mb-10 leading-relaxed">
        Building clean, secure, and scalable applications with{' '}
        <span className="text-purple-300 font-medium">Spring Boot</span>,{' '}
        <span className="text-blue-300 font-medium">React</span>, and{' '}
        <span className="text-pink-300 font-medium">MySQL</span>. 
        Passionate about robust backend architecture and intuitive user experiences.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a href="#projects" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all font-medium text-white shadow-lg shadow-purple-500/25">
          View Projects ↓
        </a>
        <a href="/resume.pdf" download className="glass glass-hover px-6 py-3 rounded-xl font-medium text-white">
          Download CV
        </a>
      </div>

      <div className="flex gap-4">
        <a href="https://github.com/bibekparajuli123/" target="_blank" rel="noreferrer" className="glass glass-hover w-12 h-12 rounded-2xl flex items-center justify-center text-slate-300 hover:text-white">
          GH
        </a>
        <a href="https://www.linkedin.com/in/bibekprj/" target="_blank" rel="noreferrer" className="glass glass-hover w-12 h-12 rounded-2xl flex items-center justify-center text-slate-300 hover:text-white">
          IN
        </a>
        <a href="mailto:bibekparajuli275@gmail.com" className="glass glass-hover w-12 h-12 rounded-2xl flex items-center justify-center text-slate-300 hover:text-white">
          @
        </a>
      </div>
    </section>
  )
}