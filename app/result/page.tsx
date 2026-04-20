import {cookies} from "next/headers";

export default async function Result(){

    const cookieStore = await cookies()
    const searchCookie = cookieStore.get('search')
    const cookieValue = searchCookie?.value

    if(cookieStore.has('search')) {
        if (cookieValue != null) {
            const users = JSON.parse(cookieValue);

            function getList(userList: string){
                let display = "";
                const url = "https://concert-project.vercel.app/profile/guestview/";
                for(let i = 0; i < userList.length; i++){
                    display += `<a href="${url}">${userList[i]}</a><br/>`;
                }
                return display;
            }

            return (
                <body>
                <div>
                    <p>Here&#39;s the users that searched for your artist!</p>
                    <ul id="foundUsers">
                        <li>{getList(users)}</li>
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