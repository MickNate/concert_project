import { createClient, QueryResult, QueryData, QueryError } from '@supabase/supabase-js'

export default async function Notes() {
    
    
    const theURL = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhobHN2ZmdqYWxraG1rcnZheGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1Mjc0MTYsImV4cCI6MjA4ODEwMzQxNn0.Ws_iNziFJfdfvTi5TS9-7paqwysxerLvEcCLo_JXwUw";
    const theURL2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhobHN2ZmdqYWxraG1rcnZheGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1Mjc0MTYsImV4cCI6MjA4ODEwMzQxNn0.Ws_iNziFJfdfvTi5TS9-7paqwysxerLvEcCLo_JXwUw"
    const supabase = createClient(theURL, theURL2)

    const usersQuery = supabase.from("concert_users").select();
    type Users = QueryData<typeof usersQuery>;

    //this is an update
    const {data, error} = await usersQuery;
    if (error) throw error;
    const users: Users = data;

    return (
        <body>
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <h2>{user.username}</h2>
                        <p>{user.password}</p>
                    </li>
                ))}
            </ul>
        </div>
        </body>
    );


}