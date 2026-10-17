import { SectionHeader } from './About'

export default function Contact() {
  return (
    <section id="contact" className="py-24 scroll-mt-24">
      <SectionHeader title="Get In Touch" subtitle="Let's build something" />
      
      <div className="glass rounded-[3rem] p-10 md:p-16 max-w-4xl mx-auto text-center relative overflow-hidden">
        {/* Inner glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg bg-purple-500/10 blur-[100px] pointer-events-none" />

        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 relative z-10">
          Currently open for new opportunities
        </h3>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto relative z-10">
          Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:bibekparajuli275@gmail.com" 
          className="relative z-10 inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all font-medium text-white shadow-lg shadow-purple-500/25 text-lg"
        >
          Say Hello 👋
        </a>
      </div>
    </section>
  )
}