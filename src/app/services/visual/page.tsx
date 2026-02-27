import type { Metadata } from 'next'
import Link from 'next/link'
import { Monitor, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Visual Services',
  description: 'LED screens, video walls, projection mapping and live video switching for events across Ireland.',
}

const offerings = [
  'LED Video Walls & Modular Screens',
  'Front & Rear Projection Systems',
  'Projection Mapping',
  'Live Video Switching & Directing',
  'Camera Operations & Multi-Camera Rigs',
  'IMAG (Image Magnification) Systems',
  'Livestream & Broadcast Integration',
  'Content Playback & Media Servers',
  'LED Backdrop Panels',
  'Digital Signage & Way-finding',
]

const equipment = [
  'ROE Visual LED Panels',
  'Barco & Christie Projectors',
  'Ross Video Switchers',
  'Disguise Media Servers',
  'BlackMagic ATEM Systems',
  'PTZ & Professional Cameras',
]

export default function VisualServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-5 mb-16">
          <div className="w-14 h-14 bg-purple-400/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <Monitor className="w-7 h-7 text-purple-400" />
          </div>
          <div>
            <h1 className="section-heading mb-3">Visual Services</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Stunning visuals that keep every audience member engaged — whether they are 5 metres or
              500 metres from the stage. From LED video walls to projection mapping, we design and
              operate visual systems that make your event unforgettable.
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
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-4">Our Approach</h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  Visual content is now an expectation at any professional event. We consult with
                  you on screen placement, pixel pitch selection and content formats to ensure your
                  visuals look sharp from every seat in the house.
                </p>
                <p>
                  For live events, our video directors work closely with your production team to
                  cut between camera angles, playback graphics and live feeds in real time — keeping
                  the audience immersed and informed throughout.
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
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-glass p-6 rounded-2xl bg-gradient-to-br from-purple-600/10 to-transparent border-purple-500/20">
              <h3 className="text-white font-semibold mb-3">Get a Quote</h3>
              <p className="text-slate-400 text-sm mb-4">Tell us about your event and visual requirements.</p>
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
