import "./guestview.css";
import {createClient} from "@/utils/supabase/server";

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

    const valueExists = Object.values(user).includes(guestviewID);

    if (!valueExists){
        return(
            <body>
            <p>This user does not exist</p>
            </body>
        )
    }

    const userKey = user.find(person => person.username === guestviewID)

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