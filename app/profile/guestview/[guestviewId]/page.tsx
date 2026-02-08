export default async function GuestView( { params }: {
    params: Promise<{ guestviewId: string}>;
}){
    const guestviewID = (await params).guestviewId;
    return (
        <p>
            This is the guest view of the profile for {guestviewID}.
        </p>
    );
}