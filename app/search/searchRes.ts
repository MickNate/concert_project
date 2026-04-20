"use server";

import {createClient} from "@/utils/supabase/server";

export async function searchRes(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const artist = formData.get("value") as string;

    if(artist == null || artist == "")
        return "Nothing searched";
    else {
        const input = "'" + artist.replace(" ", "' & '") + "'";

        const supabase = await createClient();
        const {data: concert, error} = await supabase
            .from("concert_concerts")
            .select('user_id')
            .textSearch('headliner', input, {type: 'phrase', config: 'english'})
            .select('user_id')
            .textSearch('other_artists', input, {type: 'phrase', config: 'english'})

        if (error) {
            return "Error for concert table: " + error.code + " : " + error.message;
        }
        if(concert == null){
            return "No user appears to have attended this concert.";
        }

        else{
            return "We found " + concert.toString() + " attended.";
        }

    }

}