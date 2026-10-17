export function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-12 animate-fade-up">
      {subtitle && <p className="text-sm text-purple-400 uppercase tracking-[0.2em] mb-2">{subtitle}</p>}
      <h2 className="font-display text-3xl md:text-5xl font-bold text-white">{title}</h2>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 scroll-mt-24">
      <SectionHeader title="About Me" subtitle="Get to know me" />
      
      <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto hover:border-purple-500/30 transition-colors duration-500">
        <p className="text-slate-300 leading-relaxed mb-6 text-lg">
          I'm a Computer Science graduate from <span className="text-white font-medium">KIIT University</span> with a passion
          for building full-stack applications that are secure, well-tested, and easy to maintain.
        </p>
        <p className="text-slate-300 leading-relaxed mb-8 text-lg">
          My experience spans <span className="text-purple-300">REST API development</span>,{' '}
          <span className="text-blue-300">Spring Security with JWT</span>, writing JUnit/Mockito tests, and collaborating
          through Git-based workflows. I care about clean architecture, proper documentation, and code that other
          developers enjoy working with.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { label: 'Location', value: 'Butwal, Nepal' },
            { label: 'Degree', value: 'B.Tech CSE · 9.02 CGPA' },
            { label: 'Focus', value: 'Java · Spring Boot · React' },
          ].map(({ label, value }) => (
            <div key={label} className="glass rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">{label}</p>
              <p className="text-sm text-slate-200 font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}