export default function List() {
    //const users = ["first", "second", "third"]
    //let leng = users.length

    return(
        <div>
            <h1>User List: </h1>

            <ul id="userList"></ul>
            <script>
                let users = ["first", "second", "third"]
                let list = document.getElementbyId("userList")
                for (i = 0; i < users.length; ++i){
                    let li = document.createElement('li')
                li.innerText = users[i]
                list.appendChild(li)
            }
            </script>

        </div>
    );

}