export default function List() {
    const users = ["first", "second", "third"]
    return (
        <div>
            <h1>Current Users:</h1>
            <ul>
                {users.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}