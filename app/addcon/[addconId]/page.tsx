"use client";

import {useParams} from "next/navigation";

export default function AddCon() {
    const params = useParams<{ addconId: string }>()
    const userId = params.addconId;

    return(
        <body>
        <div>
            <p>Tell us about the concert you went to!</p>
        </div>
        <div>
            <form>
                <input type="hidden" id="user" name="user" value={userId}/>
                <label htmlFor="head">Headliner:</label><br/>
                <input type="text" id="head" name="head"/><br/>
                <label htmlFor="other">Other Artists:</label><br/>
                <input type="text" id="other" name="other"/><br/>
                <label htmlFor="tour">Tour:</label><br/>
                <input type="text" id="tour" name="tour"/><br/>
                <label htmlFor="showdate">Show date:</label>
                <input
                    type="date"
                    id="showdate"
                    name="showdate"
                    min="1900-01-01"
                    max="2030-12-31"/><br/>
                <label htmlFor="venue">Venue:</label><br/>
                <input type="text" id="venue" name="venue"/><br/>
                <button>Add</button>
            </form>
        </div>
        </body>
    );
}