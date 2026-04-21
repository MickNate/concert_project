"use server";

import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import { cookies } from 'next/headers'

export async function conDel(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const delInput = formData.get("input") as string;
    const conId = formData.get("conparam") as string;
    const deleteMessage = "DELETE";

    const cookieStore = await cookies();
    const logCookie = cookieStore.get('user')
    const cookieValue = logCookie?.value

    if(!cookieStore.has('user')){
        redirect("https://concert-project.vercel.app/profile/ownerview/")
        return "You do not have access to this event."
    }

    if(delInput != deleteMessage)
        return "Error: " + delInput + " does not match DELETE"

    const supabase = await createClient();
    const { data, error } = await supabase
        .from('concert_concerts')
        .delete()
        .eq('concert_id', conId)

    if (error)
        return "Error: " + error.code + " : " + error.message;
    else {
        redirect("https://concert-project.vercel.app/profile/ownerview/");
        return "Successfully deleted";
    }
}