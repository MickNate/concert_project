import { promises as fs } from 'fs';

export default async function OwnerView( { params }: {
    params: Promise<{ ownerviewId: string}>;
}){
    const ownerviewID = (await params).ownerviewId;

    const file = await fs.readFile('member_list.json', 'utf8');
    const data = JSON.parse(file);

    let user = data.find((item: { name: string; }) => item.name === ownerviewID)

    return (
        <div>
            <p>
                Welcome back, {user.name}.
            </p>

        </div>
    );
}