

export default function List() {
    //const users = ["first", "second", "third"]
    //let leng = users.length

    const todos = [
        { id: 1, text: "clean the house" },
        { id: 2, text: "buy milk" }
    ];

    function ListItems(): React.ReactNode {
        return todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
    }

    //export default ListItems;
    //@ts-ignore
    return(
        <body>
            <h1>User List: </h1>

            <ul>
                <ListItems/>
            </ul>


        </body>
    );





}