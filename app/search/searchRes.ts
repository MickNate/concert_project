"use server";

import {createClient} from "@/utils/supabase/server";

export async function searchRes(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const artist = formData.get("value") as string;
    if(artist == null || artist == "")
        return "Nothing searched";

    else{
        const supabase = await createClient();
        const { data: concert, error} = await supabase
            .from("concert_concerts")
            .select('user_id')
            .textSearch('*', artist)

        if(error){
            return "Error: " + error.code + " : " + error.message;
        }

        if(concert == null){
            return "No users found that have attended this artist."
        }
        else{
            const supabase = await createClient();
            const {data: user, error} = await supabase
                .from("concert_users")
                .select('username')
                .eq('user_id',concert)
            if(error){
                return "Error: " + error.code + " : " + error.message;
            }

            return user;
        }

    }
}