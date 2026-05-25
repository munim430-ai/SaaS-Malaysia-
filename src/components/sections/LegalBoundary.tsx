const dontItems = [
  'We do not recruit workers.',
  'We do not select candidates or shortlist workers.',
  'We do not promise jobs or migration outcomes.',
  'We do not collect payments from workers or families.',
  'We do not hold passports, visas, clearances, or original worker documents.',
  'We do not submit documents to BMET on behalf of workers.',
  'We do not act as a migration intermediary or sub-agent.',
  'We do not publish unverified accusations about agencies or employers.',
]

const doItems = [
  'Organise and format batch-level agency documentation',
  'Prepare compliance-ready file structures for employers',
  'Provide employer liaison communication support',
  'Run WRO/ESG risk banding assessments',
  'Support post-arrival welfare data collection',
  'Deliver private corridor intelligence updates',
]

function XIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-3 h-3 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  )
}

export function LegalBoundary() {
  return (
    <section className="py-20 bg-slate-900 text-white" id="legal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-3">Transparency</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">What Keystone Does Not Do</h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            Keystone works only as a{' '}
            <strong className="text-white">B2B documentation, compliance, data, and reporting service provider</strong>.
            {' '}Full stop.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {dontItems.map(item => (
            <div key={item} className="flex items-start gap-3 bg-white/5 hover:bg-white/8 border border-white/10 rounded-xl p-4 transition-colors">
              <XIcon />
              <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="bg-teal-900/20 border border-teal-700/50 rounded-2xl p-8">
          <h3 className="text-teal-400 font-bold text-lg mb-5">What Keystone Does Do</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {doItems.map(item => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
