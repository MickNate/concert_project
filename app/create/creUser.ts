async function creUser(previousState: string, formData: FormData){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const verpassword = formData.get("verpassword") as string;
    if((username != null) && (password != null) && (verpassword != null)){
        if(password == verpassword){
            //creUser(username, password)
            return "Error: Passwords do match";
        }
        else{
            return "Error: Passwords do not match";
        }
    }
    else
        return "Error: Please make sure no boxes are blank.";
}