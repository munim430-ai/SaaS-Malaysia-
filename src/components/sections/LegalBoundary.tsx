export function LegalBoundary() {
  const items = [
    { text: 'We do not recruit workers.', icon: '🚫' },
    { text: 'We do not select candidates or shortlist workers.', icon: '🚫' },
    { text: 'We do not promise jobs or migration outcomes.', icon: '🚫' },
    { text: 'We do not collect payments from workers or families.', icon: '🚫' },
    { text: 'We do not hold passports, visas, clearances, or original worker documents.', icon: '🚫' },
    { text: 'We do not submit documents to BMET on behalf of workers.', icon: '🚫' },
    { text: 'We do not act as a migration intermediary or sub-agent.', icon: '🚫' },
    { text: 'We do not publish unverified accusations about agencies or employers.', icon: '🚫' },
  ]

  return (
    <section className="py-20 bg-slate-900 text-white" id="legal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-3">Transparency</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">What Keystone Does Not Do</h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            Keystone works only as a <strong className="text-white">B2B documentation, compliance, data, and reporting service provider</strong>. Full stop.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
              <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
              <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-teal-900/30 border border-teal-700 rounded-xl p-6">
          <h3 className="text-teal-400 font-semibold mb-3 text-lg">What Keystone Does Do</h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
            {[
              'Organise and format batch-level agency documentation',
              'Prepare compliance-ready file structures for employers',
              'Provide employer liaison communication support',
              'Run WRO/ESG risk banding assessments',
              'Support post-arrival welfare data collection',
              'Deliver private corridor intelligence updates',
            ].map(item => (
              <div key={item} className="flex items-start gap-2">
                <svg className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
