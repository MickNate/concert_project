"use server";

import {createClient} from "@/utils/supabase/server";

export async function searchRes(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const artist = formData.get("value") as string;

    if(artist == null || artist == "")
        return "Nothing searched";

    const input = "'" + artist.replace(" ", "' & '") + "'";

    const supabase = await createClient();
    const {data: concert, error} = await supabase
        .from("concert_concerts")
        .select('user_id')
        .textSearch('headliner', input, {type: 'phrase', config: 'english'})

    if (error)
        return "Error for concert table: " + error.code + " : " + error.message;

    const {data: otherart} = await supabase
        .from("concert_concerts")
        .select('user_id')
        .textSearch('other_artists', input, {type: 'phrase', config: 'english'})

    if (error)
        return "Error for concert table.";

    const results = [];
    if(concert != null){
        for(let i = 0; i < concert.length; i++){
            results.push(concert[i].user_id);
        }
    }
    if(otherart != null){
        for(let j = 0; j < otherart.length; j++){
            if(results.includes(otherart[j].user_id))
                results.push(concert[j].user_id);
        }
    }

    if(results.length > 0)
        return "Nobody has attended a concert of this artist."



    return "Results are " + results;

}