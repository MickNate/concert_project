'use client';

export default async function Login(){

    let myObject = await fetch("member_list");
    let data = await myObject.json();

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

        let user = data.find((item: { name: string; password: string}) => item.name === JSON.stringify(logUser))

        if(user){
            // @ts-ignore
            nameMatch = (logUser.innerHTML == user.name)
            // @ts-ignore
            passMatch = (logPass.innerHTML == user.password)
            // @ts-ignore
            if(nameMatch && passMatch){
                // @ts-ignore
                let userInp = logUser.value
                let baseUrl = "https://concert-project.vercel.app/profile/ownerview/"
                let fullUrl = baseUrl.concat(userInp)
                window.location.href = fullUrl
            }
        }
        else{
            alert("Username and/or password incorrect.")
        }
    }
}