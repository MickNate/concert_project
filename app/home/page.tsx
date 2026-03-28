import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export default async function Home(){

    const cookieStore = await cookies()
    const logCookie = cookieStore.get('user')
    const cookieValue = logCookie?.value

    if (cookieStore.has('user'))
        return(
            <div>
                <p>Hey {cookieValue}! Update your profile or take a look at other users concert list!</p>
            </div>
        );
    else
        return (
            <div>
                <p>Welcome to Concert Project!</p>
                <p>Are you a returning user or a new user?</p>

                <a href="../create">
                    <button>New User</button>
                </a>
                <a href="../log/login">
                    <button>Returning User</button>
                </a>

            </div>
        );
}