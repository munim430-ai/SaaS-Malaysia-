import { getWhatsAppLink } from '@/lib/utils'

const services = [
  {
    id: 'A',
    title: 'Agency Documentation BPO',
    icon: '📁',
    desc: 'Batch documentation organisation, receipt and ledger formatting, employer communication drafts, compliance file preparation, and report-ready documentation support for licensed agencies.',
    tags: ['Batch Organisation', 'Receipt Formatting', 'Compliance Files'],
    cta: 'Enquire for Agencies',
    waMsg: 'Hello, I am a licensed agency interested in the Agency Documentation BPO service.',
  },
  {
    id: 'B',
    title: 'Employer Compliance Dashboard',
    icon: '📊',
    desc: 'Lightweight batch visibility, documentation status tracking, risk notes, ESG-ready summaries, and procurement support for Malaysian HR and compliance teams.',
    tags: ['Batch Visibility', 'Risk Notes', 'ESG Summaries'],
    cta: 'Enquire for Employers',
    waMsg: 'Hello, I am a Malaysian employer interested in the Employer Compliance Dashboard service.',
  },
  {
    id: 'C',
    title: 'WRO / ESG Risk Scan',
    icon: '🔍',
    desc: 'Employer intake, documentation review, red/amber/green risk banding, and remediation checklist for recruitment-fee and labour-compliance exposure.',
    tags: ['Risk Banding', 'Remediation Checklist', 'ESG Ready'],
    cta: 'Request a Risk Scan',
    waMsg: 'Hello, I am interested in a WRO / ESG Risk Scan for my organisation.',
  },
  {
    id: 'D',
    title: 'Post-Arrival Welfare Data Support',
    icon: '🛡️',
    desc: 'Consent-based Bangla welfare check-ins after worker arrival, issue categorisation, and aggregate reporting for employers and ESG partners.',
    tags: ['Consent-Based', 'Bangla Check-Ins', 'Aggregate Reports'],
    cta: 'Learn More',
    waMsg: 'Hello, I am interested in Post-Arrival Welfare Data Support services.',
  },
  {
    id: 'E',
    title: 'Corridor Intelligence Brief',
    icon: '📰',
    desc: 'Private updates on Bangladesh–Malaysia labour corridor risk, documentation trends, compliance changes, and procurement signals for licensed partners.',
    tags: ['Corridor Updates', 'Compliance Signals', 'Private Brief'],
    cta: 'Subscribe to Brief',
    waMsg: 'Hello, I would like to subscribe to the Corridor Intelligence Brief.',
  },
]

export function Services() {
  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">B2B Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Keystone serves licensed agencies, Malaysian employers, HRO partners, and ESG consultants as a documentation and compliance support vendor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div
              key={s.id}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all flex flex-col"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {s.tags.map(t => (
                  <span key={t} className="text-xs bg-teal-50 text-teal-700 border border-teal-100 rounded-full px-2.5 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={getWhatsAppLink(s.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1.5 group"
              >
                {s.cta}
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
