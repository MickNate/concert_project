export default async function OwnerView( { params }: {
    params: Promise<{ ownerviewId: string}>;
}){
    const ownerviewID = (await params).ownerviewId;
    return (
        <div>
            <p>
                Welcome back, {ownerviewID}.
            </p>

        </div>
    );
}