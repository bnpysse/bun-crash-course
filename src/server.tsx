import Elysia, { t } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import eden from "@elysiajs/eden";
import { User, Post } from "./type";

// FILEPATH:/cloudide/workspace/kiwis/src/util/http.ts
// BEGIN:a8i4czblkbw8b

// Bug 修复：导出类型断言
export type PostList = {
    id: number
    title: string
    content: string
    user_id: number
}[]

export type UserList = {
    id: number
    name: string
    email: string
}[]

const users: UserList = [
    { id: 1, name: "John", email: "john@example.com" },
    { id: 2, name: "Jane", email: "jane@example.com" },
    { id: 3, name: "Jack", email: "jack@example.com" },
    { id: 4, name: "Jill", email: "jill@example.com" },
    { id: 5, name: "Judy", email: "judy@example.com" },
];

// Bug 修复：增加类型断言，修复类型不匹配的问题
const posts: PostList = [
    { id: 1, title: "Hello World", content: "Hello World", user_id: 1 },
    { id: 2, title: "Hello World", content: "Hello World", user_id: 1 },
    { id: 3, title: "Hello World", content: "Hello World", user_id: 3 },
    { id: 4, title: "Hello World", content: "Hello World", user_id: 3 },
    { id: 5, title: "Hello World", content: "Hello World", user_id: 5 },
];

const app = new Elysia()
    .use(html())
    .get('/', () => (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>User Post List</title>
            <script src="https://unpkg.com/htmx.org@1.9.6"></script>
        </head>
        <body>
        <h1>User Post List</h1>
        <div id="user-list" hx-trigger="load" hx-get="/users" hx-swap="innerHTML"></div>
        </body>
        </html>
    ))
    .get('/users', () => (
        <>
            {users.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <button hx-get={`/posts/${user.id}`} hx-target={`#posts-${user.id}`}>Load Posts</button>
                    <div id={`posts-${user.id}`}></div>
                </div>
            ))}
        </>
    ))
    .get('/posts/:userId', ({ params: { userId } }) => {
        const userPosts = posts.filter(post => post.userId === parseInt(userId))

        return (
            <>
                <h3>Posts:</h3>
                <ul>
                    {userPosts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </>
        )
    }, {
        params: t.Object({
            userId: t.String()
        })
    })

app.listen(3000);

console.log("Server running at http://127.0.0.1:3000");
