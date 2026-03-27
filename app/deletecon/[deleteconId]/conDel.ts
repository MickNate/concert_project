"use server";

import {createClient} from "@/utils/supabase/server";

export async function conDel(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const delInput = formData.get("userinput") as string;
    const conId = formData.get("conparam") as string;

    if((delInput == null) || (delInput == "")){
        return "Error: No input received."
    }
    else{
        const supabase = await createClient();
        const { data, error } = await supabase
            .from('concert_concerts')
            .delete()
            .eq('concert_id', conId)
            .select()

        if(error) return "Error: Something went wrong";
        else return "The event was successfully deleted";
    }
}