import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Weddings',
  description: 'Beautiful audio and lighting for weddings across Ireland. Ceremony sound, band PA, DJ systems and atmospheric lighting.',
}

export default function WeddingsPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-5 mb-16">
          <div className="w-14 h-14 bg-rose-400/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
            <Heart className="w-7 h-7 text-rose-400" />
          </div>
          <div>
            <h1 className="section-heading mb-3">Weddings</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Your wedding day is the most important event of your life — and it deserves flawless
              audio and breathtaking lighting. We provide discreet, professional production support
              from ceremony through to the last dance, ensuring every moment is perfect.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-6">What We Provide</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Ceremony PA & Music Playback',
                  'Wireless Microphones for Officiant',
                  'Ambient Reception Background Music',
                  'Live Band PA System',
                  'DJ Sound System',
                  'Uplighting & Ambient LED',
                  'Fairy Light Backdrops',
                  'Dancefloor Lighting',
                  'Speeches PA & Wireless Mics',
                  'Disco Lighting & Effects',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-8 rounded-2xl">
              <h2 className="text-white font-bold text-xl mb-4">Your Day, Perfected</h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  We understand that on your wedding day, the last thing you want to worry about is
                  technical details. We handle every aspect of the audio and lighting so you can be
                  fully present in every moment.
                </p>
                <p>
                  Our team visits your venue in advance to plan cable runs, lighting positions and
                  speaker placement — ensuring everything is installed discreetly and efficiently
                  on the day. We work closely with your venue coordinator and wedding planner to
                  fit seamlessly into your schedule.
                </p>
                <p>
                  We have worked in venues across Kerry and the wider Munster region, from castle
                  ballrooms to marquees, barn conversions to hotel function suites. No venue is too
                  unusual for our experienced team.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-glass p-6 rounded-2xl bg-gradient-to-br from-rose-600/10 to-transparent border-rose-500/20">
              <h3 className="text-white font-semibold mb-3">Book a Consultation</h3>
              <p className="text-slate-400 text-sm mb-4">
                Contact us early — wedding dates book up fast. We offer a free venue visit for all weddings.
              </p>
              <Link href="/contact" className="btn-primary w-full justify-center text-sm py-2.5">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-3">Other Event Types</h3>
              <div className="space-y-2">
                {[
                  { label: 'Concerts & Festivals', href: '/events/concerts-festivals' },
                  { label: 'Corporate Events', href: '/events/corporate' },
                  { label: 'Schools / Education', href: '/events/schools' },
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
