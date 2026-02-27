import type { Metadata } from 'next'
import Link from 'next/link'
import { Mic2, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Audio Services',
  description: 'Professional PA systems, front of house, monitoring and broadcast audio for events across Ireland.',
}

const offerings = [
  'Front of House (FOH) Mixing & Engineering',
  'Monitor Engineering & In-Ear Monitor Systems',
  'Line Array & Point Source PA System Design',
  'Delay Tower & Sub-Woofer Systems',
  'Wireless Microphone Systems (Shure, Sennheiser)',
  'Broadcast & Livestream Audio Integration',
  'Recording — Multitrack & Stereo',
  'Conference Audio & Hearing Loop Systems',
  'Acoustic Assessment & System Design',
  'Playback & DJ System Integration',
]

const equipment = [
  'd&b audiotechnik Line Arrays',
  'L-Acoustics PA Systems',
  'DiGiCo & Yamaha Digital Consoles',
  'Shure Axient & ULX-D Wireless',
  'Sennheiser Digital 6000 Series',
  'Lab.gruppen Amplification',
]

export default function AudioServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="flex items-start gap-5 mb-16">
          <div className="w-14 h-14 bg-blue-400/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <Mic2 className="w-7 h-7 text-blue-400" />
          </div>
          <div>
            <h1 className="section-heading mb-3">Audio Services</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Crystal-clear, powerful and perfectly balanced audio — from intimate speech reinforcement
              to large-scale festival PA. Our engineers design and deliver audio solutions tailored to your
              venue, audience and event type.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* What we offer */}
            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-6">What We Offer</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {offerings.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our approach */}
            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-4">Our Approach</h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  Great live sound starts long before the first note is played. We work closely with you
                  during the planning stage to understand your venue acoustics, act requirements and
                  audience coverage needs.
                </p>
                <p>
                  Every system we design is tuned and optimised on site using industry-standard measurement
                  software. Our engineers remain on site throughout your event to manage levels, resolve
                  issues and ensure a consistent, professional result.
                </p>
                <p>
                  We carry comprehensive backup equipment for every show. Redundancy is built into
                  every system — because at live events, there is no second chance.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-4">Key Equipment</h3>
              <ul className="space-y-2.5">
                {equipment.map((e) => (
                  <li key={e} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-glass p-6 rounded-2xl bg-gradient-to-br from-blue-600/15 to-transparent border-blue-500/20">
              <h3 className="text-white font-semibold mb-3">Get a Quote</h3>
              <p className="text-slate-400 text-sm mb-4">
                Tell us about your event and we will put together a tailored audio production package.
              </p>
              <Link href="/contact" className="btn-primary w-full justify-center text-sm py-2.5">
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-3">Related Services</h3>
              <div className="space-y-2">
                {[
                  { label: 'Lighting Services', href: '/services/lighting' },
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
