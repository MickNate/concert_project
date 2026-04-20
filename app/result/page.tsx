import {cookies} from "next/headers";

export default async function Result(){

    const cookieStore = await cookies()
    const searchCookie = cookieStore.get('search')
    const cookieValue = searchCookie?.value

    if(cookieStore.has('search')) {
        if (cookieValue != null) {
            const users = JSON.parse(cookieValue);
            function getList(userList: string){
                const display = ""
                const url = "https://concert-project.vercel.app/profile/guestview/"
                for(let i = 0; i < userList.length; i++){
                    display.concat(`<a href="${url}">${userList[i]}</a><br/>`)
                }
                return display;
            }
            return (
                <body>
                <div>
                    <ul id="foundUsers">
                        {getList(users)}
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