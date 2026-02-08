import { promises as fs } from 'fs';
import path from 'path';

export default async function List() {
    const filePath = "C:/Users/unkno/OpenSourceWebTech/concert_project/app/userdatabase.txt"; // Get absolute path to the file
    const fileContents = await fs.readFile(filePath, 'utf8'); // Read file as a string

    return (
        <div>
            <h1>Current Users are:</h1>
            <pre>{fileContents}</pre>
        </div>
    );
}