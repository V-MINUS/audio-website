import type { Metadata } from 'next'
import Link from 'next/link'
import { Lightbulb, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lighting Services',
  description: 'Dynamic stage lighting, LED rigs, intelligent fixtures and atmospheric effects for events across Ireland.',
}

const offerings = [
  'Stage Wash & Key Lighting Design',
  'Intelligent Moving Head Fixtures',
  'LED Par & Strip Lighting',
  'Follow Spot Operation',
  'Atmospheric Effects (Haze, Fog, CO2)',
  'Architectural & Ambient Uplighting',
  'Strobe & Effects Lighting',
  'Truss & Beam Lighting Rigs',
  'Lighting Design & Programming',
  'On-site Lighting Director',
]

const equipment = [
  'Robe Moving Heads',
  'Martin by Harman Fixtures',
  'Chauvet Professional LED',
  'grandMA & Avolites Consoles',
  'Robert Juliat Follow Spots',
  'Wireless DMX Systems',
]

export default function LightingServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-5 mb-16">
          <div className="w-14 h-14 bg-amber-400/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <Lightbulb className="w-7 h-7 text-amber-400" />
          </div>
          <div>
            <h1 className="section-heading mb-3">Lighting Services</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Great lighting transforms any space. From subtle ambient warmth for a wedding reception to
              full intelligent rigs for a concert headline act — we design, programme and operate lighting
              that elevates every moment.
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
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-4">Our Approach</h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  We begin every project with a design consultation — understanding your venue, your
                  brand colours, the mood you want to create and any specific performance requirements.
                  We produce pre-visualisation renders for larger productions so you can see the look
                  before load-in day.
                </p>
                <p>
                  Our lighting rigs are fully programmed and cue-based. Whether you need fully automated
                  timecode-locked show programming or a skilled operator reacting to a live band, we have
                  the expertise to deliver.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-4">Key Equipment</h3>
              <ul className="space-y-2.5">
                {equipment.map((e) => (
                  <li key={e} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-glass p-6 rounded-2xl bg-gradient-to-br from-amber-600/10 to-transparent border-amber-500/20">
              <h3 className="text-white font-semibold mb-3">Get a Quote</h3>
              <p className="text-slate-400 text-sm mb-4">Let us design the perfect lighting for your event.</p>
              <Link href="/contact" className="btn-primary w-full justify-center text-sm py-2.5">
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-3">Related Services</h3>
              <div className="space-y-2">
                {[
                  { label: 'Audio Services', href: '/services/audio' },
                  { label: 'Visual Services', href: '/services/visual' },
                  { label: 'Stage & Set', href: '/services/stage-set' },
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
