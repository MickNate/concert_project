import { promises as fs } from 'fs';
import path from 'path';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

export default async function Test() {
    const file = await fs.readFile('member_list.json', 'utf8');
    const data = JSON.parse(file);

    return (
        <div>
            <h1>Data from JSON File (Server)</h1>
            <ul>
                {data.map((item: { username: Key | null | undefined; info: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
                    <li key={item.username}>
                        <h2>{item.info}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}