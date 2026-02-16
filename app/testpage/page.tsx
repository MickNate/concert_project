import { promises as fs } from 'fs';

export default async function Test(){
    const file = await fs.readFile(process.cwd() + 'member_list.json', 'utf8');
    const data = JSON.parse(file);

    return (
        <div>
            <p>{data.username}</p>
        </div>
    );
}