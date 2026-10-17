import { SectionHeader } from './About'

const skillGroups = [
  { title: 'Languages', items: ['Java', 'SQL', 'Python', 'JavaScript (ES6+)'] },
  { title: 'Backend', items: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Bean Validation'] },
  { title: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind'] },
  { title: 'Security', items: ['Spring Security', 'JWT', 'BCrypt', 'RBAC'] },
  { title: 'Database', items: ['MySQL'] },
  { title: 'Testing & Tools', items: ['JUnit 5', 'Mockito', 'Git', 'GitHub', 'Maven', 'Docker', 'Postman'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 scroll-mt-24">
      <SectionHeader title="Technical Skills" subtitle="What I work with" />
      
      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map(g => (
          <div key={g.title} className="glass glass-hover rounded-3xl p-6">
            <h3 className="font-display text-xl font-semibold text-white mb-5">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map(item => (
                <span key={item} className="text-sm px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:border-purple-400/50 hover:text-purple-200 hover:bg-white/10 transition-all cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}