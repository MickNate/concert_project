import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
    const supabase = await createClient();
    const { data: notes } = await supabase.from("concert_users").select('username');

    return <pre>{JSON.stringify(notes, null, 2)}</pre>
}