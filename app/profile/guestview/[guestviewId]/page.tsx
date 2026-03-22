import "./guestview.css";
import {createClient} from "@/utils/supabase/server";
import {Key} from "react";

export default async function GuestView( { params }: {
    params: Promise<{ guestviewId: string}>;
}){
    const guestviewID = (await params).guestviewId;

    const supabase = await createClient();
    const { data: user } = await supabase.from("concert_users").select();

    if (user == null){
        return(
            <body>
            <p>This user does not exist</p>
            </body>
        )
    }

    const userKey = user.find(person => person.username === guestviewID)

    if (!userKey){
        return(
            <body>
            <p>This user does not exist</p>
            </body>
        )
    }

    const { data: concert} = await supabase.from("concert_concerts")
        .select()
        .eq('user_id',userKey.user_id)

    if (concert == null){
        return(
            <body>
            <p>No concerts</p>
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
            <h1>Concert List:</h1>
            <ul id={"concertList"}>
                {concert.map((item: { user_id: Key; headliner: Key}) => (
                    <li key ={item.user_id}>{item.headliner}</li>
                ))}
            </ul>
        </div>
        </body>
    );
}