"use server";

import { redirect } from 'next/navigation';
import {createClient} from "@/utils/supabase/server";

export async function bioEdit(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bio = formData.get("biobox") as string;
    if(bio == null){
        return "Please input something into the box."

    }
    else{
        const supabase = await createClient();
        const { data, error } = await supabase
            .from('concert_users')
            .update({ username: 'second'})
            .eq('bio_info', 'Testing if this updates the bio')
            .select()
        if (error)
            return "Error: " + error.code + " : " + error.message;
        else
            return "Successfully updated:" + data;
    }
}