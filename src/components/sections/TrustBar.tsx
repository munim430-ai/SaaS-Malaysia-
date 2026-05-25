const doItems = [
  'Documentation Workflow Support',
  'Compliance Reporting',
  'Employer Liaison',
  'WRO / ESG Risk Scanning',
  'Welfare-Data Reporting',
]

const dontItems = [
  'Not a Recruitment Agency',
  'No Worker Fees Collected',
  'No Passport Handling',
  'No BMET Submissions',
]

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export function TrustBar() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">

          {/* What we do */}
          <div className="py-8 md:pr-10">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4">What We Provide</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2.5">
              {doItems.map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What we are NOT */}
          <div className="py-8 md:pl-10">
            <p className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-4">Important Boundaries</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2.5">
              {dontItems.map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CrossIcon />
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
