

export default function List() {
    //const users = ["first", "second", "third"]
    //let leng = users.length

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let text = " <ul>";
    fruits.forEach(myFunction);
    text += " </ul>";

    return(
        <div>
            <h1>User List: </h1>

            <p id="demo"></p>
            document.getElementById("demo").innerHTML = text;

        </div>
    );

    function myFunction(value: string) {
        text += "<li>" + value + "</li>";
    }


}