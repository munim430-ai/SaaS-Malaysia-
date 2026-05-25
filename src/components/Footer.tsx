import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'munimhasibul10@gmail.com'
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801941646278'
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/share/1CoLWmohp7/'

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/icon.png" alt="Keystone" width={32} height={32} className="rounded opacity-90" />
              <div>
                <p className="text-white font-bold text-sm">Keystone Workforce Bridge</p>
                <p className="text-teal-400 text-xs">B2B Compliance Documentation</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bangladesh–Malaysia labour corridor documentation, compliance reporting, employer liaison, and post-arrival welfare-data support for licensed agencies, Malaysian employers, HRO partners, and ESG teams.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Agency Documentation BPO</li>
              <li>Employer Compliance Dashboard</li>
              <li>WRO / ESG Risk Scan</li>
              <li>Post-Arrival Welfare Data Support</li>
              <li>Corridor Intelligence Brief</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href={`mailto:${email}`} className="hover:text-teal-400 transition-colors">{email}</a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  WhatsApp: +{whatsapp}
                </a>
              </li>
              <li>
                <a href={facebook} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                  Facebook Page
                </a>
              </li>
              <li className="text-slate-500 pt-1">Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 space-y-3">
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-400">Important Disclaimer:</strong> Keystone Workforce Bridge is a B2B documentation, compliance reporting, and welfare-data support provider. Keystone is NOT a recruitment agency, migration intermediary, or labour sub-agent. Keystone does not recruit workers, source candidates, collect worker fees, hold passports or original documents, or submit documents to BMET. All services are strictly B2B. Website information does not constitute legal advice.
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="/privacy" className="text-slate-400 hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-400 hover:text-teal-400 transition-colors">Terms & Disclaimer</Link>
            <span className="text-slate-600">© {new Date().getFullYear()} Keystone Education Consultancy. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
