import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function createServerClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const key = serviceRoleKey && serviceRoleKey !== 'your-service-role-key-here'
    ? serviceRoleKey
    : supabaseAnonKey
  return createClient(supabaseUrl, key)
}
