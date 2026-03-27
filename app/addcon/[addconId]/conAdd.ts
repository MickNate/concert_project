"use server";

import {createClient} from "@/utils/supabase/server";

export async function conAdd(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const user = formData.get("user") as string;
    const head = formData.get("head") as string;
    const other = formData.get("other") as string;
    const venue = formData.get("venue") as string;
    const tour = formData.get("tour") as string;
    const showdate = formData.get("showdate") as string;

    if((user == null) || (user == "")){
        return "Error: User doesn't exist."
    }
    if((head == null) || (head == "")){
        return "No input for headliner."
    }

    const supabase = await createClient();
    const { error } = await supabase
        .from('concert_users')
        .insert({ user_id: user, headliner: head, other_artists: other, tour_name: tour, venue: venue, date_of: showdate })

    if (error)
        return "Error: " + error.code + " : " + error.message;
    else
        return "Successfully created!";
}