import { promises as fs } from 'fs';
import path from 'path'; // The 'path' module helps construct reliable file paths

export default async function Test() {
    // Construct the absolute path to your file
    const filePath = path.join(process.cwd(), 'member_list.json');

    // Read the file content
    const fileData = await fs.readFile(filePath, 'utf8');

    // Parse the JSON string into a JavaScript object
    const data = JSON.parse(fileData);

    return (
        <div>
            <h1>Name: {data.username}</h1>
            <p>Info: {data.info}</p>
            {/* Display the data as needed */}
        </div>
    );
}