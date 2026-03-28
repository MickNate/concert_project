"use server";

import { redirect } from 'next/navigation';
import {createClient} from "@/utils/supabase/server";
import {Key} from "react";
import { cookies } from 'next/headers'

export async function loginCon(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const username = formData.get("usernameInput") as string;
    const password = formData.get("passwordInput") as string;

    if((username == null) || (password == null)){
        return "Please input something into the boxes."
    }

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
            const cookieStore = await cookies();
            cookieStore.set('user', userKey.username, {secure: true})

            redirect(getLink(username))
            return "Login successful!"
        }
        else return "Username/Password do not match."

    function getLink(name:string){
         const baseUrl = "https://concert-project.vercel.app/profile/ownerview/"
         return baseUrl.concat(name)
    }
}