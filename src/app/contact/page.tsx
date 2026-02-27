import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get a free quote for audio, lighting or visual production services. We respond within 24 hours.',
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@teahansound.ie', href: 'mailto:info@teahansound.ie' },
  { icon: Phone, label: 'Phone', value: '+353 (0) 00 000 0000', href: 'tel:+353000000000' },
  { icon: MapPin, label: 'Based in', value: 'Kerry, Ireland', href: null },
  { icon: Clock, label: 'Response time', value: 'Within 24 hours', href: null },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading">Get in Touch</h1>
          <p className="section-subheading mx-auto">
            Tell us about your event and we'll put together a tailored production package. 
            No obligation, free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact info sidebar */}
          <div className="space-y-6">
            <div className="card-glass p-6">
              <h2 className="text-white font-semibold text-lg mb-6">Contact Information</h2>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs uppercase tracking-widest mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-slate-200 text-sm hover:text-blue-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-slate-200 text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-6">
              <h3 className="text-white font-semibold mb-3">What to Include</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                {[
                  'Event type and expected attendance',
                  'Venue name and location',
                  'Event date(s)',
                  'Services required (audio/lighting/visual)',
                  'Any specific technical requirements',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-glass p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/10 border-blue-500/20">
              <h3 className="text-white font-semibold mb-2">Urgent Enquiry?</h3>
              <p className="text-slate-400 text-sm mb-3">For time-sensitive bookings, call us directly.</p>
              <a href="tel:+353000000000" className="btn-primary text-sm py-2 w-full justify-center">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
