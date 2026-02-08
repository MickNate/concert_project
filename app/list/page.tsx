import { promises as fs } from 'fs';

export default async function List() {
    const file = await fs.readFile('userdatabase.txt', 'utf8');

    return (
        <div>
            <h1>{file}</h1>
        </div>
    );
}