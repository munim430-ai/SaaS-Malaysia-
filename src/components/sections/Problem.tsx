export function Problem() {
  const painPoints = [
    {
      title: 'Documentation Gaps',
      desc: 'Agencies struggle to maintain batch-level fee receipts, employment contracts, and welfare confirmations in a format that satisfies Malaysian employer or ESG auditor requests.',
    },
    {
      title: 'Fee Transparency Pressure',
      desc: 'Global buyers and HRO partners now require verifiable recruitment-fee documentation. Unverified costs create WRO exposure and supply-chain risk flags.',
    },
    {
      title: 'Post-Arrival Blind Spots',
      desc: 'Workers arrive but employers have no structured channel for welfare check-ins or issue escalation — creating liability and ESG reporting gaps.',
    },
    {
      title: 'Corridor Compliance Complexity',
      desc: 'Bangladesh–Malaysia labour corridor rules, BMET processes, and Malaysian employer compliance requirements are constantly evolving. Agencies and employers need a specialist documentation layer.',
    },
  ]
  return (
    <section className="py-20 bg-white" id="problem">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">The Challenge</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
            Why Documentation & Compliance Evidence Matters
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Malaysian employers and licensed agencies need clean documentation, batch-level visibility, fee transparency, and welfare evidence. Keystone provides the evidence layer — without acting as a recruiter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map(p => (
            <div key={p.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-teal-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
