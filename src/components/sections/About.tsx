import Image from 'next/image'

const credentials = [
  { label: 'Trade License', note: 'Registered business — available on request' },
  { label: 'TIN Certificate', note: 'Tax registered — available on request' },
  { label: 'Bangladesh Registered', note: 'Dhaka, Bangladesh' },
]

export function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Credibility</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">About Keystone</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A registered Bangladesh-based B2B company built for the Bangladesh–Malaysia labour corridor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: Brand + description */}
          <div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-6 flex items-center gap-6">
              <div className="flex-shrink-0 w-24 h-24 bg-white rounded-xl border border-slate-200 flex items-center justify-center shadow-sm overflow-hidden p-2">
                <Image
                  src="/images/logo-white.png"
                  alt="Keystone Workforce Bridge"
                  width={88}
                  height={44}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base leading-snug">Keystone Workforce Bridge</h3>
                <p className="text-teal-600 text-sm mt-0.5">Keystone Education Consultancy</p>
                <p className="text-xs text-slate-400 mt-1.5">Dhaka, Bangladesh · Est. 2024</p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">
              Keystone Education Consultancy is a registered Bangladesh-based company providing documentation workflow support, compliance reporting, and welfare-data services for the Bangladesh–Malaysia labour corridor.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              We serve licensed Bangladeshi agencies, Malaysian employers, HRO partners, and ESG consultants as a B2B documentation and compliance vendor — not as a recruiter, migration intermediary, or sub-agent.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-50 rounded-xl p-5 border border-teal-100 text-center">
                <p className="text-3xl font-extrabold text-teal-700 mb-1">B2B</p>
                <p className="text-xs text-teal-600 font-medium">Business-to-Business Only</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 text-center">
                <p className="text-3xl font-extrabold text-blue-700 mb-1">BD–MY</p>
                <p className="text-xs text-blue-600 font-medium">Bangladesh–Malaysia Corridor</p>
              </div>
            </div>
          </div>

          {/* Right: Founder + credentials */}
          <div className="space-y-5">

            <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-7 text-white">
              <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">Founder</p>
              <h4 className="text-xl font-bold text-white mb-1">Munim Hasibul</h4>
              <p className="text-sm text-slate-400 mb-4">Founder, Keystone Education Consultancy</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Munim Hasibul builds documentation workflows, automation systems, and corridor-compliance infrastructure for international education and workforce operations.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7">
              <h4 className="font-bold text-slate-900 mb-5">Business Verification</h4>
              <div className="space-y-4">
                {credentials.map(c => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{c.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{c.note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-5 pt-4 border-t border-slate-100">
                Business verification documents available to licensed partners and due-diligence requests on request.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
