'use client';

export default function Create(){
    return (
        <div>
            <p>
                Welcome to Concert Project! Please fillout the information below to create your profile.
            </p>
            <p>
                <form>
                    <label htmlFor="username">Username:</label><br/>
                    <input type="text" id="username" name="username"/><br/>
                    <label htmlFor="password">Password:</label><br/>
                    <input type="text" id="password" name="password"/><br/><br/>
                    <label htmlFor="verpassword">Verify Password:</label><br/>
                    <input type="text" id="verpassword" name="verpassword"/><br/><br/>
                    <input type="button" value="Create" onClick={() => createUser()}/>
                </form>
            </p>
        </div>

    );

    function createUser() {

        let creUser = document.getElementById("username")
        let crePass = document.getElementById("password")
        let verPass = document.getElementById("verpassword")

        if(crePass != verPass){
            alert("Passwords do not match")
        }
        else{
            // @ts-ignore
            let userInp = creUser.value
            let baseUrl = "https://concert-project.vercel.app/profile/guestview/"
            let fullUrl = baseUrl.concat(userInp)

            window.location.href =fullUrl
        }
    }
}