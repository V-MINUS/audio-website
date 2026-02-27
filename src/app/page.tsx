import Link from 'next/link'
import {
  Mic2, Lightbulb, Monitor, Layout, Music2, Building2, GraduationCap, Heart,
  ArrowRight, CheckCircle, Star, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Mic2,
    title: 'Audio Services',
    desc: 'Professional PA systems, front of house, monitoring, recording and broadcast audio for any scale event.',
    href: '/services/audio',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Services',
    desc: 'Dynamic stage lighting, LED rigs, intelligent fixtures and atmospheric effects that elevate every performance.',
    href: '/services/lighting',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    icon: Monitor,
    title: 'Visual Services',
    desc: 'LED screens, video walls, projection mapping and live video switching for impactful visual experiences.',
    href: '/services/visual',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
  {
    icon: Layout,
    title: 'Stage & Set Services',
    desc: 'Staging, trussing, rigging and set construction designed and built to your exact specifications.',
    href: '/services/stage-set',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
]

const events = [
  { icon: Music2, title: 'Concerts & Festivals', href: '/events/concerts-festivals', color: 'text-blue-400' },
  { icon: Building2, title: 'Corporate Events', href: '/events/corporate', color: 'text-purple-400' },
  { icon: GraduationCap, title: 'Schools / Education', href: '/events/schools', color: 'text-emerald-400' },
  { icon: Heart, title: 'Weddings', href: '/events/weddings', color: 'text-rose-400' },
]

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Events Delivered' },
  { value: '50+', label: 'Venues Across Ireland' },
  { value: '100%', label: 'Client Satisfaction' },
]

const testimonials = [
  {
    name: 'Sarah Murphy',
    role: 'Event Manager, Cork',
    text: 'Teahan delivered flawless audio and lighting for our 2,000 capacity concert. Professional from start to finish.',
    stars: 5,
  },
  {
    name: 'Tom Walsh',
    role: 'Wedding Couple, Kerry',
    text: 'The lighting transformed our venue completely. Every guest commented on how beautiful it looked. Highly recommend!',
    stars: 5,
  },
  {
    name: 'Principal Brennan',
    role: 'Secondary School, Limerick',
    text: 'Outstanding support for our annual show. The team were patient, professional and made our students feel like stars.',
    stars: 5,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.10),transparent_60%)]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Professional Event Production Across Ireland
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
            Sound. Light. Vision.{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Delivered.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Teahan Pro Audio & Lighting brings world-class production values to every event — from intimate
            school shows to large-scale concerts and festivals across Ireland.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/projects" className="btn-outline text-base px-8 py-4">
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* Services */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading mx-auto">
              Comprehensive production services from initial design through to delivery and on-site support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="card-glass p-6 group hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-5', s.bg)}>
                  <s.icon className={cn('w-6 h-6', s.color)} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-blue-400 transition-colors">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className={cn('flex items-center gap-1 text-sm font-medium', s.color)}>
                  Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Event Solutions */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading">Built for Every Event</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Whether you're planning a festival headline stage or an intimate school production, 
                we have the expertise and equipment to make it exceptional.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {events.map((e) => (
                  <Link
                    key={e.title}
                    href={e.href}
                    className="flex items-center gap-3 p-4 card-glass hover:border-slate-600 rounded-xl transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors">
                      <e.icon className={cn('w-5 h-5', e.color)} />
                    </div>
                    <span className="text-slate-300 group-hover:text-white text-sm font-medium transition-colors">{e.title}</span>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 ml-auto transition-colors" />
                  </Link>
                ))}
              </div>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Discuss Your Event <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature list */}
            <div className="card-glass p-8 lg:p-10">
              <h3 className="text-white font-bold text-xl mb-6">Why Choose Teahan?</h3>
              {[
                'Full design consultation before every event',
                'Experienced crew with years of live production',
                'Premium equipment from leading manufacturers',
                'Comprehensive risk assessment & safety planning',
                'On-site technical support throughout your event',
                'Competitive pricing with transparent quotations',
                'Nationwide coverage across Ireland',
              ].map((f) => (
                <div key={f} className="flex items-start gap-3 mb-4 last:mb-0">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">What Our Clients Say</h2>
            <p className="section-subheading mx-auto">Trusted by event organisers across Ireland</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-glass p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Get in touch today for a free consultation and competitive quote. We respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/projects"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
