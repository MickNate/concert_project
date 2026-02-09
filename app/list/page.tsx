
export default function List() {
    //const users = ["first", "second", "third"]
    //let leng = users.length

    return(
        <div>
            <h1>User List: </h1>

            <ul id="userList"></ul>
            <script>
                const fruits = ["Banana", "Orange", "Apple", "Mango"];

                let text = "<ul>";
                fruits.forEach(myFunction);
                text += "</ul>";

                function myFunction(value)
                    text += "<li>" + value + "</li>";
            </script>

        </div>
    );

    function createList(){
        return 'a'
    }


}