'use client';

import {logoutCon} from "@/app/log/logout/logoutconfirm";
import {useActionState} from "react";

export default function Logout(){

    const [error, action, isLoading] = useActionState(logoutCon, "");
    return (
        <div>
            <p>
                Need to leave? Click below! <br/>
            </p>
            <p>
                <form action={action}>
                    <button type="submit">
                        {isLoading ? "Logging Out..." : "Logout"}
                    </button>
                </form>
            </p>
        </div>
    );
}