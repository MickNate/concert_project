"use server";

import {createClient} from "@/utils/supabase/server";

export async function searchRes(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const artist = formData.get("value") as string;

    if(artist == null || artist == "")
        return "Nothing searched";
    else{
        const input =  "'" + artist.replace(" ", " & ") + "'";

        const supabase = await createClient();
        const { data: concert, error} = await supabase
            .from("concert_concerts")
            .select('user_id')
            .textSearch('headliner', input, { type: 'phrase', config: 'english'})
            .select('user_id')
            .textSearch('other_artists', input, { type: 'phrase', config: 'english'})

        if(error){
            return "Error for concert table: " + error.code + " : " + error.message;
        }

        console.log("Made it pass the concert table.");

        if(concert == null){
            return "No users found that have attended this artist.";
        }
        else{
            const supabase = await createClient();

            console.log("Starting the user table.");

            const found = [];

            for (let i = 0; i < concert.length; i++) {
                const {data: user, error} = await supabase
                    .from("concert_users")
                    .select('username')
                    .eq('user_id',concert[i].user_id)
                if(user != null)
                    found.push(user.toString())
                if(error){
                    return "Error for user table: " + error.code + " : " + error.message;
                }
            }
            console.log("Made it pass the user table.");

            return "The output is " + found[0];
        }

    }
}