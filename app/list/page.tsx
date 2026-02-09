

export default function List() {

    const reptiles: string[] = ["alligator", "snake", "lizard"];

    return(
        <body>
        <h1>User List: </h1>
        <ul>
            {reptiles.map((reptile, index) => (
                // Use a unique key for each item, the index can be used if the list is static
                <li key={index}>{reptile}</li>
            ))}
        </ul>
        </body>
    );


}