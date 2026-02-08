import { promises as fs } from 'fs';

export default function List() {
    const file = fs.readFile('userdatabase.txt');

    return (
        <div>
            <h1>{file}</h1>
        </div>
    );
}