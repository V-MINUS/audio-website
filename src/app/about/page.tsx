import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Award, Users, Zap, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Teahan Pro Audio & Lighting — professional event production across Ireland.',
}

const values = [
  {
    icon: Award,
    title: 'Quality First',
    desc: 'We only use industry-standard equipment from trusted manufacturers. No compromises on audio or visual fidelity.',
  },
  {
    icon: Users,
    title: 'Experienced Crew',
    desc: 'Our team brings decades of combined experience across live sound, lighting design and event production.',
  },
  {
    icon: Zap,
    title: 'Reliable Delivery',
    desc: 'We show up prepared, on time and fully equipped — every time. Your event runs on our reputation.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <h1 className="section-heading">About Teahan Pro Audio & Lighting</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Based in Kerry, Ireland, Teahan Pro Audio & Lighting has been delivering professional event production 
            services for over 15 years. From county concerts to corporate galas, from school musicals to festival 
            stages — we bring the same passion and professionalism to every project.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-5">Our Story</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Founded with a simple belief — that every event, no matter the scale, deserves world-class 
                production values — Teahan Pro Audio & Lighting has grown from a regional sound hire company 
                into a full-service production house serving clients across Ireland.
              </p>
              <p>
                We've built lasting relationships with venues, promoters, schools, corporates and families 
                who trust us to deliver on the moments that matter most. Our investment in premium equipment 
                and ongoing training keeps us at the forefront of live event technology.
              </p>
              <p>
                Whether you need a subtle PA for a board meeting or a full festival rig with LED video walls 
                and intelligent lighting, our team has the expertise and equipment to exceed your expectations.
              </p>
            </div>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { value: '15+', label: 'Years in Business' },
              { value: '500+', label: 'Events Delivered' },
              { value: '50+', label: 'Regular Clients' },
              { value: '4', label: 'Service Divisions' },
            ].map((s) => (
              <div key={s.label} className="card-glass p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-10">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-glass p-6 rounded-2xl">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services list */}
        <div className="card-glass p-8 lg:p-10 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Our Full Service Offering</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Front of House Audio', 'Monitor Engineering', 'PA System Design & Hire',
              'Stage & Architectural Lighting', 'LED Moving Head Fixtures', 'Atmospheric Effects',
              'LED Video Walls & Screens', 'Projection Mapping', 'Live Video Switching',
              'Staging & Risers', 'Trussing & Rigging', 'Set Construction',
              'Technical Event Management', 'On-site Crew & Engineers', 'Pre-event Consultation',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
