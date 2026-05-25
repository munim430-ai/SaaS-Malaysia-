import { NextRequest, NextResponse } from 'next/server'
import { wroSchema } from '@/lib/validations'
import { createServerClient } from '@/lib/supabase'
import { computeWROBand } from '@/lib/utils'

const RATE_LIMIT_MAP = new Map<string, { count: number; reset: number }>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const window = 60_000
  const limit = 10
  const entry = RATE_LIMIT_MAP.get(ip)
  if (!entry || entry.reset < now) {
    RATE_LIMIT_MAP.set(ip, { count: 1, reset: now + window })
    return true
  }
  if (entry.count >= limit) return false
  entry.count++
  return true
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const result = wroSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 422 })
  }

  const { honeypot, company_name, contact_email, ...data } = result.data
  if (honeypot) {
    return NextResponse.json({ success: true, risk_band: 'low' })
  }

  const risk_band = computeWROBand(data)

  const supabase = createServerClient()

  let lead_id: string | null = null
  if (company_name || contact_email) {
    const { data: lead } = await supabase
      .from('leads')
      .insert({
        name: company_name || 'WRO Scan',
        email: contact_email || null,
        source: 'wro_calculator',
        consent: false,
        status: 'wro_scan',
      })
      .select('id')
      .single()
    if (lead) lead_id = lead.id
  }

  const { error } = await supabase.from('wro_exposure_submissions').insert({
    lead_id,
    sector: data.sector,
    exports_to_us: data.exports_to_us,
    uses_bangladeshi_workers: data.uses_bangladeshi_workers,
    has_fee_documentation: data.has_fee_documentation,
    has_worker_grievance_channel: data.has_worker_grievance_channel,
    has_post_arrival_checkins: data.has_post_arrival_checkins,
    risk_band,
    notes: null,
  })

  if (error) {
    console.error('WRO insert error:', error)
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
  }

  return NextResponse.json({ success: true, risk_band })
}
