import type { Metadata } from 'next'
import Link from 'next/link'
import { Layout, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Stage & Set Services',
  description: 'Staging, trussing, rigging and set construction for events across Ireland.',
}

const offerings = [
  'Modular Stage Design & Installation',
  'Aluminium Truss Systems',
  'Structural Rigging & Load Planning',
  'Risers & Stage Extensions',
  'Crowd Barrier & Safety Systems',
  'Set Design & Construction',
  'Backdrops & Scenic Elements',
  'Cable Management & Safety',
  'Load-in / Load-out Management',
  'Structural Engineering Sign-off',
]

export default function StageSetPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-5 mb-16">
          <div className="w-14 h-14 bg-emerald-400/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <Layout className="w-7 h-7 text-emerald-400" />
          </div>
          <div>
            <h1 className="section-heading mb-3">Stage & Set Services</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              The physical foundation of any great production. We design, build and manage staging,
              trussing, rigging and set elements that are safe, professional and built to your exact
              specifications — from school stages to festival main stages.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-6">What We Offer</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {offerings.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-4">Safety First</h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  All our stage and rigging work is carried out in full compliance with Irish and EU
                  safety regulations. We provide comprehensive risk assessments, method statements and
                  structural engineering documentation where required by local authorities or venue management.
                </p>
                <p>
                  Our rigging team holds current industry certifications and we carry full public
                  liability insurance. Your safety and the safety of your audience is our absolute priority.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-glass p-6 rounded-2xl bg-gradient-to-br from-emerald-600/10 to-transparent border-emerald-500/20">
              <h3 className="text-white font-semibold mb-3">Get a Quote</h3>
              <p className="text-slate-400 text-sm mb-4">Tell us about your staging requirements.</p>
              <Link href="/contact" className="btn-primary w-full justify-center text-sm py-2.5">
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-3">Related Services</h3>
              <div className="space-y-2">
                {[
                  { label: 'Audio Services', href: '/services/audio' },
                  { label: 'Lighting Services', href: '/services/lighting' },
                  { label: 'Visual Services', href: '/services/visual' },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="flex items-center justify-between py-2 text-slate-400 hover:text-white text-sm transition-colors group">
                    {l.label}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
