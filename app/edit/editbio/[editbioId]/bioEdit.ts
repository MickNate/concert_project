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
        const { error } = await supabase
            .from('concert_user')
            .update({ name: editBioID})
            .eq('bio_info', bio)
        if (error)
            return "Error: " + error.code + " : " + error.message;
    }
}