

export default function List() {

    const users: string[] = ["first", "second", "third"];

    let baseUrl = "https://concert-project.vercel.app/profile/guestview/"

    return(
        <body>
        <h1>User List: </h1>
        <ul>
            {users.map((user, index) => (
                // Use a unique key for each item, the index can be used if the list is static
                <li key={index}>{getLink(user)}</li>
            ))}
        </ul>
        </body>
    );

    function getLink(user:string){
        let fullUrl = baseUrl.concat(user)
        return '<a href = "' + fullUrl + '">{user' + '}</a>'
    }


}