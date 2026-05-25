import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Keystone Workforce Bridge privacy policy — how we handle B2B contact data.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-8">
          <Link href="/" className="text-teal-600 text-sm hover:underline">← Back to Home</Link>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: May 2025 | Keystone Education Consultancy / Keystone Workforce Bridge</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Who We Are</h2>
            <p className="leading-relaxed">
              Keystone Workforce Bridge is a trading name operated by Keystone Education Consultancy, a registered company based in Dhaka, Bangladesh. We provide B2B documentation, compliance reporting, employer liaison, and welfare-data support services for the Bangladesh–Malaysia labour corridor.
            </p>
            <p className="leading-relaxed mt-3">
              We are not a recruitment agency, migration intermediary, or sub-agent. We do not collect or process worker recruitment data, passport data, visa files, medical records, or migration documents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. What Data We Collect</h2>
            <p className="leading-relaxed mb-3">We collect only B2B business contact data submitted through our website forms:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Name, company name, and job title</li>
              <li>Business email address</li>
              <li>WhatsApp / phone number</li>
              <li>Country of operation</li>
              <li>Type of organisation and service interest</li>
              <li>Message content from enquiry forms</li>
              <li>WRO exposure calculator answers (sector, yes/no answers — no PII)</li>
              <li>Referral source and UTM parameters (if applicable)</li>
            </ul>
            <p className="mt-3 text-sm text-slate-500">
              We do not collect: worker names, passport numbers, visa details, BMET clearance data, medical records, biometric data, or any individual worker personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Why We Collect It</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>To respond to B2B enquiries from licensed agencies, Malaysian employers, HRO partners, and ESG consultants</li>
              <li>To deliver requested services or follow up on service enquiries</li>
              <li>To improve our service offering based on aggregate enquiry patterns</li>
              <li>To maintain records of business relationships as required by Bangladeshi business law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. How We Store and Protect Data</h2>
            <p className="leading-relaxed">
              Contact data is stored in a secure Supabase PostgreSQL database hosted on AWS infrastructure in the Asia-Pacific region. Access is restricted to authorised personnel only. Row-level security policies prevent unauthorised access. We do not expose contact data publicly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Who We Share Data With</h2>
            <p className="leading-relaxed">
              We do not sell, rent, or share personal or business contact data with third parties for marketing purposes. Data may be shared only:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm mt-3">
              <li>With service infrastructure providers (Supabase, Vercel) under their own privacy policies</li>
              <li>If required by Bangladeshi law or court order</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Data Retention</h2>
            <p className="leading-relaxed">
              B2B contact data is retained for as long as the business relationship is active or until a deletion request is received. We review contact records periodically and remove stale leads that have not resulted in an active engagement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Your Rights</h2>
            <p className="leading-relaxed">
              You may request access to, correction of, or deletion of your contact data at any time. To make a request, email us at{' '}
              <a href="mailto:munimhasibul10@gmail.com" className="text-teal-600 hover:underline">munimhasibul10@gmail.com</a>
              {' '}with the subject line &quot;Data Request&quot;. We will respond within 10 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Cookies</h2>
            <p className="leading-relaxed">
              This website uses no third-party analytics cookies and no advertising trackers. Basic session functionality may use browser storage for form state only. No data is shared with advertising platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Contact</h2>
            <p className="leading-relaxed">
              For privacy enquiries: <a href="mailto:munimhasibul10@gmail.com" className="text-teal-600 hover:underline">munimhasibul10@gmail.com</a><br />
              Keystone Education Consultancy, Dhaka, Bangladesh
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
