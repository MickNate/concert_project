export default function Home(){

    return (
        <div>
            <p>Welcome to Concert Project!</p>
            <p>Are you a returning user or a new user?</p>

            <a href="../create">
                <button>New User</button>
            </a>
            <a href="../login">
                <button>Returning User</button>
            </a>

        </div>
    );
}