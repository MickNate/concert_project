"use server";

import { redirect } from 'next/navigation';
import {createClient} from "@/utils/supabase/server";

export async function bioEdit(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bio = formData.get("biobox") as string;
    const bioId = formData.get("bioparam") as string;
    if((bio == null) || (bio =="")){
        return "Please input something into the box.";
    }
    else{
        const supabase = await createClient();
        const { data, error } = await supabase
            .from('concert_users')
            .update({ bio_info: bio})
            .eq('username', bioId)
            .select()

        if (error)
            return "Error: " + error.code + " : " + error.message;
        else {
            redirect("https://concert-project.vercel.app/profile/ownerview/");
            return "Successfully updated:" + {data};
        }
    }
}