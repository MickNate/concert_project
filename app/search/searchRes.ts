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

        if (error) {
            return "Error for concert table: " + error.code + " : " + error.message;
        }
        if(concert == null || concert.length == 0 ){
            return "No user appears to have attended this concert.";
        }

        else{
            const results = [];
            for(let i = 0; i < concert.length; i++){
                results.push(concert[i].user_id);
            }
            return "Results are " + results;
        }

    }

}