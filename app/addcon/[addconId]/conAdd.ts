"use server";

import {createClient} from "@/utils/supabase/server";

export async function conAdd(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const user = formData.get("user") as string;
    const head = formData.get("head") as string;
    let other: null | string = formData.get("other") as string;
    const venue = formData.get("venue") as string;
    const tour = formData.get("tour") as string;
    let showdate: null | string = formData.get("showdate") as string;

    if(user == null){
        return "Error: User doesn't exist."
    }

    if((head == null) || (head == "")){
        return "No input for headliner."
    }

    if(showdate == "")
        showdate = null

    other = "{" + other + "}";

    const supabase = await createClient();

    //, other_artists: other, tour_name: tour, venue: venue, date_of: showdate
    const { error } = await supabase
        .from('concert_concerts')
        .insert({ user_id: parseInt(user, 10), headliner: head, other_artists: other, tour_name: tour, date_of: showdate, venue: venue})
    if (error)
        return "Error: " + error.code + " : " + error.message + "User_id is " + {user};
    else
        return "Successfully created!";
}