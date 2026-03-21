import "./liststyle.css";
import {Key} from 'react';
import {createClient} from "@/utils/supabase/server";

export default async function List() {
    const supabase = await createClient();
    const { data: users } = await supabase.from("concert_users").select('username');
    //const userList = JSON.stringify(users)
    if (users != null){
        return (
            <div>
                <h1>User List</h1>
                <ul id={"userList"}>
                    {users.map((item: { username: Key; }) => (
                        <li key={item.username}>
                            <a href={getLink(item.username)}>{item.username}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    if (users == null){
        return (
            <div>
                <h1>User List:</h1>
                <p>No users currently.</p>
            </div>
        )
    }


    function getLink(user:Key){
        let stringURL = JSON.stringify(user)
        stringURL = stringURL.replace(/"/g, "");
        const baseUrl = "https://concert-project.vercel.app/profile/guestview/"
        return baseUrl.concat(stringURL)
    }
}