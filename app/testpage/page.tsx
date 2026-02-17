import { promises as fs } from 'fs';
import path from 'path';

export default async function Test() {
    const file = await fs.readFile('member_lists.json', 'utf8');
    const data = JSON.parse(file);

    return (
        <div>
            <h1>Username: {data.username}</h1>
            <p>Info: {data.info}</p>
        </div>
    );
}