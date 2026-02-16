export default function Login(){

    return (
        <p>
            Welcome back to Concert Project! Please login below.<br/>
            <label id="usernameInput">Username: </label>
            <input type="text" id="usernameInput" placeholder="Username here"/><br/>
            <label id="passwordInput">Password: </label>
            <input type="text" id="passwordInput" placeholder="Password here"/><br/>
            <input type="button" value="Login" onClick={() => loginUser()}/>
        </p>
    );

    function loginUser() {

        let logUser = document.getElementById("username")

        // @ts-ignore
        let userInp = logUser.value
        let baseUrl = "https://concert-project.vercel.app/profile/ownerview/"

        let fullUrl = baseUrl.concat(userInp)

        window.location.href = fullUrl
    }
}