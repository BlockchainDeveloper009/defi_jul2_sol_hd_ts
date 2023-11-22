import React from 'react'
const jsonPlaceHolder = {
    "users":"https://jsonplaceholder.typicode.com/users",
    "posts":"https://jsonplaceholder.typicode.com/posts"
}
interface User {
    id: number;
    name: string;
}

const adminUsersPage = async () => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        // caching disabled, works only with 'fetch', doesnt work axios or third party library
        // you disable caching for static rendering page.
       // { cache: 'no-store' } // 
       { next: { revalidate: 10 } } // cache expires after 10 minutes
    );


                             
    const users: User[] = await res.json();
    return (
        <>
            <h1>Admin Users</h1>
            <p>{ new Date().toLocaleTimeString()}</p>
            <ul>
                {users.map(user => <li key = {user.id}>{user.name}</li>)}
            </ul>
            <table></table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => 
                <tr key = {user.id}>
                    <td>{user.name}</td>
                    <td>{user.name}</td>
                </tr>
                )}
            </tbody>
        
        </>
    )
}

export default adminUsersPage;