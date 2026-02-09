

export default function List() {
    //const users = ["first", "second", "third"]
    //let leng = users.length

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let text = " <ul>";
    fruits.forEach(myFunction);
    text += " </ul>";
    function myFunction(value: string) {
        text += "<li>" + value + "</li>";
    }

    return(
        <div>
            <h1>User List: </h1>

            <p id="demo"></p>
            <script>
                document.getElementById("demo").innerHTML = text;
            </script>


        </div>
    );


}