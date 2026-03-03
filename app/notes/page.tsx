import { createClient } from '@supabase/supabase-js'

export default async function Notes(){

// @ts-ignore
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

    const { data, error } = await supabase
    .from('todos')
    .select()

    const { data: notes } = await supabase.from("notes").select();

    return <pre>{JSON.stringify(notes, null, 2)}</pre>

}