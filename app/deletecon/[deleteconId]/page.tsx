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
            <p>Are you sure you want to delete concert {conId}?</p>
        </div>
        <div>
            <form>
                <label htmlFor="input">Type the word DELETE in the box to finalize deletion.</label>
                <input type="text" id="input" name="input"/><br/>
                <button>Delete</button>
            </form>
        </div>
        </body>
    );
}