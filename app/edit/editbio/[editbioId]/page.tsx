"use client";

import {useActionState} from "react";
import {bioEdit} from "@/app/edit/editbio/[editbioId]/bioEdit";
import { useParams } from 'next/navigation'

export default function EditBio(){
    const params = useParams<{ editBioId: string }>()

    const [error, action, isLoading] = useActionState(bioEdit, "");
    return(
        <body>
        <div>
            <h1>Current Bio</h1>
        </div>
        <div>
            <form action={action}>
                <p><label htmlFor="edbio">When done, click submit.</label></p>
                <textarea id="biobox"></textarea>
                <br/>
                <button type="submit">
                    {isLoading ? "Updating..." : "Update"}
                </button>
                {error && <p>{error}</p>}
            </form>
        </div>
        </body>
    );
}