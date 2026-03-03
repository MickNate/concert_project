import { createClient, QueryResult, QueryData, QueryError } from '@supabase/supabase-js'

export default async function Notes(){

// @ts-expect-error May not work
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

    const usersQuery = supabase.from("concert_users").select();
    type Users = QueryData<typeof usersQuery>;

    const { data, error } = await usersQuery;
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