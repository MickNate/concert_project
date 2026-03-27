"use server";

import {createClient} from "@/utils/supabase/server";

export async function conDel(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const delInput = formData.get("userinput") as string;
    const conId = formData.get("conparam") as string;
    const deleteMessage = "DELETE";

    if(delInput != deleteMessage)
        return "Error:" + delInput + "does not match DELETE"

    const supabase = await createClient();
    const { data, error } = await supabase
        .from('concert_concerts')
        .delete()
        .eq('concert_id', conId)

    if (error)
        return "Error: " + error.code + " : " + error.message;
    else
        return "Successfully deleted";
}