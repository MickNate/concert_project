import { promises as fs } from 'fs';
import {createClient} from "@/utils/supabase/server";

export default async function OwnerView( { params }: {
    params: Promise<{ ownerviewId: string}>;
}){
    const ownerviewID = (await params).ownerviewId;

    const supabase = await createClient();
    const { data: user } = await supabase.from("concert_users").select();

    if (user == null){
        return(
            <body>
            <p>This user does not exist</p>
            </body>
        )
    }

    const userKey = user.find(person => person.username === ownerviewID)

    if (!userKey){
        return(
            <body>
            <p>This user does not exist</p>
            </body>
        )
    }

    return (
        <body>
        <div id="desc">
            <h1>
                User: {userKey.username}.
            </h1>
            <p>
                Bio: {userKey.bio_info}
            </p>
        </div>
        <div id="conc">
            <ul>

            </ul>
        </div>
        </body>
    );
}