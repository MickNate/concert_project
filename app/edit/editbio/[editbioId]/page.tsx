"use client";

import {useActionState} from "react";
import {bioEdit} from "@/app/edit/editbio/[editbioId]/bioEdit";
import { useParams } from 'next/navigation';

export default function EditBio(){
    const params = useParams<{ editbioId: string }>()
    const bioId = params.editbioId;

    const [error, action, isLoading] = useActionState(bioEdit,"");

    return(
        <body>
        <div>
            <h1>Current Bio for {bioId}</h1>
        </div>
        <div>
            <form action={action}>
                <input type="hidden" id="bioparam" name="bioparam" value={bioId}/>
                <p><label htmlFor="edbio">When done, click submit.</label></p>
                <textarea id="biobox" name="biobox">Tell us about yourself!!</textarea>
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