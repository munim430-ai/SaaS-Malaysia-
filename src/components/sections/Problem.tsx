const painPoints = [
  {
    num: '01',
    title: 'Documentation Gaps',
    desc: 'Agencies struggle to maintain batch-level fee receipts, employment contracts, and welfare confirmations in a format that satisfies Malaysian employer or ESG auditor requests.',
  },
  {
    num: '02',
    title: 'Fee Transparency Pressure',
    desc: 'Global buyers and HRO partners now require verifiable recruitment-fee documentation. Unverified costs create WRO exposure and supply-chain risk flags.',
  },
  {
    num: '03',
    title: 'Post-Arrival Blind Spots',
    desc: 'Workers arrive but employers have no structured channel for welfare check-ins or issue escalation — creating liability and ESG reporting gaps.',
  },
  {
    num: '04',
    title: 'Corridor Compliance Complexity',
    desc: 'Bangladesh–Malaysia labour corridor rules, BMET processes, and Malaysian employer compliance requirements are constantly evolving. Agencies and employers need a specialist documentation layer.',
  },
]

export function Problem() {
  return (
    <section className="py-20 bg-slate-950 text-white" id="problem">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-3">The Challenge</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Why Documentation &amp; Compliance Evidence Matters
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Malaysian employers and licensed agencies need clean documentation, batch-level visibility, fee transparency, and welfare evidence. Keystone provides the evidence layer — without acting as a recruiter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map(p => (
            <div
              key={p.num}
              className="group relative bg-white/5 hover:bg-white/8 border border-white/10 hover:border-teal-500/40 rounded-2xl p-8 transition-all duration-300"
            >
              <span className="absolute top-6 right-6 text-6xl font-black text-white/5 group-hover:text-white/8 transition-colors select-none leading-none">
                {p.num}
              </span>
              <div className="relative">
                <div className="w-10 h-0.5 bg-teal-400 mb-5" />
                <h3 className="font-bold text-white text-lg mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
