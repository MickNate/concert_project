import { promises as fs } from 'fs';
import "./guestview.css";

export default async function GuestView( { params }: {
    params: Promise<{ guestviewId: string}>;
}){
    const guestviewID = (await params).guestviewId;

    const file = await fs.readFile('member_list.json', 'utf8');
    const data = JSON.parse(file);

    let user = data.find((item: { username: string; }) => item.username === guestviewID)

    return (
        <body>
        <div id="desc">
            <h1>
                User: {user.username}.
            </h1>
            <p>
                Bio: {user.info}
            </p>
        </div>
        <div id="conc">
            <ul>
                <li><p>Concert: {user.concerts[0].headliner}</p></li>
                <li><p>Tourname: {user.concerts[0].tourname}</p></li>
                <li><p>Venue: {user.concerts[0].venue}</p></li>
                <li><p>Date: {user.concerts[0].date}</p></li>
            </ul>
        </div>
        </body>
    );
}