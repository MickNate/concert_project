"use server";

import {createClient} from "@/utils/supabase/server";
import {Key} from "react";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export async function logoutCon(){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const cookieStore = await cookies();
    const logCookie = cookieStore.get('user');
    cookieStore.delete('user');

    redirect("https://concert-project.vercel.app/profile");

    return "Error: Page did no redirect";
}