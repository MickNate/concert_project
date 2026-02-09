'client side'

export async function List() {
    //const users = ["first", "second", "third"]
    //let leng = users.length

    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    const container = document.getElementById("array-container");
    const htmlList = `<ul>
                ${fruits.map(item => `<li>${item}</li>`).join('')}
            </ul>`;

    // Insert into the DOM
    // @ts-ignore
    container.innerHTML = htmlList;


    return(
        <div>
            <h1>User List: </h1>

            <ul id="userList"></ul>
            <div id="array-container"></div>

        </div>
    );

    function createList(){
        return 'a'
    }


}