'use client';

export default async function Login(){

    return (
        <div>
            <p>
                Welcome back to Concert Project! Please login below.<br/>
            </p>
            <p>
                <form>
                    <label id="usernameInput">Username: </label>
                    <input type="text" id="usernameInput" placeholder="Username here"/><br/>
                    <label id="passwordInput">Password: </label>
                    <input type="text" id="passwordInput" placeholder="Password here"/><br/>
                    <input type="button" value="Login" onClick={() => loginUser()}/>
                </form>
            </p>
        </div>
    );



    function loginUser() {

        let logUser = document.getElementById("usernameInput")
        let logPass = document.getElementById("passwordInput")

        if((logUser != null) && (logPass != null)){
            const baseUrl = "https://concert-project.vercel.app/check?"
            window.location.href = baseUrl.concat("user=",logUser.innerHTML,"&pass=",logPass.innerHTML)
        }
    }
}