export default function List() {
    //const users = ["first", "second", "third"]
    //let leng = users.length

    return(
        <div>
            <h1>User List: </h1>
            <p id="demo"></p>

            <script>
                const users = ["Saab", "Volvo", "BMW"];
                document.getElementById("demo").innerHTML = users.toString();
            </script>
        </div>
    );

}