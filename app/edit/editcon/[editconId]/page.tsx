"use client";

import {useParams} from "next/navigation";
import {useActionState} from "react";
import {conEdit} from "@/app/edit/editcon/[editconId]/conEdit";

export default function EditCon() {
    const params = useParams<{ editconId: string }>()
    const conId = params.editconId;

    const [error, action, isLoading] = useActionState(conEdit, "");

    return(
        <body>
        <div>
            <p>Update the concert you went to!</p>
        </div>
        <div>
            <form action={action}>
                <input type="hidden" id="con" name="con" value={conId}/>
                <label htmlFor="head">Headliner:</label><br/>
                <input type="text" id="head" name="head"/><br/>
                <label htmlFor="other">Other Artists (please put a comma between each artist):</label><br/>
                <input type="text" id="other" name="other"/><br/>
                <label htmlFor="genre">Genre:</label><br/>
                <input type="text" id="genre" name="genre"/><br/>
                <label htmlFor="tour">Tour:</label><br/>
                <input type="text" id="tour" name="tour"/><br/>
                <label htmlFor="showdate">Show date:</label><br/>
                <input
                    type="date"
                    id="showdate"
                    name="showdate"
                    min="1900-01-01"
                    max="2030-12-31"/><br/>
                <label htmlFor="venue">Venue:</label><br/>
                <input type="text" id="venue" name="venue"/><br/>
                <button>{isLoading ? "Updating..." : "Update"}</button>
                {error && <p>{error}</p>}
            </form>
        </div>
        </body>
    );
}