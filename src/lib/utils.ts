import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWhatsAppLink(message?: string) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8801941646278'
  const text = message || 'Hello, I am interested in Keystone Workforce Bridge services.'
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}

export function computeWROBand(answers: {
  exports_to_us: boolean
  uses_bangladeshi_workers: boolean
  has_fee_documentation: boolean
  has_worker_grievance_channel: boolean
  has_post_arrival_checkins: boolean
}): 'low' | 'medium' | 'high' {
  let score = 0
  if (answers.exports_to_us) score += 2
  if (answers.uses_bangladeshi_workers) score += 2
  if (!answers.has_fee_documentation) score += 2
  if (!answers.has_worker_grievance_channel) score += 1
  if (!answers.has_post_arrival_checkins) score += 1
  if (score <= 2) return 'low'
  if (score <= 5) return 'medium'
  return 'high'
}
