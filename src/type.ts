export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Post {
    id: number;
    title: string;
    content: string;
    userId: number;
}
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
