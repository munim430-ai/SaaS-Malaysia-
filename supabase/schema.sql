-- ============================================
-- Keystone Workforce Bridge Database Schema
-- Project: Keystone Education Consultancy
-- ============================================

-- leads table: B2B contact form submissions
CREATE TABLE IF NOT EXISTS public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  company text,
  role text,
  email text,
  whatsapp text,
  country text,
  buyer_type text,
  service_interest text,
  message text,
  consent boolean NOT NULL DEFAULT false,
  source text DEFAULT 'website',
  utm_source text,
  utm_medium text,
  utm_campaign text,
  status text DEFAULT 'new'
);

-- wro_exposure_submissions: WRO calculator results
CREATE TABLE IF NOT EXISTS public.wro_exposure_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  lead_id uuid REFERENCES public.leads(id),
  sector text,
  exports_to_us boolean,
  uses_bangladeshi_workers boolean,
  has_fee_documentation boolean,
  has_worker_grievance_channel boolean,
  has_post_arrival_checkins boolean,
  risk_band text,
  notes text
);

-- contact_events: analytics events
CREATE TABLE IF NOT EXISTS public.contact_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  event_type text,
  page_path text,
  metadata jsonb
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wro_exposure_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_events ENABLE ROW LEVEL SECURITY;

-- Service role full access (server-side only)
CREATE POLICY "service_role_all_leads" ON public.leads
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "service_role_all_wro" ON public.wro_exposure_submissions
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "service_role_all_events" ON public.contact_events
  FOR ALL USING (auth.role() = 'service_role');

-- Allow anon INSERT (API routes validate server-side before inserting)
CREATE POLICY "anon_insert_leads" ON public.leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "anon_insert_wro" ON public.wro_exposure_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "anon_insert_events" ON public.contact_events
  FOR INSERT WITH CHECK (true);
