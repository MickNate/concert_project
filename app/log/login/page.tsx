'use client';

import {loginCon} from "@/app/log/login/loginconfirm";
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
                    <input type="text" name="usernameInput" id="usernameInput" placeholder="Username here"/><br/>
                    <label id="passwordInput">Password: </label>
                    <input type="password" name="passwordInput" id="passwordInput" placeholder="Password here"/><br/>
                    <button type="submit">
                        {isLoading ? "Logging In..." : "Login"}
                    </button>
                    {error && <p>{error}</p>}
                </form>
            </p>
            <p>
                New user? <a href="../create">Click here</a> to create an account!
            </p>
        </div>
    );
}