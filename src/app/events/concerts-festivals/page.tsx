import type { Metadata } from 'next'
import Link from 'next/link'
import { Music2, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Concerts & Festivals',
  description: 'Full production services for concerts and festivals across Ireland — audio, lighting, visual and staging.',
}

export default function ConcertsFestivalsPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-5 mb-16">
          <div className="w-14 h-14 bg-blue-400/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <Music2 className="w-7 h-7 text-blue-400" />
          </div>
          <div>
            <h1 className="section-heading mb-3">Concerts & Festivals</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              From intimate venue shows to multi-stage outdoor festivals, we deliver the complete
              production package. Powerful audio, breathtaking lighting and stunning visuals — all
              managed by an experienced crew who live for live events.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-6">What We Provide</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Main Stage PA System Design & Operation',
                  'FOH & Monitor Engineering',
                  'Stage Lighting Design & Direction',
                  'LED Video Walls & IMAG',
                  'Backline Technical Support',
                  'Multi-Stage Audio Distribution',
                  'Artist Advance & Technical Riders',
                  'Power & Generator Management',
                  'Stage & Barrier Systems',
                  'Full Production Management',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-4">Experience You Can Trust</h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  We have worked with promoters and production companies across Ireland on events ranging
                  from 500 to 20,000+ attendees. Our crew understands the pace of festival production —
                  rapid changeovers, tight scheduling and the need to keep things running no matter what.
                </p>
                <p>
                  We carry full production insurance and operate in compliance with all relevant Irish
                  safety legislation including the Safety, Health and Welfare at Work Act. Our risk
                  assessments and method statements are available upon request.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-glass p-6 rounded-2xl bg-gradient-to-br from-blue-600/15 to-transparent border-blue-500/20">
              <h3 className="text-white font-semibold mb-3">Get a Quote</h3>
              <p className="text-slate-400 text-sm mb-4">Tell us about your event and we will put together a production package.</p>
              <Link href="/contact" className="btn-primary w-full justify-center text-sm py-2.5">
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-3">Other Event Types</h3>
              <div className="space-y-2">
                {[
                  { label: 'Corporate Events', href: '/events/corporate' },
                  { label: 'Schools / Education', href: '/events/schools' },
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
