"use server";

import {createClient} from "@/utils/supabase/server";

export async function creUser(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const verpassword = formData.get("verpassword") as string;
    if((username != "") && (password != "") && (verpassword != "")){
        if(password == verpassword){
            const supabase = await createClient();
            const { error } = await supabase
                .from('concert_users')
                .insert({ username: username , password: password, bio_info: "Tell everyone about yourself!" })
            if (error)
                if (error.code == "23505")
                    return "Error: User already exists. Please try a new name";
                else return "Error: " + error.code + " : " + error.message;
            else{
                window.location.href = "https://concert-project.vercel.app/profile/ownerview/" + username;
            }
        }
        else{
            return "Error: Passwords do not match";
        }
    }
    else
        return "Error: Please make sure no boxes are blank.";
}