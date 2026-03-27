"use client";

import {useActionState} from "react";
import {useParams} from "next/navigation";
import {conDel} from "@/app/deletecon/[deleteconId]/conDel";

export default function DeleteCon() {
    const params = useParams<{ deleteconId: string }>()
    const conId = params.deleteconId;

    //const [error, action, isLoading] = useActionState(conDel,"");
    // action={action}
    //{isLoading ? "Deleting..." : "Delete"}
    //{error && <p>{error}</p>}
    return(
        <body>
        <div>
            <h1>Are you sure you want to delete this concert?</h1>
        </div>
        <div>
            <form>
                <input type="hidden" id="conparam" name="conparam" value={conId}/>
                <label htmlFor="userinput">Type the word DELETE and click submit.</label>
                <input type="text" id="userinput" name="userinput">Type the message here</input>
                <button type="submit">Delete</button>
            </form>
        </div>
        </body>
    );
}