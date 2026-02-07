export default function Home(){
    return (
        <p>
            Welcome back to Concert Project! Please login below.
            <label id="usernameInput">Username: </label>
            <input type="text" id="usernameInput" placeholder="Username here"/>
            <label id="passwordInput">Password: </label>
            <input type="text" id="passwordInput" placeholder="Password here"/>
        </p>
    );
}