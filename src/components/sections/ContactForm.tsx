'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink } from '@/lib/utils'

const BUYER_TYPES = [
  'Licensed Bangladeshi Agency',
  'Malaysian Employer',
  'HRO Partner',
  'ESG Consultant',
  'Other',
]

const SERVICE_INTERESTS = [
  'Agency Documentation BPO',
  'Employer Compliance Dashboard',
  'WRO / ESG Risk Scan',
  'Post-Arrival Welfare Data Support',
  'Corridor Intelligence Brief',
  'Partnership',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    whatsapp: '',
    country: '',
    buyer_type: '',
    service_interest: '',
    message: '',
    consent: false,
    honeypot: '',
  })

  function update(field: string, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setState('success')
      } else {
        setErrorMsg('Submission failed. Please try WhatsApp instead.')
        setState('error')
      }
    } catch {
      setErrorMsg('Network error. Please try WhatsApp instead.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <section className="py-20 bg-slate-50" id="contact">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white rounded-2xl border border-slate-200 p-12 shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Enquiry Received</h3>
            <p className="text-slate-600 mb-8">
              Thank you for your interest in Keystone Workforce Bridge. We will review your enquiry and respond within 1–2 business days.
            </p>
            <a
              href={getWhatsAppLink('Hello, I just submitted an enquiry through your website and would like to follow up.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="md">
                Follow Up on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">B2B Enquiry</h2>
          <p className="text-slate-600">
            For licensed agencies, Malaysian employers, HRO partners, and ESG teams only. We do not accept worker applications or individual migration enquiries.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <form onSubmit={handleSubmit} noValidate>
            {/* Honeypot */}
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute opacity-0 h-0 w-0 pointer-events-none"
              value={form.honeypot}
              onChange={e => update('honeypot', e.target.value)}
            />

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => update('name', e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Company / Organisation</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={e => update('company', e.target.value)}
                  placeholder="Your company"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Role / Title</label>
                <input
                  type="text"
                  value={form.role}
                  onChange={e => update('role', e.target.value)}
                  placeholder="Your role"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Country</label>
                <input
                  type="text"
                  value={form.country}
                  onChange={e => update('country', e.target.value)}
                  placeholder="Bangladesh / Malaysia / Other"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => update('email', e.target.value)}
                  placeholder="business@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">WhatsApp Number</label>
                <input
                  type="tel"
                  value={form.whatsapp}
                  onChange={e => update('whatsapp', e.target.value)}
                  placeholder="+60 or +880..."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">I am a...</label>
                <select
                  value={form.buyer_type}
                  onChange={e => update('buyer_type', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white"
                >
                  <option value="">Select type</option>
                  {BUYER_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Interest</label>
                <select
                  value={form.service_interest}
                  onChange={e => update('service_interest', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-white"
                >
                  <option value="">Select service</option>
                  {SERVICE_INTERESTS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={e => update('message', e.target.value)}
                placeholder="Describe your documentation or compliance need..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
              />
            </div>

            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={e => update('consent', e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-xs text-slate-500 leading-relaxed">
                  I confirm this is a B2B business enquiry. I consent to Keystone storing my contact information to respond to this enquiry. I understand Keystone is not a recruitment agency and does not accept worker applications. <span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            {errorMsg && (
              <div className="mb-4 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                {errorMsg}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={!form.name || !form.consent}
                loading={state === 'loading'}
                className="flex-1"
              >
                Submit B2B Enquiry
              </Button>
              <a
                href={getWhatsAppLink('Hello, I would like to discuss a B2B compliance or documentation service with Keystone Workforce Bridge.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="whatsapp" size="md" className="w-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Contact via WhatsApp
                </Button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
