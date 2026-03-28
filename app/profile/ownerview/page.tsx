import {cookies} from "next/headers";
import { redirect, RedirectType } from 'next/navigation'

export default async function OwnerView(){

    const cookieStore = await cookies()
    const logCookie = cookieStore.get('user')
    const cookieValue = logCookie?.value

    if(cookieStore.has('user')){
        redirect("https://concert-project.vercel.app/profile/ownerview" + cookieValue);
    }

    return (
        <p>
            This user does not exist.
        </p>
    );
}