"use server";

import { redirect } from 'next/navigation';
import {createClient} from "@/utils/supabase/server";

export async function loginCon(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    if((username != null) && (password != null)){
        const supabase = await createClient();
        const { data: user } = await supabase
            .from("concert_users")
            .select();
        if(user == null){
            return "Error: Something went wrong with the server";
        }
        const userKey = user.find(person => person.username === username)

        if(userKey == null){
            return "Error: User does not exist. Please check spelling."
        }
        if((userKey.username === username) && (userKey.password === password)){
            return "Login successful!"
        }
        else return "Username/Password do not match."
    }
    else return "Placeholder";
}