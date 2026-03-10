import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
    const supabase = await createClient();
    const { data: users } = await supabase.from("concert_users").select('username');

    return <pre>{JSON.stringify(users, null, 2)}</pre>
}