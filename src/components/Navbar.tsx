'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ShoppingCart, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  { label: 'Audio Services', href: '/services/audio' },
  { label: 'Lighting Services', href: '/services/lighting' },
  { label: 'Visual Services', href: '/services/visual' },
  { label: 'Stage & Set Services', href: '/services/stage-set' },
]

const eventSolutions = [
  { label: 'Concerts & Festivals', href: '/events/concerts-festivals' },
  { label: 'Corporate', href: '/events/corporate' },
  { label: 'Schools / Education', href: '/events/schools' },
  { label: 'Weddings', href: '/events/weddings' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-white text-sm lg:text-base leading-tight">
              Teahan Pro<br className="hidden sm:block" />
              <span className="text-blue-400">Audio & Lighting</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="nav-link flex items-center gap-1 px-3 py-2 rounded-md hover:bg-slate-800">
                Services <ChevronDown className={cn('w-4 h-4 transition-transform', servicesOpen && 'rotate-180')} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-1.5 z-50">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Events dropdown */}
            <div className="relative" onMouseEnter={() => setEventsOpen(true)} onMouseLeave={() => setEventsOpen(false)}>
              <button className="nav-link flex items-center gap-1 px-3 py-2 rounded-md hover:bg-slate-800">
                Event Solutions <ChevronDown className={cn('w-4 h-4 transition-transform', eventsOpen && 'rotate-180')} />
              </button>
              {eventsOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-1.5 z-50">
                  {eventSolutions.map((e) => (
                    <Link key={e.href} href={e.href} className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
                      {e.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/projects" className="nav-link px-3 py-2 rounded-md hover:bg-slate-800">Projects</Link>
            <Link href="/blog" className="nav-link px-3 py-2 rounded-md hover:bg-slate-800">Blog</Link>
            <Link href="/about" className="nav-link px-3 py-2 rounded-md hover:bg-slate-800">About</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/shop" className="nav-link px-3 py-2 flex items-center gap-1.5 hover:text-white">
              <ShoppingCart className="w-4 h-4" /> Shop
            </Link>
            <Link href="/contact" className="btn-primary text-sm py-2">
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 pb-6">
          <div className="max-w-7xl mx-auto px-4 pt-4 space-y-1">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 pb-2">Services</p>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="block px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-sm transition-colors">
                {s.label}
              </Link>
            ))}
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 pb-2 pt-4">Event Solutions</p>
            {eventSolutions.map((e) => (
              <Link key={e.href} href={e.href} className="block px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-sm transition-colors">
                {e.label}
              </Link>
            ))}
            <div className="pt-4 space-y-1 border-t border-slate-800 mt-4">
              {[
                { href: '/projects', label: 'Projects' },
                { href: '/blog', label: 'Blog' },
                { href: '/about', label: 'About' },
                { href: '/shop', label: 'Shop' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block px-3 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
              <div className="pt-3">
                <Link href="/contact" className="btn-primary w-full justify-center text-sm">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
