import "./liststyle.css";
import {Key} from 'react';
import {createClient} from "@/utils/supabase/server";

export default async function List() {
    const supabase = await createClient();
    const { data: users } = await supabase.from("concert_users").select('username');
    const userList = JSON.stringify(users)

    return (
        <div>
            <h1>User List</h1>
            {userList}
        </div>
    );

    function getLink(user:Key){
        let stringURL = JSON.stringify(user)
        stringURL = stringURL.replace(/"/g, "");
        const baseUrl = "https://concert-project.vercel.app/profile/guestview/"
        return baseUrl.concat(stringURL)
    }

    //<ul id={"userList"}>
    //                 {users.map((item: { id: Key | null | undefined; username: Key; }) => (
    //                     <li key={item.id}>
    //                         <a href={getLink(item.username)}>{item.username}</a>
    //                     </li>
    //  </ul>
    //             ))}
}