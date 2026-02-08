'use client';

export default function Create(){
    return (
        <div>
            <p>
                Welcome to Concert Project! Please fillout the information below to create your profile.
            </p>
            <p>
                <form>
                    <label htmlFor="firstname">First Name:</label><br/>
                    <input type="text" id="firstname" name="firstname"/><br/>
                    <label htmlFor="lastname">Last Name:</label><br/>
                    <input type="text" id="lastname" name="lastname"/><br/>
                    <label htmlFor="username">Username:</label><br/>
                    <input type="text" id="username" name="username"/><br/>
                    <label htmlFor="password">Password:</label><br/>
                    <input type="text" id="password" name="password"/><br/><br/>
                    <input type="button" value="Create" onClick={() => createUser()}/>
                </form>
            </p>
        </div>

    );

    function createUser() {

        let creButton = document.getElementById("button")
        let creUser = document.getElementById("username")
        let crePass = document.getElementById("password")
        //let fileName = "userList.txt"

        // @ts-ignore
        let userInp = creUser.value
        let baseUrl = "https://concert-project.vercel.app/profile/guestview/"

        let fullUrl = baseUrl.concat(userInp)

        window.location.href =fullUrl

        /*function saveUser(){
        // @ts-ignore
        let userInp = creUser.value
        // @ts-ignore
        let passInp = crePass.value
        let blob =
            new Blob([userInp, " ", passInp], { type: "text/plain" })
        let link = document.createElement("a")
        link.download = fileName
        link.href = URL.createObjectURL(blob)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(link.href)*/
    }
}