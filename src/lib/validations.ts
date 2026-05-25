import { z } from 'zod'

export const leadSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  company: z.string().max(200).optional(),
  role: z.string().max(100).optional(),
  email: z.string().email('Valid email required').optional().or(z.literal('')),
  whatsapp: z.string().max(20).optional(),
  country: z.string().max(100).optional(),
  buyer_type: z.string().max(100).optional(),
  service_interest: z.string().max(100).optional(),
  message: z.string().max(2000).optional(),
  consent: z.boolean().refine(v => v === true, 'Consent is required'),
  honeypot: z.string().max(0, 'Bot detected').optional(),
  utm_source: z.string().max(100).optional(),
  utm_medium: z.string().max(100).optional(),
  utm_campaign: z.string().max(100).optional(),
})

export const wroSchema = z.object({
  sector: z.string().min(1, 'Sector is required').max(200),
  exports_to_us: z.boolean(),
  uses_bangladeshi_workers: z.boolean(),
  has_fee_documentation: z.boolean(),
  has_worker_grievance_channel: z.boolean(),
  has_post_arrival_checkins: z.boolean(),
  company_name: z.string().max(200).optional(),
  contact_email: z.string().email().optional().or(z.literal('')),
  honeypot: z.string().max(0, 'Bot detected').optional(),
})

export type LeadInput = z.infer<typeof leadSchema>
export type WROInput = z.infer<typeof wroSchema>
