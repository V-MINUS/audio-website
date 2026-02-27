'use client'

import { useActionState, useEffect, useRef } from 'react'
import { submitContactForm } from '@/lib/actions'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'

const serviceOptions = [
  { value: 'audio', label: 'Audio Services' },
  { value: 'lighting', label: 'Lighting Services' },
  { value: 'visual', label: 'Visual Services' },
  { value: 'stage', label: 'Stage & Set Services' },
  { value: 'both', label: 'Audio + Lighting' },
  { value: 'full', label: 'Full Production Package' },
]

const eventOptions = [
  { value: 'concert', label: 'Concert / Festival' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'school', label: 'School / Education' },
  { value: 'other', label: 'Other' },
]

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <div className="card-glass p-6 lg:p-8">
      <h2 className="text-white font-bold text-xl mb-2">Send us a Message</h2>
      <p className="text-slate-400 text-sm mb-8">All fields marked * are required. We'll respond within 24 hours.</p>

      {state?.success && (
        <div className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl p-4 mb-6">
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">Message sent successfully!</p>
            <p className="text-sm text-emerald-500/80 mt-1">
              Thank you for getting in touch. We'll get back to you within 24 hours. A confirmation has been sent to your email.
            </p>
          </div>
        </div>
      )}

      {state?.error && (
        <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4 mb-6">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="text-sm">{state.error}</p>
        </div>
      )}

      <form ref={formRef} action={action} className="space-y-5">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              className="input-field"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="input-field"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">
            Phone Number <span className="text-slate-500">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="input-field"
            placeholder="+353 00 000 0000"
          />
        </div>

        {/* Service + Event Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-1.5">
              Service Required *
            </label>
            <select id="service" name="service" required className="input-field">
              <option value="" disabled selected>Select a service...</option>
              {serviceOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="eventType" className="block text-sm font-medium text-slate-300 mb-1.5">
              Event Type *
            </label>
            <select id="eventType" name="eventType" required className="input-field">
              <option value="" disabled selected>Select event type...</option>
              {eventOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-slate-300 mb-1.5">
            Event Date <span className="text-slate-500">(optional)</span>
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            className="input-field"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={5}
            className="input-field resize-none"
            placeholder="Tell us about your event — venue, expected attendance, any special requirements..."
          />
        </div>

        {/* Privacy notice */}
        <p className="text-xs text-slate-500">
          By submitting this form you agree to being contacted about your enquiry. We will never share your details with third parties.
          View our{' '}
          <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a>.
        </p>

        <button
          type="submit"
          disabled={isPending}
          className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" /> Send Enquiry
            </>
          )}
        </button>
      </form>
    </div>
  )
}
