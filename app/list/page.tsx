import "./liststyle.css";

export default function List() {

    const users: string[] = ["first", "second", "third"];

    let baseUrl = "https://concert-project.vercel.app/profile/guestview/"

    return(
        <body>
        <h1>User List: </h1>
        <ul id="userList">
            {users.map((user, index) => (
                // Use a unique key for each item, the index can be used if the list is static
                <p>
                    <li key={index}><a href={getLink(user)}>{user}</a></li>
                    <br/></p>
            ))}
        </ul>
        </body>
    );

    function getLink(user:string){
        let fullUrl = baseUrl.concat(user)
        return fullUrl
    }


}