'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink } from '@/lib/utils'

type Answers = {
  sector: string
  exports_to_us: boolean | null
  uses_bangladeshi_workers: boolean | null
  has_fee_documentation: boolean | null
  has_worker_grievance_channel: boolean | null
  has_post_arrival_checkins: boolean | null
}

type RiskBand = 'low' | 'medium' | 'high' | null

const SECTORS = [
  'Garments / RMG / Textiles',
  'Electronics Manufacturing',
  'Palm Oil / Agriculture',
  'Construction',
  'Hospitality / F&B',
  'Logistics / Warehousing',
  'Healthcare',
  'Other Manufacturing',
  'Services / Other',
]

const BAND_CONFIG = {
  low: {
    label: 'Low Exposure',
    color: 'text-green-700',
    bg: 'bg-green-50 border-green-200',
    icon: '🟢',
    desc: 'Your preliminary answers suggest lower immediate WRO exposure. However, documentation gaps can appear during formal audits. A structured review can help maintain your compliance position.',
  },
  medium: {
    label: 'Medium Exposure',
    color: 'text-amber-700',
    bg: 'bg-amber-50 border-amber-200',
    icon: '🟡',
    desc: 'Your answers indicate potential documentation or process gaps that could create compliance risk. A private review is recommended to identify and address specific areas before an audit or buyer inquiry.',
  },
  high: {
    label: 'High Exposure',
    color: 'text-red-700',
    bg: 'bg-red-50 border-red-200',
    icon: '🔴',
    desc: 'Your answers suggest significant WRO or labour-compliance exposure. This band is associated with documentation deficits that can trigger buyer flags, supply-chain audits, or regulatory scrutiny. A private remediation review is strongly recommended.',
  },
}

export function WROCalculator() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({
    sector: '',
    exports_to_us: null,
    uses_bangladeshi_workers: null,
    has_fee_documentation: null,
    has_worker_grievance_channel: null,
    has_post_arrival_checkins: null,
  })
  const [result, setResult] = useState<RiskBand>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const questions = [
    {
      key: 'sector',
      label: 'What sector does your business operate in?',
      type: 'select',
    },
    {
      key: 'exports_to_us',
      label: 'Do you export to the U.S. or supply companies that do?',
      type: 'yesno',
    },
    {
      key: 'uses_bangladeshi_workers',
      label: 'Do you use Bangladeshi workers or source through Bangladeshi agencies?',
      type: 'yesno',
    },
    {
      key: 'has_fee_documentation',
      label: 'Do you have verified recruitment-fee documentation for your Bangladeshi workers?',
      type: 'yesno',
    },
    {
      key: 'has_worker_grievance_channel',
      label: 'Do workers have a functioning post-arrival grievance or check-in channel?',
      type: 'yesno',
    },
  ]

  const currentQ = questions[step]
  const isLastStep = step === questions.length - 1

  function handleSelect(value: string | boolean) {
    setAnswers(prev => ({ ...prev, [currentQ.key]: value }))
  }

  async function handleNext() {
    if (isLastStep) {
      await submit()
    } else {
      setStep(s => s + 1)
    }
  }

  async function submit() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/wro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sector: answers.sector,
          exports_to_us: answers.exports_to_us ?? false,
          uses_bangladeshi_workers: answers.uses_bangladeshi_workers ?? false,
          has_fee_documentation: answers.has_fee_documentation ?? false,
          has_worker_grievance_channel: answers.has_worker_grievance_channel ?? false,
          has_post_arrival_checkins: answers.has_post_arrival_checkins ?? false,
          honeypot: '',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setResult(data.risk_band)
        setStep(questions.length)
      } else {
        setError('Submission failed. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function reset() {
    setStep(0)
    setResult(null)
    setAnswers({
      sector: '',
      exports_to_us: null,
      uses_bangladeshi_workers: null,
      has_fee_documentation: null,
      has_worker_grievance_channel: null,
      has_post_arrival_checkins: null,
    })
  }

  const canProceed = () => {
    const val = answers[currentQ?.key as keyof Answers]
    if (currentQ?.type === 'select') return typeof val === 'string' && val.length > 0
    return val !== null
  }

  return (
    <section className="py-20 bg-white" id="wro-check">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Free Tool</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">WRO Exposure Check</h2>
          <p className="text-slate-600 leading-relaxed">
            A 5-question preliminary screen for recruitment-fee and labour-compliance exposure. Answer honestly for a useful result.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
          {result ? (
            <div className="space-y-6">
              <div className={`rounded-xl border p-6 ${BAND_CONFIG[result].bg}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{BAND_CONFIG[result].icon}</span>
                  <span className={`text-xl font-bold ${BAND_CONFIG[result].color}`}>
                    {BAND_CONFIG[result].label}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${BAND_CONFIG[result].color}`}>
                  {BAND_CONFIG[result].desc}
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-xs text-blue-700 leading-relaxed">
                <strong>Disclaimer:</strong> This is a preliminary business-risk screen, not legal advice, audit certification, or recruitment verification. This tool provides directional guidance only. Consult qualified legal or compliance professionals for binding assessments.
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink(`Hello, I ran the WRO exposure check and received a ${result.toUpperCase()} exposure band. I would like to discuss a private review.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="whatsapp" size="md" className="w-full">
                    Request a Private Review
                  </Button>
                </a>
                <Button variant="outline" size="md" onClick={reset} className="flex-1">
                  Run Again
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-slate-400">Question {step + 1} of {questions.length}</span>
                <div className="flex gap-1">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${i <= step ? 'bg-teal-500 w-8' : 'bg-slate-200 w-4'}`}
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-900">{currentQ?.label}</h3>

              {currentQ?.type === 'select' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SECTORS.map(sector => (
                    <button
                      key={sector}
                      onClick={() => handleSelect(sector)}
                      className={`text-left px-4 py-3 rounded-lg border text-sm transition-all ${
                        answers.sector === sector
                          ? 'border-teal-500 bg-teal-50 text-teal-800 font-medium'
                          : 'border-slate-200 hover:border-teal-300 text-slate-700'
                      }`}
                    >
                      {sector}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex gap-4">
                  {[true, false].map(val => (
                    <button
                      key={String(val)}
                      onClick={() => handleSelect(val)}
                      className={`flex-1 py-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                        answers[currentQ?.key as keyof Answers] === val
                          ? val
                            ? 'border-teal-500 bg-teal-50 text-teal-800'
                            : 'border-red-400 bg-red-50 text-red-700'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {val ? 'Yes' : 'No'}
                    </button>
                  ))}
                </div>
              )}

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <div className="flex gap-3 pt-2">
                {step > 0 && (
                  <Button variant="ghost" onClick={() => setStep(s => s - 1)} className="flex-shrink-0">
                    Back
                  </Button>
                )}
                <Button
                  variant="primary"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  loading={loading}
                  className="flex-1"
                >
                  {isLastStep ? 'Get My Result' : 'Next Question'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
