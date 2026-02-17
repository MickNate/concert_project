import { promises as fs } from 'fs';
import path from 'path';

export default async function Test() {
    const file = await fs.readFile(process.cwd() + '../../member_list.json', 'utf8');
    const data = JSON.parse(file);

    return (
        <div>
            <h1>{data.username}</h1>
            <p>{data.info}</p>
        </div>
    );
}