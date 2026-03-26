import {createClient} from "@/utils/supabase/server";
import {Key} from "react";

export default async function deleteCon( { params }: {
    params: Promise<{ deleteconId: string}>;
}) {

    const conId = (await params).deleteconId;

    const supabase = await createClient();

    const {data: user, error} = await supabase
        .from('concert_concerts')
        .delete()
        .eq('concert_id', parseInt(conId, 10))
        .select('user_id')

    if(user == null)
    return(
        <body>
        <p>This event does not exist.</p>
        </body>
    )

    const conKey = user.find(person => person.user_id === conId)

    if (!conKey){
        return(
            <body>
            <p>This user does not exist</p>
            </body>
        )
    }

    const { data: userInfo} = await supabase.from("concert_users")
        .select()
        .eq('user_id',conKey.user_id)

    if(userInfo == null)
        return(
            <body>
            <p>This event does not exist.</p>
            </body>
        )

    const userKey = userInfo.find(person => person.user_id === conId)

    return(
        <body>
        <div>
            <p>Concert deleted!</p><br/>
            <a href={getLink(userKey.username)}>Click here to return to your profile!</a>
        </div>
        </body>
    );

    function getLink(user:Key){
        let stringURL = JSON.stringify(user)
        stringURL = stringURL.replace(/"/g, "");
        const baseUrl = "https://concert-project.vercel.app/profile/ownerview/"
        return baseUrl.concat(stringURL)
    }
}