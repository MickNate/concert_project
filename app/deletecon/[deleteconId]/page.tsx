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
            <h1>Are you sure you want to delete concert {conId}?</h1>
        </div>
        </body>
    );
}