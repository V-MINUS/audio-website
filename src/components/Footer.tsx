import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

const serviceLinks = [
  { label: 'Audio Services', href: '/services/audio' },
  { label: 'Lighting Services', href: '/services/lighting' },
  { label: 'Visual Services', href: '/services/visual' },
  { label: 'Stage & Set Services', href: '/services/stage-set' },
]

const eventLinks = [
  { label: 'Concerts & Festivals', href: '/events/concerts-festivals' },
  { label: 'Corporate Events', href: '/events/corporate' },
  { label: 'Schools / Education', href: '/events/schools' },
  { label: 'Weddings', href: '/events/weddings' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">
                Teahan Pro<br />
                <span className="text-blue-400 text-sm">Audio & Lighting</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professional audio, lighting and visual production services for events across Ireland. 
              From intimate weddings to large-scale concerts.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="mailto:info@teahansound.ie" className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@teahansound.ie
              </a>
              <a href="tel:+353000000000" className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +353 (0) 00 000 0000
              </a>
              <span className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Kerry, Ireland
              </span>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Event Solutions</h3>
            <ul className="space-y-2.5">
              {eventLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Teahan Pro Audio & Lighting. All rights reserved.</p>
          <p>Serving Ireland with professional event production</p>
        </div>
      </div>
    </footer>
  )
}
