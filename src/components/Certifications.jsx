import { SectionHeader } from './About'

const certs = [
  {
    title: 'Oracle Cloud Certified Developer Professional',
    issuer: 'Oracle',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=7673BD5F459CAE772013E59B586E7A0232EC1A40BF28DAD6066C30CF8592565D',
  },
  {
    title: 'Java Spring Framework 101',
    issuer: 'Simplilearn',
    link: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxODU0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODc5MzUxMV85MTcwMDgwMTc1NTMxNTUzODQwOS5wbmciLCJ1c2VybmFtZSI6IkJpYmVrIFBhcmFqdWxpIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4390%2FIntroduction-to-Java-Spring-framework-101%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1453777754007352678&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FV964scM%2BsyosMCkuyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAGQcsihBAAAA',
  },
  {
    title: 'Java Fundamentals',
    issuer: 'Scaler',
    link: 'https://moonshot.scaler.com/s/li/EGUmxbXEKg',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 scroll-mt-24">
      <SectionHeader title="Certifications" subtitle="Continuous Learning" />
      
      <div className="grid md:grid-cols-3 gap-6">
        {certs.map((c) => (
          <a 
            key={c.title} 
            href={c.link} 
            target="_blank" 
            rel="noreferrer"
            className="glass glass-hover rounded-3xl p-6 flex flex-col justify-between group h-full relative overflow-hidden"
          >
            {/* Decorative background glow */}
            <div className="absolute -right-10 -top-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />
            
            <div>
              <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">{c.issuer}</p>
              <h3 className="font-display text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                {c.title}
              </h3>
            </div>
            
            <div className="mt-6 flex items-center text-sm text-slate-400 group-hover:text-white transition-colors">
              View Certificate 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}