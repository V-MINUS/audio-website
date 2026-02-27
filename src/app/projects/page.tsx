import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Music2, Building2, GraduationCap, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Browse our portfolio of audio, lighting and visual production projects across Ireland.',
}

const projects = [
  {
    id: 1,
    title: 'Kerry Summer Festival',
    category: 'Concerts & Festivals',
    type: 'concert',
    services: ['Full PA System', 'Stage Lighting', 'LED Video Wall'],
    description: 'Full outdoor production for a 3,000-capacity summer festival across two stages. Delivered seamless transitions between 18 acts over two days.',
    icon: Music2,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    id: 2,
    title: 'Tech Company Annual Conference',
    category: 'Corporate',
    type: 'corporate',
    services: ['Conference Audio', 'LED Backdrops', 'Live Streaming'],
    description: '600-delegate conference with hybrid streaming to remote offices. Multiple breakout rooms with individual audio zones.',
    icon: Building2,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
  {
    id: 3,
    title: 'Tralee Community School Musical',
    category: 'Schools / Education',
    type: 'school',
    services: ['Stage Sound', 'Theatrical Lighting', 'Wireless Mics'],
    description: 'Full theatrical production support for a secondary school musical. 8 wireless microphone channels, intelligent lighting rigs and follow spots.',
    icon: GraduationCap,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    id: 4,
    title: 'Luxury Wedding at Ballyseede Castle',
    category: 'Weddings',
    type: 'wedding',
    services: ['Ceremony Audio', 'Ambient Lighting', 'DJ Sound System'],
    description: 'Intimate but impactful lighting design transforming the castle ballroom. Ceremony sound system, band PA and atmospheric LED uplighting throughout.',
    icon: Heart,
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
  },
  {
    id: 5,
    title: 'National Ploughing Championships',
    category: 'Concerts & Festivals',
    type: 'concert',
    services: ['Outdoor PA', 'Line Array Systems', 'Stage Lighting'],
    description: 'Large-scale outdoor event PA for the main entertainment stage. Line array systems covering 5,000+ attendees with crystal clear coverage.',
    icon: Music2,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    id: 6,
    title: 'Corporate Product Launch',
    category: 'Corporate',
    type: 'corporate',
    services: ['AV Production', 'Projection Mapping', 'Audience Mic'],
    description: 'High-impact product reveal with projection mapping across a curved screen backdrop. Complete AV management for press and VIP audience.',
    icon: Building2,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="section-heading">Our Work</h1>
          <p className="section-subheading">
            A selection of recent projects showcasing our capabilities across audio, lighting and visual production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card-glass rounded-2xl overflow-hidden flex flex-col group hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
              {/* Image placeholder */}
              <div className={`h-48 flex items-center justify-center relative bg-gradient-to-br from-slate-900 to-slate-800`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${project.bg}`}>
                  <project.icon className={`w-8 h-8 ${project.color}`} />
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${project.bg} ${project.color} border-current/20`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((s) => (
                    <span key={s} className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md border border-slate-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center card-glass p-10 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-3">Have a Project in Mind?</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Every event is unique. Tell us about yours and we'll put together the perfect production package.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
