
export default function Create(){
    async function testInput(formData: FormData){
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;
        const verpassword = formData.get("verpassword") as string;
        if((password != null) && (verpassword != null)){
            if(password == verpassword){
                //creUser(username, password)
                alert("Passwords do match")
                 }
            else{
                alert("Passwords do not match")
            }
        }
        else
            alert("Please make sure no boxes are blank.")
    }

    /*async function creUser(newname: string, newpass: string){
        "use server";
        const username = newname;
        const password = newpass;

    }*/
    return (
        <div>
            <p>
                Welcome to Concert Project! Please fillout the information below to create your profile.
            </p>
            <p>
                <form action={testInput}>
                    <label htmlFor="username">Username:</label><br/>
                    <input type="text" id="username" name="username"/><br/>
                    <label htmlFor="password">Password:</label><br/>
                    <input type="text" id="password" name="password"/><br/>
                    <label htmlFor="verpassword">Verify Password:</label><br/>
                    <input type="text" id="verpassword" name="verpassword"/><br/><br/>
                    <button type="submit">Create</button>
                </form>
            </p>
        </div>

    );

}