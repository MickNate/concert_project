import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {createClient} from "@/utils/supabase/server";
import {Key} from "react";
import "./homestyle.css";

export default async function Home(){

    const cookieStore = await cookies()
    const logCookie = cookieStore.get('user')
    const cookieValue = logCookie?.value

    const supabase = await createClient();
    const { data: entry } = await supabase
        .from("concert_concerts")
        .select()
        .order("created_at", {ascending: false})
        .limit(5)

    if(entry == null)
        return(
            <p>Error accessing database</p>
        )

    if (cookieStore.has('user'))
        return(
            <body>
                <div>
                    <p>Hey {cookieValue}!</p>
                </div>
                <div>
                    <p>Here is the latest news from other concert fans! Why not add your own latest?</p>
                    <a href="../addcon"><button>Add Concert</button></a><br/>
                    <ul id="latestPosts">
                        {entry.map((item: { concert_id: Key, date_of: Key, headliner: Key,
                            tour_name: Key, other_artists: Key, venue: Key}) => (
                            <li key={item.concert_id}>
                                <br/>
                                Headliner: {item.headliner}<br/>
                                Other Artists: {item.other_artists}<br/>
                                Tour: {item.tour_name}<br/>
                                Venue: {item.venue}<br/>
                                Date: {item.date_of}<br/>
                                <br/>
                            </li>
                        ))}
                    </ul>
                </div>
            </body>
        );
    else
        return (
            <body>
            <div>
                    <p>Welcome to Concert Project!</p>
                    <p>Are you a returning user or a new user?</p>

                    <a href="../create">
                        <button>New User</button>
                    </a>
                    <a href="../log/login">
                        <button>Returning User</button>
                    </a>
                </div>
            <div>
                <p>Here is the latest news from other concert fans!</p>
                <ul id="latestPosts">
                    {entry.map((item: { concert_id: Key, date_of: Key, headliner: Key,
                        tour_name: Key, other_artists: Key, venue: Key}) => (
                        <li key={item.concert_id}>
                            Headliner: {item.headliner}<br/>
                            Other Artists: {item.other_artists}<br/>
                            Tour: {item.tour_name}<br/>
                            Venue: {item.venue}<br/>
                            Date: {item.date_of}<br/>
                        </li>
                    ))}
                </ul>
            </div>
            </body>
        );
}