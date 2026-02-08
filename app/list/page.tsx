import { promises as fs } from 'fs';

export default async function Page() {
    const file = await fs.readFile(process.cwd() + 'userdatabase.txt', 'utf8');

    return (
        <div>
            <h1>{file}</h1>
        </div>
    );
}