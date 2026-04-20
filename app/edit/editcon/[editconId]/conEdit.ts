"use server";

import {createClient} from "@/utils/supabase/server";
import { cookies } from 'next/headers'

export async function conEdit(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const con = formData.get("con") as string;
    const head = formData.get("head") as string;
    const other = formData.get("other") as string;
    const venue = formData.get("venue") as string;
    const tour = formData.get("tour") as string;
    let showdate: null | string = formData.get("showdate") as string;

    if(con == null){
        return "Error: Concert doesn't exist."
    }

    if((head == null) || (head == "")){
        return "No input for headliner."
    }

    if(showdate == "")
        showdate = null

    const cookieStore = await cookies();
    const logCookie = cookieStore.get('id');
    const cookieValue = logCookie?.value

    const supabase = await createClient();

    //, other_artists: other, tour_name: tour, venue: venue, date_of: showdate

    const { error } = await supabase
        .from('concert_concerts')
        .update({ headliner: head, other_artists: other, tour_name: tour, date_of: showdate, venue: venue})
        .eq('conId', con)
        .select()

    if (error)
        return "Error: " + error.code + " : " + error.message + "Concert_id is " + {con};
    else
        return "Successfully updated concert for" + {head} + "!";
}