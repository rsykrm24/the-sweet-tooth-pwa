import { createClient } from '@supabase/supabase-js'
import "dotenv/config"

const supabase = createClient('https://ggjmyqjpvykbsijjvnzq.supabase.co', process.env.SUPABASE_KEY)

export default supabase