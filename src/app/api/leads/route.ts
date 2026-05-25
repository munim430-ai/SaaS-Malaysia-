import { NextRequest, NextResponse } from 'next/server'
import { leadSchema } from '@/lib/validations'
import { createServerClient } from '@/lib/supabase'

const RATE_LIMIT_MAP = new Map<string, { count: number; reset: number }>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const window = 60_000
  const limit = 5
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

  const result = leadSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 422 })
  }

  const { honeypot, ...data } = result.data
  if (honeypot) {
    return NextResponse.json({ success: true })
  }

  const supabase = createServerClient()
  const { error } = await supabase.from('leads').insert({
    name: data.name,
    company: data.company || null,
    role: data.role || null,
    email: data.email || null,
    whatsapp: data.whatsapp || null,
    country: data.country || null,
    buyer_type: data.buyer_type || null,
    service_interest: data.service_interest || null,
    message: data.message || null,
    consent: data.consent,
    source: 'website',
    utm_source: data.utm_source || null,
    utm_medium: data.utm_medium || null,
    utm_campaign: data.utm_campaign || null,
    status: 'new',
  })

  if (error) {
    console.error('Supabase insert error:', error)
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
