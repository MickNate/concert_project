"use server";
import {cookies} from "next/headers";
import { redirect, RedirectType } from 'next/navigation'

export default async function Log(){

    const cookieStore = await cookies()
    const logCookie = cookieStore.get('user')
    const cookieValue = logCookie?.value

    if(!cookieStore.has('user'))
        redirect("https://concert-project.vercel.app/log/login");
    else
        redirect("https://concert-project.vercel.app/log/logout");
}