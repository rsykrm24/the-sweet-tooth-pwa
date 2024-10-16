import { createClient } from '@supabase/supabase-js'
import "dotenv/config"

const supabase = createClient(process.env.SUPABASE_LINK, process.env.SUPABASE_KEY)

export default supabase