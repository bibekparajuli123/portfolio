import { SectionHeader } from './About'

const projects = [
  {
    title: 'ShopSphere – E-Commerce Backend API',
    tech: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL'],
    description: 'Built REST APIs for e-commerce modules (product, category, cart, order, customer) using Spring Boot and layered architecture. Designed MySQL schema with 6+ entities, implemented JPA relationships, and wrote JUnit 5 unit tests.',
    github: 'https://github.com/bibekparajuli123/ShopSphere-Ecommerce-Backend',
  },
  {
    title: 'Secure Auth System',
    tech: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'MySQL'],
    description: 'Implemented secure user authentication using Spring Security, BCrypt, and Spring Data JPA. Designed REST APIs with layered architecture and role-based access control.',
    github: 'https://github.com/bibekparajuli123/secure-auth-springboot',
  },
  {
    title: 'Text to Resume using AI',
    tech: ['React', 'Spring AI'],
    description: 'Built a full-stack app converting raw text into structured resume format via Spring AI prompt processing. Handled API validation, error responses, and stable backend-to-frontend data flow.',
    github: 'https://github.com/bibekparajuli123/text-to-resume-ai',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 scroll-mt-24">
      <SectionHeader title="Featured Projects" subtitle="Things I've built" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="glass glass-hover rounded-3xl p-6 flex flex-col h-full group">
            
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-display text-xl font-bold text-white group-hover:text-purple-300 transition-colors pr-4">
                {p.title}
              </h3>
              <a href={p.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-all">
                {/* Simple SVG for GitHub to avoid the lucide error */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map(t => (
                <span key={t} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  {t}
                </span>
              ))}
            </div>

            <p className="text-slate-400 text-sm leading-relaxed flex-grow">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}