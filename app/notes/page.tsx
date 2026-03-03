// @ts-expect-error because this is first time
import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
    const supabase = await createClient();
    const { data: notes } = await supabase.from("notes").select();

    return <pre>{JSON.stringify(notes, null, 2)}</pre>
}