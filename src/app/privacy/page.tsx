import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Teahan Pro Audio & Lighting website.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-heading mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: January 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-lg mb-3">1. Who We Are</h2>
            <p>
              Teahan Pro Audio & Lighting (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a professional event production company
              based in Kerry, Ireland. Our website address is teahansound.ie.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">2. Data We Collect</h2>
            <p>When you use our contact form, we collect:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-slate-400">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number (if provided)</li>
              <li>Details of your event enquiry</li>
            </ul>
            <p className="mt-3">
              We also collect standard server logs (IP address, browser type, pages visited) for security
              and analytics purposes. We do not use third-party advertising trackers.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">3. How We Use Your Data</h2>
            <p>We use your data solely to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Respond to your enquiry and provide a quote</li>
              <li>Send you a confirmation of your submission</li>
              <li>Communicate with you about your event</li>
            </ul>
            <p className="mt-3">
              We will never sell, rent or share your personal data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">4. Legal Basis (GDPR)</h2>
            <p>
              Under GDPR (EU Regulation 2016/679), we process your data on the basis of{' '}
              <strong className="text-slate-300">legitimate interest</strong> (responding to your enquiry)
              and <strong className="text-slate-300">contractual necessity</strong> (where we proceed to
              provide services). You have the right to withdraw consent at any time.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">5. Data Retention</h2>
            <p>
              Enquiry data is retained for up to 2 years to support ongoing client relationships and
              business records. After this period, personal data is securely deleted.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">6. Your Rights</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Lodge a complaint with the Data Protection Commission (dataprotection.ie)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">7. Security</h2>
            <p>
              Our website uses HTTPS encryption. Form submissions are validated server-side and transmitted
              securely. We implement rate limiting and input sanitisation to protect against abuse.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">8. Contact</h2>
            <p>
              For any privacy-related requests, contact us at{' '}
              <a href="mailto:info@teahansound.ie" className="text-blue-400 hover:underline">
                info@teahansound.ie
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
