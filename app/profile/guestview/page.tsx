export default function GuestView(){
    return (
        <body>
        <div>
            <p>
                Either login or create an account to view your profile!
            </p>
            <a href="../create">
                <button>New User</button>
            </a>
            <a href="../log/login">
                <button>Returning User</button>
            </a>
        </div>
        </body>
    );
}