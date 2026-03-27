"use client";

import {useActionState} from "react";
import {useParams} from "next/navigation";
import {conDel} from "@/app/deletecon/[deleteconId]/conDel";

export default function DeleteCon() {
    const params = useParams<{ deleteconId: string }>()
    const conId = params.deleteconId;

    const [error, action, isLoading] = useActionState(conDel,"");
    return(
        <body>
        <div>
            <h1>Are you sure you want to delete this concert?</h1>
        </div>
        <div>
            <form action={action}>
                <input type="hidden" id="conparam" name="conparam" value={conId}/>
                <p><label htmlFor="delMess">Type the word &#34;DELETE&#34; and click submit.</label></p>
                <input type="text" id="userinput" name="userinput">Type the message here</input>
                <br/>
                <button type="submit">
                    {isLoading ? "Deleting..." : "Delete"}
                </button>
                {error && <p>{error}</p>}
            </form>
        </div>
        </body>
    );
}