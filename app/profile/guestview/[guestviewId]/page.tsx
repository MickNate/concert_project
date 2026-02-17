import { promises as fs } from 'fs';

export default async function GuestView( { params }: {
    params: Promise<{ guestviewId: string}>;
}){
    const guestviewID = (await params).guestviewId;

    const file = await fs.readFile('member_list.json', 'utf8');
    const data = JSON.parse(file);

    let user = data.find((item: { username: string; }) => item.username === guestviewID)

    return (
        <div>
            <h1>
                User: {user.username}.
            </h1>
            <p>
                Bio: {user.info}
            </p>
            <p>Concert: {user.concerts[0].headliner}</p>

        </div>
    );
}