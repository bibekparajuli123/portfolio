import { SectionHeader } from './About'

const experiences = [
  {
    role: 'Java Developer Intern',
    company: 'CODTECH IT Solutions',
    period: 'May 2025 – July 2025',
    location: 'Virtual',
    points: [
      'Built 4 project-based applications using Java and Spring Boot as part of a structured internship curriculum.',
      'Developed an e-commerce backend with 20+ REST endpoints, layered architecture, and MySQL database design.',
      'Implemented Spring Security, JWT authentication, BCrypt password hashing, and role-based access control.',
      'Used Git, Maven, and Postman for source control, builds, API development, and testing.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-24">
      <SectionHeader title="Experience" subtitle="Where I've worked" />
      
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <div key={idx} className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden group">
            {/* Subtle gradient accent line on the left */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-purple-300 font-medium">{exp.company}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-sm text-slate-300">{exp.period}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{exp.location}</p>
              </div>
            </div>

            <ul className="space-y-3">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                  <span className="text-blue-400 mt-1.5">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}