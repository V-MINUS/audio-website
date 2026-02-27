import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corporate Events',
  description: 'Professional AV and production services for corporate events, conferences and product launches across Ireland.',
}

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-5 mb-16">
          <div className="w-14 h-14 bg-purple-400/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <Building2 className="w-7 h-7 text-purple-400" />
          </div>
          <div>
            <h1 className="section-heading mb-3">Corporate Events</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Polished, reliable and professionally managed AV production for conferences, product launches,
              awards nights, AGMs and corporate hospitality events. We make your brand look its best.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-6">What We Provide</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Conference PA & Speech Reinforcement',
                  'Wireless Lavalier & Handheld Microphones',
                  'LED Backdrop & Branded Screens',
                  'Presentation Switching & Display',
                  'Hybrid Livestream & Recording',
                  'Ambient & Stage Lighting',
                  'Q&A Audience Microphone Systems',
                  'Video Conferencing Integration',
                  'Awards Night Production',
                  'On-site Technical Director',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-4">Discreet, Professional, Reliable</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Corporate events demand a different standard — seamless, invisible technical support that
                lets your content and speakers shine. Our team operates discreetly, arriving early, setting
                up efficiently and providing a dedicated technical point of contact throughout your event.
                We provide full tech rehearsals and speaker confidence monitoring as standard.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-glass p-6 rounded-2xl bg-gradient-to-br from-purple-600/10 to-transparent border-purple-500/20">
              <h3 className="text-white font-semibold mb-3">Get a Quote</h3>
              <p className="text-slate-400 text-sm mb-4">Tell us about your corporate event requirements.</p>
              <Link href="/contact" className="btn-primary w-full justify-center text-sm py-2.5">
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-3">Other Event Types</h3>
              <div className="space-y-2">
                {[
                  { label: 'Concerts & Festivals', href: '/events/concerts-festivals' },
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
