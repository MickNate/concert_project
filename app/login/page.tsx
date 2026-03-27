'use client';

import {loginCon} from "@/app/login/loginconfirm";
import {useActionState} from "react";

export default function Login(){

    const [error, action, isLoading] = useActionState(loginCon, "");
    return (
        <div>
            <p>
                Welcome back to Concert Project! Please login below.<br/>
            </p>
            <p>
                <form action={action}>
                    <label id="usernameInput">Username: </label>
                    <input type="text" id="usernameInput" placeholder="Username here"/><br/>
                    <label id="passwordInput">Password: </label>
                    <input type="text" id="passwordInput" placeholder="Password here"/><br/>
                    <button type="submit">
                        {isLoading ? "Logging In..." : "Login"}
                    </button>
                    {error && <p>{error}</p>}
                </form>
            </p>
        </div>
    );



    function loginUser() {

      /*  let logUser = document.getElementById("usernameInput")
        let logPass = document.getElementById("passwordInput")

        if((logUser != null) && (logPass != null)){
            const baseUrl = "https://concert-project.vercel.app/check?"
            window.location.href = baseUrl.concat("user=",logUser.innerHTML,"&pass=",logPass.innerHTML)
        }*/

        alert("Serverside will be implemented later")
    }
}