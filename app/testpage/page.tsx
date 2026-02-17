import { promises as fs } from 'fs';
import path from 'path';

export default async function Test() {
    const usernames = await getData();
    const userNamesU = document.querySelector("#usernames");

    for (const user of usernames){
        // @ts-ignore
        userNamesU.innerHTML += '<li>${user.username}</li>'
    }

    return (
        <ul id="usernames">

        </ul>
    );

    async function getData(){
        const res = await fetch("member_list.json");
        const data = await res.json()

        return data
    }
}