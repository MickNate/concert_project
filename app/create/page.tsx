"use client"
import {creUser} from "@/app/create/creUser";
import {useActionState} from "react";

export default function Create(){

    const [error, action, isLoading] = useActionState(creUser, "");
    return (
        <div>
            <p>
                Welcome to Concert Project! Please fillout the information below to create your profile.
            </p>
            <p>
                <form action={action}>
                    <label htmlFor="username">Username:</label><br/>
                    <input type="text" id="username" name="username"/><br/>
                    <label htmlFor="password">Password:</label><br/>
                    <input type="text" id="password" name="password"/><br/>
                    <label htmlFor="verpassword">Verify Password:</label><br/>
                    <input type="text" id="verpassword" name="verpassword"/><br/><br/>
                    <button type="submit">
                        {isLoading ? "Creating..." : "Create"}
                    </button>

                    {error && <p>{error}</p>}
                </form>
            </p>
        </div>

    );

}