import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Schools & Education',
  description: 'Professional audio and lighting production for school shows, musicals, graduations and educational events.',
}

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-5 mb-16">
          <div className="w-14 h-14 bg-emerald-400/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <GraduationCap className="w-7 h-7 text-emerald-400" />
          </div>
          <div>
            <h1 className="section-heading mb-3">Schools & Education</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Every student deserves to feel like a star on stage. We provide patient, professional
              production support for school musicals, graduations, talent shows and educational events —
              making every performance memorable for students, parents and staff alike.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-6">What We Provide</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Stage PA & Vocal Reinforcement',
                  'Wireless Handheld & Lavalier Microphones',
                  'Theatrical Stage Lighting',
                  'Follow Spotlights',
                  'Atmospheric Effects (safe for students)',
                  'Backdrop & Scenic Lighting',
                  'Graduation Ceremony AV',
                  'Talent Show Production',
                  'Drama & Musical Theatre Support',
                  'Technical Rehearsal Assistance',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-4">Patient, Supportive, Professional</h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  Working with schools requires a different kind of patience and care. Our crew are
                  experienced at working alongside students, drama teachers and school staff — guiding
                  performers through sound checks, explaining cues calmly and adapting on the fly when
                  the unexpected happens (and in school shows, it always does!).
                </p>
                <p>
                  We work within your school budget to deliver the most impact possible. All our
                  equipment and crew hold the relevant safety certifications and we provide full
                  documentation for school boards and insurance purposes.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-glass p-6 rounded-2xl bg-gradient-to-br from-emerald-600/10 to-transparent border-emerald-500/20">
              <h3 className="text-white font-semibold mb-3">Get a Quote</h3>
              <p className="text-slate-400 text-sm mb-4">Let us help make your school show a success.</p>
              <Link href="/contact" className="btn-primary w-full justify-center text-sm py-2.5">
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-3">Other Event Types</h3>
              <div className="space-y-2">
                {[
                  { label: 'Concerts & Festivals', href: '/events/concerts-festivals' },
                  { label: 'Corporate Events', href: '/events/corporate' },
                  { label: 'Weddings', href: '/events/weddings' },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="flex items-center justify-between py-2 text-slate-400 hover:text-white text-sm transition-colors group">
                    {l.label} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
