import type { Metadata } from 'next'
import { Calendar, ArrowRight, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, tips and news from the Teahan Pro Audio & Lighting team.',
}

const posts = [
  {
    slug: 'choosing-the-right-pa-system',
    title: 'How to Choose the Right PA System for Your Event',
    excerpt: 'Not all PA systems are created equal. From column arrays to line arrays, we break down what system suits your venue size and event type.',
    date: '2025-11-14',
    category: 'Audio',
    readTime: '6 min read',
  },
  {
    slug: 'led-vs-traditional-lighting',
    title: 'LED vs Traditional Stage Lighting — What Is Right for You?',
    excerpt: 'LED fixtures have transformed live events but traditional tungsten and HMI still have their place. We compare cost, colour quality and practicality.',
    date: '2025-10-28',
    category: 'Lighting',
    readTime: '5 min read',
  },
  {
    slug: 'planning-outdoor-event-audio',
    title: 'Planning Outdoor Event Audio: A Complete Guide',
    excerpt: 'Outdoor events present unique acoustic challenges. Wind, reflective surfaces, crowd noise — here is how to tackle them all.',
    date: '2025-09-15',
    category: 'Audio',
    readTime: '8 min read',
  },
  {
    slug: 'wedding-audio-checklist',
    title: 'The Complete Wedding Audio & Lighting Checklist',
    excerpt: 'From ceremony sound to first dance lighting, our comprehensive checklist ensures nothing gets missed on your biggest day.',
    date: '2025-08-20',
    category: 'Weddings',
    readTime: '7 min read',
  },
  {
    slug: 'school-show-production-tips',
    title: '5 Tips for an Impressive School Show Production',
    excerpt: 'School productions do not need a West End budget to look and sound incredible. Our technicians share their top tips for school show success.',
    date: '2025-07-10',
    category: 'Education',
    readTime: '4 min read',
  },
  {
    slug: 'video-walls-events',
    title: 'Why LED Video Walls Are Changing Live Events',
    excerpt: 'From festival main stages to corporate presentations, LED video walls are now the go-to choice. We explain why and what to consider.',
    date: '2025-06-05',
    category: 'Visual',
    readTime: '5 min read',
  },
]

const categoryColors: Record<string, string> = {
  Audio: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Lighting: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  Visual: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  Weddings: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
  Education: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="section-heading">Blog & Resources</h1>
          <p className="section-subheading">
            Production insights, technical guides and industry news from our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="card-glass rounded-2xl overflow-hidden flex flex-col group hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-44 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                <Tag className="w-10 h-10 text-slate-700" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[post.category] ?? 'text-slate-400 bg-slate-800 border-slate-700'}`}>
                    {post.category}
                  </span>
                  <span className="text-slate-500 text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-blue-400 transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('en-IE', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <span className="text-blue-400 text-sm flex items-center gap-1 font-medium group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
