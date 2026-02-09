export default function Home(){

    return (
        <div>
            <p>Welcome to Concert Project!</p>
            <p>Are you a returning user or a new user?</p>

            <form action="C:\Users\unkno\OpenSourceWebTech\concert_project\app\create\page.tsx">
                <input type="submit" value="New User"/>
            </form>
            <form action="C:\Users\unkno\OpenSourceWebTech\concert_project\app\login\page.tsx">
                <input type="submit" value="Returning User"/>
            </form>
        </div>
    );
}