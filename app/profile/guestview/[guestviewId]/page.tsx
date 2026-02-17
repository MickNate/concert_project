import { promises as fs } from 'fs';

export default async function GuestView( { params }: {
    params: Promise<{ guestviewId: string}>;
}){
    const guestviewID = (await params).guestviewId;

    const file = await fs.readFile('member_list.json', 'utf8');
    const data = JSON.parse(file);

    let user = data.find((item: { name: string; }) => item.name === guestviewID)

    return (
        <div>
            <p>
                This is the guest view of the profile for {guestviewID}.
            </p>

        </div>
    );
}