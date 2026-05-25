import { getWhatsAppLink } from '@/lib/utils'

const services = [
  {
    num: '01',
    title: 'Agency Documentation BPO',
    color: 'from-teal-500 to-emerald-500',
    accent: 'bg-teal-50 text-teal-700 border-teal-100',
    desc: 'Batch documentation organisation, receipt and ledger formatting, employer communication drafts, compliance file preparation, and report-ready documentation support for licensed agencies.',
    tags: ['Batch Organisation', 'Receipt Formatting', 'Compliance Files'],
    cta: 'Enquire for Agencies',
    waMsg: 'Hello, I am a licensed agency interested in the Agency Documentation BPO service.',
  },
  {
    num: '02',
    title: 'Employer Compliance Dashboard',
    color: 'from-blue-500 to-indigo-500',
    accent: 'bg-blue-50 text-blue-700 border-blue-100',
    desc: 'Lightweight batch visibility, documentation status tracking, risk notes, ESG-ready summaries, and procurement support for Malaysian HR and compliance teams.',
    tags: ['Batch Visibility', 'Risk Notes', 'ESG Summaries'],
    cta: 'Enquire for Employers',
    waMsg: 'Hello, I am a Malaysian employer interested in the Employer Compliance Dashboard service.',
  },
  {
    num: '03',
    title: 'WRO / ESG Risk Scan',
    color: 'from-amber-500 to-orange-500',
    accent: 'bg-amber-50 text-amber-700 border-amber-100',
    desc: 'Employer intake, documentation review, red/amber/green risk banding, and remediation checklist for recruitment-fee and labour-compliance exposure.',
    tags: ['Risk Banding', 'Remediation Checklist', 'ESG Ready'],
    cta: 'Request a Risk Scan',
    waMsg: 'Hello, I am interested in a WRO / ESG Risk Scan for my organisation.',
  },
  {
    num: '04',
    title: 'Post-Arrival Welfare Data Support',
    color: 'from-violet-500 to-purple-500',
    accent: 'bg-violet-50 text-violet-700 border-violet-100',
    desc: 'Consent-based Bangla welfare check-ins after worker arrival, issue categorisation, and aggregate reporting for employers and ESG partners.',
    tags: ['Consent-Based', 'Bangla Check-Ins', 'Aggregate Reports'],
    cta: 'Learn More',
    waMsg: 'Hello, I am interested in Post-Arrival Welfare Data Support services.',
  },
  {
    num: '05',
    title: 'Corridor Intelligence Brief',
    color: 'from-rose-500 to-pink-500',
    accent: 'bg-rose-50 text-rose-700 border-rose-100',
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

        <div className="text-center mb-14">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">Five B2B Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Keystone serves licensed agencies, Malaysian employers, HRO partners, and ESG consultants as a documentation and compliance support vendor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div
              key={s.num}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${s.color}`} />

              <div className="p-7 flex flex-col flex-1">
                {/* Number */}
                <span className="text-5xl font-black text-slate-100 group-hover:text-slate-150 leading-none mb-4 select-none transition-colors">
                  {s.num}
                </span>

                <h3 className="font-bold text-slate-900 text-lg mb-3 leading-snug">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {s.tags.map(t => (
                    <span key={t} className={`text-xs border rounded-full px-2.5 py-0.5 font-medium ${s.accent}`}>
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={getWhatsAppLink(s.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-teal-700 group-hover:gap-2.5 transition-all"
                >
                  {s.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* B2B Only card */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl border border-slate-800 p-7 flex flex-col justify-between text-white">
            <div>
              <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">All Services Are</p>
              <h3 className="text-2xl font-extrabold mb-4">Strictly B2B</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                No services are available to individual workers or job seekers. Keystone does not recruit, source candidates, collect worker fees, hold passports, or submit documents to BMET.
              </p>
            </div>
            <div className="mt-8 space-y-2">
              {['Licensed Agencies', 'Malaysian Employers', 'HRO Partners', 'ESG Consultants'].map(c => (
                <div key={c} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-300">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
