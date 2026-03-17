import { createClient } from '@supabase/supabase-js'

// ── Replace these two values with yours ──────────────────────
// Supabase Dashboard → Settings → API
const SUPABASE_URL      = 'https://YOUR_PROJECT_REF.supabase.co'
const SUPABASE_ANON_KEY = 'YOUR_ANON_PUBLIC_KEY'
// ─────────────────────────────────────────────────────────────

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
