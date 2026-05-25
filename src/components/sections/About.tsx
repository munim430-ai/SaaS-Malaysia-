import Image from 'next/image'

export function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Credibility</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">About Keystone</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/images/icon.png"
                alt="Keystone Workforce Bridge"
                width={72}
                height={72}
                className="rounded-xl border border-slate-200"
              />
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Keystone Workforce Bridge</h3>
                <p className="text-teal-600 text-sm">Operating under Keystone Education Consultancy</p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              Keystone Education Consultancy is a registered Bangladesh-based company providing documentation workflow support, compliance reporting, and welfare-data services for the Bangladesh–Malaysia labour corridor.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              We serve licensed Bangladeshi agencies, Malaysian employers, HRO partners, and ESG consultants as a B2B documentation and compliance vendor — not as a recruiter, migration intermediary, or sub-agent.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-50 rounded-lg p-4 border border-teal-100">
                <p className="text-2xl font-bold text-teal-700 mb-1">B2B</p>
                <p className="text-xs text-teal-600">Business-to-Business Only</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-2xl font-bold text-blue-700 mb-1">BD–MY</p>
                <p className="text-xs text-blue-600">Bangladesh–Malaysia Corridor</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">Founder</h4>
              <p className="text-slate-700 font-semibold">Munim Hasibul</p>
              <p className="text-sm text-slate-500 mt-1">Founder, Keystone Education Consultancy</p>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Munim Hasibul is the founder of Keystone Education Consultancy, building documentation workflows, automation systems, and corridor-compliance infrastructure for international education and workforce operations.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4">Business Verification</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Trade License</p>
                    <p className="text-xs text-slate-500">Registered business — available on request</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-slate-700">TIN Certificate</p>
                    <p className="text-xs text-slate-500">Tax registered — available on request</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Bangladesh Registered</p>
                    <p className="text-xs text-slate-500">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">Business verification documents available to licensed partners and due-diligence requests on request.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
