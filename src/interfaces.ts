
export interface IPost {
    id: number;
    title: string;
    body: string;
    comments: IComment[];
    user: IUser | null;
}

export interface IComment {
    id: number;
    name: string;
    body: string;
    email: string;
}

export interface IUser {
    name: string;
    email: string;
}