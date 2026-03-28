import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export default async function Profile() {

    const cookieStore = await cookies()
    const logCookie = cookieStore.get('user')
    const cookieValue = logCookie?.value

    if (cookieStore.has('user')) {
        redirect("https://concert-project.vercel.app/profile/ownerview/" + cookieValue);
    }
    else{
        redirect("https://concert-project.vercel.app/home");
    }

    return(
        <div>
            <p>This page does not exist.</p>
        </div>
    )

}