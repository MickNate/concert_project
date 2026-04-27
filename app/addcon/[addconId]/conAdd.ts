"use server";

import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";

export async function conAdd(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const user = formData.get("user") as string;
    const head = formData.get("head") as string;
    const other = formData.get("other") as string;
    const genre =formData.get("genre") as string;
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

    const supabase = await createClient();
// lalala
    //, other_artists: other, tour_name: tour, venue: venue, date_of: showdate
    const { error } = await supabase
        .from('concert_concerts')
        .insert({ user_id: parseInt(user, 10), headliner: head, other_artists: other, tour_name: tour, date_of: showdate, venue: venue, genre: genre})
    if (error)
        return "Error: " + error.code + " : " + error.message + "User_id is " + {user};
    else {
        redirect("https://concert-project.vercel.app/profile/ownerview/");
        return "Successfully created concert for" + head + "!";
    }
}