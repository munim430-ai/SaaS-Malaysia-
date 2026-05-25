import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Disclaimer',
  description: 'Keystone Workforce Bridge terms of use and legal disclaimer.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-8">
          <Link href="/" className="text-teal-600 text-sm hover:underline">← Back to Home</Link>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-3">Terms of Use & Disclaimer</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: May 2025 | Keystone Education Consultancy / Keystone Workforce Bridge</p>

        <div className="space-y-8 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Nature of Services</h2>
            <p className="leading-relaxed">
              Keystone Workforce Bridge is a B2B documentation, compliance reporting, employer liaison, and welfare-data support provider. Keystone is:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm mt-3">
              <li><strong>Not a law firm</strong> and does not provide legal advice.</li>
              <li><strong>Not an auditor of record</strong> — Keystone outputs are not audit certifications, legal opinions, or regulatory determinations.</li>
              <li><strong>Not a recruitment agency</strong>, migration intermediary, labour sub-agent, or BMET-registered entity.</li>
              <li><strong>Not an HR outsourcing company</strong> that sources, screens, selects, or deploys workers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. No Legal Advice</h2>
            <p className="leading-relaxed">
              All information published on this website, including service descriptions, blog posts, tool outputs, and reports, is provided for general B2B informational purposes only. Nothing on this website constitutes legal advice, regulatory guidance, audit certification, or binding compliance determination.
            </p>
            <p className="leading-relaxed mt-3">
              You should consult qualified legal professionals, compliance auditors, and relevant regulatory authorities for binding advice on your specific situation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. WRO Exposure Calculator Disclaimer</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm leading-relaxed text-amber-800">
                <strong>Important:</strong> The WRO Exposure Calculator on this website is a preliminary business-risk screening tool only. It is not legal advice, audit certification, compliance verification, or a formal risk assessment. Calculator outputs are directional and non-binding. They do not constitute a representation that you are or are not compliant with any law, regulation, or buyer standard. Consult qualified legal and compliance professionals for binding assessments.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. No Recruitment Activity</h2>
            <p className="leading-relaxed">
              Keystone does not recruit workers, source candidates, shortlist applicants, promise migration outcomes, collect payments from workers or families, hold original migration documents, or act as a migration intermediary of any kind. Any party claiming to represent Keystone in a recruitment capacity is misrepresenting themselves.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. B2B Only</h2>
            <p className="leading-relaxed">
              Keystone&apos;s services are available exclusively to B2B clients: licensed Bangladeshi recruitment agencies, Malaysian employers, HRO partners, ESG consultants, and compliance teams. We do not provide services directly to individual workers, job seekers, or their families.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by applicable law, Keystone Education Consultancy shall not be liable for any direct, indirect, consequential, or incidental damages arising from the use of this website, reliance on information published here, or use of Keystone&apos;s tools and outputs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website including text, logos, graphics, and tool designs is the property of Keystone Education Consultancy and may not be reproduced without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Governing Law</h2>
            <p className="leading-relaxed">
              These terms are governed by the laws of Bangladesh. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Contact</h2>
            <p className="leading-relaxed">
              <a href="mailto:munimhasibul10@gmail.com" className="text-teal-600 hover:underline">munimhasibul10@gmail.com</a><br />
              Keystone Education Consultancy, Dhaka, Bangladesh
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
