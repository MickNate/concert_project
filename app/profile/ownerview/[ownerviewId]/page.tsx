
import {createClient} from "@/utils/supabase/server";
import {Key} from "react";

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

    const { data: concert} = await supabase.from("concert_concerts")
        .select()
        .eq('user_id',userKey.user_id)

    let concertEmpty = null

    if (concert == null){
        concertEmpty = "Nothing here yet!";
    }

    if (concert == null){
        return(
            <body>
            <p>No concerts</p>
            </body>
        )
    }

    const editBioLink = "https://concert-project.vercel.app/edit/editbio/" + userKey.username
    const addConLink = "https://concert-project.vercel.app/addcon/" + userKey.user_id


    return (
        <body>
        <div id="desc">
            <h1>
                User: {userKey.username}.
            </h1>
            <p>
                Bio: {userKey.bio_info}
            </p>
            <a href={editBioLink}>Edit Bio</a>
        </div>
        <div id="conc">
            <h1>Concert List:</h1>
            <ul id={"concertList"}>
                {concert.map((item: { concert_id: Key, user_id: Key; headliner: Key, venue: Key, other_artists: Key, date_of: Key, tour_name: Key}) => (
                    <li key ={item.user_id}>Headliner: {item.headliner}<br/>
                        Other Artists: {item.other_artists}<br/>
                        Tour: {item.tour_name}<br/>
                        Venue: {item.venue}<br/>
                        Date: {item.date_of}<br/>
                        <a href={getLink(String(item.concert_id))}>Delete Concert</a>
                        <br/>
                    </li>
                ))}
                <p>{concertEmpty}</p>
                <a href={addConLink}>Add Concert</a>
            </ul>
        </div>
        </body>
    );

    function getLink(user:Key){
        let stringURL = JSON.stringify(user)
        stringURL = stringURL.replace(/"/g, "");
        const baseUrl = "https://concert-project.vercel.app/deletecon/"
        return baseUrl.concat(stringURL)
    }
}