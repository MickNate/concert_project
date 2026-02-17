import "./liststyle.css";

import { promises as fs } from 'fs';
import path from 'path';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export default async function List() {
    const file = await fs.readFile('member_list.json', 'utf8');
    const data = JSON.parse(file);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {data.map((item: { id: Key | null | undefined; username: Key; }) => (
                    <li key={item.id}>
                        <a href={getLink(item.username)}>{item.username}</a>
                    </li>
            ))}
            </ul>
        </div>
    );

    function getLink(user:Key){
        let stringURL = JSON.stringify(user)
        stringURL = stringURL.replace(/"/g, "");
        let baseUrl = "https://concert-project.vercel.app/profile/guestview/"
        let fullUrl = baseUrl.concat(stringURL)
        return fullUrl
    }
}