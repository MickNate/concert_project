import "./guestview.css";
import {createClient} from "@/utils/supabase/server";
import {Key} from "react";
import {redirect} from "next/navigation";

export default async function GuestView( { params }: {
    params: Promise<{ guestviewId: string}>;
}){
    const guestviewID = (await params).guestviewId;

    const supabase = await createClient();
    const { data: user } = await supabase.from("concert_users").select();

    if (user == null){
        redirect("https://concert-project.vercel.app/profile/guestview");
    }

    const userKey = user.find(person => person.username === guestviewID)

    if (!userKey){
        return(
            <body>
            <p>This user does not exist</p>
            </body>
        )
    }

    let concertEmpty = null

    const { data: concert} = await supabase.from("concert_concerts")
        .select()
        .eq('user_id',userKey.user_id)

    if(concert == null)
        concertEmpty = "No concerts listed yet!"

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
                {concert.map((item: { user_id: Key; headliner: Key, venue: Key, other_artists: Key, date_of: Key, tour_name: Key}) => (
                    <li key ={item.user_id}>Headliner: {item.headliner}<br/>
                        Other Artists: {item.other_artists}<br/>
                        Tour: {item.tour_name}<br/>
                        Venue: {item.venue}<br/>
                        Date: {item.date_of}<br/>
                        <br/>
                    </li>
                ))}
                <p>{concertEmpty}</p>
            </ul>
        </div>
        </body>
    );
}