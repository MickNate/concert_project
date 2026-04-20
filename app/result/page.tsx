import {cookies} from "next/headers";
import {Key} from "react";

export default async function Result(){

    const cookieStore = await cookies()
    const searchCookie = cookieStore.get('search')
    const cookieValue = searchCookie?.value

    if(cookieStore.has('search')) {
        if (cookieValue != null) {
            const users = JSON.parse(cookieValue);

            function getLink(input: string){
                const baseUrl = "https://concert-project.vercel.app/profile/guestview/"
                return baseUrl.concat(input)
            }

            return (
                <body>
                <div>
                    <p>Here&#39;s the users that searched for your artist!</p>
                    <ul>
                        {users.map((user : string) => (
                            <li key={user}>
                                <a href={`/${user}`}>
                                    {user}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                </body>
            );
        }
    }
    else{
        return(
            <body>
            <div>
                <p>You didn&#39;t search for anything.</p>
            </div>
            </body>
        );
    }

}