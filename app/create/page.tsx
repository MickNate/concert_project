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
                    <input type="button" value="Create" onClick={() => saveUser()}/>
                </form>
            </p>
        </div>

    );
    function saveUser(){
        let creButton = document.getElementById("button")
        let creUser = document.getElementById("username")
        let crePass = document.getElementById("password")

            // @ts-ignore
            let userInp = creUser.value
            // @ts-ignore
            let passInp = crePass.value
            let blobdtMIME =
                new Blob([userInp, passInp], { type: "text/plain" })
            let url = URL.createObjectURL(blobdtMIME)
            let anele = document.createElement("a")
            anele.href = url;
            anele.click();
    }
}