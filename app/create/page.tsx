'use client';
import {Key} from 'react';
import {createClient} from "@/utils/supabase/server";

export default function Create(){
    return (
        <div>
            <p>
                Welcome to Concert Project! Please fillout the information below to create your profile.
            </p>
            <p>
                <form>
                    <label htmlFor="username">Username:</label><br/>
                    <input type="text" id="username" name="username"/><br/>
                    <label htmlFor="password">Password:</label><br/>
                    <input type="text" id="password" name="password"/><br/>
                    <label htmlFor="verpassword">Verify Password:</label><br/>
                    <input type="text" id="verpassword" name="verpassword"/><br/><br/>
                    <input type="button" value="Create" onClick={() => testInput()}/>
                </form>
            </p>
        </div>

    );

    async function testInput(){
        const creUser = document.getElementById("username")
        const crePass = document.getElementById("password")
        const verPass = document.getElementById("verpassword")
        if((creUser != null) && (crePass != null) && (verPass != null)){
            if(crePass == verPass)
                await createUser(creUser.innerText,crePass.innerText);
            else{
                alert("Passwords do not match")
            }
        }
        else
            alert("Please make sure no boxes are blank.")
    }

    async function createUser(newUser: string, newPass: string) {

        const supabase = await createClient();

        const { error } = await supabase
            .from('concert_users')
            .insert({ username: newUser, password: newPass, bio_char: " "})

        window.location.href = "https://concert-project.vercel.app/profile/ownerview/" + newUser;

    }
}