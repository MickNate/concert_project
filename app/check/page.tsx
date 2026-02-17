export default async function Check() {

    /*    const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        const logUser = urlParams.get('user')
        const logPass = urlParams.get('pass')

        const file = await fs.readFile('member_list.json', 'utf8');
        const data = JSON.parse(file);
        const baseurl = "https://concert-project.vercel.app/profile/ownerview/"

        let temp = null
        let temp2 = "Click here to try again."
        let templink = "https://concert-project.vercel.app/profile/login/"

        let user = data.find((item: { username: string | null; }) => item.username === logUser)
        if(user == null){
            temp = "The username you input does not exist"
        }
        else{
            if(user.password.innerHTML === logPass) {
                temp = "Welcome back, " + logUser + "!"
                templink = baseurl.concat(user.username)
                temp2 = "Click here to continue"
            }
            else{
                temp = "Sorry, the password you input is incorrect"
            }
        }*/

    return (
        <p>This will implement the login check once serverside added</p>
    )
}