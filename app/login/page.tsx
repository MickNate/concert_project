export default function Home(){

    function loginTest() {
        return "/login"
    }
    return (
        <p>
            Welcome back to Concert Project! Please login below.<br/>
            <label id="usernameInput">Username: </label>
            <input type="text" id="usernameInput" placeholder="Username here"/><br/>
            <label id="passwordInput">Password: </label>
            <input type="text" id="passwordInput" placeholder="Password here"/><br/>
            <button onClick = {loginTest}>Test</button><br/>
        </p>
    );
}